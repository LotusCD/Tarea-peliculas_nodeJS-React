
const express = require('express');
const router = express.Router();
const MovieModel = require('../models/models'); // Import the MovieModel

router.get('/', async (req, res) => {
    try {
        let directorMovies = {};
        const allMovies = await MovieModel.find({ year: { $gt: 2014 } }).limit(20);
        
        for (let movie of allMovies) {
            for (let director of movie.directors) {
                if (!directorMovies[director]) {
                    directorMovies[director] = [];
                }
                directorMovies[director].push(movie);
            }
        }
        res.json(directorMovies);  // Send the movies grouped by director as a JSON response
    } catch (e) {
        res.status(500).json({ error: e.toString() });
    }
});

module.exports = router;
