import { z } from 'zod/v4'

export const createRoomFormSchema = z.object({
  name: z.string().min(3, 'Informe nome da sala com no mínimo 3 caracteres'),
  description: z.string().optional(),
})
