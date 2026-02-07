import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import HeroSection from './components/HeroSection';
import SOSButton from './components/SOSButton';
import VolunteerPortal from './components/VolunteerPortal';
import MapComponent from './components/MapComponent';
import FutureSafety from './components/FutureSafety';
import TrustedContactsManager from './components/TrustedContactsManager';
import AuthWrapper from './components/AuthWrapper';
import AIChatbot from './components/AIChatbot';
import { Menu, X, Shield } from 'lucide-react';

function App() {
  const [trackingLocation, setTrackingLocation] = useState(null);
  const [showContacts, setShowContacts] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <AuthWrapper>
      <div className="min-h-screen bg-space-indigo text-white">
        <CustomCursor />
        
        {/* Responsive Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-space-indigo/95 backdrop-blur-md border-b border-trust-teal/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 md:h-20">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-trust-teal" />
                <h1 className="text-xl md:text-2xl font-display font-bold text-trust-teal">
                  Suraksha
                </h1>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-4">
                <button
                  onClick={() => setShowContacts(!showContacts)}
                  className="px-4 py-2 bg-trust-teal text-space-indigo rounded-lg hover:bg-opacity-90 transition font-semibold"
                >
                  {showContacts ? 'Home' : 'Manage Contacts'}
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-trust-teal hover:bg-trust-teal/10 rounded-lg transition"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-trust-teal/20">
                <button
                  onClick={() => {
                    setShowContacts(!showContacts);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-trust-teal text-space-indigo rounded-lg hover:bg-opacity-90 transition font-semibold"
                >
                  {showContacts ? 'Home' : 'Manage Contacts'}
                </button>
              </div>
            )}
          </div>
        </nav>

        <div className="pt-16 md:pt-20">
          {showContacts ? (
            <TrustedContactsManager />
          ) : (
            <>
              <HeroSection />
              <SOSButton />
              {trackingLocation && <MapComponent location={trackingLocation} />}
              <VolunteerPortal />
              <FutureSafety />
            </>
          )}
        </div>
        
        <footer className="py-8 md:py-12 text-center text-gray-500 text-xs md:text-sm border-t border-trust-teal/20 px-4">
          <p>© 2026 Suraksha.com • Women's Safety Initiative</p>
          <p className="mt-2">Built with ❤️ for a safer India</p>
        </footer>

        {/* AI Chatbot */}
        <AIChatbot />
      </div>
    </AuthWrapper>
  );
}

export default App;
