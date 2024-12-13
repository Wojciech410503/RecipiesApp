import React from 'react'; // Import React
import { deleteRecipe } from '../services/api'; // Import the deleteRecipe function to interact with the API

function DeleteRecipe({ recipeId, onRecipeDeleted }) { // Define DeleteRecipe component, accepting recipeId and onRecipeDeleted as props
  const handleDelete = async () => { // Handle delete action asynchronously
    try {
      await deleteRecipe(recipeId); // Call the deleteRecipe function with the recipeId
      onRecipeDeleted(recipeId);  // Notify the parent component that the recipe has been deleted
    } catch (error) { // Catch any errors that occur during the API request
      console.error('Error deleting recipe:', error); // Log the error to the console
    }
  };

  return (
    <div className="button-container"> {/* Wrap the button in a div container for styling */}
      <button type="button" onClick={handleDelete}>Delete</button> {/* Button to trigger delete action */}
    </div>
  );
}

export default DeleteRecipe; // Export DeleteRecipe component for use in other parts of the application
