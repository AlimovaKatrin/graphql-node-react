import { SayBuyQueryArgs, SayGoodByeResponse } from '../../../types/graph';

const resolver = {
    Query: {
        sayBuy: (_, args: SayBuyQueryArgs): SayGoodByeResponse => {
            return {
                error: false,
                text: `Buy Buy ${args.name}`
            }
        }
    }
};

export default resolver;