const mongoose = require('mongoose');

// define Recipe model
const Recipe = mongoose.model('Recipe', {
  name: String,
  ingredients: String,
  directions: String,
  prepTime: Number,
  cookTime: Number,
  chefId: String
});

module.exports = Recipe;
