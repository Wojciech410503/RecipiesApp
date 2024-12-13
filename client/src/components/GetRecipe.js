import React from 'react'; // Import React
import DeleteRecipe from './DeleteRecipe'; // Import the DeleteRecipe component
import UpdateRecipe from './UpdateRecipe'; // Import the UpdateRecipe component

function GetRecipe({ recipes, onRecipeDeleted, setRecipes }) { // Define GetRecipe component accepting recipes, onRecipeDeleted, and setRecipes as props
  return (
    <div className="recipes-container"> {/* Container for all recipes */}
      <div className="card-container"> {/* Container for individual recipe cards */}
        {recipes.length > 0 ? ( // Check if there are any recipes
          recipes.map((recipe) => ( // Iterate through the recipes array
            <div className="recipe-card" key={recipe._id}> {/* Render each recipe as a card */}
              <h3>{recipe.name}</h3> {/* Display recipe name */}
              <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p> {/* List ingredients */}
              <p><strong>Instructions:</strong> {recipe.instructions}</p> {/* Display recipe instructions */}
              <p><strong>Category:</strong> {recipe.category}</p> {/* Display recipe category */}
              <div className="card-actions"> {/* Container for action buttons */}
                <DeleteRecipe recipeId={recipe._id} onRecipeDeleted={onRecipeDeleted} /> {/* Include DeleteRecipe component with necessary props */}
                <UpdateRecipe
                  recipeId={recipe._id} // Pass recipeId to UpdateRecipe
                  onRecipeUpdated={(updatedRecipe) => { // Handle recipe update
                    const updatedRecipes = recipes.map(r => r._id === updatedRecipe._id ? updatedRecipe : r); // Update the recipe in the list
                    setRecipes(updatedRecipes); // Update the state with the new list of recipes
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <p>No recipes available</p> // If no recipes, display this message
        )}
      </div>
    </div>
  );
}

export default GetRecipe; // Export GetRecipe component for use in other parts of the application
