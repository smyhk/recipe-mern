const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const cors = require('cors');

const Query = require('./resolvers/Query');

const resolvers = {
  Query
};

const server = new GraphQLServer({
  typeDefs: './src/schema/schema.graphql',
  resolvers
});

// allow cross-origin requests
server.use(cors());

// connect to the dev database
mongoose.connect(
  'mongodb://steve:passwd@localhost:27017/recipes',
  { useNewUrlParser: true }
);
mongoose.connection.once('open', () => {
  console.info('Database connected...');
  server.start(() =>
    console.info('Server is running on http://localhost:4000')
  );
});
