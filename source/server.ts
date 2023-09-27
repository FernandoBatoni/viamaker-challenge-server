import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!')
});

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
