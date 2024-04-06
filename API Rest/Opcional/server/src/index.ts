import 'regenerator-runtime/runtime';
import express from 'express';
import path from 'path';
import { ApolloServer, gql } from 'apollo-server-express';
import { characterApi } from './api/character.api';
import {
    ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';
import { typeDefs, resolvers} from './graphql'

const PORT = 3000;

(async function () {
    const app = express();
    app.use(express.json());

    const graphqlServer = new ApolloServer({
        typeDefs,
        resolvers
    });
    await graphqlServer.start();
    graphqlServer.applyMiddleware({ app });

    const publicPath = path.resolve(__dirname, './public');
    app.use(express.static(publicPath));
    app.use('api/character', characterApi);

    app.listen(PORT, () => {
        console.log(`Server running htttp://localhost:${PORT}`);
        console.log(`GraphQL running htttp://localhost:${PORT}${graphqlServer.graphqlPath}`)
    });

})();