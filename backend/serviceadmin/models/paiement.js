
const mongoose = require('mongoose');
const bcrypt =require('bcrypt');

var Schema = mongoose.Schema;

var paiementSchema = new mongoose.Schema({
   idEvent:{type:String},
    prix:{type:String},
    DatePay:{type:String}
   
  
});
module.exports = mongoose.model('Paiement', paiementSchema);