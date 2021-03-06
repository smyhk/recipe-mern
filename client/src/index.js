import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from '../src/components/App';
import registerServiceWorker from './registerServiceWorker';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
