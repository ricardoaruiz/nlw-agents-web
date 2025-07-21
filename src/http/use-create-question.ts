import { useMutation, useQueryClient } from '@tanstack/react-query'
import { env } from '@/env'
import type { CreateQuestionRequest } from './types/create-question-request'
import type { CreateQuestionResponse } from './types/create-question-response'
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
        `${env.VITE_API_URL}/rooms/${roomId}/questions`,
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

      const createdQuestion: CreateQuestionResponse = await response.json()

      return createdQuestion
    },
    onMutate: ({ question }) => {
      const questions = queryClient.getQueryData<GetRoomQuestionsResponse>([
        GET_ROOM_QUESTIONS_QUERY_KEY,
        roomId,
      ])

      const questionsArray = questions?.length ? questions : []
      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
        isGeneratingAnswer: true,
      }

      queryClient.setQueryData<GetRoomQuestionsResponse>(
        [GET_ROOM_QUESTIONS_QUERY_KEY, roomId],
        [newQuestion, ...questionsArray]
      )

      return { newQuestion, questions }
    },
    onError: (_error, _variables, context) => {
      if (context?.questions) {
        queryClient.setQueryData<GetRoomQuestionsResponse>(
          [GET_ROOM_QUESTIONS_QUERY_KEY, roomId],
          context.questions
        )
      }
    },
    onSuccess: (data, _variables, context) => {
      queryClient.setQueryData<GetRoomQuestionsResponse>(
        [GET_ROOM_QUESTIONS_QUERY_KEY, roomId],
        (oldQuestions) => {
          if (!(oldQuestions && context.newQuestion)) {
            return oldQuestions
          }

          return oldQuestions.map((question) => {
            if (question.id === context.newQuestion.id) {
              return {
                ...context.newQuestion,
                id: data.questionId,
                answer: data.answer,
                isGeneratingAnswer: false,
              }
            }
            return question
          })
        }
      )
    },
  })
}
