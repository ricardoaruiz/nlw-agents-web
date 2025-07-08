import { Link } from 'react-router'

export function CreateRoomPage() {
  return (
    <div>
      <Link className="underline" to="/rooms/123">
        Acessar sala
      </Link>
      <h1>Create Room</h1>
    </div>
  )
}
