import { CheckUserQueryArgs, User } from '../../../types/graph';
import UserModel from '../../../models/user';
import bcrypt from 'bcrypt';

const BCRYPT_ROUNDS = 10


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
        saveUser: async (_, args: User): Promise<User> => {
            console.log('-----------------');
            let myUser: User | any = (await UserModel.create({
                name: args.name,
                surName: args.surName,
                nik: args.nik,
                password: await bcrypt.hash(args.password, BCRYPT_ROUNDS),
                email: args.email
            }))
            return myUser
        }
    }
};

export default resolver;