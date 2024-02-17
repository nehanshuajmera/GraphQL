import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Server SetUp
const server = new ApolloServer({
    // typeDefs -- defination of types of data
    // resolvers
});

const {url} = startStandaloneServer(server, {
    listen: {port: 4000},
});

console.log(`Server is running at: ${url}`);