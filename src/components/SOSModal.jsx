import { useState, useEffect } from 'react';
import { X, Mail, MapPin, Shield, AlertCircle } from 'lucide-react';
import { gsap } from 'gsap';

const SOSModal = ({ onClose, onConfirm, isSending }) => {
  const [isConfirming, setIsConfirming] = useState(false);

  useEffect(() => {
    gsap.fromTo('.modal-content',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }
    );
  }, []);

  const handleConfirm = async () => {
    setIsConfirming(true);
    await onConfirm();
    setIsConfirming(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="modal-content bg-space-indigo border-2 border-urgent-coral rounded-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-8 h-8 text-urgent-coral" />
            <h2 className="text-2xl font-display font-bold">Confirm SOS Alert</h2>
          </div>
          
          <div className="bg-urgent-coral/10 border border-urgent-coral/30 rounded-lg p-4">
            <p className="text-gray-300 mb-2">This will:</p>
            <ul className="text-sm text-gray-400 space-y-2 ml-4">
              <li>• Send emergency emails to all your trusted contacts</li>
              <li>• Share your current location</li>
              <li>• Log the alert in your history</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleConfirm}
              disabled={isSending || isConfirming}
              className="flex-1 py-3 bg-urgent-coral text-white font-bold rounded-lg hover:bg-urgent-coral/90 transition-colors gpu-accelerated disabled:opacity-50"
            >
              {isSending || isConfirming ? 'Sending...' : 'Send SOS Alert'}
            </button>
            <button
              onClick={onClose}
              disabled={isSending || isConfirming}
              className="flex-1 py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOSModal;
