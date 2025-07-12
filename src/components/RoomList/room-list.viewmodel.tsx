import { useRooms } from '@/http/use-rooms'
import { RoomListView } from './room-list.view'

export function RoomListViewModel() {
  const { data, isLoading, error } = useRooms()
  return <RoomListView data={data} error={error} isLoading={isLoading} />
}
