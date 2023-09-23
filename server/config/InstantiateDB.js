const { loadMoviesFromJson } = require('../utilities/loadMoviesFromJson');
const Movie = require('../models/models');

async function instantiateDatabase(jsonFilePath) {
    const movies = loadMoviesFromJson(jsonFilePath);
    for (let movie of movies) {
        const existingMovie = await Movie.find({ title: movie.title, year: movie.year });
        if (existingMovie.length === 0) {
            await Movie.create(movie);
        }
        else{
            console.log("movie already exists")
        }
    }
}

module.exports = {
    instantiateDatabase
};
