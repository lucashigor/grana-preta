import { UserInterface } from '../model/UserInterface'
import RepositoryBase = require ('./base/RepositoryBase')
import UserSchema = require('../schemas/UserSchema');

class UserRepository extends RepositoryBase<UserInterface> {
    public constructor () {
        super(UserSchema)
    }
}

Object.seal(UserRepository)
export = UserRepository;
