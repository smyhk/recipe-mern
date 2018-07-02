const Recipe = require('../models/Recipe');

const resolvers = {
  Query: {
    description: () => `This is the API for a recipe sharing app`,
    recipes: () => Recipe.find()
  },
  Mutation: {
    createRecipe: (parent, args) => {
      const recipe = new Recipe({
        name: args.name,
        content: args.content,
        published: false
      });
      recipe.save();
      return recipe;
    }
  }
}

module.exports = resolvers;