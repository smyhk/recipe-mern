const typeDefs = `
  type Recipe {
    id: ID!
    name: String!
    ingredients: String!
    directions: String!
    prepTime: Int!
    cookTime: Int!
    chefId: ID
  }

  type Query {
    description: String!
    recipes: [Recipe!]
    recipe(id: ID!): Recipe
  }

  input recipeUpdate {
    name: String
    ingredients: String
    directions: String
    prepTime: Int
    cookTime: Int
  }

  type Mutation {
    createRecipe(
      name: String!
      ingredients: String!
      directions: String!
      prepTime: Int!
      cookTime: Int!
      chefId: ID
    ): Recipe

    updateRecipe(id: ID!, options: recipeUpdate): Boolean

    removeRecipe(id: ID!): Boolean
  }
`

module.exports = typeDefs;