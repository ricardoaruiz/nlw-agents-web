import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { createQuestionSchema } from './question-form.schema'
import type { QuestionFormViewProps } from './question-form.types'

type CreateQuestionFormData = z.infer<typeof createQuestionSchema>

export function QuestionFormView({
  createQuestion,
  isLoading,
  error,
}: QuestionFormViewProps) {
  const form = useForm<CreateQuestionFormData>({
    resolver: zodResolver(createQuestionSchema),
    defaultValues: {
      question: '',
    },
  })

  async function handleCreateQuestion({ question }: CreateQuestionFormData) {
    await createQuestion({ question })
    form.reset()
  }

  if (error) {
    // TODO handle error properly
    alert('Erro ao criar a pergunta')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fazer uma Pergunta</CardTitle>
        <CardDescription>
          Digite sua pergunta abaixo para receber uma resposta gerada por I.A.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(handleCreateQuestion)}
          >
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sua Pergunta</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[100px]"
                      placeholder="O que você gostaria de saber?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={isLoading} type="submit">
              Enviar pergunta
              {isLoading && <Loader2 className="size-4 animate-spin" />}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
