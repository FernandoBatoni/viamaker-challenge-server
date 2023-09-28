/* eslint-disable @typescript-eslint/restrict-template-expressions */
import to from 'await-to-js'
import colors from 'colors/safe'
import mongoose from 'mongoose'

import { DATABASE_CUSTERNAME, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USERNAME } from '../config/globals'
import { type IMongoConnection } from '../interfaces/IMongoConnection'

mongoose.set('strictQuery', false)
mongoose.set('bufferTimeoutMS', 12000)

const connectionString = `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_CUSTERNAME}.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`

const connectionOptions: IMongoConnection = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const databaseText =
  String(DATABASE_NAME).toLowerCase().includes('production')
    ? colors.red(DATABASE_NAME)
    : colors.blue(DATABASE_NAME)

const connectToDatabase = async () => {
  const [error, connection] = await to(
    mongoose.connect(
      connectionString,
      connectionOptions
    )
  )
  if (error) console.warn(`[DATABASE] Failed to connect to the ${databaseText} database: ${error.message} (user: ${DATABASE_USERNAME})`)
  if (connection) console.info(`[DATABASE] Connected ${colors.green('successfully')} to the ${databaseText} database! (user: ${colors.rainbow(DATABASE_USERNAME)})`)
  return connection
}

export default connectToDatabase
