# RecipiesApp
Documentation and User Guide

Introduction
Recipe Management is a tool for managing recipes. Users can add, update, delete and browse recipes. The application was created using the MERN technology stack (MongoDB, Express.js, React, Node.js).

The application will be available at `http://localhost:3000`.

Functionalities

1. Adding a new recipe
- The form allows you to enter the name of the recipe, ingredients (separated by commas), instructions and category.
- Once added, the new recipe appears on the list.

2. Displaying the list of recipes
- All recipes are displayed in the form of cards, each with a name, ingredients, instructions and category.
- Each card contains **Delete** and **Edit** buttons.

3. Deleting a recipe
- Clicking the **Delete** button removes the recipe from the database and refreshes the list.

4. Recipe Update
- After clicking the **Edit** button, the user can modify an existing recipe.
- The form allows you to change the name, ingredients, instructions, and category of the recipe.

Description of key files
- **`AddRecipe.js`**: Supports adding new recipes.
- **`GetRecipe.js`**: Lists all recipes.
- **`DeleteRecipe.js`**: Deletes the selected recipe.
- **`UpdateRecipe.js`**: Supports updating a recipe.
- **`api.js`**: Contains functions for communicating with the API (GET, POST, DELETE, PUT).
- **`server.js`**: Backend entry point.
- **`recipeRoutes.js`**: Defines API paths for CRUD operations.

User Guide

Adding a Recipe
1. Go to the **Add a New Recipe** section.
2. Fill in the fields: Name, Ingredients, Instructions, Category.
3. Click **Add Recipe**. The new recipe will appear in the list below.

Viewing Recipes
1. All recipes are visible in the **Recipe List** section.
2. Each card contains recipe information and action buttons.

Updating a Recipe
1. Click the **Edit** button on the selected recipe card.
2. Change the necessary data in the form.
3. Click **Update Recipe** to save the changes.

Deleting a Recipe
1. Click the **Delete** button on the selected recipe card.
2. The recipe will be removed from the list.

Summary
Recipe Management application is a simple and intuitive tool for managing recipes. It offers functionalities for adding, removing, updating and browsing recipes. Thanks to the use of MERN stack it is flexible and easy to develop.
