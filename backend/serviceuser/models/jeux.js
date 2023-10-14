const mongoose = require('mongoose');
const bcrypt =require('bcrypt');

var Schema = mongoose.Schema;

var jeuxSchema = new mongoose.Schema({
    
 user:{type:{username:String,score:Number,id:String}, require:true},
 
 



});

module.exports = mongoose.model('Jeux', jeuxSchema);