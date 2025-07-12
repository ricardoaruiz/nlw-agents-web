import type { Question } from '@/domain'

export type QuestionListViewModelProps = {
  roomId: string
}

export type QuestionListViewProps = {
  data: Question[] | undefined
  isLoading: boolean
  error: Error | null
}
