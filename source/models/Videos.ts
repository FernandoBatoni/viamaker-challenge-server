import mongoose from 'mongoose'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'
import AutoIncrementFactory from 'mongoose-sequence'

import { type IVideos } from '../interfaces/IVideos'
import VideosSchema from '../schema/VideosSchema'

const AutoIncrement = AutoIncrementFactory(mongoose.connection)

interface IVideoModel extends mongoose.Model<IVideos.Document> {
  aggregatePaginate: any
}

const Videos: mongoose.Schema = new mongoose.Schema(VideosSchema.schema, { timestamps: true })

Videos.plugin(aggregatePaginate)
Videos.plugin(AutoIncrement, { inc_field: 'videoCode' })

export default mongoose.model<IVideos.Document, IVideoModel>('Videos', Videos)
