import { RoomList } from '@/components/RoomList'

export function CreateRoomPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl p-4">
        <div className="grid grid-cols-2 items-start gap-6">
          <form>Form</form>
          <RoomList />
        </div>
      </div>
    </div>
  )
}
