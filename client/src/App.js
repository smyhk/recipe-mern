import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// routes
import Home from './routes/Home';
import AddRecipe from './routes/RecipeForm';
import AddChef from './routes/ChefForm';
import Login from './routes/Login';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-recipe" component={AddRecipe} />
            <Route exact path="/add-chef" component={AddChef} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;