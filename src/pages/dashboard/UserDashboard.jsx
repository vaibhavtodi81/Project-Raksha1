import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for Leaflet default icon issue in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Helper component to update map view when location changes
const RecenterMap = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position, 13);
    }
  }, [position, map]);
  return null;
};

const UserDashboard = () => {
  const [sosActive, setSosActive] = useState(false);
  const [userName] = useState("Priya");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };

    const stopCamera = () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
    };

    if (sosActive) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => stopCamera();
  }, [sosActive]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocationError(error.message);
          // Fallback to a default location (e.g., Bangalore)
          setUserLocation([12.9716, 77.5946]);
        }
      );
    } else {
      setLocationError("Geolocation not supported");
      setUserLocation([12.9716, 77.5946]);
    }
  }, []);

  // Hardcoded data
  const deviceConnected = true;
  const isInSafeZone = true;
  const wellnessScore = 92;
  const incidentsCount = 2;
  const cyberComplaintsCount = 1;

  const emergencyContacts = [
    { name: "Mom", phone: "+91 9876543210" },
    { name: "Dad", phone: "+91 9876543211" },
    { name: "Brother", phone: "+91 9876543212" },
    { name: "Friend", phone: "+91 9876543213" },
    { name: "Emergency", phone: "112" }
  ];

  const recentSosAlerts = [
    { time: "2024-01-15 14:30", status: "Resolved" },
    { time: "2024-01-10 09:15", status: "Resolved" },
    { time: "2024-01-05 22:45", status: "Resolved" }
  ];

  const recentIncidents = [
    { id: "INC-2024-001", status: "Under Investigation" },
    { id: "INC-2024-002", status: "Closed" }
  ];

  const recentCyberComplaints = [
    { ref: "CYB-2024-001", status: "In Progress" },
    { ref: "CYB-2024-002", status: "Resolved" }
  ];

  const handleSosToggle = () => {
    setSosActive(!sosActive);
  };

  const handleCall = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sensual-offwhite via-dark-50 to-sensual-cream text-sensual-black flex overflow-hidden">
      
      {/* Sidebar Navigation */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-sensual-taupe/20 transition-all duration-300 flex flex-col shadow-sm`}>
        <div className="p-6 border-b border-sensual-taupe/20">
          <h2 className="text-xl font-bold italic text-sensual-burgundy">Raksha</h2>
          <p className="text-xs text-sensual-black/60 uppercase tracking-widest font-bold">Your Shield</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-3">
          <Link to="/dashboard" className="w-full text-left px-4 py-3 rounded-xl bg-sensual-burgundy/10 text-sensual-burgundy font-bold transition-all hover:bg-sensual-burgundy/20 block">
            {sidebarOpen ? '🏠 Dashboard' : '🏠'}
          </Link>
          <Link to="/sos" className="w-full text-left px-4 py-3 rounded-xl text-sensual-black/70 hover:bg-sensual-burgundy/5 transition-all block font-medium">
            {sidebarOpen ? '🆘 SOS Alert' : '🆘'}
          </Link>
          <Link to="/evidence-vault" className="w-full text-left px-4 py-3 rounded-xl text-sensual-black/70 hover:bg-sensual-burgundy/5 transition-all block font-medium">
            {sidebarOpen ? '📁 Evidence' : '📁'}
          </Link>
          <Link to="/safety-map" className="w-full text-left px-4 py-3 rounded-xl text-sensual-black/70 hover:bg-sensual-burgundy/5 transition-all block font-medium">
            {sidebarOpen ? '🗺️ Safety Map' : '🗺️'}
          </Link>
          <Link to="/incident-report" className="w-full text-left px-4 py-3 rounded-xl text-sensual-black/70 hover:bg-sensual-burgundy/5 transition-all block font-medium">
            {sidebarOpen ? '📋 Reports' : '📋'}
          </Link>
          <Link to="/dashboard" className="w-full text-left px-4 py-3 rounded-xl text-sensual-black/70 hover:bg-sensual-burgundy/5 transition-all block font-medium">
            {sidebarOpen ? '⚙️ Settings' : '⚙️'}
          </Link>
        </nav>

        <div className="p-4 border-t border-sensual-taupe/20">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full text-center py-2 text-sensual-taupe hover:text-sensual-burgundy transition-colors"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Header */}
        <div className="bg-white border-b border-sensual-taupe/20 px-8 py-6 sticky top-0 z-10 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold italic text-sensual-burgundy">Welcome, {userName}! 👋</h1>
              <p className="text-sensual-black/70 text-sm mt-1 font-medium">Everything's looking good today</p>
            </div>
            <div className="text-right">
              <p className="text-sensual-black/60 text-xs uppercase tracking-widest font-bold">Last check</p>
              <p className="text-sensual-burgundy font-bold">Just now</p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-8 space-y-8">

          {/* Top Status Cards - Simplified */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Safety Status */}
            <div className="bg-white/70 backdrop-blur border border-sensual-taupe/10 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <p className="text-sensual-black/70 text-xs uppercase tracking-widest font-bold">Safety Status</p>
                <div className={`w-3 h-3 rounded-full ${sosActive ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'}`}></div>
              </div>
              <p className={`text-3xl font-bold italic ${sosActive ? 'text-red-600' : 'text-emerald-600'}`}>
                {sosActive ? 'Alert' : 'Safe'}
              </p>
              <p className="text-sensual-black/60 text-xs mt-2 font-medium">{sosActive ? 'Active' : 'No alerts'}</p>
            </div>

            {/* Quick Checkup */}
            <div className="bg-white/70 backdrop-blur border border-sensual-taupe/10 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <p className="text-sensual-black/70 text-xs uppercase tracking-widest font-bold mb-3">Wellness</p>
              <p className="text-3xl font-bold text-sensual-peach">{wellnessScore}%</p>
              <p className="text-sensual-black/60 text-xs mt-2 font-medium">All systems good</p>
            </div>

            {/* Activity Summary */}
            <div className="bg-white/70 backdrop-blur border border-sensual-taupe/10 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <p className="text-sensual-black/70 text-xs uppercase tracking-widest font-bold mb-3">Recent Activity</p>
              <p className="text-3xl font-bold text-sensual-burgundy">{incidentsCount}</p>
              <p className="text-sensual-black/60 text-xs mt-2 font-medium">Reports this month</p>
            </div>

            {/* Device Health */}
            <div className="bg-white/70 backdrop-blur border border-sensual-taupe/10 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <p className="text-sensual-black/70 text-xs uppercase tracking-widest font-bold mb-3">Device</p>
              <p className={`text-3xl font-bold ${deviceConnected ? 'text-emerald-600' : 'text-red-600'}`}>
                {deviceConnected ? '✓' : '!'}
              </p>
              <p className="text-sensual-black/60 text-xs mt-2 font-medium">{deviceConnected ? 'Connected' : 'Check'}</p>
            </div>
          </div>

          {/* Main Action & Location Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* SOS Button Section */}
            <div className="lg:col-span-1 bg-gradient-to-br from-sensual-burgundy/20 via-sensual-peach/20 to-sensual-taupe/10 backdrop-blur border border-sensual-peach/30 rounded-2xl p-8 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all">
              <div className="text-center">
                <p className="text-sensual-black/80 text-xs uppercase tracking-widest mb-6 font-bold">In Need?</p>
                <button
                  onClick={handleSosToggle}
                  className={`w-28 h-28 rounded-full text-4xl font-bold mb-6 transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-105 overflow-hidden relative ${
                    sosActive
                      ? 'bg-black shadow-red-300 animate-pulse border-4 border-red-500'
                      : 'bg-sensual-burgundy hover:bg-sensual-burgundy/90 shadow-sensual-burgundy/30 text-white'
                  }`}
                >
                  {sosActive ? (
                    <video 
                      ref={videoRef} 
                      autoPlay 
                      muted 
                      playsInline 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    '🆘'
                  )}
                  {sosActive && (
                    <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                  )}
                </button>
                <p className="text-sensual-black/70 text-xs mb-2 font-medium">Tap to activate</p>
                <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${sosActive ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                  {sosActive ? 'Alert Active' : "You're Safe"}
                </div>
              </div>
            </div>

            {/* Live Location Map */}
            <div className="lg:col-span-2 bg-white/70 backdrop-blur border border-sensual-taupe/10 rounded-2xl p-6 overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-bold text-sensual-burgundy">Your Location</h3>
                  <p className="text-sensual-black/70 text-xs mt-1 font-medium">Real-time tracking</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${isInSafeZone ? 'bg-emerald-500' : 'bg-yellow-500'}`}></div>
                  <span className="text-xs text-sensual-black/80 uppercase tracking-widest font-bold">
                    {isInSafeZone ? '✓ Safe Zone' : '⚡ Alert Zone'}
                  </span>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-sensual-taupe/10 to-sensual-cream rounded-xl overflow-hidden border border-sensual-taupe/10 relative">
                {userLocation ? (
                  <MapContainer 
                    center={userLocation} 
                    zoom={13} 
                    style={{ height: '100%', width: '100%' }}
                    zoomControl={false}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={userLocation}>
                      <Popup>
                        You are here. <br /> {isInSafeZone ? "Safe Zone" : "Alert Zone"}
                      </Popup>
                    </Marker>
                    <RecenterMap position={userLocation} />
                  </MapContainer>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center space-y-3">
                    <div className="w-8 h-8 border-4 border-sensual-burgundy border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-sensual-taupe text-sm font-medium">
                      {locationError ? `Location Error: ${locationError}` : "Locating you..."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Emergency & Device Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Device Status */}
            <div className="bg-white/70 backdrop-blur border border-sensual-taupe/10 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold text-sensual-burgundy mb-4">Device Status</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${deviceConnected ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                  <div>
                    <p className="text-sensual-black font-bold text-sm">Connection</p>
                    <p className="text-sensual-black/60 text-xs font-medium">{deviceConnected ? 'All Good' : 'Please Check'}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-sensual-taupe/10">
                  <p className="text-xs uppercase tracking-widest text-sensual-black/70 font-bold mb-3">Signal</p>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4].map((bar) => (
                      <div key={bar} className="h-5 flex-1 bg-gradient-to-t from-sensual-peach to-sensual-burgundy rounded-sm opacity-70 hover:opacity-100 transition-opacity"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Emergency Contacts */}
            <div className="lg:col-span-2 bg-white/70 backdrop-blur border border-sensual-taupe/10 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold text-sensual-burgundy mb-4">Quick Reach Out</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {emergencyContacts.slice(0, 5).map((contact, index) => (
                  <div key={index} className="bg-gradient-to-br from-sensual-burgundy/5 to-sensual-peach/5 rounded-xl p-4 hover:shadow-md transition-all border border-sensual-taupe/10">
                    <p className="text-sensual-black font-bold text-sm mb-1">{contact.name}</p>
                    <p className="text-sensual-black/70 text-xs mb-3 font-medium">{contact.phone}</p>
                    <button
                      onClick={() => handleCall(contact.phone)}
                      className="w-full bg-sensual-burgundy hover:bg-sensual-burgundy/90 px-2 py-2 rounded-lg text-xs font-semibold text-white transition-all hover:scale-105"
                    >
                      📞 Call
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Recent Alerts & Incidents */}
            <div className="bg-white/70 backdrop-blur border border-sensual-taupe/10 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold text-sensual-burgundy mb-4">Activity</h3>
              
              <div className="mb-5">
                <p className="text-xs uppercase tracking-widest text-sensual-black/70 font-bold mb-3">Recent Alerts</p>
                <div className="space-y-2">
                  {recentSosAlerts.map((alert, index) => (
                    <div key={index} className="flex justify-between items-center bg-gradient-to-r from-emerald-50 to-transparent rounded-lg p-3 border border-emerald-100/50">
                      <span className="text-sensual-black/70 text-sm font-medium">{alert.time}</span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
                        Resolved
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-sensual-taupe/10 pt-5">
                <p className="text-xs uppercase tracking-widest text-sensual-black/70 font-bold mb-3">Your Reports</p>
                <div className="space-y-2">
                  {recentIncidents.map((incident, index) => (
                    <div key={index} className="flex justify-between items-center bg-gradient-to-r from-sensual-peach/10 to-transparent rounded-lg p-3 border border-sensual-peach/20">
                      <span className="text-sensual-black/70 text-sm font-medium">{incident.id}</span>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        incident.status === 'Closed' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {incident.status === 'Closed' ? 'Done' : 'In Review'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cyber Safety */}
            <div className="bg-white/70 backdrop-blur border border-sensual-taupe/10 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold text-sensual-burgundy mb-4">Cyber Safety</h3>
              <div className="space-y-3 mb-5">
                {recentCyberComplaints.map((complaint, index) => (
                  <div key={index} className="bg-gradient-to-r from-sensual-burgundy/5 to-transparent rounded-lg p-4 border border-sensual-taupe/10">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sensual-black font-bold text-sm">{complaint.ref}</p>
                        <p className="text-sensual-black/60 text-xs mt-1 font-medium">Reference</p>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        complaint.status === 'Resolved' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {complaint.status === 'Resolved' ? 'Closed' : 'Open'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/cyber-complaint" className="block">
                <button className="w-full bg-sensual-burgundy hover:bg-sensual-burgundy/90 px-4 py-2.5 rounded-lg font-semibold text-white transition-all text-sm uppercase tracking-wider hover:shadow-md">
                  Report Something
                </button>
              </Link>
            </div>
          </div>

          {/* Quick Actions Footer */}
          <div className="bg-gradient-to-r from-sensual-burgundy/10 via-sensual-peach/10 to-sensual-taupe/5 border border-sensual-taupe/10 rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-sensual-burgundy mb-4">Quick Access</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link to="/report-incident" className="block">
                <button className="w-full bg-white hover:bg-sensual-offwhite px-4 py-3 rounded-xl font-semibold text-sensual-burgundy transition-all text-sm border border-sensual-taupe/10 hover:shadow-md">
                  📝 Report
                </button>
              </Link>
              <Link to="/cyber-complaint" className="block">
                <button className="w-full bg-white hover:bg-sensual-offwhite px-4 py-3 rounded-xl font-semibold text-sensual-burgundy transition-all text-sm border border-sensual-taupe/10 hover:shadow-md">
                  🔐 Cyber
                </button>
              </Link>
              <Link to="/evidence-vault" className="block">
                <button className="w-full bg-white hover:bg-sensual-offwhite px-4 py-3 rounded-xl font-semibold text-sensual-burgundy transition-all text-sm border border-sensual-taupe/10 hover:shadow-md">
                  📁 Vault
                </button>
              </Link>
              <Link to="/safety-map" className="block">
                <button className="w-full bg-white hover:bg-sensual-offwhite px-4 py-3 rounded-xl font-semibold text-sensual-burgundy transition-all text-sm border border-sensual-taupe/10 hover:shadow-md">
                  🗺️ Map
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
