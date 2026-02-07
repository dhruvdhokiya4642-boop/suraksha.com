import { useState, useEffect } from 'react';
import { Plus, Trash2, Mail, Phone, User } from 'lucide-react';
import { auth } from '../firebase';
import { 
  addTrustedContact, 
  getTrustedContacts, 
  deleteTrustedContact 
} from '../services/mongoService';

export default function TrustedContactsManager() {
  const [contacts, setContacts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    relationship: 'Family'
  });

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const user = auth.currentUser;
    if (!user) return;

    setLoading(true);
    const result = await getTrustedContacts(user.uid);
    if (result.success) {
      setContacts(result.contacts);
    }
    setLoading(false);
  };

  const handleAddContact = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      alert('Please sign in to add contacts');
      return;
    }

    if (!formData.name || !formData.email) {
      alert('Name and email are required');
      return;
    }

    setLoading(true);
    const result = await addTrustedContact(user.uid, formData);
    
    if (result.success) {
      setFormData({ name: '', email: '', phone: '', relationship: 'Family' });
      setShowAddForm(false);
      loadContacts();
    } else {
      alert('Failed to add contact: ' + result.error);
    }
    setLoading(false);
  };

  const handleDeleteContact = async (contactId) => {
    if (!confirm('Are you sure you want to remove this contact?')) return;

    setLoading(true);
    const result = await deleteTrustedContact(contactId);
    
    if (result.success) {
      loadContacts();
    } else {
      alert('Failed to delete contact: ' + result.error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-trust-teal">Trusted Contacts</h2>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 bg-trust-teal text-space-indigo px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
        >
          <Plus size={20} />
          Add Contact
        </button>
      </div>

      {showAddForm && (
        <form onSubmit={handleAddContact} className="bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">Add New Contact</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-teal"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-teal"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-teal"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Relationship</label>
              <select
                value={formData.relationship}
                onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-teal"
              >
                <option value="Family">Family</option>
                <option value="Friend">Friend</option>
                <option value="Emergency">Emergency Contact</option>
                <option value="Colleague">Colleague</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-trust-teal text-space-indigo px-6 py-2 rounded-lg hover:bg-opacity-90 transition disabled:opacity-50"
            >
              {loading ? 'Adding...' : 'Add Contact'}
            </button>
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="bg-gray-700 px-6 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loading && contacts.length === 0 ? (
          <p className="text-gray-400">Loading contacts...</p>
        ) : contacts.length === 0 ? (
          <p className="text-gray-400">No trusted contacts added yet</p>
        ) : (
          contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <User size={20} className="text-trust-teal" />
                  <h3 className="font-semibold text-lg">{contact.name}</h3>
                </div>
                <button
                  onClick={() => handleDeleteContact(contact.id)}
                  className="text-urgent-coral hover:text-red-400 transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail size={16} />
                  <span>{contact.email}</span>
                </div>
                {contact.phone && (
                  <div className="flex items-center gap-2 text-gray-300">
                    <Phone size={16} />
                    <span>{contact.phone}</span>
                  </div>
                )}
                <div className="inline-block bg-trust-teal bg-opacity-20 text-trust-teal px-3 py-1 rounded-full text-xs mt-2">
                  {contact.relationship}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
