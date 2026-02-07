import { useState, useEffect } from 'react';
import { MapPin, Radio } from 'lucide-react';

const MapComponent = ({ location }) => {
  const [accuracy, setAccuracy] = useState(50);
  const [signalStrength, setSignalStrength] = useState('strong');

  useEffect(() => {
    // Simulate signal strength changes
    const interval = setInterval(() => {
      const newAccuracy = Math.random() * 100 + 20;
      setAccuracy(newAccuracy);
      setSignalStrength(newAccuracy < 50 ? 'strong' : newAccuracy < 80 ? 'medium' : 'weak');
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!location) return null;

  const ellipseSize = accuracy * 2;
  const signalColor = signalStrength === 'strong' ? 'bg-green-500' : 
                      signalStrength === 'medium' ? 'bg-yellow-500' : 'bg-red-500';

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Live <span className="text-urgent-coral">Tracking</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Radio className={`w-5 h-5 ${signalColor.replace('bg-', 'text-')}`} />
            <span>Signal: {signalStrength.toUpperCase()} • Accuracy: ±{accuracy.toFixed(0)}m</span>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-space-indigo to-black border-2 border-trust-teal/30 rounded-3xl overflow-hidden aspect-video">
          {/* Grid background */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-12 grid-rows-8 h-full">
              {[...Array(96)].map((_, i) => (
                <div key={i} className="border border-trust-teal/20" />
              ))}
            </div>
          </div>

          {/* Center point */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Uncertainty ellipse */}
            <div
              className={`absolute ${signalColor} opacity-20 rounded-full gpu-accelerated transition-all duration-1000`}
              style={{
                width: `${ellipseSize}px`,
                height: `${ellipseSize * 0.7}px`,
                animation: 'pulse 2s infinite'
              }}
            />

            {/* Location pin */}
            <div className="relative z-10">
              <MapPin className="w-12 h-12 text-urgent-coral drop-shadow-2xl animate-bounce" fill="currentColor" />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 px-3 py-1 rounded-full text-xs">
                {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
              </div>
            </div>

            {/* Ripple effect */}
            <div className="absolute w-32 h-32 border-2 border-urgent-coral rounded-full animate-ping opacity-30" />
          </div>

          {/* Volunteer indicators */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span>15 volunteers (50m)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
              <span>20 volunteers (100m)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
              <span>15 volunteers (500m)</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">Updates every 5-10 seconds • Auto-expires when safe</p>
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors">
            Kill Switch (Trusted Contact Only)
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
