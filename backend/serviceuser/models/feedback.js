const mongoose = require('mongoose');


var Schema = mongoose.Schema;

var feedbackSchema = new mongoose.Schema({
    
   sujet : { type:String, required: true, unique:true },
   reponse : { type: Object, required: true },
   userval:{type:{username:String,typeus:String}}
});

module.exports = mongoose.model('Feedback', feedbackSchema);