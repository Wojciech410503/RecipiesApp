import React, { useState } from 'react'; // Import React and useState hook
import { addRecipe } from '../services/api'; // Import the addRecipe function to call the API for adding recipes

function AddRecipe({ onRecipeAdded }) { // Define AddRecipe component, accepting onRecipeAdded as a prop
  const [recipe, setRecipe] = useState({ // Initialize state to hold recipe data
    name: '', // Name of the recipe
    ingredients: '', // Ingredients for the recipe
    instructions: '', // Cooking instructions
    category: '', // Category of the recipe
  });

  const handleInputChange = (e) => { // Handle input change events
    const { name, value } = e.target; // Extract name and value from the event target
    setRecipe({ // Update the recipe state with the new input value
      ...recipe, // Spread the existing recipe state
      [name]: value, // Update the specific input field's value
    });
  };

  const handleSubmit = async (e) => { // Handle form submission asynchronously
    e.preventDefault(); // Prevent the default form submission behavior
    const newRecipe = { // Create a new recipe object from the form data
      name: recipe.name, // Recipe name
      ingredients: recipe.ingredients.split(','), // Split ingredients into an array by commas
      instructions: recipe.instructions, // Recipe instructions
      category: recipe.category, // Recipe category
    };

    try {
      const response = await addRecipe(newRecipe); // Call the addRecipe function to add the recipe to the API
      onRecipeAdded(response.data); // Pass the new recipe data back to the parent component (RecipesPage)
      setRecipe({ // Reset the form fields after submission
        name: '',
        ingredients: '',
        instructions: '',
        category: '',
      });
    } catch (error) { // Catch any errors that occur during the API request
      console.error('Error adding recipe:', error); // Log the error to the console
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> {/* Form element that triggers handleSubmit on submission */}
        <input
          type="text"
          name="name"
          value={recipe.name}
          placeholder="Recipe Name"
          onChange={handleInputChange} // Update state on input change
        />
        <input
          type="text"
          name="ingredients"
          value={recipe.ingredients}
          placeholder="Ingredients (comma separated)"
          onChange={handleInputChange} // Update state on input change
        />
        <textarea
          name="instructions"
          value={recipe.instructions}
          placeholder="Instructions"
          onChange={handleInputChange} // Update state on input change
        />
        <input
          type="text"
          name="category"
          value={recipe.category}
          placeholder="Category"
          onChange={handleInputChange} // Update state on input change
        />
        <button type="submit">Add Recipe</button> {/* Button to submit the form */}
      </form>
    </div>
  );
}

export default AddRecipe; // Export AddRecipe component for use in other parts of the application
