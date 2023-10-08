const express = require('express');
const router = express.Router();
const MovieModel = require('../models/models');

router.get('/', async (req, res) => {
    try {
        const query = MovieModel.find({ year: { $gt: 2014 } })
                                 .sort({ year: -1 }) // Sort by year in descending order
                                 .limit(20);
        const peliculas = await MovieModel.exec(query);

        res.json(peliculas);
    } catch (e) {
        res.status(500).json({ error: e.toString() });
    }
});

module.exports = router;
