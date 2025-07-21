import type { UseMutateAsyncFunction } from '@tanstack/react-query'
import type { CreateQuestionRequest } from '@/http/types/create-question-request'
import type { CreateQuestionResponse } from '@/http/types/create-question-response'

export type QuestionFormProps = {
  roomId: string
}

export type QuestionFormViewProps = {
  createQuestion: UseMutateAsyncFunction<
    CreateQuestionResponse,
    Error,
    CreateQuestionRequest,
    unknown
  >
  isLoading: boolean
  error: Error | null
}
