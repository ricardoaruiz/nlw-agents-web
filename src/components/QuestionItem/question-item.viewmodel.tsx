import type { QuestionItemProps } from './question-item.types'
import { QuestionItemView } from './question-item.view'

export function QuestionItemViewModel({ question }: QuestionItemProps) {
  return <QuestionItemView question={question} />
}
