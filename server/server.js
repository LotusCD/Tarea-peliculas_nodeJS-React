
const express = require('express');
const path = require('path');
const connectMongo = require('./config/mongo');

const app = express();

// Middleware to parse JSON should come first
app.use(express.json());

const rootRoute = require('./routes/index');
const genreRoute = require('./routes/genre');
const directorRoute = require('./routes/director');
const movieRoute = require('./routes/movieEndpoints');


app.use('/', rootRoute);
app.use('/genero/', genreRoute);
app.use('/director/', directorRoute);
app.use('/movies', movieRoute);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectMongo();
