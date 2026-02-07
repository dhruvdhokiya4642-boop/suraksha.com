import { useState, useRef } from 'react';
import { Shield } from 'lucide-react';
import { gsap } from 'gsap';
import SOSModal from './SOSModal';
import { auth } from '../firebase';
import { getTrustedContacts, createSOSAlert } from '../services/mongoService';
import { sendBulkSOSEmails } from '../services/emailService';

const SOSButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const buttonRef = useRef(null);

  const triggerSOS = async () => {
    const user = auth.currentUser;
    if (!user) {
      alert('Please sign in to use SOS feature');
      return;
    }

    setIsSending(true);

    try {
      // Get user's location
      const location = await new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          resolve({ latitude: 0, longitude: 0, address: 'Location not available' });
          return;
        }

        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              address: 'Location captured'
            });
          },
          (error) => {
            console.error('Location error:', error);
            resolve({ latitude: 0, longitude: 0, address: 'Location not available' });
          }
        );
      });

      // Get trusted contacts
      const contactsResult = await getTrustedContacts(user.uid);
      
      if (!contactsResult.success || contactsResult.contacts.length === 0) {
        alert('No trusted contacts found. Please add contacts first.');
        setIsSending(false);
        return;
      }

      // Send emails to all trusted contacts
      const emailResult = await sendBulkSOSEmails(
        contactsResult.contacts,
        {
          displayName: user.displayName || user.email,
          email: user.email
        },
        location
      );

      // Save SOS alert to Firestore
      await createSOSAlert(user.uid, location, contactsResult.contacts);

      alert(`SOS Alert sent to ${emailResult.successful} contacts!`);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error triggering SOS:', error);
      alert('Failed to send SOS alert. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const handleClick = (e) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'absolute rounded-full bg-urgent-coral opacity-50';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = '0px';
    ripple.style.height = '0px';
    button.appendChild(ripple);

    gsap.to(ripple, {
      width: '600px',
      height: '600px',
      x: '-300px',
      y: '-300px',
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => ripple.remove()
    });

    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex justify-center py-20">
        <button
          ref={buttonRef}
          onClick={handleClick}
          className="relative w-64 h-64 rounded-full bg-gradient-to-br from-urgent-coral to-red-700 shadow-2xl overflow-hidden group gpu-accelerated hover:scale-110 transition-transform duration-300"
        >
          <div className="absolute inset-0 bg-urgent-coral opacity-0 group-hover:opacity-20 animate-pulse" />
          <div className="absolute inset-4 rounded-full border-4 border-white/30" />
          <div className="absolute inset-8 rounded-full border-2 border-white/20" />
          
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <Shield className="w-24 h-24 text-white mb-4" strokeWidth={2} />
            <span className="text-white text-2xl font-bold font-display">SOS</span>
            <span className="text-white/80 text-sm mt-2">Emergency</span>
          </div>
        </button>
      </div>

      {isModalOpen && (
        <SOSModal 
          onClose={() => setIsModalOpen(false)} 
          onConfirm={triggerSOS}
          isSending={isSending}
        />
      )}
    </>
  );
};

export default SOSButton;
