const mongoose = require('./db.js');

var GameSchema = {
    ID: Number,
    Name: String,
    Year: Date,
    Rank: Number,
    Average: Number,
    'Bayes average': Number,
    'User rated': Number,
    URL: String,
    Thumbnail: String
}

var GameModel = mongoose.model('Game',GameSchema,'games');

module.exports = GameModel;
