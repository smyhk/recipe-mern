import React, { Component } from 'react';
import { auth } from '../config';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends Component {
  logout = () => {
    auth.logout();
    localStorage.clear();
  };

  render() {
    const { authUser } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
        <Typography variant="headline" color="inherit">
            News
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
