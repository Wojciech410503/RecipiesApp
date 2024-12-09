// src/services/api.js
import axios from 'axios';

// Możesz zmienić ten URL na adres swojego backendu
const API_URL = 'http://localhost:4000';

// Tworzymy instancję axios
const api = axios.create({
  baseURL: API_URL, // Adres bazy API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Funkcja do pobierania danych
export const getData = async () => {
  try {
    const response = await api.get('/data'); // Endpoint do pobrania danych
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Funkcja do dodawania danych
export const postData = async (data) => {
  try {
    const response = await api.post('/add', data); // Endpoint do dodawania danych
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

// Możesz dodać kolejne funkcje, np. updateData, deleteData itp.
