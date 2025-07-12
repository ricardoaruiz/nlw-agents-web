import { useRoomQuestions } from '@/http/use-room-questions'
import type { QuestionListViewModelProps } from './question-list.types'
import { QuestionListView } from './question-list.view'

export function QuestionListViewModel({ roomId }: QuestionListViewModelProps) {
  const { data, isLoading, error } = useRoomQuestions({ roomId, delay: 1000 })

  return <QuestionListView data={data} error={error} isLoading={isLoading} />
}
