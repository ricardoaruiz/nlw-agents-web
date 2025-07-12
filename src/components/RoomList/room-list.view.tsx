import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { dayjs } from '@/lib/dayjs'
import { Badge } from '../ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import type { RoomListViewProps } from './room-list.types'

export function RoomListView({ data, isLoading, error }: RoomListViewProps) {
  if (error) {
    return (
      <Card>
        <CardContent>
          <p className="text-red-500">{error.message}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>
          Acesso rápido para as salar criadas recentemente
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        {isLoading && (
          <p className="text-muted-foreground text-sm">Carregando salas...</p>
        )}

        {data?.map((room) => (
          <Link
            className="flex items-center justify-between gap-4 rounded-lg border px-2 py-1 hover:bg-accent/50"
            key={room.id}
            to={`/rooms/${room.id}`}
          >
            <div>
              <h3 className="flex flex-1 flex-col gap-1 font-medium">
                {room.name}
              </h3>
              <div className="flex items-center gap-2">
                <Badge className="text-xs" variant="secondary">
                  {room.questionsCount} pergunta(s)
                </Badge>
                <Badge variant="secondary">
                  {dayjs(room.createdAt).toNow()}
                </Badge>
              </div>
            </div>

            <span className="flex items-center gap-1 text-muted-foreground text-sm">
              Entrar <ArrowRight className="size-3" />
            </span>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}
