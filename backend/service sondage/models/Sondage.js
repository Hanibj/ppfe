const mongoose = require('mongoose');
const bcrypt =require('bcrypt');

var Schema = mongoose.Schema;

var sondageSchema = new mongoose.Schema({
    
    question : { type:String, required: true },
   option1 : { type: String, required: true },
   option2 : { type: String, required: true },
   answers: [
    {
      username: { type: String },
      answer: { type: String }
    }
  ]

});
module.exports = mongoose.model('Sondage', sondageSchema);