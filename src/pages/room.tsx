import { Link } from 'react-router'

export function RoomPage() {
  return (
    <div>
      <Link className="underline" to="/">
        Listar salas
      </Link>
      <h1>Room Page</h1>
    </div>
  )
}
