import React, { Component } from 'react';

// components
import Jumbotron from '../components/Jumbotron';
import RecipeList from '../components/RecipeList';

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron title="Welcome Brandi!" subtitle="A place for your recipes..." />
        <h2>Latest Recipes</h2>
        <RecipeList />
      </div>
    );
  }
}

export default Home;