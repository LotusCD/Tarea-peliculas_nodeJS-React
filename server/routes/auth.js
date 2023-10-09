const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { name } = req.body;
        const { password } = req.body;
        
        // Check if a user with the given name already exists
        const existingUser = await User.findOne({ name });
        if (existingUser) {
            return res.status(400).send({ error: 'Username already taken' });
        }

        // Create and save the new user
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ message: 'User registered successfully' });

    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


router.post('/login', async (req, res) => {
    const { name, password } = req.body;
    
    const user = await User.findOne({ name });
    
    if (!user) {
        return res.status(400).send({ error: 'Invalid name or password' });
    }

    const isValidPassword = await user.isValidPassword(password);
    
    if (!isValidPassword) {
        return res.status(400).send({ error: 'Invalid name or password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.send({ token });
});

module.exports = router;
