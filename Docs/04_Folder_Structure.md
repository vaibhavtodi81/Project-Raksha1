# 📁 Project Raksha — Project Folder Structure

> This document defines the complete folder and file structure for the Project Raksha GitHub repository. Every file has a defined purpose. Follow this structure strictly so all team members can navigate the project consistently.

---

## 🗂️ Complete Repository Structure

```
womens-safety-website/
│
├── 📄 README.md                        ← Project overview (start here)
├── 📄 ARCHITECTURE.md                  ← System architecture & data flows
├── 📄 TECH_STACK.md                    ← All technologies explained
├── 📄 IMPLEMENTATION.md                ← Phase-by-phase build plan
├── 📄 FEATURE_TECH_MAPPING.md          ← Feature × technology reference
├── 📄 POLICIES.md                      ← Legal & policy considerations
├── 📄 .gitignore                       ← Files Git should not track
├── 📄 .env.example                     ← Template for environment variables
│
├── 📁 frontend/                        ← All HTML/CSS/JS files
│   │
│   ├── 📄 index.html                   ← Landing page (public)
│   │
│   ├── 📁 auth/                        ← Authentication pages
│   │   ├── 📄 login.html
│   │   ├── 📄 register.html
│   │   └── 📄 forgot-password.html
│   │
│   ├── 📁 dashboard/                   ← Role-based dashboards
│   │   ├── 📄 user-dashboard.html      ← Main dashboard for women users
│   │   ├── 📄 trusted-contact.html     ← View for family/friends
│   │   ├── 📄 admin-dashboard.html     ← Authority/police dashboard
│   │   └── 📄 cyber-branch.html        ← Cyber Crime Branch dashboard
│   │
│   ├── 📁 features/                    ← Individual feature pages
│   │   ├── 📄 live-feed.html           ← Live camera stream viewer
│   │   ├── 📄 sos-alert.html           ← SOS trigger + alert history
│   │   ├── 📄 location.html            ← Real-time location tracking
│   │   ├── 📄 evidence-vault.html      ← Media gallery + evidence manager
│   │   ├── 📄 incident-report.html     ← Physical incident report form
│   │   ├── 📄 safety-map.html          ← Community safety map
│   │   │
│   │   └── 📁 cyber-crime/             ← Cyber crime portal section
│   │       ├── 📄 report.html          ← File a cyber complaint
│   │       ├── 📄 track-complaint.html ← Track complaint by ref number
│   │       └── 📄 resources.html       ← Cyber safety resource hub
│   │
│   ├── 📁 static/                      ← Informational pages
│   │   ├── 📄 about.html
│   │   ├── 📄 how-it-works.html
│   │   ├── 📄 faq.html
│   │   ├── 📄 privacy-policy.html
│   │   ├── 📄 terms.html
│   │   └── 📄 contact.html
│   │
│   └── 📁 assets/                      ← Static assets
│       │
│       ├── 📁 css/
│       │   ├── 📄 global.css           ← CSS variables, resets, typography
│       │   ├── 📄 navbar.css           ← Navbar styles
│       │   ├── 📄 footer.css           ← Footer styles
│       │   ├── 📄 auth.css             ← Login/register page styles
│       │   ├── 📄 dashboard.css        ← Dashboard layout styles
│       │   ├── 📄 forms.css            ← All form input styles
│       │   ├── 📄 map.css              ← Leaflet map customization
│       │   └── 📄 responsive.css       ← Mobile breakpoints
│       │
│       ├── 📁 js/
│       │   ├── 📄 auth.js              ← Login, register, logout functions
│       │   ├── 📄 api.js               ← All fetch() calls to backend API
│       │   ├── 📄 map.js               ← Leaflet map initialization
│       │   ├── 📄 location.js          ← Geolocation API + Firestore write
│       │   ├── 📄 sos.js               ← SOS trigger logic
│       │   ├── 📄 notifications.js     ← Firestore onSnapshot listeners
│       │   ├── 📄 evidence.js          ← Evidence upload + display logic
│       │   ├── 📄 cyber.js             ← Cyber complaint form + tracking
│       │   └── 📄 utils.js             ← Shared helper functions
│       │
│       └── 📁 images/
│           ├── 📄 logo.svg
│           ├── 📄 logo-dark.svg
│           ├── 📄 hero-illustration.svg
│           ├── 📄 favicon.ico
│           └── 📁 icons/               ← Feature icons
│
├── 📁 backend/                         ← Node.js + Express server
│   │
│   ├── 📄 server.js                    ← Entry point, Express setup
│   ├── 📄 package.json
│   ├── 📄 package-lock.json
│   │
│   ├── 📁 config/
│   │   └── 📄 firebase.js              ← Firebase Admin SDK initialization
│   │
│   ├── 📁 routes/                      ← API route definitions
│   │   ├── 📄 auth.routes.js
│   │   ├── 📄 user.routes.js
│   │   ├── 📄 alerts.routes.js
│   │   ├── 📄 incidents.routes.js
│   │   ├── 📄 cyber.routes.js
│   │   ├── 📄 evidence.routes.js
│   │   └── 📄 map.routes.js
│   │
│   ├── 📁 controllers/                 ← Route handler logic
│   │   ├── 📄 auth.controller.js
│   │   ├── 📄 user.controller.js
│   │   ├── 📄 alerts.controller.js
│   │   ├── 📄 incidents.controller.js
│   │   ├── 📄 cyber.controller.js
│   │   ├── 📄 evidence.controller.js
│   │   └── 📄 map.controller.js
│   │
│   ├── 📁 middleware/
│   │   ├── 📄 auth.middleware.js       ← Verify Firebase JWT token
│   │   └── 📄 role.middleware.js       ← Check user role before route access
│   │
│   ├── 📁 services/                    ← Third-party service wrappers
│   │   ├── 📄 twilio.service.js        ← SMS sending functions
│   │   ├── 📄 emailjs.service.js       ← Email sending functions
│   │   └── 📄 storage.service.js       ← Firebase Storage upload helpers
│   │
│   └── 📁 utils/
│       ├── 📄 generateRefNumber.js     ← Creates unique complaint ref IDs
│       └── 📄 haversine.js             ← Distance calc for geo-fencing
│
├── 📁 functions/                       ← Firebase Cloud Functions
│   ├── 📄 index.js                     ← All Cloud Function exports
│   ├── 📄 package.json
│   └── 📁 triggers/
│       ├── 📄 onAlertCreated.js        ← Fires SMS+email when SOS triggered
│       ├── 📄 onComplaintCreated.js    ← Fires confirmation on cyber complaint
│       └── 📄 onStatusUpdated.js       ← Fires notification on status change
│
├── 📁 firestore/
│   ├── 📄 firestore.rules              ← Firestore security rules
│   └── 📄 firestore.indexes.json       ← Composite query indexes
│
├── 📁 docs/                            ← Additional documentation
│   ├── 📄 API_REFERENCE.md             ← All API endpoints documented
│   ├── 📄 DATABASE_SCHEMA.md           ← Firestore collection schemas
│   └── 📁 screenshots/                 ← UI screenshots for README
│
└── 📁 prototype/                       ← Hardware prototype files
    ├── 📄 PROTOTYPE_STATUS.md          ← Current research status
    ├── 📄 COMPONENTS.md                ← Hardware components list
    └── 📁 pi-scripts/                  ← Raspberry Pi code (when ready)
        ├── 📄 stream.py                ← Video streaming script
        └── 📄 sos_trigger.py           ← GPIO button handler
```

---

## 🔑 Key File Explanations

### `global.css`
Defines CSS custom properties used everywhere:
```css
:root {
  --color-primary: #e63946;      /* Project Raksha red */
  --color-secondary: #457b9d;    /* Trust blue */
  --color-bg: #f1faee;           /* Light background */
  --color-dark: #1d3557;         /* Dark text */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'DM Sans', sans-serif;
  --border-radius: 12px;
  --shadow: 0 4px 20px rgba(0,0,0,0.08);
}
```

### `api.js`
Central file for all backend calls — keeps API logic out of HTML files:
```javascript
const API_BASE = 'http://localhost:5000/api';

const triggerSOS = async (location) => {
  const res = await fetch(`${API_BASE}/alerts/trigger`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${getToken()}` },
    body: JSON.stringify({ location })
  });
  return res.json();
};
```

### `auth.middleware.js`
Protects every backend route:
```javascript
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split('Bearer ')[1];
  const decoded = await admin.auth().verifyIdToken(token);
  req.user = decoded;
  next();
};
```

### `.gitignore`
```
node_modules/
.env
*.log
.DS_Store
dist/
```

### `.env.example`
```
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY=your-private-key
FIREBASE_CLIENT_EMAIL=your-client-email
TWILIO_ACCOUNT_SID=your-twilio-sid
TWILIO_AUTH_TOKEN=your-twilio-token
TWILIO_PHONE_NUMBER=+1234567890
PORT=5000
```

---

## 📌 Rules for the Team

1. **Never work directly on `main`** — always use a feature branch
2. **Never commit `.env`** — only commit `.env.example`
3. **All new JS goes in `/assets/js/`** — not inline in HTML files
4. **All new CSS goes in `/assets/css/`** — no `<style>` tags in HTML
5. **Images go in `/assets/images/`** — keep them optimized (under 200KB)
6. **Comment your code** — especially API calls and Firestore queries

---

*Last updated: Phase 1 Development*
