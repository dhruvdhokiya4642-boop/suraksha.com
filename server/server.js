import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import TrustedContact from './models/TrustedContact.js';
import SOSAlert from './models/SOSAlert.js';
import User from './models/User.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Suraksha API is running' });
});

// ==================== USER ROUTES ====================

// Create user profile
app.post('/api/users', async (req, res) => {
  try {
    const { uid, email, displayName } = req.body;
    
    // Check if user already exists
    let user = await User.findOne({ uid });
    if (user) {
      return res.json({ success: true, user, message: 'User already exists' });
    }

    user = new User({ uid, email, displayName });
    await user.save();
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get user profile
app.get('/api/users/:uid', async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.params.uid });
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== TRUSTED CONTACTS ROUTES ====================

// Get all trusted contacts for a user
app.get('/api/contacts/:userId', async (req, res) => {
  try {
    const contacts = await TrustedContact.find({ 
      userId: req.params.userId,
      isActive: true 
    }).sort({ createdAt: -1 });
    
    res.json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Add a new trusted contact
app.post('/api/contacts', async (req, res) => {
  try {
    const { userId, name, email, phone, relationship } = req.body;
    
    const contact = new TrustedContact({
      userId,
      name,
      email,
      phone,
      relationship,
      isActive: true
    });
    
    await contact.save();
    res.json({ success: true, id: contact._id, contact });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update a trusted contact
app.put('/api/contacts/:id', async (req, res) => {
  try {
    const contact = await TrustedContact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    if (!contact) {
      return res.status(404).json({ success: false, error: 'Contact not found' });
    }
    
    res.json({ success: true, contact });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete a trusted contact
app.delete('/api/contacts/:id', async (req, res) => {
  try {
    const contact = await TrustedContact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({ success: false, error: 'Contact not found' });
    }
    
    res.json({ success: true, message: 'Contact deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== SOS ALERTS ROUTES ====================

// Get all SOS alerts for a user
app.get('/api/alerts/:userId', async (req, res) => {
  try {
    const alerts = await SOSAlert.find({ 
      userId: req.params.userId 
    }).sort({ timestamp: -1 });
    
    res.json({ success: true, alerts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Create a new SOS alert
app.post('/api/alerts', async (req, res) => {
  try {
    const { userId, location, notifiedContacts, message } = req.body;
    
    const alert = new SOSAlert({
      userId,
      location,
      notifiedContacts,
      status: 'sent',
      message: message || 'Emergency SOS Alert'
    });
    
    await alert.save();
    res.json({ success: true, id: alert._id, alert });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
