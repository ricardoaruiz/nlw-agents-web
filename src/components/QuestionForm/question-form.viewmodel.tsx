import { useCreateQuestion } from '@/http/use-create-question'
import type { QuestionFormProps } from './question-form.types'
import { QuestionFormView } from './question-form.view'

export function QuestionFormViewModel({ roomId }: QuestionFormProps) {
  const {
    mutateAsync: createQuestion,
    isPending,
    error,
  } = useCreateQuestion({ roomId, delay: 1000 })

  return (
    <QuestionFormView
      createQuestion={createQuestion}
      error={error}
      isLoading={isPending}
    />
  )
}
