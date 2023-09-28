import mongoose from 'mongoose'

import { type IVideos } from '../interfaces/IVideos'
import VideosSchema from '../schema/VideosSchema'

interface IVideoModel extends mongoose.Model<IVideos.Document> {}

const Videos: mongoose.Schema = new mongoose.Schema(VideosSchema.schema, { timestamps: true })

export default mongoose.model<IVideos.Document, IVideoModel>('Videos', Videos)
