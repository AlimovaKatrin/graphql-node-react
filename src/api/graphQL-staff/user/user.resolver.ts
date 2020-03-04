import { CheckUserQueryArgs, User } from '../../../types/graph';
import UserModel from '../../../models/user';

const resolver = {
    Query: {
        checkUser: async (_, args: CheckUserQueryArgs): Promise<User> => {
            let myUser: User | any = (await UserModel.findOne({ name: args.name }))
            return { _id: myUser._id, name: myUser.name }
        }
    }
};

export default resolver;