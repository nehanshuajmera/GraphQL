import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// typeDefs
import { typeDefs } from './schema.js'

// Server SetUp
const server = new ApolloServer({
    typeDefs,
    // resolvers
});

const { url } = startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`Server is running at: ${url}`);