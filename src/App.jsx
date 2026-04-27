import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import LandingPage from './pages/LandingPage'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

// Dashboard Pages
import UserDashboard from './pages/dashboard/UserDashboard'
import TrustedContact from './pages/dashboard/TrustedContact'
import AdminDashboard from './pages/dashboard/AdminDashboard'

// Feature Pages
import SOSAlert from './pages/features/SOSAlert'
import LiveFeed from './pages/features/LiveFeed'
import EvidenceVault from './pages/features/EvidenceVault'
import IncidentReport from './pages/features/IncidentReport'
import SafetyMap from './pages/features/SafetyMap'

// Cyber Crime Pages
import CyberReport from './pages/features/cyber-crime/CyberReport'
import TrackComplaint from './pages/features/cyber-crime/TrackComplaint'
import Resources from './pages/features/cyber-crime/Resources'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboards */}
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/dashboard/trusted-contact" element={<TrustedContact />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />

        {/* Features */}
        <Route path="/sos" element={<SOSAlert />} />
        <Route path="/live-feed" element={<LiveFeed />} />
        <Route path="/evidence-vault" element={<EvidenceVault />} />
        <Route path="/incident-report" element={<IncidentReport />} />
        <Route path="/safety-map" element={<SafetyMap />} />

        {/* Cyber Crime */}
        <Route path="/cyber-crime/report" element={<CyberReport />} />
        <Route path="/cyber-crime/track" element={<TrackComplaint />} />
        <Route path="/cyber-crime/resources" element={<Resources />} />
      </Routes>
    </Router>
  )
}

export default App
