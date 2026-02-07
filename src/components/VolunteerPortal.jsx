import { useState } from 'react';
import { UserPlus, Heart, MapPin, Phone, Mail } from 'lucide-react';
import { gsap } from 'gsap';

const VolunteerPortal = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({ email: '', phone: '', location: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.phone && formData.location) {
      setIsRegistered(true);
      gsap.fromTo('.dashboard',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
      );
    }
  };

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => setFormData({ ...formData, location: true }),
        () => alert('Location access required to become a volunteer')
      );
    }
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 text-urgent-coral mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Become a <span className="text-trust-teal">Guardian</span>
          </h2>
          <p className="text-gray-400 text-lg">Join our network of volunteers ready to help in emergencies</p>
        </div>

        {!isRegistered ? (
          <div className="bg-gradient-to-br from-trust-teal/10 to-urgent-coral/10 backdrop-blur-xl border border-trust-teal/30 rounded-3xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-trust-teal/30 rounded-lg text-white focus:outline-none focus:border-trust-teal transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                  <Phone className="w-4 h-4" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-trust-teal/30 rounded-lg text-white focus:outline-none focus:border-trust-teal transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>

              <div>
                <button
                  type="button"
                  onClick={requestLocation}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    formData.location
                      ? 'bg-green-500/20 border-2 border-green-500 text-green-400'
                      : 'bg-urgent-coral/20 border-2 border-urgent-coral text-urgent-coral hover:bg-urgent-coral/30'
                  }`}
                >
                  <MapPin className="w-5 h-5 inline mr-2" />
                  {formData.location ? '✓ Location Access Granted' : 'Grant Location Access'}
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-trust-teal text-space-indigo font-bold text-lg rounded-lg hover:bg-trust-teal/90 transition-all gpu-accelerated hover:scale-105"
              >
                <UserPlus className="w-5 h-5 inline mr-2" />
                Register as Volunteer
              </button>
            </form>
          </div>
        ) : (
          <div className="dashboard bg-gradient-to-br from-green-500/10 to-trust-teal/10 backdrop-blur-xl border border-green-500/30 rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-green-400 animate-pulse" />
              </div>
              <h3 className="text-3xl font-display font-bold text-green-400 mb-4">
                You're Now a Guardian
              </h3>
              <p className="text-gray-300 mb-8">
                Thank you for joining our safety network. You'll be notified when someone nearby needs help.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-3xl font-bold text-trust-teal mb-1">0</div>
                  <div className="text-gray-400">Active Alerts</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-400 mb-1">Ready</div>
                  <div className="text-gray-400">Your Status</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-3xl font-bold text-urgent-coral mb-1">500m</div>
                  <div className="text-gray-400">Alert Radius</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VolunteerPortal;
