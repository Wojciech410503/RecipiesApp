import React from 'react';
import DeleteRecipe from './DeleteRecipe';
import UpdateRecipe from './UpdateRecipe'; // Keep the import here, but modify usage


function GetRecipe({ recipes, onRecipeDeleted, setRecipes }) {
  return (
    <div className="recipes-container">
     
      <div className="card-container">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div className="recipe-card" key={recipe._id}>
              <h3>{recipe.name}</h3>
              <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
              <p><strong>Instructions:</strong> {recipe.instructions}</p>
              <p><strong>Category:</strong> {recipe.category}</p>
              <div className="card-actions">
  <DeleteRecipe recipeId={recipe._id} onRecipeDeleted={onRecipeDeleted} />
  <UpdateRecipe
    recipeId={recipe._id}
    onRecipeUpdated={(updatedRecipe) => {
      const updatedRecipes = recipes.map(r => r._id === updatedRecipe._id ? updatedRecipe : r);
      setRecipes(updatedRecipes);
    }}
  />
</div>

            </div>
          ))
        ) : (
          <p>No recipes available</p>
        )}
      </div>
    </div>
  );
}

export default GetRecipe;
