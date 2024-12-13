import React, { useState, useEffect } from 'react';
import { getRecipe, updateRecipe } from '../services/api';

function UpdateRecipe({ recipeId, onRecipeUpdated }) {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    category: '',
  });

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!recipeId) return;
      try {
        const fetchedRecipe = await getRecipe(recipeId);
        setRecipe(fetchedRecipe);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };
    fetchRecipe();
  }, [recipeId]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const updatedRecipe = {
      name: recipe.name,
      ingredients: recipe.ingredients.split(','),
      instructions: recipe.instructions,
      category: recipe.category,
    };

    try {
      const response = await updateRecipe(recipeId, updatedRecipe);
      onRecipeUpdated(response.data);

      // Reset the form after update
      setRecipe({
        name: '',
        ingredients: '',
        instructions: '',
        category: '',
      });

    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={recipe.name}
          onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ingredients (comma separated)"
          value={recipe.ingredients}
          onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
        />
        <textarea
          placeholder="Instructions"
          value={recipe.instructions}
          onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={recipe.category}
          onChange={(e) => setRecipe({ ...recipe, category: e.target.value })}
        />
        
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
}

export default UpdateRecipe;
