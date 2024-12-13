const express = require('express');  // Importing the Express library
const mongoose = require('mongoose');  // Importing the Mongoose library for MongoDB interaction
const cors = require('cors');  // Importing the CORS library
const recipeRoutes = require('./routes/recipeRoutes');  // Importing the routes for recipe-related endpoints

const app = express();  // Creating an Express app instance
const port = 4000;  // Defining the port for the server

// Middleware to handle JSON requests
app.use(express.json());  // Parses incoming requests with JSON payload

// Using CORS to allow requests from different domains
app.use(cors());  // Enables cross-origin requests

// Main route
app.get('/', (req, res) => {  // Handling GET requests to the root route
    res.send('Hello World!');  // Sending a simple response
});

// Connecting to MongoDB
mongoose.connect('mongodb+srv://wojciechApp:Domek8423670@admin.aejfu.mongodb.net/wojciechApp?retryWrites=true&w=majority&appName=admin')  // Connecting to MongoDB with a connection string
  .then(() => console.log('MongoDB connected successfully!'))  // Logging success message on successful connection
  .catch((err) => console.log('MongoDB connection error:', err));  // Logging error message on failure

// Using recipe routes from the routes folder
app.use('/recipes', recipeRoutes);  // Mounting the recipe routes under the '/recipes' path

// Starting the server on port 4000
app.listen(port, () => {  // Listening for incoming requests on the specified port
    console.log(`Server is running on port ${port}`);  // Logging the server status
});
