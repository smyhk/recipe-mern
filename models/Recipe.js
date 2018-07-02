const mongoose = require('mongoose');

// define Recipe model
const Recipe = mongoose.model('Recipe', {
  name: String,
  content: String,
  published: Boolean,
  chefId: String
});

module.exports = Recipe;