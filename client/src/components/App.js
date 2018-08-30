import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { firebase } from '../config';

// components
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AddRecipe from './RecipeForm';
import Login from './Login';

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
      <Router>
        <div className="App">
          <Header authUser={this.state.authUser} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/add-recipe" component={AddRecipe} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
