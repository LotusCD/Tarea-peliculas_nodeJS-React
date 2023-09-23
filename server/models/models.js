const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    genres: [String],
    directors: [String],
    productionCompany: String,
    type: {
        type: String,
        enum: ['movie', 'tv_show'],
        required: true
    }
});

class MovieModel {
    constructor() {
        this.model = mongoose.model('Movie', movieSchema);
    }

    create(data) {
        const movie = new this.model(data);
        return movie.save();
    }

    find(query) {
        return this.model.find(query);
    }

    exec(query) {
        return query.exec();
    }
}

module.exports = new MovieModel();
