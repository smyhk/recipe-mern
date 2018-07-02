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

  type Mutation {
    createRecipe(
      name: String!
      ingredients: String!
      directions: String!
      prepTime: Int!
      cookTime: Int!
      chefId: ID
    ) : Recipe
  }
`

module.exports = typeDefs;