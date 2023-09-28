import io from 'socket.io'

export default function () {
  const _global = global

  _global.SocketServer = new io.Server()
}
