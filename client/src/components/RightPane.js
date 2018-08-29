import React from 'react';
//import { Paper } from '@material-ui/core';

import RecipeDetails from './RecipeDetails';

const RightPane = ({ recipeId }) => {
  //const { styles } = this.props;
  return (
    <RecipeDetails recipeId={recipeId} />
  );
}

export default RightPane;