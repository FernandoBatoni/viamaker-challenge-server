import { CustomError } from '../../helpers/errors'
import UserQueries from '../../queries/UserQueries'

class ListUserBusiness {
  async execute () {
    const users = await UserQueries.find({})
    if (!users) throw new CustomError('Usuários não encontrados!', 400)

    return users
  }
}

export default new ListUserBusiness()
