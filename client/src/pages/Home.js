import React, { Component } from 'react';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import RecipeList from '../components/RecipeList';
import AddRecipe from '../components/RecipeForm';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron title="Welcome Brandi!" subtitle="A place for your recipes..."/>
        <RecipeList />
        <AddRecipe />
        <Footer />
      </div>
    );
  }
}

export default Home;