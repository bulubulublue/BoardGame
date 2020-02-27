const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/BoardGame',{ useNewUrlParser:true},(err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('connected');
})

module.exports = mongoose;
