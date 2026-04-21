# 🚀 Project Raksha — Implementation Plan

> This document breaks down exactly how Project Raksha will be built — phase by phase, week by week, with clear tasks for each team member.

---

## 👥 Team Roles

| Member | Primary Responsibility |
|---|---|
| Member 1 | Frontend — all HTML/CSS pages and UI |
| Member 2 | Backend — Node.js API, Firebase setup, database |
| Member 3 | Research — hardware prototype, documentation, testing |

> All three members contribute to testing and integration.

---

## 🗓️ Development Phases

---

## ✅ Phase 1 — Foundation & Core MVP
**Goal:** Get a working, deployable website on GitHub with core features functional.
**Duration:** 3–4 weeks

---

### Week 1 — Project Setup

**All Members:**
- [ ] Create GitHub repository with agreed folder structure
- [ ] Set up `.gitignore`, `README.md`, `LICENSE`
- [ ] Each member forks and sets up local dev environment
- [ ] Agree on naming conventions, commit message format
- [ ] Create `dev` branch, set `main` as protected

**Member 2 (Backend):**
- [ ] Create Firebase project on console.firebase.google.com
- [ ] Enable Firestore, Firebase Auth, Firebase Storage
- [ ] Set up Node.js + Express project locally
- [ ] Install all npm dependencies
- [ ] Create `.env` file with Firebase credentials
- [ ] Set up basic Express server and test it runs

**Member 1 (Frontend):**
- [ ] Set up base HTML file with linked CSS and JS
- [ ] Import Google Fonts, Font Awesome via CDN
- [ ] Define CSS variables (colors, fonts, spacing) in `:root`
- [ ] Build a basic navbar and footer component

**Member 3 (Research):**
- [ ] Research and document all legal/policy considerations
- [ ] Write `POLICIES.md` document
- [ ] Begin hardware component research
- [ ] Set up test environment for prototype experimentation

---

### Week 2 — Authentication Module

**Member 1 (Frontend):**
- [ ] Build `login.html` page with form UI
- [ ] Build `register.html` page with form (name, email, phone, password)
- [ ] Add emergency contact input fields (add up to 5 contacts)
- [ ] Build `forgot-password.html` page
- [ ] Add form validation (client-side JS)
- [ ] Add loading states and error message display

**Member 2 (Backend):**
- [ ] Set up Firebase Authentication (email/password)
- [ ] Write `POST /api/auth/register` endpoint
  - Creates Firebase Auth user
  - Creates user document in Firestore
  - Assigns default role: `user`
- [ ] Write `POST /api/auth/login` endpoint
  - Returns JWT token
- [ ] Write `POST /api/auth/reset-password` endpoint
- [ ] Set up Firestore security rules (users can only read their own data)
- [ ] Test all auth endpoints with Postman

**Member 3:**
- [ ] Test registration and login flow end-to-end
- [ ] Report any UI/UX issues to Member 1
- [ ] Document the auth flow in `IMPLEMENTATION.md`

---

### Week 3 — User Dashboard + SOS Alert

**Member 1 (Frontend):**
- [ ] Build `user-dashboard.html`
  - SOS button (large, prominent, red)
  - Location display card
  - Recent alerts section
  - Quick links to all features
- [ ] Add SOS button animation (pulse on hover)
- [ ] Show logged-in user's name and profile photo placeholder
- [ ] Add Leaflet.js map to dashboard showing current location

**Member 2 (Backend):**
- [ ] Write `POST /api/alerts/trigger` endpoint
  - Creates alert document in Firestore with location + timestamp
  - Triggers Firebase Cloud Function
- [ ] Write Firebase Cloud Function:
  - Reads emergency contacts from user's Firestore document
  - Calls Twilio to send SMS to each contact
  - Calls EmailJS to send email to each contact
- [ ] Write `GET /api/alerts/history` endpoint
- [ ] Set up Twilio account and test SMS sending
- [ ] Set up EmailJS and test email sending

**Member 3:**
- [ ] Full end-to-end SOS test (trigger → SMS received)
- [ ] Test with multiple emergency contacts
- [ ] Document results and any failures

---

### Week 4 — Incident Report + Cyber Crime Portal + Deployment

**Member 1 (Frontend):**
- [ ] Build `incident-report.html`
  - Form: category dropdown, description textarea, date/time, location auto-fill
  - File upload for evidence (photo/video)
  - Submit button with confirmation modal
- [ ] Build `cyber-crime/report.html`
  - Category dropdown (8 cyber crime types)
  - Platform field, offender info fields
  - Evidence file upload (screenshots, docs)
  - Anonymous toggle switch
  - Submit → show reference number screen
- [ ] Build `cyber-crime/track-complaint.html`
  - Input: reference number
  - Display: status timeline (Submitted → Under Review → Escalated → Resolved)

**Member 2 (Backend):**
- [ ] Write `POST /api/incidents/report` endpoint
  - Uploads evidence to Firebase Storage
  - Creates incident document in Firestore
- [ ] Write `POST /api/cyber/complaint` endpoint
  - Generates unique reference number (UUID)
  - Uploads evidence to Firebase Storage
  - Creates complaint document in Firestore
  - Sends confirmation SMS + email to user
- [ ] Write `GET /api/cyber/track/:referenceId` endpoint

**All Members:**
- [ ] Deploy frontend to GitHub Pages or Vercel
- [ ] Deploy backend to Firebase Functions or Railway
- [ ] Smoke test every feature on deployed URL
- [ ] Fix critical bugs
- [ ] Push all code to `main` branch
- [ ] Update README with live demo link

---

## 🔜 Phase 2 — Expanded Features
**Goal:** Add the community, authority, and cyber branch dashboards.
**Duration:** 3–4 weeks

---

### Features to Build in Phase 2

**Evidence Vault:**
- [ ] `evidence-vault.html` — grid view of all saved media
- [ ] Filter by date, type, incident
- [ ] Download button
- [ ] Generate secure shareable link (expires after 48 hours)
- [ ] Backend: `GET /api/evidence/my-evidence`, `GET /api/evidence/share/:id`

**Live Location Tracking:**
- [ ] Continuous location updates using browser Geolocation API
- [ ] Write location to Firestore every 10 seconds during active session
- [ ] Trusted contact view: `trusted-contact.html` with live map
- [ ] Backend: Firestore listener pushes location updates in real time

**Trusted Contact Dashboard:**
- [ ] `trusted-contact.html`
  - Live map showing linked user's location
  - Alert notification panel (Firestore `.onSnapshot()`)
  - Access to evidence shared with them
  - User status: Safe / SOS Active

**Authority Dashboard:**
- [ ] `admin-dashboard.html`
  - All active SOS alerts table
  - All filed incident reports
  - Evidence vault access (read-only)
  - Update incident status (dropdown)
- [ ] Backend: authority-only protected routes

**Cyber Crime Branch Dashboard:**
- [ ] `cyber-branch-dashboard.html`
  - All incoming complaints table
  - Filter by category, date, status
  - Assign to officer (dropdown)
  - Update status with remarks
  - Download full case file (PDF export)
- [ ] Backend: cyber-branch-only protected routes

**Community Safety Map:**
- [ ] `safety-map.html` with Leaflet.js
  - Pins for reported incidents
  - Color-coded by category
  - Filter panel (type, date range)
  - "Add Pin" button for users to report unsafe spots
- [ ] Backend: `GET /api/map/pins`, `POST /api/map/pins/add`

---

## 🔬 Phase 3 — Hardware Integration + Advanced Features
**Goal:** Connect the physical wearable prototype to the website.
**Duration:** Ongoing (post-prototype completion)

---

### Features to Build in Phase 3

**Live Camera Feed:**
- [ ] Set up WebRTC signaling server (Node.js + Socket.io)
- [ ] Configure Raspberry Pi to stream via GStreamer → WebRTC
- [ ] Build `live-feed.html` with video player
- [ ] Auto-record stream to Firebase Storage
- [ ] Trusted contact receives stream URL on SOS trigger

**Geo-Fencing:**
- [ ] User defines safe zones on map (draw a circle)
- [ ] Backend monitors location against safe zone
- [ ] Alert fires if user exits zone unexpectedly

**Safe Route Suggester:**
- [ ] User inputs destination
- [ ] System checks community map pins along possible routes
- [ ] Suggests route with fewest reported incidents

**In-Portal Messaging:**
- [ ] Complainant ↔ Officer messaging thread inside portal
- [ ] Real-time with Firestore listeners
- [ ] No personal phone number/email shared

**Device Pairing:**
- [ ] User scans QR code from glasses to link device to account
- [ ] Settings page shows paired device status

---

## 🐛 Testing Strategy

### Unit Testing
- Test each API endpoint individually with Postman
- Verify correct HTTP status codes and response formats

### Integration Testing
- Test full flows: Register → SOS → SMS received
- Test full flows: Cyber complaint → Reference number → Status tracked

### UI Testing
- Test all pages on Chrome, Firefox, Edge
- Test on mobile screen sizes (responsive design check)

### Security Testing
- Verify unauthenticated users cannot access protected routes
- Verify users cannot read other users' data
- Verify evidence cannot be deleted by non-admin

---

## 📋 GitHub Workflow

### Commit Message Format
```
feat: add cyber crime complaint form
fix: SOS button not triggering on mobile
docs: update implementation plan for phase 2
style: fix navbar spacing on mobile
refactor: move auth logic to separate module
```

### Pull Request Checklist
Before merging any PR to `dev`:
- [ ] Feature works end-to-end
- [ ] No console errors
- [ ] Code is commented
- [ ] `.env` variables not hardcoded
- [ ] Tested on mobile screen

---

## 📁 Environment Setup (For New Team Members)

```bash
# 1. Clone the repo
git clone https://github.com/your-team/womens-safety-website.git

# 2. Navigate to backend
cd backend
npm install

# 3. Create .env file (ask Member 2 for credentials)
cp .env.example .env

# 4. Run backend server
node server.js

# 5. Open frontend
# Simply open index.html in browser OR use Live Server extension in VS Code
```

---

*Last updated: Phase 1 Development*
