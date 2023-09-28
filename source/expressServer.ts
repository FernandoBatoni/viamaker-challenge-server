import timeout from 'connect-timeout'
import cors from 'cors'
import events from 'events'
import express from 'express'
import session from 'express-session'
import helmet, { hsts } from 'helmet'
import http from 'http'
import morgan from 'morgan'
import responser from 'responser'

import { IP, isLocal, PORT } from './config/globals'
import listen from './middlewares/listen'
import router from './routes'
import socket from './socket'

const expressServer = () => {
  if (events?.EventEmitter) events.EventEmitter.defaultMaxListeners = 25
  const app = express()

  app.use(cors({}))

  const server = http.createServer(app)

  app.io = global.SocketServer = socket(server)

  app.use(helmet.hsts())
  app.use(helmet.xssFilter())
  app.use(helmet.noSniff())
  app.use(helmet.contentSecurityPolicy())

  app.use(hsts({ maxAge: 31536000 }))

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  const morganConfig = isLocal ? 'combined' : ':method :url :status :res[content-length] - :response-time ms'

  app.use(morgan(morganConfig, {
    skip: (request: Request) => String(request.url).toLowerCase().includes('socket')
  }))

  app.use(responser)

  const expressTimeout = '50'
  app.use(timeout(`${expressTimeout}s`))

  app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: '1414256363gby4grbwbe5hbq34bgv34v'
  }))

  app.get('/success', (req, res) => res.send('213123'))
  app.get('/fail', (req, res) => res.send('213123'))

  app.use(router)

  server.listen(PORT, Number(IP), listen)
}

export default expressServer
