const typeDefs = `
  type Recipe {
    id: ID!
    name: String!
    content: String!
    published: Boolean!
  }

  type Query {
    description: String!
    recipes: [Recipe!]
    recipe(id: ID!): Recipe
  }

  type Mutation {
    createRecipe(name: String!, content: String!, published: Boolean!) : Recipe
  }
`

module.exports = typeDefs;