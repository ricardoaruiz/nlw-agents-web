import { BrowserRouter, Route, Routes } from 'react-router'
import { CreateRoomPage } from './pages/create-room'
import { ListRoomsPage } from './pages/list-rooms'
import { RoomPage } from './pages/room'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CreateRoomPage />} index />
        <Route element={<ListRoomsPage />} path="rooms" />
        <Route element={<RoomPage />} path="rooms/:roomId" />
      </Routes>
    </BrowserRouter>
  )
}
