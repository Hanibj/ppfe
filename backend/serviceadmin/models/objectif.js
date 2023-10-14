const mongoose = require('mongoose');


var Schema = mongoose.Schema;

var objectifSchema = new mongoose.Schema({
    
   objectif : { type:String, required: true, unique:true },
   statue : { type: Boolean, required: true },

});

module.exports = mongoose.model('Objectif', objectifSchema);