import { type ConnectOptions } from 'mongoose'

interface IMongoConnection extends ConnectOptions {
  useCreateIndex?: boolean
  useNewUrlParser?: boolean
  useUnifiedTopology?: boolean
  useFindAndModify?: boolean
}

export type {
  IMongoConnection
}
