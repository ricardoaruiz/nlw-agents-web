import { useQuery } from '@tanstack/react-query'
import { env } from '@/env'
import type { GetRoomQuestionsRequest } from './types/get-room-questions-request'
import type { GetRoomQuestionsResponse } from './types/get-room-questions-response'

export const GET_ROOM_QUESTIONS_QUERY_KEY = 'get-room-questions'

export function useRoomQuestions({ roomId, delay }: GetRoomQuestionsRequest) {
  return useQuery({
    queryKey: [GET_ROOM_QUESTIONS_QUERY_KEY, roomId],
    queryFn: async () => {
      if (delay) {
        await new Promise((resolve) => setTimeout(resolve, delay))
      }

      if (!roomId) {
        throw new Error('O id da sala é obrigatório')
      }

      const response = await fetch(
        `${env.VITE_API_URL}/rooms/${roomId}/questions`
      )

      if (!response.ok) {
        throw new Error('Ocorreu um erro ao buscar as perguntas da sala')
      }

      const questions: GetRoomQuestionsResponse = await response.json()
      return questions
    },
    refetchOnWindowFocus: true,
  })
}
