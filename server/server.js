
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectMongo = require('./config/mongo');
const authRoutes = require('./routes/auth');
const authenticate = require('./utilities/authenticate');



const app = express();

// Middleware to parse JSON should come first
app.use(express.json());
app.use(cors());

const rootRoute = require('./routes/index');
const genreRoute = require('./routes/genre');
const directorRoute = require('./routes/director');
const movieRoute = require('./routes/movieEndpoints');

// First, use the authentication routes without any authentication middleware
app.use('/authenticate', authRoutes);

// Now, other routes with the authenticate middleware
app.use('/', authenticate, rootRoute);
app.use('/genero/', authenticate, genreRoute);
app.use('/director/', authenticate, directorRoute);
app.use('/movies', authenticate, movieRoute);


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectMongo();
