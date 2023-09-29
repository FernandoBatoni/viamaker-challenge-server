import { type Request, type Response, Router } from 'express'

import ListUserBusiness from '../business/users/ListUserBusiness'
import { CustomErrorResponse } from '../helpers/errors'

const UserController = Router()

//* [GET ALL]
UserController.get('', async (request: Request, response: Response) => {
  try {
    const users = await ListUserBusiness.execute()

    response.send_ok('Usuários encontrados com sucesso', users)
  } catch (error) {
    return CustomErrorResponse(response, error)
  }
})

export default UserController
