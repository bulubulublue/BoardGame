const express = require('express');
const router = express.Router();
const comment= require('../model/game_comment.js');

router.get('/:id',(req,res,next) => {
    comment.find({'ID': req.params.id},(err,data) => {
        if(err){
            res.send(err);
        }else{
            res.json(data);
        }
    })
})

module.exports = router;