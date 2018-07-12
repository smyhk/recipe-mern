import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import RecipeList from './components/RecipeList';
import AddRecipe from './routes/RecipeForm';
import AddChef from './routes/ChefForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Jumbotron title="Welcome Brandi!" subtitle="A place for your recipes..."/>
        <h2>Latest Recipes</h2>
        <RecipeList />
        <h2>Add Recipe to Database</h2>
        <AddRecipe />
        <h2>Add Chef to Database</h2>
        <AddChef />
        <Footer />
      </div>
    );
  }
}

export default App;