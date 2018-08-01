import React, { Component } from 'react';
import { Paper } from '@material-ui/core';

import RecipeList from '../components/RecipeList';

class LeftPane extends Component {
  render() {
    const { styles } = this.props;
    return (
      <Paper style={styles.Paper}>
        <RecipeList />
      </Paper>
    )
  }
}

export default LeftPane;