import React, { useState, useEffect } from 'react';
import AddRecipe from './AddRecipe';
import GetRecipe from './GetRecipe';
import UpdateRecipe from './UpdateRecipe';
import { getRecipe, addRecipe, deleteRecipe, updateRecipe } from '../services/api';

function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipe();
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  const onRecipeDeleted = (id) => {
    setRecipes(recipes.filter(recipe => recipe._id !== id));
  };

  return (
    <div className="recipes-page">
      <h1>Recipe Management</h1>

      {/* Add Recipe Form */}
      <section className="form-section">
        <h2>Add a New Recipe</h2>
        <AddRecipe onRecipeAdded={(newRecipe) => setRecipes([...recipes, newRecipe])} />
      </section>

 

      {/* Recipe List Display */}
      <section className="form-section">
        <h2>Recipe List</h2>
        <GetRecipe recipes={recipes} onRecipeDeleted={onRecipeDeleted} setRecipes={setRecipes} />
      </section>
    </div>
  );
}

export default RecipesPage;
