# 🏗️ Project Raksha — System Architecture

> This document describes the complete system architecture of the Project Raksha platform — how every component connects, communicates, and functions together.

> The Architecture is still subject to change.

---

## 🧭 Architecture Overview

Project Raksha follows a **3-tier client-server architecture** with real-time capabilities layered on top. The system is divided into three major zones:

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                         │
│         Browser (Web App) + Paired Wearable Device          │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTPS / WebSocket / WebRTC
┌────────────────────────▼────────────────────────────────────┐
│                       SERVER LAYER                          │
│        Firebase Backend + Node.js API + WebRTC Server       │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────────┐
│                      DATABASE LAYER                         │
│       Firestore (data) + Firebase Storage (files/media)     │
└─────────────────────────────────────────────────────────────┘
```

---

## 🗺️ Full System Architecture Diagram

```
                        ┌───────────────────────┐
                        │   WEARABLE GLASSES    │
                        │  (Physical Prototype) │
                        │  Raspberry Pi Zero    │
                        │  Micro Camera         │
                        │  LED Strobe Module    │
                        └──────────┬────────────┘
                                   │ WiFi / Bluetooth
                                   │
                        ┌──────────▼───────────┐
                        │    USER'S PHONE      │
                        │  (Bridge Device)     │
                        │  Receives stream     │
                        │  Forwards to server  │
                        └──────────┬───────────┘
                                   │ HTTPS / WebRTC
                    ┌──────────────┼──────────────┐
                    │              │              │
          ┌─────────▼───┐  ┌───────▼──────┐  ┌───▼───────────┐
          │  Firebase   │  │  Node.js API │  │  WebRTC       │
          │  Auth       │  │  Server      │  │  Signaling    │
          │             │  │  (REST APIs) │  │  Server       │
          └─────────────┘  └───────┬──────┘  └───┬───────────┘
                                   │              │
                    ┌──────────────┼──────────────┘
                    │              │
          ┌─────────▼───┐  ┌───────▼──────┐
          │  Firestore  │  │  Firebase    │
          │  Database   │  │  Storage     │
          │  (all data) │  │  (media/docs)│
          └─────────────┘  └──────────────┘
                    │
      ┌─────────────┼──────────────┬─────────────┐
      │             │              │             │
┌─────▼───┐  ┌──────▼────┐  ┌─────▼────┐  ┌────▼──────┐
│  User   │  │ Trusted   │  │Authority │  │  Cyber    │
│Dashboard│  │ Contact   │  │Dashboard │  │  Crime    │
│         │  │ Dashboard │  │          │  │  Branch   │
└─────────┘  └───────────┘  └──────────┘  └───────────┘
```

---

## 🔄 Data Flow — SOS Alert

```
User presses SOS (glasses or website)
        │
        ▼
SOS event written to Firestore (alerts collection)
        │
        ▼
Firebase Cloud Function triggered
        │
        ├──► Twilio SMS → All emergency contacts
        ├──► EmailJS → Email notification
        └──► Firestore listener → Live dashboard update
                                  (trusted contact sees alert instantly)
```

---

## 🔄 Data Flow — Cyber Crime Complaint

```
User fills cyber crime complaint form
        │
        ▼
Evidence files uploaded to Firebase Storage
        │
        ▼
Complaint document written to Firestore
(with unique reference ID auto-generated)
        │
        ▼
Cyber Crime Branch dashboard receives new entry
        │
        ├──► Officer assigned to complaint
        ├──► Status updated (Under Review)
        └──► User notified via SMS + Email
```

---

## 🔄 Data Flow — Live Camera Stream

```
Glasses camera captures video
        │
        ▼
Raspberry Pi compresses & streams via WebRTC
        │
        ▼ (via phone as bridge)
WebRTC Signaling Server (establishes peer connection)
        │
        ▼
Trusted contact's browser receives live stream
        │
        ▼
Simultaneously → stream recorded & saved to Firebase Storage
```

---

## 🧩 Component Breakdown

### Frontend Components
| Component | Description |
|---|---|
| Landing Page | Public-facing intro, no auth required |
| Auth Module | Login, Register, OTP verification |
| User Dashboard | SOS trigger, location, alerts, profile |
| Trusted Contact View | Live feed, location map, alert notifications |
| Authority Dashboard | All alerts, incident reports, evidence access |
| Cyber Crime Portal | Complaint form, tracking, resource hub |
| Evidence Vault | Media gallery, download, share |
| Safety Map | Leaflet.js interactive map with incident pins |
| Incident Report Form | Physical incident filing |
| Settings | Profile, contacts, device pairing, preferences |

### Backend Components
| Component | Technology | Role |
|---|---|---|
| Authentication | Firebase Auth | User identity management |
| Database | Firestore | All structured data storage |
| File Storage | Firebase Storage | Videos, images, documents |
| API Server | Node.js + Express | Custom business logic |
| Cloud Functions | Firebase Functions | Triggers (SOS alerts, notifications) |
| Real-time Sync | Firestore listeners | Live updates to dashboards |
| Video Streaming | WebRTC | Peer-to-peer live stream |
| Notifications | Twilio + EmailJS | SMS and email alerts |

---

## 🔐 Security Architecture

```
┌─────────────────────────────────────────────┐
│              SECURITY LAYERS                │
│                                             │
│  Layer 1: Firebase Authentication           │
│           (JWT tokens on every request)     │
│                                             │
│  Layer 2: Firestore Security Rules          │
│           (role-based read/write access)    │
│                                             │
│  Layer 3: Firebase Storage Rules            │
│           (only owner or admin can access)  │
│                                             │
│  Layer 4: HTTPS everywhere                  │
│           (all traffic encrypted)           │
│                                             │
│  Layer 5: Evidence tamper protection        │
│           (user cannot delete own evidence) │
└─────────────────────────────────────────────┘
```

---

## 🗄️ Database Architecture (Firestore Collections)

```
firestore/
│
├── users/
│   └── {userId}/
│       ├── name, email, phone
│       ├── role (user / trusted_contact / authority)
│       ├── emergencyContacts[]
│       └── pairedDeviceId
│
├── alerts/
│   └── {alertId}/
│       ├── userId, timestamp
│       ├── location (lat, lng)
│       ├── status (open / resolved / false_alarm)
│       └── notifiedContacts[]
│
├── incidents/
│   └── {incidentId}/
│       ├── userId, description, category
│       ├── location, timestamp
│       ├── evidenceRefs[]
│       └── status (filed / under_review / resolved)
│
├── cyberComplaints/
│   └── {complaintId}/
│       ├── userId (or anonymous)
│       ├── category, description
│       ├── platform, offenderInfo
│       ├── evidenceRefs[]
│       ├── referenceNumber
│       ├── assignedOfficer
│       └── status + statusHistory[]
│
├── evidence/
│   └── {evidenceId}/
│       ├── userId, type (video/image/doc)
│       ├── storageRef (Firebase Storage path)
│       ├── timestamp, location
│       └── linkedIncidentId
│
└── safetyMapPins/
    └── {pinId}/
        ├── userId, location (lat, lng)
        ├── category, description
        └── timestamp
```

---

## 📡 API Structure (Node.js REST APIs)

```
/api/auth/
  POST   /register
  POST   /login
  POST   /verify-otp
  POST   /reset-password

/api/user/
  GET    /profile
  PUT    /profile/update
  POST   /contacts/add
  DELETE /contacts/remove

/api/alerts/
  POST   /trigger              ← SOS trigger
  GET    /history
  PUT    /:alertId/status

/api/incidents/
  POST   /report
  GET    /my-reports
  GET    /:incidentId
  PUT    /:incidentId/status   ← authority only

/api/cyber/
  POST   /complaint
  GET    /track/:referenceId
  PUT    /:complaintId/status  ← cyber branch only
  GET    /all                  ← cyber branch only

/api/evidence/
  POST   /upload
  GET    /my-evidence
  GET    /share/:evidenceId    ← generates secure link

/api/map/
  GET    /pins                 ← all safety map pins
  POST   /pins/add
  GET    /safe-route
```

---

## 🌐 Hosting Architecture

```
┌──────────────────────────────────────┐
│         DEPLOYMENT SETUP             │
│                                      │
│  Frontend   → Vercel (free tier)     │
│  Backend    → Firebase Functions     │
│  Database   → Firestore              │
│  Storage    → Firebase Storage       │
│  Domain     → Custom (optional)      │
│  CI/CD      → GitHub Actions         │
└──────────────────────────────────────┘
```

---

*Last updated: Phase 1 Development*
