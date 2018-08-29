import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

// components
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AddRecipe from './RecipeForm';
import Login from './Login';
import { firebase } from '../config';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
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
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        console.info(user.email);
        this.setState({ authUser: user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ authUser: null });
        localStorage.clear();
      }
    });
  }

  render() {
    return (
      <div className="container">
        <Header authUser={this.state.authUser} />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/add-recipe" component={AddRecipe} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
