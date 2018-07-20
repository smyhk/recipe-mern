import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import { firebase } from './config';

// routes
import Home from './routes/Home';
import AddRecipe from './routes/RecipeForm';
import AddChef from './routes/ChefForm';
import Login from './routes/Login';

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
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
      if (user) {
        console.info(user.email);
        this.setState({ authUser: user });
        localStorage.setItem('user', user.getIdToken());
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
