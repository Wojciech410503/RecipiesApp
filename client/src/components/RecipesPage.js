import React, { useState, useEffect } from 'react'; // Import React and hooks
import AddRecipe from './AddRecipe'; // Import AddRecipe component
import GetRecipe from './GetRecipe'; // Import GetRecipe component
import UpdateRecipe from './UpdateRecipe'; // Import UpdateRecipe component
import { getRecipe, addRecipe, deleteRecipe, updateRecipe } from '../services/api'; // Import API functions

function RecipesPage() { // Define the RecipesPage component
  const [recipes, setRecipes] = useState([]); // State to hold the list of recipes
  const [selectedRecipeId, setSelectedRecipeId] = useState(null); // State to hold the selected recipe ID (for updating)

  useEffect(() => { // useEffect hook to fetch data when the component mounts
    const fetchRecipes = async () => { // Define the fetchRecipes function
      const data = await getRecipe(); // Fetch recipes using the getRecipe function
      setRecipes(data); // Update the recipes state with the fetched data
    };
    fetchRecipes(); // Call the fetchRecipes function
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  const onRecipeDeleted = (id) => { // Function to handle recipe deletion
    setRecipes(recipes.filter(recipe => recipe._id !== id)); // Filter out the deleted recipe from the state
  };

  return (
    <div className="recipes-page"> {/* Main container for the RecipesPage */}
      <h1>Recipe Management</h1> {/* Title of the page */}

      {/* Add Recipe Form */}
      <section className="form-section"> {/* Container for the AddRecipe form */}
        <h2>Add a New Recipe</h2> {/* Title of the section */}
        <AddRecipe onRecipeAdded={(newRecipe) => setRecipes([...recipes, newRecipe])} /> {/* Render AddRecipe component and update state when a new recipe is added */}
      </section>

      {/* Recipe List Display */}
      <section className="form-section"> {/* Container for displaying the list of recipes */}
        <h2>Recipe List</h2> {/* Title of the section */}
        <GetRecipe recipes={recipes} onRecipeDeleted={onRecipeDeleted} setRecipes={setRecipes} /> {/* Render GetRecipe component to display recipes */}
      </section>
    </div>
  );
}

export default RecipesPage; // Export the RecipesPage component for use in other parts of the application
