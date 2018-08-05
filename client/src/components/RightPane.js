import React, { Component } from 'react';
import { Paper } from '@material-ui/core';

import RecipeDetails from './RecipeDetails';

class RightPane extends Component {
  render() {
    const { styles } = this.props;
    return (
      <Paper style={styles.Paper}>
        <RecipeDetails recipeId={this.props.recipeId} />
      </Paper>
    );
  }
}

export default RightPane;