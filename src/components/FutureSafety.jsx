import { useState } from 'react';
import { Shield, Plus, Home, Briefcase, Trash2, Heart, Users } from 'lucide-react';

const FutureSafety = () => {
  const [contacts, setContacts] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showRouteForm, setShowRouteForm] = useState(false);

  const addContact = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setContacts([...contacts, {
      id: Date.now(),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      relation: formData.get('relation')
    }]);
    setShowContactForm(false);
    e.target.reset();
  };

  const addRoute = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setRoutes([...routes, {
      id: Date.now(),
      name: formData.get('routeName'),
      type: formData.get('routeType'),
      address: formData.get('address')
    }]);
    setShowRouteForm(false);
    e.target.reset();
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-space-indigo to-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Heart className="w-12 h-12 text-trust-teal animate-pulse" />
            <Shield className="w-16 h-16 text-trust-teal" />
            <Users className="w-12 h-12 text-trust-teal animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Guard My <span className="text-trust-teal">Future</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pre-register emergency contacts and frequent routes for faster response. 
            <span className="text-trust-teal"> Your safety network, always ready.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Emergency Contacts */}
          <div className="bg-gradient-to-br from-trust-teal/10 to-transparent border border-trust-teal/30 rounded-2xl p-6 hover:border-trust-teal/50 transition-all duration-300">
            <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Emergency Contacts
            </h3>
            
            <div className="space-y-3 mb-4">
              {contacts.map(contact => (
                <div key={contact.id} className="bg-black/40 rounded-lg p-4 flex justify-between items-start hover:bg-black/60 transition-colors">
                  <div>
                    <div className="font-semibold">{contact.name}</div>
                    <div className="text-sm text-gray-400">{contact.relation}</div>
                    <div className="text-xs text-gray-500 mt-1">{contact.email} • {contact.phone}</div>
                  </div>
                  <button
                    onClick={() => setContacts(contacts.filter(c => c.id !== contact.id))}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {!showContactForm ? (
              <button
                onClick={() => setShowContactForm(true)}
                className="w-full py-3 border-2 border-dashed border-trust-teal/50 rounded-lg text-trust-teal hover:bg-trust-teal/10 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Contact
              </button>
            ) : (
              <form onSubmit={addContact} className="space-y-3">
                <input
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-3 py-2 bg-black/50 border border-trust-teal/30 rounded text-sm focus:outline-none focus:border-trust-teal"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-3 py-2 bg-black/50 border border-trust-teal/30 rounded text-sm focus:outline-none focus:border-trust-teal"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  required
                  className="w-full px-3 py-2 bg-black/50 border border-trust-teal/30 rounded text-sm focus:outline-none focus:border-trust-teal"
                />
                <select
                  name="relation"
                  required
                  className="w-full px-3 py-2 bg-black/50 border border-trust-teal/30 rounded text-sm focus:outline-none focus:border-trust-teal"
                >
                  <option value="">Select Relation</option>
                  <option value="Parent">Parent</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Friend">Friend</option>
                  <option value="Partner">Partner</option>
                </select>
                <div className="flex gap-2">
                  <button type="submit" className="flex-1 py-2 bg-trust-teal text-space-indigo font-semibold rounded">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 py-2 bg-gray-700 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Frequent Routes */}
          <div className="bg-gradient-to-br from-urgent-coral/10 to-transparent border border-urgent-coral/30 rounded-2xl p-6 hover:border-urgent-coral/50 transition-all duration-300">
            <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
              <Home className="w-6 h-6" />
              Frequent Routes
            </h3>
            
            <div className="space-y-3 mb-4">
              {routes.map(route => (
                <div key={route.id} className="bg-black/40 rounded-lg p-4 flex justify-between items-start hover:bg-black/60 transition-colors">
                  <div>
                    <div className="font-semibold flex items-center gap-2">
                      {route.type === 'home' ? <Home className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
                      {route.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{route.address}</div>
                  </div>
                  <button
                    onClick={() => setRoutes(routes.filter(r => r.id !== route.id))}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {!showRouteForm ? (
              <button
                onClick={() => setShowRouteForm(true)}
                className="w-full py-3 border-2 border-dashed border-urgent-coral/50 rounded-lg text-urgent-coral hover:bg-urgent-coral/10 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Route
              </button>
            ) : (
              <form onSubmit={addRoute} className="space-y-3">
                <input
                  name="routeName"
                  placeholder="Route Name (e.g., Home, Office)"
                  required
                  className="w-full px-3 py-2 bg-black/50 border border-urgent-coral/30 rounded text-sm focus:outline-none focus:border-urgent-coral"
                />
                <select
                  name="routeType"
                  required
                  className="w-full px-3 py-2 bg-black/50 border border-urgent-coral/30 rounded text-sm focus:outline-none focus:border-urgent-coral"
                >
                  <option value="">Select Type</option>
                  <option value="home">Home</option>
                  <option value="work">Work</option>
                </select>
                <textarea
                  name="address"
                  placeholder="Full Address"
                  required
                  rows="2"
                  className="w-full px-3 py-2 bg-black/50 border border-urgent-coral/30 rounded text-sm focus:outline-none focus:border-urgent-coral"
                />
                <div className="flex gap-2">
                  <button type="submit" className="flex-1 py-2 bg-urgent-coral text-white font-semibold rounded">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowRouteForm(false)}
                    className="flex-1 py-2 bg-gray-700 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureSafety;
