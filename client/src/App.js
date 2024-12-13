import React from 'react'; // Import React library
import RecipesPage from './components/RecipesPage'; // Import the RecipesPage component
import './App.css'; // Import the CSS file for styles specific to the app

// The main App component
function App() {
  return (
    <div className="app-container">  {/* Wrapper div for the app */}
      <h1>Data Representation And Querying</h1> {/* Display the main title of the app */}
      <RecipesPage />  {/* Render the RecipesPage component */}
    </div>
  );
}

export default App;  // Export the App component to be used in other files
