import { gql } from 'apollo-boost';  // parses queries

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

// list all authors
const getChefsQuery = gql`
  {
    chefs {
      username
      id
    }
  }
`;

// add a recipe to the database
const createRecipeMutation = gql`
  mutation($name: String!, $ingredients: String!, $directions: String!, $prepTime: Int!, $cookTime: Int!) {
    addBook(name: $name, ingredients: $ingredients, directions: $directions, prepTime: $prepTime, cookTime: $cookTime) {
      id
      name
      ingredients
      directions
      prepTime
      cookTime
    }
  }
`;

// retrieve a single book; lists other books by the same author
const getRecipeQuery = gql`
  query($id: ID) {
    recipe(id: $id) {
      id
      name
      ingredients
      description
      prepTime
      cookTime
      chef {
        username
        recipes {
          id
          name
        }
      }
    }
  }
`;

export { 
  getChefsQuery, 
  getRecipesQuery, 
  createRecipeMutation, 
  getRecipeQuery 
};