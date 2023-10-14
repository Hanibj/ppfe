
const mongoose = require('mongoose');
const bcrypt =require('bcrypt');

var Schema = mongoose.Schema;

var defisSchema = new mongoose.Schema({
    date_debut:{type:String,required:true,},
    date_fin:{type:String,required:true},
    objet:{type:String,required:true},

    valeur:{type:String,required:true},

  
});
module.exports = mongoose.model('Defis', defisSchema);