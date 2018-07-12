import mongoose from 'mongoose';

// define Recipe model
const Recipe = mongoose.model('Recipe', {
  name: String,
  ingredients: String,
  directions: String,
  prepTime: Number,
  cookTime: Number,
  chefId: String
});

export default Recipe;