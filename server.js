const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');

const games = require('./routes/games.js');
const comments = require('./routes/comment.js')

const app = express();

app.use('/games', games);
app.use('/comment', comments);

app.listen(3000,() => {
    console.log('server started');
})