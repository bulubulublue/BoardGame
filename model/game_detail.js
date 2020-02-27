const mongoose = require('./db.js');

var GameDetailSchema = {
    id: Number,
    boardgamecategory: String,
    boardgamedesigner: String,
    description: String,
    image: String,
    maxplayers: Number,
    maxpalytime: Number,
    median: Number,
    minage: Number,
    minplayers: Number,
    minplaytime: Number,
    numcomments: Number,
    numweights: Number,
    owned: Number,
    playingtime: Number,
    primary: String,
    stddev: Number,
    suggested_language_dependence: String,
    suggested_num_players: String,
    suggested_playerage: String,
    thumbnail: String,
    trading: Number,
    type: String,
    usersrated: Number,
    wanting: Number,
    wishing: Number,
    yearpublished: Number 
}

var GameDetailModel = mongoose.model('GameDetail',GameDetailSchema,'games_detail');

module.exports = GameDetailModel;
