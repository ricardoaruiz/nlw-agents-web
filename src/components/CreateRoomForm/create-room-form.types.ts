import type { UseMutateAsyncFunction } from '@tanstack/react-query'
import type { CreateRoomRequest } from '@/http/types/create-room-request'
import type { CreateRommResponse } from '@/http/types/create-room-response'

type CreateRoomAction = UseMutateAsyncFunction<
  CreateRommResponse,
  Error,
  CreateRoomRequest,
  unknown
>

// Define props type for CreateRoomFormView
export type CreateRoomFormViewProps = {
  createRoom: CreateRoomAction
  isLoading: boolean
  error: Error | null
}
