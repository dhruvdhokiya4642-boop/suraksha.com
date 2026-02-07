# 🛡️ Suraksha - Women's Safety Platform

<div align="center">

![Suraksha Logo](https://img.shields.io/badge/Suraksha-Women's%20Safety-FF6B9D?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-00E5FF?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Empowering women with instant emergency response and AI-powered safety guidance**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [System Flow](#-system-flow) • [API Documentation](#-api-documentation)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [System Flow](#-system-flow)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 About

**Suraksha** (Sanskrit for "Protection") is a comprehensive women's safety platform designed to provide immediate emergency response, AI-powered safety guidance, and a trusted network of contacts. Built with modern web technologies, Suraksha ensures women feel safe and supported in any situation.

### Why Suraksha?

- 🚨 **Instant SOS Alerts** - One-click emergency notifications to trusted contacts
- 🤖 **AI Safety Companion** - 24/7 AI chatbot for safety advice and guidance
- 📧 **Email Notifications** - Automatic emergency emails with location details
- 🗺️ **Location Tracking** - Real-time location sharing during emergencies
- 👥 **Trusted Network** - Manage emergency contacts easily
- 🔐 **Secure & Private** - Firebase authentication with MongoDB storage

---

## ✨ Features

### 🆘 Emergency SOS System
- **One-Click Alert** - Large, accessible SOS button on homepage
- **Automatic Location Capture** - GPS coordinates sent to contacts
- **Bulk Email Notifications** - All trusted contacts notified instantly
- **Alert History** - Track all SOS alerts in MongoDB

### 🤖 AI Safety Chatbot
- **Powered by Google Gemini AI** - Intelligent, context-aware responses
- **24/7 Availability** - Always ready to help
- **Safety Scenarios** - Guidance for stalking, harassment, emergencies
- **Quick Tips** - Pre-written questions for fast help
- **Emergency Numbers** - Indian emergency services (100, 108, 1091)

### 👥 Contact Management
- **Add Trusted Contacts** - Name, email, phone, relationship
- **MongoDB Storage** - Secure, scalable database
- **Easy Management** - Add, edit, delete contacts
- **User-Specific** - Each user has their own contact list

### 🔐 Authentication & Security
- **Firebase Authentication** - Email/password and Google sign-in
- **Secure Sessions** - Persistent login with token management
- **User Profiles** - MongoDB user data storage
- **Privacy First** - User data isolated and protected

### 🎨 Modern UI/UX
- **Responsive Design** - Works on mobile, tablet, desktop
- **Beautiful Animations** - GSAP-powered smooth transitions
- **Custom Cursor** - Enhanced user experience
- **Dark Theme** - Easy on the eyes, professional look
- **Accessibility** - Touch-friendly, keyboard navigation

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 19.2.0 |
| **Vite** | Build Tool & Dev Server | 7.2.4 |
| **Tailwind CSS** | Styling Framework | 4.1.18 |
| **GSAP** | Animations | 3.14.2 |
| **Lucide React** | Icon Library | 0.563.0 |

### Backend
| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | Runtime Environment | Latest |
| **Express.js** | Web Framework | 4.18.2 |
| **MongoDB** | Database | Atlas Cloud |
| **Mongoose** | ODM | 8.0.0 |

### APIs & Services
| Service | Purpose | Provider |
|---------|---------|----------|
| **Firebase Auth** | User Authentication | Google Firebase |
| **MongoDB Atlas** | Database Hosting | MongoDB |
| **Resend** | Email Service | Resend.com |
| **Google Gemini AI** | AI Chatbot | Google AI |
| **Geolocation API** | Location Services | Browser API |

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Nodemon** - Auto-restart server
- **CORS** - Cross-origin requests
- **dotenv** - Environment variables

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT (Browser)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   React UI   │  │  GSAP Anims  │  │ Tailwind CSS │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    AUTHENTICATION LAYER                      │
│                   ┌──────────────────┐                      │
│                   │  Firebase Auth   │                      │
│                   └──────────────────┘                      │
└─────────────────────────────────────────────────────────────┘
                            │
            ┌───────────────┼───────────────┐
            ▼               ▼               ▼
┌─────────────────┐ ┌─────────────┐ ┌─────────────────┐
│  Express API    │ │ Resend API  │ │  Gemini AI API  │
│  (Port 5000)    │ │ (Email)     │ │  (Chatbot)      │
└─────────────────┘ └─────────────┘ └─────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│                      MONGODB ATLAS                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │    Users     │  │   Contacts   │  │  SOS Alerts  │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

---

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account
- Firebase project
- Resend API key
- Google Gemini API key

### Step 1: Clone Repository
```bash
git clone https://github.com/yourusername/suraksha.git
cd suraksha
```

### Step 2: Install Frontend Dependencies
```bash
npm install
```

### Step 3: Install Backend Dependencies
```bash
cd server
npm install
cd ..
```

### Step 4: Configure Environment Variables
Create `.env` file in root directory:
```env
# Resend API Key
VITE_RESEND_API_KEY=your_resend_api_key

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# MongoDB API URL
VITE_API_URL=http://localhost:5000/api

# Gemini AI API Key
VITE_GEMINI_API_KEY=your_gemini_api_key
```

Create `server/.env` file:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### Step 5: Start Development Servers

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Step 6: Open Application
Navigate to `http://localhost:5173` in your browser.

---

## 🔐 Environment Variables

### Frontend (.env)
| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_RESEND_API_KEY` | Resend email service API key | Yes |
| `VITE_FIREBASE_API_KEY` | Firebase authentication key | Yes |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain | Yes |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID | Yes |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket | Yes |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging ID | Yes |
| `VITE_FIREBASE_APP_ID` | Firebase app ID | Yes |
| `VITE_API_URL` | Backend API URL | Yes |
| `VITE_GEMINI_API_KEY` | Google Gemini AI key | Yes |

### Backend (server/.env)
| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `PORT` | Server port (default: 5000) | No |

---

## 🔄 System Flow

### 1. User Registration & Authentication Flow
```
User Opens App
    ↓
Click "Login" Button
    ↓
Choose Sign-In Method (Email/Google)
    ↓
Firebase Authentication
    ↓
Create User Profile in MongoDB
    ↓
Redirect to Dashboard
```

### 2. Add Trusted Contact Flow
```
User Clicks "Manage Contacts"
    ↓
Click "Add Contact" Button
    ↓
Fill Form (Name, Email, Phone, Relationship)
    ↓
Submit Form
    ↓
POST /api/contacts
    ↓
Save to MongoDB (trustedcontacts collection)
    ↓
Display Success Message
    ↓
Contact Appears in List
```

### 3. SOS Emergency Alert Flow
```
User Clicks SOS Button
    ↓
Confirmation Modal Appears
    ↓
User Confirms Emergency
    ↓
System Captures GPS Location
    ↓
GET /api/contacts/:userId (Fetch Trusted Contacts)
    ↓
For Each Contact:
    ├─ Send Email via Resend API
    │  ├─ Include User Name
    │  ├─ Include Location (Lat/Long)
    │  ├─ Include Google Maps Link
    │  └─ Include Timestamp
    ↓
POST /api/alerts (Save Alert to MongoDB)
    ↓
Display Success Message
    ↓
Show Number of Contacts Notified
```

### 4. AI Chatbot Interaction Flow
```
User Clicks Chat Button (Bottom-Right)
    ↓
Initialize Gemini AI Chat
    ↓
Display Welcome Message
    ↓
User Types Question or Clicks Quick Tip
    ↓
Send Message to Gemini API
    ↓
Gemini Processes with Safety Context
    ↓
Receive AI Response
    ↓
Display Response in Chat
    ↓
User Can Continue Conversation
```

### 5. Email Notification Flow
```
SOS Triggered
    ↓
Fetch Contacts from MongoDB
    ↓
For Each Contact Email:
    ├─ Create HTML Email Template
    │  ├─ Emergency Header
    │  ├─ User Information
    │  ├─ Location Details
    │  ├─ Google Maps Link
    │  └─ Timestamp
    ↓
Send via Resend API
    ↓
Resend Delivers Email
    ↓
Contact Receives Alert
```

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### Health Check
```http
GET /api/health
```
**Response:**
```json
{
  "status": "ok",
  "message": "Suraksha API is running"
}
```

#### Users

**Create User Profile**
```http
POST /api/users
Content-Type: application/json

{
  "uid": "firebase_user_id",
  "email": "user@example.com",
  "displayName": "John Doe"
}
```

**Get User Profile**
```http
GET /api/users/:uid
```

#### Trusted Contacts

**Get All Contacts**
```http
GET /api/contacts/:userId
```

**Add Contact**
```http
POST /api/contacts
Content-Type: application/json

{
  "userId": "firebase_user_id",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+91-9876543210",
  "relationship": "Friend"
}
```

**Update Contact**
```http
PUT /api/contacts/:id
Content-Type: application/json

{
  "name": "Jane Smith",
  "phone": "+91-9876543211"
}
```

**Delete Contact**
```http
DELETE /api/contacts/:id
```

#### SOS Alerts

**Get All Alerts**
```http
GET /api/alerts/:userId
```

**Create Alert**
```http
POST /api/alerts
Content-Type: application/json

{
  "userId": "firebase_user_id",
  "location": {
    "latitude": 28.6139,
    "longitude": 77.2090,
    "address": "New Delhi, India"
  },
  "notifiedContacts": ["email1@example.com", "email2@example.com"],
  "message": "Emergency SOS Alert"
}
```

---

## 📊 Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  uid: String (unique, indexed),
  email: String,
  displayName: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Trusted Contacts Collection
```javascript
{
  _id: ObjectId,
  userId: String (indexed),
  name: String,
  email: String,
  phone: String,
  relationship: String,
  isActive: Boolean,
  createdAt: Date
}
```

### SOS Alerts Collection
```javascript
{
  _id: ObjectId,
  userId: String (indexed),
  location: {
    latitude: Number,
    longitude: Number,
    address: String
  },
  timestamp: Date,
  notifiedContacts: [String],
  status: String (enum: 'sent', 'failed', 'pending'),
  message: String
}
```

---

## 🎨 UI Components

### Main Components
- **HeroSection** - Landing page with empowering illustration
- **SOSButton** - Large emergency button with animations
- **SOSModal** - Confirmation dialog for SOS alerts
- **TrustedContactsManager** - Contact CRUD interface
- **AIChatbot** - Floating AI assistant
- **AuthWrapper** - Authentication UI and logic
- **VolunteerPortal** - Community volunteer features
- **FutureSafety** - Pre-register routes and contacts

---

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy `dist` folder
3. Set environment variables in hosting platform

### Backend (Railway/Render/Heroku)
1. Push `server` folder to hosting
2. Set environment variables
3. Ensure MongoDB Atlas IP whitelist includes hosting IP

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

Built with ❤️ for a safer India

---

## 📞 Emergency Contacts (India)

- **Police**: 100
- **Ambulance**: 108
- **Women's Helpline**: 1091
- **National Commission for Women**: 011-26942369

---

## 🙏 Acknowledgments

- Google Gemini AI for intelligent chatbot capabilities
- Resend for reliable email delivery
- MongoDB Atlas for scalable database hosting
- Firebase for secure authentication
- All contributors and supporters of women's safety

---

<div align="center">

**Made with 💜 by the Suraksha Team**

[Report Bug](https://github.com/yourusername/suraksha/issues) • [Request Feature](https://github.com/yourusername/suraksha/issues)

</div>
