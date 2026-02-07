// Beautiful, trustworthy female character SVG illustrations

export const WomanWithPhone = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    {/* Background circle */}
    <circle cx="200" cy="200" r="180" fill="#00E5FF" opacity="0.1"/>
    
    {/* Body */}
    <ellipse cx="200" cy="280" rx="60" ry="80" fill="#FF6B9D"/>
    
    {/* Arms */}
    <path d="M 140 240 Q 120 260 130 290" stroke="#FFB6C1" strokeWidth="20" fill="none" strokeLinecap="round"/>
    <path d="M 260 240 Q 280 260 270 290" stroke="#FFB6C1" strokeWidth="20" fill="none" strokeLinecap="round"/>
    
    {/* Phone in hand */}
    <rect x="250" y="270" width="40" height="60" rx="8" fill="#00E5FF"/>
    <rect x="255" y="275" width="30" height="45" rx="4" fill="#0B0E14"/>
    <circle cx="270" cy="325" r="3" fill="#00E5FF"/>
    
    {/* Neck */}
    <rect x="185" y="180" width="30" height="25" fill="#FFB6C1"/>
    
    {/* Head */}
    <circle cx="200" cy="150" r="50" fill="#FFD4A3"/>
    
    {/* Hair */}
    <path d="M 150 130 Q 150 80 200 80 Q 250 80 250 130 Q 250 160 240 170 L 160 170 Q 150 160 150 130" fill="#2C1810"/>
    <ellipse cx="200" cy="85" rx="55" ry="35" fill="#2C1810"/>
    
    {/* Face features */}
    <circle cx="180" cy="145" r="5" fill="#2C1810"/>
    <circle cx="220" cy="145" r="5" fill="#2C1810"/>
    <path d="M 190 165 Q 200 170 210 165" stroke="#FF6B9D" strokeWidth="2" fill="none" strokeLinecap="round"/>
    
    {/* Blush */}
    <circle cx="170" cy="155" r="8" fill="#FF6B9D" opacity="0.3"/>
    <circle cx="230" cy="155" r="8" fill="#FF6B9D" opacity="0.3"/>
    
    {/* Sparkles */}
    <path d="M 100 100 L 105 105 L 100 110 L 95 105 Z" fill="#00E5FF"/>
    <path d="M 300 120 L 305 125 L 300 130 L 295 125 Z" fill="#00E5FF"/>
    <path d="M 320 200 L 323 203 L 320 206 L 317 203 Z" fill="#FFB6C1"/>
  </svg>
);

export const WomanWalking = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    {/* Background */}
    <circle cx="200" cy="200" r="180" fill="#FFB6C1" opacity="0.1"/>
    
    {/* Body */}
    <ellipse cx="200" cy="260" rx="50" ry="70" fill="#9B59B6"/>
    
    {/* Legs */}
    <path d="M 180 310 L 170 380" stroke="#FFB6C1" strokeWidth="18" strokeLinecap="round"/>
    <path d="M 220 310 L 240 380" stroke="#FFB6C1" strokeWidth="18" strokeLinecap="round"/>
    
    {/* Shoes */}
    <ellipse cx="170" cy="385" rx="15" ry="8" fill="#2C1810"/>
    <ellipse cx="240" cy="385" rx="15" ry="8" fill="#2C1810"/>
    
    {/* Arms */}
    <path d="M 160 230 Q 140 250 145 280" stroke="#FFB6C1" strokeWidth="16" fill="none" strokeLinecap="round"/>
    <path d="M 240 230 Q 260 250 255 280" stroke="#FFB6C1" strokeWidth="16" fill="none" strokeLinecap="round"/>
    
    {/* Bag */}
    <ellipse cx="250" cy="290" rx="20" ry="25" fill="#00E5FF"/>
    <path d="M 240 270 Q 250 265 260 270" stroke="#00E5FF" strokeWidth="3" fill="none"/>
    
    {/* Neck */}
    <rect x="185" y="170" width="30" height="20" fill="#FFB6C1"/>
    
    {/* Head */}
    <circle cx="200" cy="140" r="45" fill="#FFD4A3"/>
    
    {/* Hair - ponytail */}
    <ellipse cx="200" cy="100" rx="50" ry="30" fill="#8B4513"/>
    <path d="M 155 120 Q 155 80 200 75 Q 245 80 245 120 L 240 150 Q 200 160 160 150 Z" fill="#8B4513"/>
    <ellipse cx="240" cy="120" rx="15" ry="35" fill="#8B4513"/>
    
    {/* Face */}
    <circle cx="185" cy="135" r="4" fill="#2C1810"/>
    <circle cx="215" cy="135" r="4" fill="#2C1810"/>
    <path d="M 190 150 Q 200 155 210 150" stroke="#FF6B9D" strokeWidth="2" fill="none" strokeLinecap="round"/>
    
    {/* Blush */}
    <circle cx="175" cy="145" r="7" fill="#FF6B9D" opacity="0.3"/>
    <circle cx="225" cy="145" r="7" fill="#FF6B9D" opacity="0.3"/>
    
    {/* Movement lines */}
    <path d="M 120 200 L 140 200" stroke="#00E5FF" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
    <path d="M 110 220 L 135 220" stroke="#00E5FF" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

export const WomanWithShield = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    {/* Background */}
    <circle cx="200" cy="200" r="180" fill="#00E5FF" opacity="0.15"/>
    
    {/* Shield */}
    <path d="M 200 100 L 280 130 L 280 220 Q 280 280 200 320 Q 120 280 120 220 L 120 130 Z" fill="#00E5FF" opacity="0.3"/>
    <path d="M 200 120 L 260 145 L 260 215 Q 260 260 200 290 Q 140 260 140 215 L 140 145 Z" fill="#00E5FF"/>
    
    {/* Checkmark on shield */}
    <path d="M 175 200 L 195 220 L 235 170" stroke="#0B0E14" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Woman behind shield */}
    {/* Body */}
    <ellipse cx="200" cy="280" rx="45" ry="60" fill="#E91E63"/>
    
    {/* Arms */}
    <path d="M 165 250 Q 140 260 135 285" stroke="#FFB6C1" strokeWidth="14" fill="none" strokeLinecap="round"/>
    <path d="M 235 250 Q 260 260 265 285" stroke="#FFB6C1" strokeWidth="14" fill="none" strokeLinecap="round"/>
    
    {/* Neck */}
    <rect x="188" y="200" width="24" height="20" fill="#FFB6C1"/>
    
    {/* Head */}
    <circle cx="200" cy="180" r="40" fill="#FFD4A3"/>
    
    {/* Hair */}
    <path d="M 160 165 Q 160 125 200 120 Q 240 125 240 165 Q 240 185 230 195 L 170 195 Q 160 185 160 165" fill="#4A148C"/>
    <ellipse cx="200" cy="125" rx="45" ry="25" fill="#4A148C"/>
    
    {/* Face */}
    <circle cx="185" cy="175" r="4" fill="#2C1810"/>
    <circle cx="215" cy="175" r="4" fill="#2C1810"/>
    <path d="M 190 188 Q 200 192 210 188" stroke="#FF6B9D" strokeWidth="2" fill="none" strokeLinecap="round"/>
    
    {/* Confident expression */}
    <path d="M 178 170 Q 182 168 186 170" stroke="#2C1810" strokeWidth="1.5" fill="none"/>
    <path d="M 214 170 Q 218 168 222 170" stroke="#2C1810" strokeWidth="1.5" fill="none"/>
    
    {/* Sparkles around */}
    <circle cx="120" cy="150" r="4" fill="#FFD700"/>
    <circle cx="280" cy="180" r="4" fill="#FFD700"/>
    <circle cx="250" cy="100" r="3" fill="#FFD700"/>
  </svg>
);

export const WomanMeditating = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    {/* Background glow */}
    <circle cx="200" cy="200" r="150" fill="#9C27B0" opacity="0.1"/>
    <circle cx="200" cy="200" r="120" fill="#9C27B0" opacity="0.1"/>
    
    {/* Sitting pose - legs */}
    <ellipse cx="160" cy="280" rx="40" ry="20" fill="#00BCD4"/>
    <ellipse cx="240" cy="280" rx="40" ry="20" fill="#00BCD4"/>
    
    {/* Body */}
    <ellipse cx="200" cy="230" rx="55" ry="65" fill="#00BCD4"/>
    
    {/* Arms in meditation pose */}
    <ellipse cx="145" cy="240" rx="15" ry="40" fill="#FFB6C1" transform="rotate(-30 145 240)"/>
    <ellipse cx="255" cy="240" rx="15" ry="40" fill="#FFB6C1" transform="rotate(30 255 240)"/>
    
    {/* Hands */}
    <circle cx="140" cy="270" r="12" fill="#FFD4A3"/>
    <circle cx="260" cy="270" r="12" fill="#FFD4A3"/>
    
    {/* Neck */}
    <rect x="185" y="180" width="30" height="20" fill="#FFB6C1"/>
    
    {/* Head */}
    <circle cx="200" cy="160" r="45" fill="#FFD4A3"/>
    
    {/* Hair - bun */}
    <circle cx="200" cy="120" r="25" fill="#6D4C41"/>
    <path d="M 155 145 Q 155 110 200 105 Q 245 110 245 145 Q 245 165 235 175 L 165 175 Q 155 165 155 145" fill="#6D4C41"/>
    
    {/* Peaceful face - closed eyes */}
    <path d="M 175 155 Q 180 152 185 155" stroke="#2C1810" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M 215 155 Q 220 152 225 155" stroke="#2C1810" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M 190 172 Q 200 176 210 172" stroke="#FF6B9D" strokeWidth="2" fill="none" strokeLinecap="round"/>
    
    {/* Blush */}
    <circle cx="170" cy="165" r="8" fill="#FF6B9D" opacity="0.3"/>
    <circle cx="230" cy="165" r="8" fill="#FF6B9D" opacity="0.3"/>
    
    {/* Peace symbols floating */}
    <text x="120" y="130" fontSize="30" fill="#9C27B0" opacity="0.5">✨</text>
    <text x="260" y="150" fontSize="30" fill="#9C27B0" opacity="0.5">✨</text>
    <text x="200" y="90" fontSize="25" fill="#00E5FF" opacity="0.6">☮</text>
  </svg>
);

export const WomanWithHeart = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    {/* Background */}
    <circle cx="200" cy="200" r="180" fill="#E91E63" opacity="0.1"/>
    
    {/* Large heart */}
    <path d="M 200 280 Q 160 240 160 210 Q 160 180 185 180 Q 200 180 200 195 Q 200 180 215 180 Q 240 180 240 210 Q 240 240 200 280 Z" fill="#FF6B9D" opacity="0.3"/>
    
    {/* Body */}
    <ellipse cx="200" cy="300" rx="50" ry="65" fill="#FF4081"/>
    
    {/* Arms holding heart */}
    <path d="M 160 260 Q 140 270 145 295" stroke="#FFB6C1" strokeWidth="16" fill="none" strokeLinecap="round"/>
    <path d="M 240 260 Q 260 270 255 295" stroke="#FFB6C1" strokeWidth="16" fill="none" strokeLinecap="round"/>
    
    {/* Hands */}
    <circle cx="150" cy="240" r="14" fill="#FFD4A3"/>
    <circle cx="250" cy="240" r="14" fill="#FFD4A3"/>
    
    {/* Neck */}
    <rect x="185" y="200" width="30" height="22" fill="#FFB6C1"/>
    
    {/* Head */}
    <circle cx="200" cy="170" r="48" fill="#FFD4A3"/>
    
    {/* Hair - wavy */}
    <path d="M 152 155 Q 152 110 200 105 Q 248 110 248 155 Q 248 180 238 190 L 162 190 Q 152 180 152 155" fill="#C2185B"/>
    <ellipse cx="200" cy="110" rx="50" ry="28" fill="#C2185B"/>
    <path d="M 150 140 Q 145 150 148 160" stroke="#C2185B" strokeWidth="8" fill="none"/>
    <path d="M 250 140 Q 255 150 252 160" stroke="#C2185B" strokeWidth="8" fill="none"/>
    
    {/* Happy face */}
    <circle cx="182" cy="165" r="5" fill="#2C1810"/>
    <circle cx="218" cy="165" r="5" fill="#2C1810"/>
    <path d="M 185 180 Q 200 190 215 180" stroke="#FF6B9D" strokeWidth="3" fill="none" strokeLinecap="round"/>
    
    {/* Blush */}
    <circle cx="168" cy="175" r="10" fill="#FF6B9D" opacity="0.4"/>
    <circle cx="232" cy="175" r="10" fill="#FF6B9D" opacity="0.4"/>
    
    {/* Small hearts floating */}
    <path d="M 100 120 Q 95 115 95 110 Q 95 105 98 105 Q 100 105 100 108 Q 100 105 102 105 Q 105 105 105 110 Q 105 115 100 120 Z" fill="#FF6B9D"/>
    <path d="M 300 160 Q 295 155 295 150 Q 295 145 298 145 Q 300 145 300 148 Q 300 145 302 145 Q 305 145 305 150 Q 305 155 300 160 Z" fill="#FF6B9D"/>
    <path d="M 320 240 Q 317 237 317 234 Q 317 231 319 231 Q 320 231 320 233 Q 320 231 321 231 Q 323 231 323 234 Q 323 237 320 240 Z" fill="#FF6B9D"/>
  </svg>
);
