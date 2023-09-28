import { type Request, type Response, Router } from 'express'

import ListVideosBusiness from '../business/videos/ListVideosBusiness'
import { CustomErrorResponse } from '../helpers/errors'

const VideoController = Router()

//* [GET ALL]
VideoController.get('', async (request: Request, response: Response) => {
  try {
    const videos = await ListVideosBusiness.execute()

    response.send_ok('Videos encontrados com sucesso', videos)
  } catch (error) {
    return CustomErrorResponse(response, error)
  }
})

export default VideoController
