const graphql = require('graphql');
const Chef = require('../models/chef');
const Recipe = require('../models/recipe');

// get graphql types
const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

// define type for Recipe
const RecipeType = new GraphQLObjectType({
  name: 'Recipe',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    ingredients: { type: GraphQLString },
    directions: { type: GraphQLString },
    prepTime: { type: GraphQLInt },
    cookTime: { type: GraphQLInt },
    chef: {
      type: ChefType,
      resolve(parent, args) {
        return Chef.findById(parent.chefId);
      }
    }
  })
});

// define type for Chef
const ChefType = new GraphQLObjectType({
  name: 'Chef',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    recipes: {
      type: new GraphQLList(RecipeType),
      resolve(parent, args) {
        return Recipe.find({ chefId: parent.id });
      }
    }
  })
});

// initial graph entry point
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    recipe: {
      type: RecipeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db / other source
        return Recipe.findById(args.id);
      }
    },
    chef: {
      type: ChefType,
      args: {id: { type: GraphQLID }},
      resolve(parent, args) {
        return Chef.findById(args.id);
      }
    },
    recipes: {
      type: new GraphQLList(RecipeType),
      resolve(parent, args) {
        // return recipes;
        return Recipe.find({});
      }
    },
    chefs: {
      type: new GraphQLList(ChefType),
      resolve(parents, args) {
        // return chefs;
        return Chef.find({});
      }
    }
  }
});

// add or alter data in the database
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addChef: {
      type: ChefType,
      args: {
        username: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const chef = new Chef({
          username: args.username
        });
        return chef.save();
      }
    },
    addRecipe: {
      type: RecipeType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        ingredients: { type: new GraphQLNonNull(GraphQLString) },
        directions: { type: new GraphQLNonNull(GraphQLString) },
        prepTime: { type: new GraphQLNonNull(GraphQLInt) },
        cookTime: { type: new GraphQLNonNull(GraphQLInt) },
        chefId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        const recipe = new Recipe({
          name: args.name,
          ingredients: args.ingredients,
          directions: args.directions,
          prepTime: args.prepTime,
          cookTime: args.cookTime,
          chefId: args.chefId
        });
        return recipe.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});