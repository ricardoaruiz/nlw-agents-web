import { Link, Navigate, useParams } from 'react-router'

type Params = {
  roomId: string
}

export function RoomPage() {
  const { roomId } = useParams<Params>()

  if (!roomId) {
    return <Navigate replace to="/" />
  }

  return (
    <div className="container mx-auto my-10">
      <div className="flex gap-3">
        <Link className="underline" to="/">
          Criar Sala
        </Link>
      </div>
      <h1>Room Page</h1>
    </div>
  )
}
