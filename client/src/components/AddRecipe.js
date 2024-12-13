import React, { useState } from 'react';
import { addRecipe } from '../services/api'; // Zakładając, że masz funkcję do dodawania przepisu w API

function AddRecipe({ onRecipeAdded }) {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = {
      name: recipe.name,
      ingredients: recipe.ingredients.split(','),
      instructions: recipe.instructions,
      category: recipe.category,
    };

    try {
      const response = await addRecipe(newRecipe); // Funkcja do dodawania przepisu
      onRecipeAdded(response.data); // Przekazanie nowego przepisu do stanu w RecipesPage
      setRecipe({
        name: '',
        ingredients: '',
        instructions: '',
        category: '',
      }); // Reset formularza
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  return (
    <div>
     
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={recipe.name}
          placeholder="Recipe Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="ingredients"
          value={recipe.ingredients}
          placeholder="Ingredients (comma separated)"
          onChange={handleInputChange}
        />
        <textarea
          name="instructions"
          value={recipe.instructions}
          placeholder="Instructions"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="category"
          value={recipe.category}
          placeholder="Category"
          onChange={handleInputChange}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
