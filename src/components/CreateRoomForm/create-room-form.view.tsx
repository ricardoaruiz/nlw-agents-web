import { zodResolver } from '@hookform/resolvers/zod'
import { SplineIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import type { z } from 'zod/v4'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { createRoomFormSchema } from './create-room.schema'
import type { CreateRoomFormViewProps } from './create-room-form.types'

type CreateRoomFormData = z.infer<typeof createRoomFormSchema>

export function CreateRoomFormView({
  createRoom,
  isLoading,
  error,
}: CreateRoomFormViewProps) {
  const createRoomForm = useForm<CreateRoomFormData>({
    resolver: zodResolver(createRoomFormSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })

  async function handleCreateRoom({ name, description }: CreateRoomFormData) {
    await createRoom({ name, description })
    createRoomForm.reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar sala</CardTitle>
        <CardDescription>
          Crie uma nova sala para começar a fazer perguntas e receber respostas
          da IA
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...createRoomForm}>
          <form
            className="flex flex-col gap-4"
            onSubmit={createRoomForm.handleSubmit(handleCreateRoom)}
          >
            <FormField
              control={createRoomForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da sala</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={createRoomForm.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição da sala</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full" disabled={isLoading} type="submit">
              Criar sala
              {isLoading && (
                <span className="ml-2 animate-spin">
                  <SplineIcon />
                </span>
              )}
            </Button>
          </form>

          <FormMessage className="mt-2 text-red-500">
            {error ? error.message : ''}
          </FormMessage>
        </Form>
      </CardContent>
    </Card>
  )
}
