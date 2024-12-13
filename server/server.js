const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Importujemy bibliotekę CORS
const recipeRoutes = require('./routes/recipeRoutes'); // Importujemy trasy dla przepisów

const app = express();
const port = 4000;

// Middleware do obsługi JSON
app.use(express.json());

// Używamy CORS, aby pozwolić na zapytania z różnych źródeł
app.use(cors());  // Umożliwia dostęp z innych domen

// Trasa główna
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Połączenie z MongoDB
mongoose.connect('mongodb+srv://wojciechApp:Domek8423670@admin.aejfu.mongodb.net/wojciechApp?retryWrites=true&w=majority&appName=admin')
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Używamy tras z folderu routes
app.use('/recipes', recipeRoutes);

// Uruchamiamy serwer na porcie 4000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
