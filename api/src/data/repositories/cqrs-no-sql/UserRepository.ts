import { UserInterface } from '../../../model/cqrs-model/intefaces/UserInterface'
import RepositoryBase = require ('./base/RepositoryBase')
import UserSchema = require('../../../model/cqrs-model/schemas/UserSchema');

class UserRepository extends RepositoryBase<UserInterface> {
  public constructor () {
    super(UserSchema)
  }
}

Object.seal(UserRepository)
export default new UserRepository()
