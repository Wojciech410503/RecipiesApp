import axios from 'axios';

const API_URL = 'http://localhost:4000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getRecipe = async () => {
  try {
    const response = await api.get('/recipes'); // Pobieramy wszystkie przepisy
    return response.data;  // Zwracamy dane
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const addRecipe = async (recipe) => {
  try {
    const response = await api.post('/recipes', recipe);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

export const deleteRecipe = async (id) => {
  try {
    const response = await api.delete(`/recipes/${id}`); // Poprawiona składnia
    return response.data;
  } catch (error) {
    console.error('Error deleting recipe:', error);
    throw error;
  }
};

export const updateRecipe = async (id, recipe) => {
  try {
    const response = await api.put(`/recipes/${id}`, recipe); // Poprawiona składnia
    return response.data;
  } catch (error) {
    console.error('Error updating recipe:', error);
    throw error;
  }
};
