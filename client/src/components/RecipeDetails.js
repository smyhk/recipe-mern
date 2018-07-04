import React, { Component } from 'react';
import { graphql } from 'react-apollo'; // for binding to component
import { getRecipeQuery } from '../queries/queries';

class RecipeDetails extends Component {
  displayRecipeDetails() {
    const { recipe } = this.props.data;
    if (recipe) {
      return (
        <div>
          <h2>{ recipe.name }</h2>
          <p>{ recipe.ingredients }</p>
          <p>{ recipe.directions }</p>
          <p>{ "prep:" }{ recipe.prepTime }</p>
          <p>{ "cook:" }{ recipe.cookTime }</p>
          <p>All recipes by this chef:</p>
        </div>
      );
    } else {
      return (
        <div>No recipe selected...</div>
      );
    }
  }
  render() {
    return (
      <div>
        <div>
          { this.displayRecipeDetails() }
        </div>
      </div>
    );
  }
}

export default graphql(getRecipeQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.recipeId
      }
    }
  }
})(RecipeDetails);