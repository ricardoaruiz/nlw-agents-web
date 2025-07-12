import { useCreateRoom } from '@/http/use-create-room'
import { CreateRoomFormView } from './create-room-form.view'

export function CreateRoomFormViewModel() {
  const { mutateAsync: createRoom, error, isPending } = useCreateRoom()
  return (
    <CreateRoomFormView
      createRoom={createRoom}
      error={error}
      isLoading={isPending}
    />
  )
}
