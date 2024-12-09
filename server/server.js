const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

// Middleware do obsługi JSON
app.use(express.json());

// Połączenie z MongoDB
mongoose.connect('mongodb+srv://wojciechApp:Domek8423670@admin.aejfu.mongodb.net/wojciechApp?retryWrites=true&w=majority&appName=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully!'))
.catch((err) => console.log('MongoDB connection error:', err));

// Zdefiniowanie schematu i modelu danych
const testDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Pole obowiązkowe
    },
    value: {
        type: Number,
        required: true, // Pole obowiązkowe
    }
});

const TestData = mongoose.model('TestData', testDataSchema);

// Trasa testowa
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Endpoint do dodawania danych
app.post('/add', async (req, res) => {
    try {
        const { name, value } = req.body; // Pobieranie danych z żądania
        if (!name || value === undefined) {
            return res.status(400).send("Name and value are required!");
        }
        const newData = new TestData({ name, value }); // Tworzenie nowego dokumentu
        await newData.save(); // Zapisywanie dokumentu w bazie danych
        res.status(201).send({ message: "Data added successfully!", data: newData }); // Potwierdzenie sukcesu z wysłaniem zapisanych danych
    } catch (error) {
        res.status(500).send({ error: error.message }); // Obsługa błędów
    }
});

// Endpoint do pobierania wszystkich danych
app.get('/data', async (req, res) => {
    try {
        const data = await TestData.find(); // Pobieranie wszystkich danych z kolekcji
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Uruchamiamy serwer na porcie 4000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
