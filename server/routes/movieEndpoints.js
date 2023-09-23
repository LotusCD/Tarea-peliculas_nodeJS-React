const express = require('express');
const router = express.Router();
const MovieModel = require('../models/models');

// Create a new movie
router.post('/', async (req, res) => {
    console.log(req.body);  // Log the incoming data
    try {
        const movie = await MovieModel.create(req.body);
        res.status(201).json(movie);
    } catch (e) {
        res.status(500).json({ error: e.toString() });
    }
});

// Update an existing movie by its ID
router.put('/:id', async (req, res) => {
    try {
        const movie = await MovieModel.model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.json(movie);
    } catch (e) {
        res.status(500).json({ error: e.toString() });
    }
});

// Delete a movie by its ID
router.delete('/:id', async (req, res) => {
    try {
        const result = await MovieModel.model.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.json({ message: 'Movie deleted successfully' });
    } catch (e) {
        res.status(500).json({ error: e.toString() });
    }
});

module.exports = router;
