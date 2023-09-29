import mongoose from 'mongoose'
import AutoIncrementFactory from 'mongoose-sequence'

import { type IUser } from '../interfaces/IUser'
import UserSchema from '../schema/UserSchema'

const AutoIncrement = AutoIncrementFactory(mongoose.connection)

interface IUserModel extends mongoose.Model<IUser.Document> {
  aggregatePaginate: any
}

const User: mongoose.Schema = new mongoose.Schema(UserSchema.schema, { timestamps: true })

User.plugin(AutoIncrement, { inc_field: 'userCode' })

export default mongoose.model<IUser.Document, IUserModel>('User', User)
