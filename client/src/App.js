import React from 'react';
import RecipesPage from './components/RecipesPage'; // Import komponentu RecipesPage
import './App.css'; // Import pliku CSS dla stylów specyficznych dla aplikacji

function App() {
  return (
    <div className="app-container">
      <h1>Data Representation App</h1>
      <RecipesPage />
    </div>
  );
}

export default App;
