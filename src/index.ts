import { Options } from 'graphql-yoga';
import app from './app';

const PORT: number | string = process.env.PORT || 3000;

const appOptions: Options = {
    port: PORT,
    playground: '/playground',
    endpoint: '/graphql'
}

app.start(appOptions, () => console.log(`Listening port ${PORT}`));