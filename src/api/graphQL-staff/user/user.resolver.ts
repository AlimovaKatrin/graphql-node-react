import { UserQueryRespone, CheckUserQueryArgs } from '../../../types/graph';
import User from '../../../models/user';

const resolver = {
    Query: {
        checkUser: (_, args: CheckUserQueryArgs): UserQueryRespone => {
            return {
                // user: { name: 'Katrin' }
                user: User.find({}).select('name')
            }
        }
    }
};

export default resolver;