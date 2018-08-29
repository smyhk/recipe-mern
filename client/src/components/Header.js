import React, { Component } from 'react';
import { auth } from '../config';

class Header extends Component {
  logout = () => {
    auth.logout();
    localStorage.clear();
  };

  render() {
    // const { authUser } = this.props;
    return (
      <div>
        <h4>I am the header for now</h4>
      </div>
    );
  }
}

export default Header;
