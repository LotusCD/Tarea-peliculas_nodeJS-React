
const mongoose = require('mongoose');
const { instantiateDatabase } = require('./InstantiateDB');

// Environment variables
require('dotenv').config();


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

if (!username || !password) {
    throw new Error('Database credentials not set!');
}

const MONGO_URI = `mongodb+srv://${username}:${password}@cluster0.e3m56i8.mongodb.net/sample_mflix?retryWrites=true&w=majority`;

const connectMongo = async () => {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
    await instantiateDatabase('files/movies.json');
    console.log('Database initialized!');
};

module.exports = connectMongo;
