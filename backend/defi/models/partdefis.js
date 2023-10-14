
const mongoose = require('mongoose');
const bcrypt =require('bcrypt');

var Schema = mongoose.Schema;

var partdefisSchema = new mongoose.Schema({
    idDef:{type:String},
    date_debut:{type:Date},
    date_fin:{type:Date},
    objet:{type:String},
    reponse:{type:String},
    valeur:{type:String},
    user:{type:String},
    lastActiveAt: Date
  
});
module.exports = mongoose.model('Partdefis', partdefisSchema);