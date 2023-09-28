import dotenv from 'dotenv'

import { time } from './config/globals'
import connectToDatabase from './database/databaseConnect'
import expressServer from './expressServer'

console.info('[time] Current Server Time is (new Date)', new Date())
console.info('[time] Current Server Time is (time', time().toDate())

dotenv.config()
void connectToDatabase()
expressServer()
