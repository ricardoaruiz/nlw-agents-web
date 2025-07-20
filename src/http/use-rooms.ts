import { useQuery } from '@tanstack/react-query'
import { env } from '@/env'
import type { GetRoomsResponse } from './types/get-rooms-response'

export const useRooms = ({ delay }: { delay?: number } = {}) => {
  return useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      if (delay) {
        await new Promise((resolve) => setTimeout(resolve, delay))
      }

      const response = await fetch(`${env.VITE_API_URL}/rooms`)

      if (!response.ok) {
        throw new Error(
          'Ocorreu um erro ao recuperar as salas! Por favor, tente novamente mais tarde.'
        )
      }

      const rooms: GetRoomsResponse = await response.json()
      return rooms
    },
    retry: 0,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
