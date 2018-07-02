const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');

// connect to the database
mongoose.connect("mongodb://steve:passwd@localhost:27017/recipes");



// configure graphql server and couple with mongodb
const server = new GraphQLServer({
  typeDefs: '',
  resolvers: ''
});

mongoose.connection.once('open', function() {
  server.start(() => console.info('Server is running on localhost:4000'))
});