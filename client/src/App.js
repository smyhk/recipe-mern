import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// routes
import Home from './routes/Home';
import AddRecipe from './routes/RecipeForm';
import AddChef from './routes/ChefForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-recipe" component={AddRecipe} />
            <Route exact path="/add-chef" component={AddChef} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;