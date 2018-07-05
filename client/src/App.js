import React, { Component } from 'react';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/RecipeForm';
import AddChef from './components/ChefForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Jumbotron title="Welcome Brandi!" subtitle="A place for your recipes..."/>
        <RecipeList />
        {"Add Recipe to Database"}
        <AddRecipe />
        {"Add Chef to Database"}
        <AddChef />
        <Footer />
      </div>
    );
  }
}

export default App;