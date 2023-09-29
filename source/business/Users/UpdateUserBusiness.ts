import mongoose from 'mongoose'

import { CustomError } from '../../helpers/errors'
import UserQueries from '../../queries/UserQueries'

interface IUserBusiness {
  id: string
  name: string
  email: string
}

class UpdateUserBusiness {
  async execute ({
    id, name, email
  }: IUserBusiness) {
    const currentUser = await UserQueries.findById({ id })
    if (!currentUser) throw new CustomError('Rota não encontrada!', 400)

    const updatedUser = await UserQueries.findByIdAndUpdate({
      id: new mongoose.Types.ObjectId(id),
      update: {
        $set: {
          name,
          email
        }
      }
    })

    return updatedUser
  }
}

export default new UpdateUserBusiness()
