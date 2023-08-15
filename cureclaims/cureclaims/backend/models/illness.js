const mongoose = require('mongoose');

const illnessClaimSchema = new mongoose.Schema({
  illness: {
    type: String,
   
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Userinfo',
    required: true
  },
  claimDate: {
    type: Date,
    default: Date.now
  },
  hospitalName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  }
 
});

const IllnessClaim = mongoose.model('IllnessClaim', illnessClaimSchema);

module.exports = IllnessClaim;
