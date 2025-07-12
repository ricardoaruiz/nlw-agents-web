import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateQuestionRequest } from './types/create-question-request'
import type { GetRoomQuestionsResponse } from './types/get-room-questions-response'
import { GET_ROOM_QUESTIONS_QUERY_KEY } from './use-room-questions'

export function useCreateQuestion({
  roomId,
  delay = 0,
}: {
  roomId: string
  delay?: number
}) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ question }: CreateQuestionRequest) => {
      // Simulate a delay for demonstration purposes
      if (delay > 0) {
        await new Promise((resolve) => setTimeout(resolve, delay))
      }

      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question }),
        }
      )

      if (!response.ok) {
        throw new Error('Ocorreu um erro ao criar a pergunta')
      }

      const createdQuestion: GetRoomQuestionsResponse = await response.json()

      return createdQuestion
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_ROOM_QUESTIONS_QUERY_KEY, roomId],
      })
    },
  })
}
