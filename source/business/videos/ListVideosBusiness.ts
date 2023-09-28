import { CustomError } from '../../helpers/errors'
import VideoQueries from '../../queries/VideoQueries'

class ListVideoBusiness {
  async execute () {
    const videos = await VideoQueries.find()
    if (!videos) throw new CustomError('Videos não encontrados!', 400)

    return videos
  }
}

export default new ListVideoBusiness()
