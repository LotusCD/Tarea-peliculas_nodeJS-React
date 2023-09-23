const fs = require('fs');

function loadMoviesFromJson(jsonFilePath) {
    const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
    return JSON.parse(jsonData);
}

module.exports = {
    loadMoviesFromJson
};
