import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'

type GetRoomsAPIResponse = Array<{
  id: string
  name: string
  description: string
}>

export function CreateRoomPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const rooms: GetRoomsAPIResponse = await response.json()
      return rooms
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading rooms</div>
  }

  if (!data || data.length === 0) {
    return <div>No rooms available</div>
  }

  return (
    <div className="container mx-auto">
      <ul className="my-10">
        {data.map((room) => (
          <li className="mb-1 border p-1" key={room.id}>
            <h2 className="font-bold text-xl">{room.name}</h2>
            <p>{room.description}</p>
            <Link className="text-blue-600 underline" to={`/rooms/${room.id}`}>
              Acessar sala
            </Link>
          </li>
        ))}
      </ul>

      <h1>Create Room</h1>
    </div>
  )
}
