import type mongoose from 'mongoose'

type ObjectId = mongoose.Types.ObjectId

declare module IProduct {
  export interface Schema {
    name: string
    value: number
    description: string
  }

  export interface Document extends Schema, mongoose.Document<ObjectId> {}
}

export type {
  IProduct
}
