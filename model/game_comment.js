const mongoose = require('./db.js');

var CommentSchema = {
    ID: Number,
    name: String,
    user: String,
    rating: Number,
    comment: String
}

var CommentModel = mongoose.model('GamesComment',CommentSchema,'games_comment');

module.exports = CommentModel;