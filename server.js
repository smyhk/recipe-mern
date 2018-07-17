const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const server = express();

// allow cross-origin requests
server.use(cors());

// graphql middleware
server.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

// connect to the dev database
mongoose.connect(
  'mongodb://steve:passwd@localhost:27017/recipes',
  { useNewUrlParser: true }
);
mongoose.connection.once('open', () => {
  console.info('Database connected...');
  server.listen(4000, () =>
    console.info('Server is running on localhost:4000')
  );
});
