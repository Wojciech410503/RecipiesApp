import axios from 'axios'; // Import axios library for making HTTP requests

const API_URL = 'http://localhost:4000'; // Define the base URL for the API

const api = axios.create({
  baseURL: API_URL, // Set the base URL for API requests
  headers: {
    'Content-Type': 'application/json', // Set the content type to JSON for requests
  },
});

// Function to fetch all recipes from the server
export const getRecipe = async () => {
  try {
    const response = await api.get('/recipes'); // Get request to fetch all recipes
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Error fetching recipes:', error); // Log any errors
    throw error; // Throw the error to be handled by the calling code
  }
};

// Function to add a new recipe to the server
export const addRecipe = async (recipe) => {
  try {
    const response = await api.post('/recipes', recipe); // POST request to add a new recipe
    return response.data; // Return the added recipe data from the response
  } catch (error) {
    console.error('Error posting data:', error); // Log any errors
    throw error; // Throw the error to be handled by the calling code
  }
};

// Function to delete a recipe by ID from the server
export const deleteRecipe = async (id) => {
  try {
    const response = await api.delete(`/recipes/${id}`); // DELETE request to remove a recipe by ID
    return response.data; // Return the response data after deletion
  } catch (error) {
    console.error('Error deleting recipe:', error); // Log any errors
    throw error; // Throw the error to be handled by the calling code
  }
};

// Function to update an existing recipe by ID
export const updateRecipe = async (id, recipe) => {
  try {
    const response = await api.put(`/recipes/${id}`, recipe); // PUT request to update the recipe by ID
    return response.data; // Return the updated recipe data from the response
  } catch (error) {
    console.error('Error updating recipe:', error); // Log any errors
    throw error; // Throw the error to be handled by the calling code
  }
};
