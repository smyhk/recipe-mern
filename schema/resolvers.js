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
        ingredients: args.ingredients,
        directions: args.directions,
        prepTime: args.prepTime,
        cookTime: args.cookTime,
        chefId: args.chefId
      });
      recipe.save();
      return recipe;
    }
  }
}

module.exports = resolvers;