import type http from 'http'
import { Server, type Socket } from 'socket.io'

global.SocketClients = []

const onConnection = (socket: Socket) => {
  socket.on('disconnect', () => {
    global.SocketClients = global.SocketClients.filter((c) => c.socketId !== socket.id)
  })
}

const onError = () => {
  console.warn('Socket error')
}

export default (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['POST', 'GET'],
      allowedHeaders: ['self'],
      credentials: true
    },
    pingTimeout: 10000,
    pingInterval: 5000,
    allowEIO3: true
  })

  io.on('connection', onConnection)
  io.engine.on('connection_error', onError)

  return io
}
