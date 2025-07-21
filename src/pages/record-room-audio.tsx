/** biome-ignore-all lint/suspicious/noConsole: remove it */
import { useCallback, useEffect, useRef, useState } from 'react'
import { Navigate, useParams } from 'react-router'
import { Button } from '@/components/ui/button'
import { env } from '@/env'

type RecordRoomAudioParams = {
  roomId: string
}

/**
 * Check if the browser supports audio recording using MediaRecorder API.
 * This checks for the existence of navigator.mediaDevices and the getUserMedia method,
 * as well as the MediaRecorder constructor.
 */
const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof window.MediaRecorder === 'function'

/**
 * RecordRoomAudioPage component allows users to record audio in a specific room.
 * It uses the MediaRecorder API to capture audio from the user's microphone.
 * The component provides buttons to start and stop the recording,
 * and displays the recording status.
 * It also handles the creation and cleanup of the MediaRecorder instance.
 */
export function RecordRoomAudioPage() {
  const params = useParams<RecordRoomAudioParams>()
  const recordInterval = useRef<NodeJS.Timeout | null>(null)
  const recorder = useRef<MediaRecorder | null>(null)
  const [isRecording, setIsRecording] = useState(false)

  /**
   * Uploads the recorded audio to the server.
   * This function is a placeholder and should be implemented to handle the actual upload logic.
   * It currently creates a FormData object with the audio blob.
   *
   * @param {Blob} audio - The recorded audio blob to be uploaded.
   */
  const uploadAudio = useCallback(
    async (audio: Blob) => {
      if (!audio.size) {
        return
      }

      const formData = new FormData()
      formData.append('file', audio, 'audio.webm')

      const response = await fetch(
        `${env.VITE_API_URL}/rooms/${params.roomId}/audio`,
        {
          method: 'POST',
          body: formData,
        }
      )

      const result = await response.json()
      console.log('Audio uploaded:', result)
    },
    [params.roomId]
  )

  /**
   * Creates a MediaRecorder instance to record audio from the user's microphone.
   * It sets up the MediaRecorder with specific audio constraints and event handlers
   * and calling the start method on the MediaRecorder instance.
   */
  const createRecorder = useCallback(
    (audio: MediaStream) => {
      recorder.current = new MediaRecorder(audio, {
        mimeType: 'audio/webm',
        audioBitsPerSecond: 64_000,
      })

      recorder.current.ondataavailable = (event) => uploadAudio(event.data)

      recorder.current.onstart = () => {
        console.log('Gravação iniciada')
      }

      recorder.current.onstop = () => {
        console.log('Gravação parada')
      }

      recorder.current.start()
    },
    [uploadAudio]
  )

  /**
   * Starts the audio recording by setting the isRecording state to true
   */
  async function startRecording() {
    if (!isRecordingSupported) {
      alert('Gravação de áudio não é suportada neste navegador.')
      return
    }

    setIsRecording(true)

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    })

    createRecorder(audio)

    recordInterval.current = setInterval(() => {
      recorder.current?.stop()

      createRecorder(audio)
    }, 5000)
  }

  /**
   * Stops the audio recording by setting the isRecording state to false
   * and calling the stop method on the MediaRecorder instance.
   */
  function stopRecording() {
    setIsRecording(false)

    if (recorder.current && recorder.current.state !== 'inactive') {
      recorder.current.stop()
    }

    if (recordInterval.current) {
      clearInterval(recordInterval.current)
      recordInterval.current = null
    }
  }

  /**
   * Cleans up the MediaRecorder instance and the recording interval
   * when the component is unmounted or when the recording is stopped.
   */
  useEffect(() => {
    return () => {
      if (recorder.current) {
        recorder.current.stop()
        recorder.current = null
      }
      if (recordInterval.current) {
        clearInterval(recordInterval.current)
        recordInterval.current = null
      }
    }
  }, [])

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      {isRecording ? (
        <Button onClick={stopRecording}>Parar gravação</Button>
      ) : (
        <Button onClick={startRecording}>Gravar áudio</Button>
      )}

      {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
    </div>
  )
}
