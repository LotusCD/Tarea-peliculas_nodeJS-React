const express = require('express');
const router = express.Router();
const MovieModel = require('../models/models'); // Import the MovieModel

router.get('/', async (req, res) => {
    console.log(`Received GET request at ${req.path}`); // Log incoming request
    try {
        const genres = ["Adventure", "Horror", "Sci-Fi", "Romance"];
        let genreMovies = {};
        for (let genre of genres) {
            const query = MovieModel.find({ genres: genre, year: { $gt: 2014 } }).limit(10);
            const peliculas = await MovieModel.exec(query);
            genreMovies[genre] = peliculas;
        }
        res.json(genreMovies);  // Send the movies grouped by genre as a JSON response
    } catch (e) {
        res.status(500).json({ error: e.toString() });
    }
});

module.exports = router;
