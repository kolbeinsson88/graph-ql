const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema').typeDefinitions;
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
}); 

server.listen()
    .then(({ url }) => console.log(`Online at https://localhost:4000`));

