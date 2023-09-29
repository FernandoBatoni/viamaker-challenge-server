import { CustomError } from '../../helpers/errors'
import UserQueries from '../../queries/UserQueries'

interface IUserBusiness {
  name: string
  email: string
}

class CreateUserBusiness {
  async execute ({
    name, email
  }: IUserBusiness) {
    const existsUser = await UserQueries.findOne({ match: { email } })

    if (existsUser) throw new CustomError('Usuário já cadastrado!', 409)

    const createUser = await UserQueries.create({
      properties: {
        name,
        email
      }
    })

    return createUser?.[0]
  }
}

export default new CreateUserBusiness()
