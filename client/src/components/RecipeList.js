import React, { Component } from 'react';
import { graphql } from 'react-apollo'; // for binding to component
import { getRecipesQuery } from '../queries/queries';

// components
// import RecipeDetails from './RecipeDetails';
// <RecipeDetails recipeId={ this.state.selected }/>

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }
  displayRecipes() {
    var data = this.props.data;
    if (data.loading) {
      return( <div>Loading recipes...</div>);
    } else {
      return data.recipes.map(recipe => {
        return(
          <li key={ recipe.id } onClick={ () => { this.setState({ selected: recipe.id }) } }>{ recipe.name }</li>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <h2>Latest Recipes</h2>
        <ul>
          { this.displayRecipes() }
        </ul>
        
      </div>
    );
  }
}

export default graphql(getRecipesQuery)(RecipeList);
