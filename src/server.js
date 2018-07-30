const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');

const typeDefs = `
  type Query {
    info: String!
  }
`;

const resolvers = {
  Query: {
    info: () => "The API for the recipe app"
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

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
