const mongoose = require('mongoose');  // Importing the Mongoose library

// Defining the schema for a recipe
const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },  // Recipe name (required)
    ingredients: { type: [String], required: true },  // List of ingredients (required)
    instructions: { type: String, required: true },  // Cooking instructions (required)
    category: { type: String, required: true }  // Recipe category (required)
});

// Creating the Recipe model using the defined schema
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;  // Exporting the Recipe model for use in other parts of the application
