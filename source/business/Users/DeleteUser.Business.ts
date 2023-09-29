import { CustomError } from '../../helpers/errors'
import UserQueries from '../../queries/UserQueries'

interface IUserBusiness {
  id: string
}

class DeleteUserBusiness {
  async execute ({
    id
  }: IUserBusiness) {
    const currentUser = await UserQueries.findById({ id })
    if (!currentUser) throw new CustomError('Usuário não encontrado!', 400)

    const deletedUser = await UserQueries.deleteOne({
      match: {
        _id: id
      }
    })

    return deletedUser
  }
}

export default new DeleteUserBusiness()
