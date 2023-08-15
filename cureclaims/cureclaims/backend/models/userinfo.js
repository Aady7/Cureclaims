const mongoose = require('mongoose');

const userinfoSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  policyNumber: {
    type: String,
    required: true,
    unique: true
  },
  insuranceProvider: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  policyStartDate: {
    type: Date,
    required: true
  },
  policyEndDate: {
    type: Date,
    required: true
  },
 
});

const Userinfo = mongoose.model('Userinfo', userinfoSchema);

module.exports = Userinfo;
