import dotenv from 'dotenv'

dotenv.config()
const variables = {
  //* Environment
  ENV: process.env.ENV,
  PORT: process.env.PORT,
  IP: process.env.IP,

  //* Database
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_USERNAME: process.env.DATABASE_USERNAME,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_CUSTERNAME: process.env.DATABASE_CUSTERNAME
}

export default variables
