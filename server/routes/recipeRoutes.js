const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// Trasa: GET - Pobieranie wszystkich przepisów
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();  // Pobieramy wszystkie przepisy
        res.status(200).json(recipes);        // Zwracamy je jako JSON
    } catch (err) {
        console.log("Error fetching recipes:", err);
        res.status(500).json({ error: err.message });
    }
});

// Trasa: POST - Dodawanie nowego przepisu
router.post('/', async (req, res) => {
    const { name, ingredients, instructions, category } = req.body;
    if (!name || !ingredients || !instructions || !category) {
        return res.status(400).send('All fields are required!');
    }

    try {
        const newRecipe = new Recipe({ name, ingredients, instructions, category });
        await newRecipe.save();
        res.status(201).send({ message: 'Recipe added successfully!', data: newRecipe });
    } catch (error) {
        console.log("Error adding recipe:", error);
        res.status(500).send({ error: error.message });
    }
});

// Trasa: PUT - Aktualizacja przepisu
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, ingredients, instructions, category } = req.body;

    if (!name || !ingredients || !instructions || !category) {
        return res.status(400).send('All fields are required!');
    }

    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, {
            name, ingredients, instructions, category
        }, { new: true });

        if (!updatedRecipe) {
            return res.status(404).send('Recipe not found!');
        }
        res.status(200).send({ message: 'Recipe updated successfully!', data: updatedRecipe });
    } catch (error) {
        console.log("Error updating recipe:", error);
        res.status(500).send({ error: error.message });
    }
});

// Trasa: DELETE - Usuwanie przepisu
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(id);
        if (!deletedRecipe) {
            return res.status(404).send('Recipe not found!');
        }
        res.status(200).send({ message: 'Recipe deleted successfully!' });
    } catch (error) {
        console.log("Error deleting recipe:", error);
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
