import { UserEntity } from "../model/entities/user-entity";
import { getManager } from "./node_modules/typeorm";
import { Response } from './node_modules/express';
 
class UserRepo {
 
    public async getAllusers(res: Response) : Promise<Response> {
			var ret: UserEntity[] | undefined;

			

			ret = await getManager().getRepository(UserEntity).find();

			return res.json(ret)
    }
 
    saveuser(user: UserEntity) {
        return getManager().getRepository(UserEntity).save(user);
    }
 
    deleteuser(user: UserEntity) {
        return getManager().getRepository(UserEntity).remove(user);
    }
 
    getuserById(userId: number) {
        return getManager().getRepository(UserEntity).findOne(userId);
    }
 
}

export default new UserRepo()
