const typeDefs = `
  type Chef {
    id: ID!
    username: String!
  }

  type Recipe {
    id: ID!
    name: String!
    ingredients: String!
    directions: String!
    prepTime: Int!
    cookTime: Int!
  }

  type Query {
    description: String!
    recipes: [Recipe!]
    recipe(id: ID): Recipe
    chefs: [Chef!]
    chef(id: ID): Chef
  }

  input chefUpdate {
    username: String
  }

  input recipeUpdate {
    name: String
    ingredients: String
    directions: String
    prepTime: Int
    cookTime: Int
  }

  type Mutation {
    addChef(username: String!): Chef

    updateChef(id: ID!, options: chefUpdate): Boolean

    removeChef(id: ID!): Boolean

    createRecipe(
      name: String!
      ingredients: String!
      directions: String!
      prepTime: Int!
      cookTime: Int!
    ): Recipe

    updateRecipe(id: ID!, options: recipeUpdate): Boolean

    removeRecipe(id: ID!): Boolean
  }
`

module.exports = typeDefs;