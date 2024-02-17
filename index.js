import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const mongoose = require('mongoose');
const PORT = process.env.PORT

// typeDefs
import { typeDefs } from './schema.js'

mongoose.connect(process.env.MDB)
.then(result => console.log('Database Connected'))
.catch(err => console.log({err: err.message}))

// Server SetUp
const server = new ApolloServer({
    typeDefs,
    // resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { PORT },
});

console.log(`Server is running at: ${url}`);