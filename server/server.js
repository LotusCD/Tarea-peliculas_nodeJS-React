
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectMongo = require('./config/mongo');

const app = express();

// const corsOptions = {
//     origin: 'http://localhost:3000',  // Your React app's address
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//     allowedHeaders: ['Content-Type', 'Authorization']
// };

// Middleware to parse JSON should come first
app.use(express.json());
app.use(cors());

const rootRoute = require('./routes/index');
const genreRoute = require('./routes/genre');
const directorRoute = require('./routes/director');
const movieRoute = require('./routes/movieEndpoints');


app.use('/', rootRoute);
app.use('/genero/', genreRoute);
app.use('/director/', directorRoute);
app.use('/movies', movieRoute);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectMongo();
