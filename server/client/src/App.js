// src/App.js
import React from 'react';
import DataDisplay from './components/DataDisplay'; // Import komponentu

function App() {
  return (
    <div className="App">
      <h1>Data Representation App</h1>
      <DataDisplay /> {/* Wyświetlanie komponentu DataDisplay */}
    </div>
  );
}

export default App;
