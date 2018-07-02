const Recipe = require('../models/Recipe').default;
const Chef = require('../models/Chef');

const resolvers = {
  Query: {
    description: () => `This is the API for a recipe sharing app`,
    chefs: () => Chef.find(),
    chef: (parent, args) => {
      const chef = Chef.findById(args.id);
      return chef;
    },
    recipes: () => Recipe.find(),
    recipe: (parent, args) => {
      const recipe = Recipe.findById(args.id);
      return recipe;
    }
  },
  Mutation: {
    createRecipe: async (parent, args) => {
      let recipe = new Recipe({
        name: args.name,
        ingredients: args.ingredients,
        directions: args.directions,
        prepTime: args.prepTime,
        cookTime: args.cookTime,
        chefId: args.chefId
      });
      await recipe.save();
      return recipe;
    },
    updateRecipe: async (parent, args) => {
      await Recipe.findByIdAndUpdate(args.id, args.options);
      return true;
    },
    removeRecipe: async (parent, args) => {
      await Recipe.findByIdAndRemove(args.id);
      return true;
    }
  }
}

module.exports = resolvers;