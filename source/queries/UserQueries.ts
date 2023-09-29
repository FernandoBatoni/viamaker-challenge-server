import { type IUser } from '../interfaces/IUser'
import User from '../models/User'
import AbstractQueries from './AbstractQueries'

class UserQueries extends AbstractQueries<IUser.Document, IUser.Schema> {
  constructor () {
    super(User)
  }
}

export default new UserQueries()
