import { CheckUserQueryArgs, User } from '../../../types/graph';
import UserModel from '../../../models/user';

const resolver = {
    Query: {
        checkUser: async (_, args: CheckUserQueryArgs): Promise<User> => {
            let myUser: User | any = (await UserModel.findOne({ name: args.name }))
            return {
                name: myUser.name,
                surName: myUser.surName,
                nik: myUser.nik,
                password: myUser.password,
                email: myUser.email
            }
        }
    },
    Mutation: {
        saveUser: async (_, args: User): Promise<void> => {
            console.log(args);
            await UserModel.create({
                name: args.name,
                surName: args.surName,
                nik: args.nik,
                password: args.password,
                email: args.email
            })
        }
    }
};

export default resolver;