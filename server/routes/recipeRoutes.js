const express = require('express');  // Importing the Express library
const router = express.Router();  // Creating a router instance
const Recipe = require('../models/Recipe');  // Importing the Recipe model

// Route: GET - Fetching all recipes
router.get('/', async (req, res) => {  // Handles GET requests to retrieve all recipes
    try {
        const recipes = await Recipe.find();  // Fetching all recipes from the database
        res.status(200).json(recipes);  // Sending recipes as a JSON response
    } catch (err) {
        console.log("Error fetching recipes:", err);  // Logging errors, if any
        res.status(500).json({ error: err.message });  // Sending error response
    }
});

// Route: POST - Adding a new recipe
router.post('/', async (req, res) => {  // Handles POST requests to add a new recipe
    const { name, ingredients, instructions, category } = req.body;  // Extracting recipe data from the request body
    if (!name || !ingredients || !instructions || !category) {  // Validating required fields
        return res.status(400).send('All fields are required!');  // Sending error response if validation fails
    }

    try {
        const newRecipe = new Recipe({ name, ingredients, instructions, category });  // Creating a new recipe instance
        await newRecipe.save();  // Saving the recipe to the database
        res.status(201).send({ message: 'Recipe added successfully!', data: newRecipe });  // Sending success response
    } catch (error) {
        console.log("Error adding recipe:", error);  // Logging errors, if any
        res.status(500).send({ error: error.message });  // Sending error response
    }
});

// Route: PUT - Updating a recipe
router.put('/:id', async (req, res) => {  // Handles PUT requests to update a recipe
    const { id } = req.params;  // Extracting the recipe ID from the route parameters
    const { name, ingredients, instructions, category } = req.body;  // Extracting updated data from the request body

    if (!name || !ingredients || !instructions || !category) {  // Validating required fields
        return res.status(400).send('All fields are required!');  // Sending error response if validation fails
    }

    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, {  // Finding and updating the recipe by ID
            name, ingredients, instructions, category
        }, { new: true });  // Returning the updated document

        if (!updatedRecipe) {  // Checking if the recipe exists
            return res.status(404).send('Recipe not found!');  // Sending error response if not found
        }
        res.status(200).send({ message: 'Recipe updated successfully!', data: updatedRecipe });  // Sending success response
    } catch (error) {
        console.log("Error updating recipe:", error);  // Logging errors, if any
        res.status(500).send({ error: error.message });  // Sending error response
    }
});

// Route: DELETE - Deleting a recipe
router.delete('/:id', async (req, res) => {  // Handles DELETE requests to delete a recipe
    const { id } = req.params;  // Extracting the recipe ID from the route parameters

    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(id);  // Finding and deleting the recipe by ID
        if (!deletedRecipe) {  // Checking if the recipe exists
            return res.status(404).send('Recipe not found!');  // Sending error response if not found
        }
        res.status(200).send({ message: 'Recipe deleted successfully!' });  // Sending success response
    } catch (error) {
        console.log("Error deleting recipe:", error);  // Logging errors, if any
        res.status(500).send({ error: error.message });  // Sending error response
    }
});

module.exports = router;  // Exporting the router for use in other parts of the application
