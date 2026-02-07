import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const illustrationRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const tagline = taglineRef.current;
    const illustration = illustrationRef.current;

    // Animate title
    gsap.fromTo(title,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
    );

    // Animate tagline
    gsap.fromTo(tagline, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power2.out' }
    );

    // Animate illustration
    gsap.fromTo(illustration,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 md:py-0 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 md:w-48 md:h-48 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M 20 100 Q 50 20 100 20 Q 150 20 180 100 L 160 120 Q 140 60 100 60 Q 60 60 40 120 Z" fill="#FF6B9D"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-20 w-24 h-24 md:w-40 md:h-40 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M 20 100 Q 50 20 100 20 Q 150 20 180 100 L 160 120 Q 140 60 100 60 Q 60 60 40 120 Z" fill="#FFD700"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Illustration */}
          <div ref={illustrationRef} className="order-2 md:order-1 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Yellow background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-3xl transform -rotate-3"></div>
              
              {/* Main illustration container */}
              <div className="relative bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-3xl p-8 md:p-12 border-4 border-black">
                <svg viewBox="0 0 400 500" className="w-full h-auto">
                  {/* Decorative leaves */}
                  <path d="M 50 400 Q 30 350 50 300 L 70 320 Q 60 360 70 400 Z" fill="#FF6B9D" opacity="0.8"/>
                  <path d="M 350 100 Q 370 50 350 0 L 330 20 Q 340 60 330 100 Z" fill="#FF6B9D" opacity="0.8"/>
                  <path d="M 370 80 Q 390 30 370 -20 L 350 0 Q 360 40 350 80 Z" fill="#FFD700" opacity="0.8"/>
                  
                  {/* Woman's body - strong pose */}
                  <ellipse cx="200" cy="380" rx="70" ry="100" fill="#C41E3A"/>
                  <ellipse cx="200" cy="340" rx="75" ry="80" fill="#FF4D6D"/>
                  <ellipse cx="200" cy="300" rx="70" ry="60" fill="#FF6B9D"/>
                  
                  {/* Arms - flexing pose */}
                  <ellipse cx="130" cy="280" rx="25" ry="60" fill="#FFB6C1" transform="rotate(-45 130 280)"/>
                  <ellipse cx="270" cy="280" rx="25" ry="60" fill="#FFB6C1" transform="rotate(45 270 280)"/>
                  
                  {/* Bicep/fist */}
                  <circle cx="110" cy="240" r="30" fill="#FFD4A3"/>
                  <circle cx="290" cy="240" r="30" fill="#FFD4A3"/>
                  
                  {/* Neck */}
                  <rect x="175" y="200" width="50" height="35" fill="#FFB6C1" rx="10"/>
                  
                  {/* Head */}
                  <ellipse cx="200" cy="170" rx="60" ry="70" fill="#FFD4A3"/>
                  
                  {/* Hair - flowing black hair */}
                  <path d="M 140 150 Q 130 100 150 80 Q 170 60 200 60 Q 230 60 250 80 Q 270 100 260 150 Q 260 180 250 200 L 150 200 Q 140 180 140 150" fill="#2C1810"/>
                  <ellipse cx="200" cy="80" rx="65" ry="40" fill="#2C1810"/>
                  
                  {/* Hair flowing on sides */}
                  <path d="M 140 140 Q 120 160 130 200 L 145 195 Q 140 165 145 140 Z" fill="#2C1810"/>
                  <path d="M 260 140 Q 280 160 270 200 L 255 195 Q 260 165 255 140 Z" fill="#2C1810"/>
                  
                  {/* Headband */}
                  <ellipse cx="200" cy="130" rx="62" ry="15" fill="#FFD700"/>
                  
                  {/* Face features */}
                  <ellipse cx="180" cy="165" rx="8" ry="12" fill="#2C1810"/>
                  <ellipse cx="220" cy="165" rx="8" ry="12" fill="#2C1810"/>
                  
                  {/* Confident smile */}
                  <path d="M 180 185 Q 200 195 220 185" stroke="#FF6B9D" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  
                  {/* Blush */}
                  <circle cx="165" cy="175" r="12" fill="#FF6B9D" opacity="0.4"/>
                  <circle cx="235" cy="175" r="12" fill="#FF6B9D" opacity="0.4"/>
                  
                  {/* Earrings */}
                  <circle cx="145" cy="180" r="8" fill="#FFD700"/>
                  <circle cx="255" cy="180" r="8" fill="#FFD700"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - Text */}
          <div ref={titleRef} className="order-1 md:order-2 text-center md:text-left">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight">
              <span className="text-white">WOMEN</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600">
                SAFETY
              </span>
            </h1>
            
            <div ref={taglineRef} className="mt-8 space-y-4">
              <p className="text-lg md:text-xl text-gray-300 font-light">
                Empowering women with instant emergency response
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                <div className="flex items-center gap-2 bg-trust-teal/10 px-4 py-2 rounded-full border border-trust-teal/30">
                  <span className="text-trust-teal text-xl">✓</span>
                  <span className="text-sm text-gray-300">24/7 Protection</span>
                </div>
                <div className="flex items-center gap-2 bg-pink-500/10 px-4 py-2 rounded-full border border-pink-500/30">
                  <span className="text-pink-400 text-xl">✓</span>
                  <span className="text-sm text-gray-300">Instant Alerts</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/30">
                  <span className="text-purple-400 text-xl">✓</span>
                  <span className="text-sm text-gray-300">Trusted Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
