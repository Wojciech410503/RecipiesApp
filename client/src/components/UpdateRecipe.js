import React, { useState, useEffect } from 'react'; // Import React and hooks
import { getRecipe, updateRecipe } from '../services/api'; // Import API functions for getting and updating recipes

function UpdateRecipe({ recipeId, onRecipeUpdated }) { // Define the UpdateRecipe component
  const [recipe, setRecipe] = useState({ // State to store the recipe data for updating
    name: '',
    ingredients: '',
    instructions: '',
    category: '',
  });

  useEffect(() => { // useEffect hook to fetch recipe data when recipeId changes
    const fetchRecipe = async () => { // Define the function to fetch the recipe
      if (!recipeId) return; // If no recipeId is provided, don't fetch
      try {
        const fetchedRecipe = await getRecipe(recipeId); // Fetch the recipe from the API
        setRecipe(fetchedRecipe); // Set the recipe state with the fetched data
      } catch (error) {
        console.error('Error fetching recipe:', error); // Handle any errors
      }
    };
    fetchRecipe(); // Call the fetchRecipe function
  }, [recipeId]); // Dependency array includes recipeId to refetch when it changes

  const handleUpdate = async (event) => { // Function to handle recipe update on form submit
    event.preventDefault(); // Prevent the default form submission behavior
    const updatedRecipe = { // Prepare the updated recipe data
      name: recipe.name,
      ingredients: recipe.ingredients.split(','), // Split ingredients by commas into an array
      instructions: recipe.instructions,
      category: recipe.category,
    };

    try {
      const response = await updateRecipe(recipeId, updatedRecipe); // Send the updated recipe to the API
      onRecipeUpdated(response.data); // Notify the parent component with the updated recipe

      // Reset the form after updating
      setRecipe({
        name: '',
        ingredients: '',
        instructions: '',
        category: '',
      });

    } catch (error) {
      console.error('Error updating recipe:', error); // Handle any errors
    }
  };

  return (
    <div>
      <form onSubmit={handleUpdate}> {/* Form for updating the recipe */}
        <input
          type="text"
          placeholder="Recipe Name"
          value={recipe.name} // Bind recipe name value to state
          onChange={(e) => setRecipe({ ...recipe, name: e.target.value })} // Update recipe name on change
        />
        <input
          type="text"
          placeholder="Ingredients (comma separated)"
          value={recipe.ingredients} // Bind recipe ingredients value to state
          onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })} // Update ingredients on change
        />
        <textarea
          placeholder="Instructions"
          value={recipe.instructions} // Bind recipe instructions value to state
          onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })} // Update instructions on change
        />
        <input
          type="text"
          placeholder="Category"
          value={recipe.category} // Bind recipe category value to state
          onChange={(e) => setRecipe({ ...recipe, category: e.target.value })} // Update category on change
        />
        
        <button type="submit">Update Recipe</button> {/* Submit button to update recipe */}
      </form>
    </div>
  );
}

export default UpdateRecipe; // Export the UpdateRecipe component for use in other parts of the application
