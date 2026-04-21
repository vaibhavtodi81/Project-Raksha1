# 🛡️ Project Raksha — Women Safety & Justice Platform

> A unified digital platform for women's physical safety, incident reporting, safe route planning, digital community, and cyber crime justice — connected to a smart wearable prototype currently under research.

---

## 🚨 The Problem

Every existing women safety solution has the same critical flaw — **they are reactive, not proactive.** An SOS alert sent after an incident means help arrives too late. Cyber crimes against women are underreported, poorly tracked, and rarely result in justice. There is no single platform that addresses both physical and digital safety end to end.

**Project Raksha** is built to change that.

---

## 💡 What is Project Raksha?

Project Raksha is a full-stack women safety web platform as well as a full fledged app with a wearable that covers three pillars:

- **🔴 Real-time physical safety** — Live location tracking, SOS alerts, and live camera feed from a paired wearable device
- **⚖️ Incident reporting & justice** — File physical incident reports that are directly routed to the relevant authorities with auto-attached evidence
- **🖥️ Cyber crime portal** — Report digital harassment, sextortion, deepfakes, stalking, and more — directly handled by the Cyber Crime Branch

### Additional features

- **🖥️ Safe digital community** — A twitter like community that focuses mainly on women safety tips, usefull guides, sharing incidents, etc.
- **🔴 Safe route planning** — Mark risk prone zones and help plan routes considering low/no risk zones.

---

## 🔬 Physical Prototype — Under Research

> **Note:** The Project Raksha smart wearable device (integrated safety glasses with a micro-camera, live streaming, and an offender-disorientation module) is **currently under active research and development.** The hardware component is not yet available publicly. This repository covers the complete website and portal that will be paired with the physical device once ready.
>
> The physical prototype includes:
> - Micro camera embedded in wearable glasses
> - Live video streaming to the Project Raksha platform
> - Raspberry Pi Zero for onboard processing
> - Offender disorientation module (high-intensity LED strobe)
> - WiFi/Bluetooth sync to user's phone and the Project Raksha website
>
> *Updates on the prototype will be pushed to this repository as development progresses.*

---

## 🌐 Website Features

### 🔐 Authentication & User Management
- Secure registration with emergency contact setup
- OTP-based login and password reset
- Role-based access: **User | Trusted Contact | Authority / Cyber Crime Branch**

### 📡 Live Feed & Monitoring
- Real-time camera stream from paired wearable glasses once distress signal starts
- Accessible only to linked trusted contacts
- Auto-starts on glasses trigger, footage is auto-saved

### 🗺️ Real-Time Location Tracking
- Live map with continuous location updates
- Location history trail for trusted contacts
- Geo-fencing alerts when user exits a defined safe zone

### 🚨 SOS & Alert System
- One-click SOS from website or wearable trigger
- Instant multi-channel notification (SMS + Email + in-app) to all contacts
- Full alert history log with timestamps and location

### 🎥 Evidence Vault
- Auto-saved, timestamped, location-tagged video clips and snapshots
- Tamper-proof — cannot be deleted by the user
- Secure shareable link for submitting evidence to authorities

### 📋 Incident Reporting Portal
- Report physical incidents: Harassment, Stalking, Assault, Suspicious Activity
- GPS auto-fill, evidence attachment from vault
- Direct submission to authorities + real-time status tracking

### 🗺️ Community Safety Map
- Community-reported incident heat map
- Filter by type, time, and area
- Safe route suggester avoiding high-risk zones

### 👮 Authority Dashboard
- Real-time SOS monitoring
- Access to evidence vault and incident reports
- Safety analytics by area and time period

### 🖥️ Cyber Crime Reporting Portal
Report the following directly to the **Cyber Crime Branch:**
- Online Harassment / Cyberbullying
- Morphed Images / Deepfake Content
- Non-Consensual Intimate Image Sharing (NCII)
- Sextortion / Blackmail
- Stalking via Social Media or Apps
- Identity Theft / Fake Profiles
- Hacking / Unauthorized Account Access
- Online Fraud / Financial Scams

**Complaint features:**
- Unique complaint reference number on submission
- Upload screenshots, URLs, and offender profile links
- Anonymous reporting option
- Real-time status tracking: Submitted → Under Review → Escalated → Resolved
- Cyber Crime Branch dashboard for officers to manage and respond to cases
- Cyber Safety Resource Hub (legal rights, platform reporting guides, IT Act info)
- Helpline number prominently displayed: **📞 1930**

### 📬 Notifications
- In-app, email, and SMS alerts
- Customizable notification preferences

### ⚙️ Settings
- Emergency contact management
- Device pairing (link glasses to account)
- Account and privacy controls

---

## 🗂️ Project Structure

```
womens-safety-website/
├── index.html
├── auth/
│   ├── login.html
│   └── register.html
├── dashboard/
│   ├── user-dashboard.html
│   ├── admin-dashboard.html
│   └── trusted-contact.html
├── features/
│   ├── live-feed.html
│   ├── sos-alert.html
│   ├── evidence-vault.html
│   ├── incident-report.html
│   ├── safety-map.html
│   └── cyber-crime/
│       ├── report.html
│       ├── track-complaint.html
│       └── resources.html
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── README.md
```

- *Subject to change

---

## 🛠️ Tech Stack *(Planned)*

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Firebase / Node.js |
| Database | Firebase Firestore |
| Maps | Google Maps API / Leaflet.js |
| Live Streaming | WebRTC |
| Notifications | Twilio (SMS), EmailJS |
| Auth | Firebase Authentication |

---

## 🚀 Development Phases

### ✅ Phase 1 — Core MVP
- Landing page
- Registration / Login
- User profile & emergency contacts
- SOS alert trigger
- Incident report form
- Cyber crime complaint form & tracking

### 🔜 Phase 2 — Expanded Features
- Live location map
- Evidence vault
- Authority & Cyber Crime Branch dashboards
- Community safety map

### 🔬 Phase 3 — Hardware Integration *(post-prototype)*
- Live camera feed from wearable glasses
- Geo-fencing & safe route suggester
- In-portal messaging between complainant and officer

---

## 📌 Status

> 🟡 **In Development** — Website Phase 1 in progress. Physical prototype under research.

---

## 📄 License

This project is developed for academic purposes. All rights reserved by the team.

---

*Built with purpose. For every woman who deserved better.*
