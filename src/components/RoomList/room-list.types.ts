import type { Room } from '@/domain'

export type RoomListViewProps = {
  data: Room[] | undefined
  isLoading: boolean
  error: Error | null
}
