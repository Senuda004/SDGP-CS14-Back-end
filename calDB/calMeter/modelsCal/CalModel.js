const mongoose = require('../configCal/DB');

const calSchema = new mongoose.Schema({
  uid: String,
  id: String,
  goal: String,
  date: Date,
  userId: String,
});

const CalModel = mongoose.model('Cal', calSchema, 'caloriemeter');

module.exports = CalModel;
