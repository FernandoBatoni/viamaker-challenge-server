import type mongoose from 'mongoose'

type ObjectId = mongoose.Types.ObjectId

declare module IUser {
  export interface Schema {
    name: string
    email: string
  }

  export interface Document extends Schema, mongoose.Document<ObjectId> {}
}

export type {
  IUser
}
