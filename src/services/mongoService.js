// MongoDB API service (replaces Firestore)
const API_URL = 'http://localhost:5000/api';

// Trusted Contacts Operations
export const addTrustedContact = async (userId, contactData) => {
  try {
    const response = await fetch(`${API_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone || '',
        relationship: contactData.relationship || 'Emergency Contact',
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding trusted contact:', error);
    return { success: false, error: error.message };
  }
};

export const getTrustedContacts = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/contacts/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting trusted contacts:', error);
    return { success: false, error: error.message, contacts: [] };
  }
};

export const updateTrustedContact = async (contactId, updates) => {
  try {
    const response = await fetch(`${API_URL}/contacts/${contactId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating trusted contact:', error);
    return { success: false, error: error.message };
  }
};

export const deleteTrustedContact = async (contactId) => {
  try {
    const response = await fetch(`${API_URL}/contacts/${contactId}`, {
      method: 'DELETE',
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting trusted contact:', error);
    return { success: false, error: error.message };
  }
};

// SOS Alert Operations
export const createSOSAlert = async (userId, location, notifiedContacts) => {
  try {
    const response = await fetch(`${API_URL}/alerts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        location: {
          latitude: location.latitude,
          longitude: location.longitude,
          address: location.address || '',
        },
        notifiedContacts: notifiedContacts.map(c => c.email),
        message: 'Emergency SOS Alert',
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating SOS alert:', error);
    return { success: false, error: error.message };
  }
};

export const getSOSAlerts = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/alerts/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting SOS alerts:', error);
    return { success: false, error: error.message, alerts: [] };
  }
};

// User Profile Operations
export const createUserProfile = async (userId, userData) => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uid: userId,
        email: userData.email,
        displayName: userData.displayName || '',
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating user profile:', error);
    return { success: false, error: error.message };
  }
};
