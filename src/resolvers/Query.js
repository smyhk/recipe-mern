const Recipe = require('../models/Recipe');

const info = () => "The API for the recipe app";
const recipes = () => Recipe.find();
const recipe = (parent, args) => Recipe.findById(args.id);

export {
  info,
  recipe,
  recipes
};