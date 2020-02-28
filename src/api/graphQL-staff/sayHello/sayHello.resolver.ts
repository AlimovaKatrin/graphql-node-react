import { SayHelloRespone, SayHelloQueryArgs } from '../../../types/graph';

const resolvers = {
    Query: {
        sayHello: (_, args: SayHelloQueryArgs): SayHelloRespone => {
            return {
                error: false,
                text: `Hello dear ${args.name}`
            }
        }
    }
}

export default resolvers;