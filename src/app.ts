import cors from 'cors';
import { GraphQLServer } from 'graphql-yoga';
import helmet from 'helmet';
import logger from 'morgan';
import schema from './schema';
import mongoose from 'mongoose';

class App {
    public app: GraphQLServer;
    constructor() {
        this.app = new GraphQLServer({
            schema
        });
        this.middlewares();
        this.mongooseConnection();
    }
    private middlewares = (): void => {
        this.app.express.use(cors());
        this.app.express.use(logger('dev'));
        this.app.express.use(helmet());
    }
    private mongooseConnection = (): void => {
        mongoose.connect('mongodb+srv://katrin:123@simplestoreproducts-po6sv.mongodb.net/Products?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        
        mongoose.connection.on('error', err => console.log(`Connction error: ${err}`));
        mongoose.connection.once('open', () => console.log('Conncected to DB'));
    }
}

export default new App().app;