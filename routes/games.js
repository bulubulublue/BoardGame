const express = require('express');
const router = express.Router();
const game = require('../model/game.js');
const gameDetail = require('../model/game_detail.js');

//get all games
router.get('/',(req,res,next) => {
    game.find({},(err,data) => {
        if(err){
            res.send(err);
        }else{
            res.json(data);
        }

    })
})

//get detail by id
router.get('/detail/:id',(req,res,next) => {
    gameDetail.find({'id': req.params.id},(err,data) => {
        if(err){
            res.send(err);
        }else{
            res.json(data);
        }
    })
})

module.exports = router