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

  type Chef {
    id: ID!
    username: String
  }

  type Query {
    description: String!
    recipes: [Recipe!]
    recipe(id: ID!): Recipe
    chefs: [Chef!]
    chef(id: ID!): Chef
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