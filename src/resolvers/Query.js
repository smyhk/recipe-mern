import Recipe from '../models/Recipe';

const info = () => 'The API for the recipe app';
const recipes = () => Recipe.find();
const recipe = (parent, args) => Recipe.findById(args.id);

export default { info, recipe, recipes };
