// Suraksha Configuration
export const config = {
  // Alert Radius Tiers (in meters)
  alertRadius: {
    tier1: { distance: 0, volunteers: 0, label: 'Police & Parents' },
    tier2: { distance: 50, volunteers: 15, label: 'Immediate Area' },
    tier3: { distance: 100, volunteers: 20, label: 'Near Vicinity' },
    tier4: { distance: 500, volunteers: 15, label: 'Extended Area' }
  },

  // Map Update Frequency (milliseconds)
  mapUpdateInterval: 5000, // 5 seconds

  // Location Tracking Settings
  locationSettings: {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  },

  // Mock Police Stations (Replace with real API in production)
  mockPoliceStations: [
    { name: 'Central Police Station', lat: 28.6139, lng: 77.2090 },
    { name: 'North District Station', lat: 28.7041, lng: 77.1025 },
    { name: 'South City Station', lat: 28.5355, lng: 77.3910 },
    { name: 'East Zone Station', lat: 28.6692, lng: 77.4538 },
    { name: 'West Area Station', lat: 28.6517, lng: 77.1389 }
  ],

  // Animation Durations (seconds)
  animations: {
    cursorHeartbeat: 0.8,
    rippleExpansion: 1.0,
    modalEntry: 0.4,
    fadeIn: 1.5
  },

  // Theme Colors
  colors: {
    spaceIndigo: '#0B0E14',
    trustTeal: '#00E5FF',
    urgentCoral: '#FF4D4D'
  },

  // Contact Types
  contactRelations: ['Parent', 'Sibling', 'Friend', 'Partner', 'Spouse', 'Colleague'],

  // Route Types
  routeTypes: [
    { value: 'home', label: 'Home', icon: 'Home' },
    { value: 'work', label: 'Work', icon: 'Briefcase' },
    { value: 'school', label: 'School', icon: 'GraduationCap' },
    { value: 'gym', label: 'Gym', icon: 'Dumbbell' }
  ]
};

export default config;
