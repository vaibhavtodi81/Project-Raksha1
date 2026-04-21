# 🔗 Project Raksha — Feature × Technology Mapping

> This document maps every feature of the Project Raksha platform to the exact technologies that power it — frontend, backend, database, and third-party services.

---

## 🔐 Feature 1 — Authentication & User Management

| Layer | Technology | What it does |
|---|---|---|
| Frontend | HTML form + JavaScript `fetch()` | Collects user input, sends to API |
| Backend | Node.js + Express route | Receives request, validates data |
| Auth Service | Firebase Authentication | Creates user account, manages session |
| Database | Firestore `users` collection | Stores profile, role, emergency contacts |
| OTP/SMS | Twilio Verify API | Sends OTP to phone for verification |
| Token | Firebase JWT | Authenticates every subsequent API request |
| Security | Firestore Security Rules | Ensures users can only access their own data |

**Flow:**
```
Form submit → POST /api/auth/register
  → Firebase Auth creates user
  → Firestore creates users/{userId} document
  → Twilio sends OTP
  → User verifies → JWT token returned → stored in localStorage
```

---

## 📡 Feature 2 — Live Feed & Monitoring

| Layer | Technology | What it does |
|---|---|---|
| Hardware | Raspberry Pi Zero W + Camera Module | Captures video |
| Streaming protocol | WebRTC + GStreamer (on Pi) | Encodes and streams video |
| Bridge | User's phone (browser) | Relays stream from Pi to internet |
| Signaling | Node.js + Socket.io | Establishes peer connection between Pi and viewer |
| Viewer | HTML5 `<video>` element + WebRTC JS API | Displays live stream in browser |
| Recording | MediaRecorder API → Firebase Storage | Auto-saves stream as evidence |
| Access Control | Firebase Auth + Firestore role check | Only trusted contacts can view stream |

**Flow:**
```
Glasses triggered
  → Pi streams via WebRTC
  → Signaling server pairs Pi with trusted contact's browser
  → Video appears in trusted contact's browser
  → Simultaneously recorded and uploaded to Firebase Storage
```

---

## 🗺️ Feature 3 — Real-Time Location Tracking

| Layer | Technology | What it does |
|---|---|---|
| Location Source | Browser Geolocation API | Gets device lat/lng |
| Frontend | JavaScript `navigator.geolocation.watchPosition()` | Continuously polls location |
| Database | Firestore `users/{id}/location` field | Stores current location |
| Real-time sync | Firestore `.onSnapshot()` listener | Pushes location update to trusted contact instantly |
| Map display | Leaflet.js + OpenStreetMap tiles | Renders map with moving marker |
| Geo-fencing | Node.js (haversine formula) + Firestore trigger | Checks if user exits safe zone |
| Alert | Firebase Cloud Function | Fires notification if geo-fence breached |

**Flow:**
```
Browser gets location every 10 seconds
  → Writes to Firestore
  → Trusted contact's Firestore listener fires
  → Map marker moves to new position in real time
```

---

## 🚨 Feature 4 — SOS & Alert System

| Layer | Technology | What it does |
|---|---|---|
| Trigger (web) | HTML button + JavaScript `fetch()` | Sends SOS request |
| Trigger (hardware) | GPIO button on Raspberry Pi → HTTP request | Physical button triggers SOS |
| Backend | Node.js `POST /api/alerts/trigger` | Creates alert record |
| Database | Firestore `alerts` collection | Stores alert with timestamp + location |
| Automation | Firebase Cloud Function (Firestore trigger) | Auto-fires when new alert document created |
| SMS | Twilio SMS API | Sends SMS to all emergency contacts |
| Email | EmailJS | Sends email to all emergency contacts |
| Real-time UI | Firestore `.onSnapshot()` on `alerts` | Alert appears on trusted contact dashboard instantly |
| Alert history | Firestore `alerts` collection query | Displays past alert log |

**Flow:**
```
SOS button pressed
  → POST /api/alerts/trigger
  → Firestore alert document created
  → Cloud Function fires automatically:
      → Reads emergency contacts from Firestore
      → Twilio sends SMS to each contact
      → EmailJS sends email to each contact
  → Trusted contact dashboard updates via onSnapshot()
```

---

## 🎥 Feature 5 — Evidence Vault

| Layer | Technology | What it does |
|---|---|---|
| Upload (auto) | MediaRecorder API → `fetch()` multipart | Uploads stream recording |
| Upload (manual) | HTML `<input type="file">` + `fetch()` | User uploads screenshots/docs |
| Backend | Node.js `POST /api/evidence/upload` | Receives file, uploads to Storage |
| File storage | Firebase Storage | Stores all media files |
| Metadata | Firestore `evidence` collection | Stores file ref, timestamp, location, type |
| Display | HTML grid + JavaScript fetch + Storage download URL | Shows evidence gallery |
| Download | Firebase Storage `getDownloadURL()` | Generates download link |
| Secure sharing | Node.js generates time-limited signed URL | Share evidence with authorities safely |
| Tamper protection | Firestore Security Rules | Users cannot delete own evidence, only admin can |

**Flow:**
```
Stream recording completes
  → MediaRecorder blob sent to POST /api/evidence/upload
  → Node.js uploads to Firebase Storage
  → Firestore evidence document created with Storage path
  → Evidence appears in vault UI
  → Share button → Node.js generates signed URL (expires 48 hours)
```

---

## 📋 Feature 6 — Incident Reporting Portal

| Layer | Technology | What it does |
|---|---|---|
| Frontend | HTML form + JavaScript | Collects incident details |
| Location auto-fill | Browser Geolocation API | Pre-fills location field |
| Evidence attachment | Firestore + Storage reference lookup | Links existing vault evidence |
| Backend | Node.js `POST /api/incidents/report` | Creates incident record |
| Database | Firestore `incidents` collection | Stores full incident document |
| File storage | Firebase Storage | Stores any new evidence uploaded with report |
| Authority view | Firestore query (authority-only route) | Shows all incidents to authority dashboard |
| Status tracking | Firestore `status` field + `.onSnapshot()` | User sees status update in real time |
| Notification | Twilio + EmailJS via Cloud Function | Notifies user when status changes |

**Flow:**
```
User fills incident form → attaches evidence
  → POST /api/incidents/report
  → Evidence uploaded to Firebase Storage
  → Firestore incident document created
  → Appears on authority dashboard
  → Authority updates status → Cloud Function fires → User gets SMS
```

---

## 🗺️ Feature 7 — Community Safety Map

| Layer | Technology | What it does |
|---|---|---|
| Frontend | Leaflet.js + OpenStreetMap | Renders interactive map |
| Pins data | Firestore `safetyMapPins` collection | Stores all reported location pins |
| Real-time pins | Firestore `.onSnapshot()` | New pins appear without page refresh |
| Add pin | JavaScript `map.on('click')` + Leaflet marker | User clicks map to add pin |
| Backend | Node.js `POST /api/map/pins/add` | Saves pin to Firestore |
| Filtering | JavaScript filter on Firestore query | Filter pins by category/date |
| Heat map | Leaflet.heat plugin | Renders density heat map of incidents |
| Safe route | Leaflet Routing Machine plugin | Draws route between two points |

**Flow:**
```
Page loads → GET /api/map/pins → Leaflet renders all pins on map
User clicks "Add Pin" → selects location on map → fills form
  → POST /api/map/pins/add → Firestore updated
  → onSnapshot fires → new pin appears for all users viewing map
```

---

## 👮 Feature 8 — Authority / Admin Dashboard

| Layer | Technology | What it does |
|---|---|---|
| Access control | Firebase Auth JWT + Firestore role check | Only users with role: `authority` can access |
| SOS alert feed | Firestore `.onSnapshot()` on `alerts` | Live alert updates without refresh |
| Incident table | Firestore query → JavaScript DOM render | Lists all incidents |
| Evidence access | Firebase Storage signed URL | Authority views evidence files |
| Status update | Node.js `PUT /api/incidents/:id/status` | Updates incident status |
| Analytics | Chart.js | Bar/pie charts of incident types, areas |
| Export | jsPDF library (CDN) | Downloads case summary as PDF |

**Flow:**
```
Authority logs in → role checked → authority dashboard loaded
  → Firestore onSnapshot feeds live alert data
  → Authority clicks incident → views details + evidence
  → Updates status → Cloud Function fires → user notified
```

---

## 🖥️ Feature 9 — Cyber Crime Reporting Portal

| Sub-feature | Layer | Technology | What it does |
|---|---|---|---|
| Complaint form | Frontend | HTML form + JavaScript | Collects all complaint details |
| Anonymous toggle | Frontend | JavaScript | Hides user identity from submission if toggled |
| Evidence upload | Frontend + Backend | `<input file>` + Firebase Storage | Stores screenshots/docs |
| Submission | Backend | Node.js `POST /api/cyber/complaint` | Creates complaint in Firestore |
| Reference number | Backend | `uuid` npm package | Generates unique ID like `SC-2024-XXXXX` |
| Confirmation | Backend | Twilio + EmailJS | Sends ref number to user via SMS + email |
| Status tracking | Frontend | Firestore `.onSnapshot()` or polling | Shows live status timeline |
| Cyber branch view | Backend | Protected route (role: `cyber_branch`) | Shows all complaints to officers |
| Officer assignment | Backend | Firestore field update | Assigns complaint to specific officer |
| Case file download | Frontend | jsPDF library | Exports complaint as downloadable PDF |
| Messaging thread | Frontend + Backend | Firestore `messages` subcollection + onSnapshot | In-portal complainant ↔ officer chat |
| Resource hub | Frontend | Static HTML page | Legal info, platform reporting guides |
| Helpline display | Frontend | Static HTML | Shows 1930 prominently |

**Flow:**
```
User fills complaint form → uploads evidence → submits
  → POST /api/cyber/complaint
  → Evidence → Firebase Storage
  → Complaint → Firestore cyberComplaints/{complaintId}
  → uuid reference number generated and returned
  → Twilio SMS + EmailJS sends ref number to user
  → Cyber branch dashboard shows new complaint
  → Officer assigned → status changed
  → Cloud Function fires → user notified via SMS
```

---

## 📬 Feature 10 — Notifications & Communication

| Notification Type | Trigger | Technology |
|---|---|---|
| SOS alert SMS | Alert created in Firestore | Firebase Cloud Function → Twilio |
| SOS alert email | Alert created in Firestore | Firebase Cloud Function → EmailJS |
| Cyber complaint confirmation | Complaint submitted | Node.js → Twilio + EmailJS |
| Complaint status update | Officer updates status | Firebase Cloud Function → Twilio + EmailJS |
| Incident status update | Authority updates incident | Firebase Cloud Function → EmailJS |
| In-app notification | Any Firestore update | Firestore `.onSnapshot()` → JS DOM update |
| Notification preferences | User setting | Firestore `users/{id}/preferences` field |

---

## ⚙️ Feature 11 — Settings

| Setting | Technology |
|---|---|
| Change password | Firebase Auth `updatePassword()` |
| Manage emergency contacts | Firestore `users/{id}/emergencyContacts` array update |
| Notification preferences | Firestore `users/{id}/preferences` object update |
| Device pairing | Firestore `users/{id}/pairedDeviceId` + QR code scan (jsQR library) |
| Account deletion | Firebase Auth `deleteUser()` + Firestore document delete |

---

## 🔑 Summary — Technology Frequency

| Technology | Used in Features |
|---|---|
| Firestore | All 11 features |
| Firebase Auth | All 11 features |
| Node.js + Express | Features 1,2,4,5,6,7,8,9 |
| Firebase Storage | Features 2,5,6,9 |
| Firebase Cloud Functions | Features 4,6,9,10 |
| Twilio | Features 1,4,9,10 |
| EmailJS | Features 4,6,9,10 |
| Leaflet.js | Features 3,7 |
| WebRTC | Feature 2 |
| Socket.io | Feature 2 |
| Chart.js | Feature 8 |
| jsPDF | Features 8,9 |
| Browser Geolocation API | Features 3,6 |
| Raspberry Pi + Camera | Feature 2 |

---

*Last updated: Phase 1 Development*
