# 🛠️ Project Raksha — Tech Stack

> This document explains every technology used in the Project Raksha platform, why it was chosen, and what role it plays.

---

## 🗂️ Stack at a Glance

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Maps | Leaflet.js / Google Maps  API |
| Live Streaming | WebRTC |
| Backend | Node.js + Express.js |
| Authentication | Firebase Authentication |
| Database | Firebase Firestore |
| File Storage | Firebase Storage |
| Cloud Triggers | Firebase Cloud Functions |
| Notifications | Twilio (SMS) + EmailJS (Email) |
| Hosting | Vercel (frontend) + Firebase (backend) |
| Version Control | Git + GitHub |
| Hardware (prototype) | Raspberry Pi Zero W + WebRTC stream |

---

## 🖥️ Frontend

### HTML5 + CSS3 + Vanilla JavaScript
**Why:** The team is at a beginner level. Starting with plain HTML/CSS/JS ensures everyone can contribute without needing to learn a framework first. The project can be migrated to React later in Phase 3.

**Used for:**
- All page structure and layout
- Form handling (registration, complaint forms, incident reports)
- Dynamic UI updates via DOM manipulation
- Fetching data from APIs using `fetch()`

**Key libraries loaded via CDN (no install needed):**
| Library | Purpose |
|---|---|
| Leaflet.js | Interactive maps |
| Chart.js | Analytics charts on dashboards |
| Font Awesome | Icons throughout the UI |
| Google Fonts | Typography |

---

## 🗺️ Maps

### Leaflet.js
**Why:** Free, open-source, lightweight, and beginner-friendly. Does not require billing setup unlike Google Maps API.

**Used for:**
- Real-time location display on user dashboard
- Community safety map with incident pins
- Heat map of danger zones
- Safe route visualization

**Alternative considered:** Google Maps API — rejected because it requires billing information even for free tier.

---

## 📡 Live Streaming

### WebRTC (Web Real-Time Communication)
**Why:** WebRTC is built into all modern browsers — no plugins, no installs. It allows peer-to-peer video streaming directly from the glasses (via phone) to the trusted contact's browser.

**Used for:**
- Live camera stream from wearable glasses to trusted contact's browser
- Low-latency, encrypted video channel
- Simultaneous recording of stream to Firebase Storage

**How it works in Project Raksha:**
```
Glasses (Raspberry Pi) → Phone (bridge) → WebRTC Peer Connection → Trusted Contact Browser
```

**Signaling server needed:** A small Node.js server using Socket.io to establish the peer connection (this is standard WebRTC setup).

---

## ⚙️ Backend

### Node.js + Express.js
**Why:** JavaScript on the backend means the team only needs to learn one language (JS) for both frontend and backend. Express.js is minimal and beginner-approachable.

**Used for:**
- All REST API endpoints
- Business logic (reference number generation, complaint assignment)
- Connecting to Firestore and Firebase Storage
- Middleware for authentication token verification
- Triggering Twilio SMS on SOS events

**Alternatives considered:** Python (Flask/Django) — rejected to keep the language consistent with frontend JS.

---

## 🔐 Authentication

### Firebase Authentication
**Why:** Handles the hardest parts of auth (token management, OTP, password reset) out of the box. Free tier is very generous. Works perfectly with Firestore security rules.

**Used for:**
- Email + Password registration and login
- OTP-based phone verification
- Password reset flow
- JWT token generation (sent with every API request)
- Role assignment (User / Trusted Contact / Authority / Cyber Branch)

**How roles work:**
Roles are stored in Firestore under the user's document. The Node.js backend checks the role from Firestore before allowing access to protected routes (e.g., authority dashboard).

---

## 🗄️ Database

### Firebase Firestore
**Why:** NoSQL, real-time, free tier (1GB storage, 50k reads/day), and has built-in live listeners that update the UI the instant data changes — perfect for SOS alerts and live dashboards.

**Used for:**
- Storing all user data, alert records, incident reports, cyber complaints
- Real-time dashboard updates (Firestore `.onSnapshot()` listener)
- Complaint status tracking
- Safety map pin data

**Key collections:**
```
users / alerts / incidents / cyberComplaints / evidence / safetyMapPins
```

*(See ARCHITECTURE.md for full schema)*

**Why not SQL (MySQL/PostgreSQL):** Would require a separate hosted server (cost) and doesn't have built-in real-time capabilities without extra setup.

---

## 📁 File Storage

### Firebase Storage
**Why:** Directly integrated with Firebase Auth — files are automatically protected by the same security rules. Free tier: 5GB storage. Simple SDK for upload/download.

**Used for:**
- Evidence video clips from wearable glasses
- Photo snapshots
- Cyber crime complaint attachments (screenshots, documents)
- Tamper-proof storage (Firestore rules prevent user from deleting own evidence)

**File naming convention:**
```
evidence/{userId}/{timestamp}_{type}.{ext}
cyber/{complaintId}/{filename}.{ext}
```

---

## ⚡ Cloud Functions

### Firebase Cloud Functions
**Why:** Serverless functions that trigger automatically on Firestore events. No server management needed.

**Used for:**
- Auto-trigger SMS + email when SOS alert is created in Firestore
- Auto-generate unique complaint reference number when cyber complaint is submitted
- Auto-notify user when complaint status is updated by officer
- Scheduled cleanup of old temporary data

**Example trigger:**
```
Firestore trigger: alerts/{alertId} created
  → Cloud Function fires
  → Reads emergency contacts from users/{userId}
  → Calls Twilio API to send SMS to each contact
  → Calls EmailJS to send email
```

---

## 📬 Notifications

### Twilio (SMS)
**Why:** Industry-standard SMS API. Free trial gives enough credits for a prototype demo. Simple REST API.

**Used for:**
- SOS alert SMS to emergency contacts
- OTP for phone verification
- Cyber complaint status update SMS

### EmailJS
**Why:** Sends emails directly from frontend JavaScript — no backend email server needed. Free tier: 200 emails/month (enough for prototype).

**Used for:**
- SOS alert email notifications
- Complaint submission confirmation
- Status update emails

---

## 🌐 Hosting

### Vercel (Frontend)
**Why:** Free, instant deploys from GitHub, HTTPS by default, custom domain support. Push to GitHub → auto-deploys.

### Firebase Hosting (Alternative)
**Why:** If the team prefers keeping everything in one place, Firebase also offers free hosting with SSL.

### GitHub Pages (Fallback)
**Why:** Absolutely free, zero setup. Good for Phase 1 static pages before backend is connected.

---

## 🔄 Version Control

### Git + GitHub
**Why:** Industry standard. Allows the 3-member team to work on separate features simultaneously using branches.

**Branch strategy:**
```
main          ← stable, production-ready code only
dev           ← active development branch
feature/xxx   ← individual feature branches (e.g., feature/cyber-portal)
```

**Workflow:**
```
Create feature branch → develop → pull request to dev → review → merge
```

---

## 🔬 Hardware Stack (Prototype — Under Research)

| Component | Technology | Role |
|---|---|---|
| Main processor | Raspberry Pi Zero W | Runs the stream + processing |
| Camera | Raspberry Pi Camera Module v2 | Captures video feed |
| Connectivity | Built-in WiFi on Pi Zero W | Connects to phone/network |
| Streaming protocol | WebRTC via GStreamer | Streams live video |
| Trigger input | Physical push button (GPIO) | Activates SOS + strobe |
| Disorientation module | High-intensity LED array | Temporary vision disruption |
| Power | Compact LiPo battery | Portable power source |
| Frame | Custom 3D-printed glasses frame | Houses all components |

---

## 📦 NPM Packages (Backend — Node.js)

```json
{
  "dependencies": {
    "express": "^4.18.0",
    "firebase-admin": "^11.0.0",
    "twilio": "^4.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "uuid": "^9.0.0",
    "socket.io": "^4.6.0"
  }
}
```

---

## 🔒 Environment Variables (.env)

```
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
EMAILJS_SERVICE_ID=
EMAILJS_TEMPLATE_ID=
EMAILJS_PUBLIC_KEY=
PORT=5000
```

> ⚠️ Never commit `.env` to GitHub. Add it to `.gitignore` immediately.

---

## 💰 Cost Overview (All Free Tier)

| Service | Free Tier Limit | Enough for prototype? |
|---|---|---|
| Firebase Auth | 10,000 users/month | ✅ Yes |
| Firestore | 1GB storage, 50k reads/day | ✅ Yes |
| Firebase Storage | 5GB | ✅ Yes |
| Firebase Functions | 2M invocations/month | ✅ Yes |
| Vercel Hosting | Unlimited static deploys | ✅ Yes |
| Twilio SMS | Free trial credits | ✅ Yes |
| EmailJS | 200 emails/month | ✅ Yes |
| Leaflet.js | Completely free | ✅ Yes |

**Total monthly cost: ₹0 for the prototype phase.**

---

*Last updated: Phase 1 Development*
