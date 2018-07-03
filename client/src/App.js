import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import Header from './components/Header';

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Header />
        <h1>{"Brandi's Recipe Directory"}</h1>
      </ApolloProvider>
    );
  }
}

export default App;
