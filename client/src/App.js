import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, Switch, 
  Redirect 
} from 'react-router-dom';
import fire from './config/Fire';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// routes
import Home from './routes/Home';
import AddRecipe from './routes/RecipeForm';
import AddChef from './routes/ChefForm';
import Login from './routes/Login';

const authListener = () => {
  fire.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      localStorage.setItem('user', user.uid);
    } else {
      localStorage.removeItem('user');
    }
  });
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('user') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login'
          }}
        />
      )
    }
  />
);

class App extends Component {
  componentDidMount() {
    authListener();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/add-recipe" component={AddRecipe} />
            <PrivateRoute exact path="/add-chef" component={AddChef} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;