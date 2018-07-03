import React, { Component } from 'react';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron title="Welcome Brandi" subtitle="A place for your recipes..."/>
        <Footer />
      </div>
    );
  }
}

export default Home;