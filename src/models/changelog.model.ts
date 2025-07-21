import mongoose from 'mongoose';

const changeLogSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true
  },
  details: {
    type: String
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export const ChangeLog = mongoose.model('ChangeLog', changeLogSchema);
