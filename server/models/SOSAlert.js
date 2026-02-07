import mongoose from 'mongoose';

const sosAlertSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    index: true
  },
  location: {
    latitude: Number,
    longitude: Number,
    address: String
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  notifiedContacts: [{
    type: String
  }],
  status: {
    type: String,
    enum: ['sent', 'failed', 'pending'],
    default: 'sent'
  },
  message: {
    type: String,
    default: 'Emergency SOS Alert'
  }
});

export default mongoose.model('SOSAlert', sosAlertSchema);
