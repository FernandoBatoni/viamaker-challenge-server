import { type Request, type Response, Router } from 'express'

import CreateUserBusiness from '../business/Users/CreateUserBusiness'
import DeleteUserBusiness from '../business/Users/DeleteUser.Business'
import ListUserBusiness from '../business/Users/ListUserBusiness'
import UpdateUserBusiness from '../business/Users/UpdateUserBusiness'
import { CustomErrorResponse } from '../helpers/errors'
import UserRules from '../rules/UserRules'

const UserController = Router()

//* [GET ALL]
UserController.get('', async (_: Request, response: Response) => {
  try {
    const users = await ListUserBusiness.execute()

    response.send_ok('Usuários encontrados com sucesso', users)
  } catch (error) {
    return CustomErrorResponse(response, error)
  }
})

//* POST
UserController.post('', async (request: Request, response: Response) => {
  const {
    name, email
  } = request.body

  const invalid = UserRules.create(
    { name },
    { email }
  )

  if (invalid) {
    response.send_badRequest('Campos inválidos!', { invalid })
    return
  }

  try {
    const createUser = await CreateUserBusiness.execute({
      name,
      email
    })

    response.send_created('Usuário criado com sucesso!', createUser)
  } catch (error) {
    return CustomErrorResponse(response, error)
  }
})

UserController.put('/:id', async (request: Request, response: Response) => {
  const id = request.params.id

  const {
    name, email
  } = request.body

  const invalid = UserRules.create(
    { name },
    { email }
  )

  if (invalid) {
    response.send_badRequest('Campos inválidos!', { invalid })
    return
  }

  try {
    const editUser = await UpdateUserBusiness.execute({
      id, name, email
    })

    response.send_created('Usuário editado com sucesso', editUser)
  } catch (error) {
    return CustomErrorResponse(response, error)
  }
})

//* [DELETE]
UserController.delete('/:id', async (request: Request, response: Response) => {
  const id = request.params.id

  try {
    const deleteUser = await DeleteUserBusiness.execute({ id })

    response.send_created('Usuário removido com sucesso!', deleteUser)
  } catch (error) {
    return CustomErrorResponse(response, error)
  }
})

export default UserController
