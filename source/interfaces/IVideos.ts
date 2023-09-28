import type mongoose from 'mongoose'

type ObjectId = mongoose.Types.ObjectId

declare module IVideos {
  export interface Schema {
    video: string
  }

  export interface Document extends Schema, mongoose.Document<ObjectId> {}
}

export type {
  IVideos
}
