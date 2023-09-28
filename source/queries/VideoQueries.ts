import { type IVideos } from '../interfaces/IVideos'
import Videos from '../models/Videos'
import AbstractQueries from './AbstractQueries'

class VideoQueries extends AbstractQueries<IVideos.Document, IVideos.Schema> {
  constructor () {
    super(Videos)
  }
}

export default new VideoQueries()
