
const mongoose = require('mongoose');
const bcrypt =require('bcrypt');

var Schema = mongoose.Schema;

var eventSchema = new mongoose.Schema({
   imageevent:{type:String},
    titleevent:{type:String,required:true},
    descevent:{type:String,required:true},
    prix:{type:Number}
   
  
});
module.exports = mongoose.model('Event', eventSchema);