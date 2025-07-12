import type { QuestionFormProps } from './question-form.types'
import { QuestionFormView } from './question-form.view'

export function QuestionFormViewModel({ roomId }: QuestionFormProps) {
  return <QuestionFormView roomId={roomId} />
}
