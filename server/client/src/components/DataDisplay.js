// src/components/DataDisplay.js
import React, { useState, useEffect } from 'react';
import { getData, postData } from '../services/api';

function DataDisplay() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState('');

  useEffect(() => {
    // Funkcja uruchamiana po załadowaniu komponentu, aby pobrać dane z API
    const fetchData = async () => {
      try {
        const fetchedData = await getData();
        console.log('Fetched data:', fetchedData); // Logowanie pobranych danych
        setData(fetchedData);
      } catch (error) {
        console.error('Error loading data', error);
      }
    };

    fetchData();
  }, []); // Pusty array oznacza, że funkcja fetchData uruchomi się tylko raz po załadowaniu komponentu

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newDataToAdd = { text: newData };
      await postData(newDataToAdd); // Wysyłanie danych do API
      setData([...data, newDataToAdd]); // Aktualizacja stanu lokalnego
      setNewData(''); // Resetowanie pola formularza
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <h2>Data from API</h2>
      <ul>
        {data.length > 0 ? (
          data.map((item, index) => (
            <li key={index}>{item.text}</li> // Renderowanie danych
          ))
        ) : (
          <p>No data available</p> // Komunikat, jeśli nie ma danych
        )}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
          placeholder="Add new data"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DataDisplay;
