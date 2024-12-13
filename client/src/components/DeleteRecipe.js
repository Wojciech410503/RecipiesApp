import React from 'react';
import { deleteRecipe } from '../services/api';

function DeleteRecipe({ recipeId, onRecipeDeleted }) {
  const handleDelete = async () => {
    try {
      await deleteRecipe(recipeId);
      onRecipeDeleted(recipeId);  // Powiadomienie o usunięciu przepisu
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  return (
    
    <div className="button-container">
  <button type="button" onClick={handleDelete}>Delete</button>
  </div>
  );
}

export default DeleteRecipe;
