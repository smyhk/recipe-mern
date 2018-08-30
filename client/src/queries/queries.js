import { gql } from 'apollo-boost'; // parses queries

// list all recipes
const getRecipesQuery = gql`
  {
    recipes {
      id
      name
      ingredients
      directions
      prepTime
      cookTime
    }
  }
`;

// add a recipe to the database
const addRecipeMutation = gql`
  mutation(
    $name: String!
    $ingredients: String!
    $directions: String!
    $prepTime: Int!
    $cookTime: Int!
    $chefId: ID!
  ) {
    addRecipe(
      name: $name
      ingredients: $ingredients
      directions: $directions
      prepTime: $prepTime
      cookTime: $cookTime
      chefId: $chefId
    ) {
      id
      name
      ingredients
      directions
      prepTime
      cookTime
    }
  }
`;

// retrieve a single recipe
const getRecipeQuery = gql`
  query($id: ID!) {
    recipe(id: $id) {
      id
      name
      ingredients
      directions
      prepTime
      cookTime
    }
  }
`;

export { getRecipesQuery, addRecipeMutation, getRecipeQuery };
