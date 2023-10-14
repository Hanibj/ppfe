const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var bonhSchema = new mongoose.Schema({
  bonheur: { type: Number, require: true },
  month: { type: String, required: true },
});

module.exports = mongoose.model('Bonheur', bonhSchema);
