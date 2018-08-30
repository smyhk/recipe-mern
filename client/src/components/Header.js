import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { auth } from '../config';

class Header extends Component {
  logout = () => {
    auth.logout();
    localStorage.clear();
  };

  render() {
    // const { authUser } = this.props;
    return (
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <NavLink className="brand-logo" to="/">
            {"Brandi's Recipes"}
          </NavLink>
          <ul className="right">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/add-recipe">Add</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
