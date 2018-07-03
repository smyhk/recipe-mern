import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Header />
        <Jumbotron title="Welcome Brandi" subtitle="A place for storing your recipes..."/>
        <Footer />
      </ApolloProvider>
    );
  }
}

export default App;