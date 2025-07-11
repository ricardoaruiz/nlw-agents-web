import { useQuery } from '@tanstack/react-query'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { dayjs } from '@/lib/dayjs'

type GetRoomsAPIResponse = Array<{
  id: string
  name: string
  description: string
  questionsCount: number
  createdAt: string
}>

export function CreateRoomPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const rooms: GetRoomsAPIResponse = await response.json()
      return rooms
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl p-4">
        <div className="grid grid-cols-2 items-start gap-6">
          <form>Form</form>

          <Card>
            <CardHeader>
              <CardTitle>Salas recentes</CardTitle>
              <CardDescription>
                Acesso rápido para as salar criadas recentemente
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-3">
              {isLoading && (
                <p className="text-muted-foreground text-sm">
                  Carregando salas...
                </p>
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
        </div>
      </div>
    </div>
  )
}
