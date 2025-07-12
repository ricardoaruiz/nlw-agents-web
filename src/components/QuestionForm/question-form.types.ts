import type { UseMutateAsyncFunction } from '@tanstack/react-query'
import type { CreateQuestionRequest } from '@/http/types/create-question-request'
import type { GetRoomQuestionsResponse } from '@/http/types/get-room-questions-response'

export type QuestionFormProps = {
  roomId: string
}

export type QuestionFormViewProps = {
  createQuestion: UseMutateAsyncFunction<
    GetRoomQuestionsResponse,
    Error,
    CreateQuestionRequest,
    unknown
  >
  isLoading: boolean
  error: Error | null
}
