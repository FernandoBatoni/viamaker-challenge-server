import mongoose from 'mongoose'

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/mydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error(err)
  }
}

export default { connect }
