import { QuestionItem } from '../QuestionItem'
import type { QuestionListViewProps } from './question-list.types'

export function QuestionListView({
  data,
  isLoading,
  error,
}: QuestionListViewProps) {
  if (error) {
    return (
      <p className="text-red-500">
        Ocorreu um erro ao carregar as perguntas da sala.
      </p>
    )
  }

  if (isLoading) {
    return <p>Carregando as perguntas da sala...</p>
  }

  return (
    <>
      {data?.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </>
  )
}
