import React, { Component } from 'react';
import { graphql } from 'react-apollo'; // for binding to component
import { getRecipesQuery } from '../queries/queries';

// components
import RecipeDetails from './RecipeDetails';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  displayRecipes() {
    const data = this.props.data;
    if (data.loading) {
      return <div>Loading recipes...</div>;
    } else {
      return data.recipes.map((recipe) => {
        return (
          <li
            className="collection-item"
            key={recipe.id}
            onClick={() => {
              this.setState({ selected: recipe.id });
            }}
          >
            {recipe.name}
          </li>
        );
      });
    }
  }
  render() {
    return (
      <div className="container">
        <ul className="collection">{this.displayRecipes()}</ul>
        <RecipeDetails recipeId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getRecipesQuery)(RecipeList);
