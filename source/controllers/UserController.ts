import { type Response, Router } from 'express'
import { CustomErrorResponse } from '../helpers/errors'

const UserController = Router()

//* [GET ALL]
UserController.get('', async (response: Response) => {

  try {
    const videos = await ListUserBusiness.execute({})

    response.send_ok('Videos encontrados com sucesso', { videos: videos })
  } catch (error) {
    return CustomErrorResponse(response, error)
  }
})

export default UserController
