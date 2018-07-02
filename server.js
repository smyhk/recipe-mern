const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const typeDefs = require('./schema/schema');
const resolvers = require('./schema/resolvers');

// connect to the dev database
mongoose.connect("mongodb://steve:passwd@localhost:27017/recipes");

// configure graphql server and couple with mongodb
const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});

mongoose.connection.once('open', function() {
  server.start(() => console.info('Server is running on localhost:4000'))
});