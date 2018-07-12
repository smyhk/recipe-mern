import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Spinner } from '@blueprintjs/core'

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import RecipeList from './components/RecipeList';

// routes
import AddRecipe from './routes/RecipeForm';
import AddChef from './routes/ChefForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true,
    };
  }

  componentWillMount() {
    this.setState({
      loading: false
    })
  }
  
  render() {
    if (this.state.loading === true) {
      return (
        <div style={{ textAlign: "center", position: "absolute", top: "25%", left: "50%" }}>
          <h3>Loading</h3>
          <Spinner />
        </div>
      )
    }
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