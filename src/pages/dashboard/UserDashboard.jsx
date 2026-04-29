import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const [sosActive, setSosActive] = useState(false);
  const [userName] = useState("Priya"); // Hardcoded user name

  // Hardcoded data
  const deviceConnected = true;
  const isInSafeZone = true;
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
    <div className="min-h-screen bg-dark-950 text-white p-6">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Personalized Greeting */}
        <div className="text-center py-4">
          <h1 className="text-3xl font-bold text-sensual-offwhite italic">
            Welcome back, {userName}!
          </h1>
        </div>

        {/* SOS Button Section */}
        <div className="bg-primary-900/20 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 text-center">
          <button
            onClick={handleSosToggle}
            className={`w-48 h-48 rounded-full text-2xl font-bold mb-4 transition-all duration-300 ${
              sosActive
                ? 'bg-red-600 hover:bg-red-700 shadow-red-500/50 shadow-2xl animate-pulse'
                : 'bg-primary-500 hover:bg-primary-600 shadow-primary-500/50 shadow-2xl'
            }`}
          >
            {sosActive ? 'SOS ACTIVE' : 'SOS'}
          </button>
          <div className="text-xl font-semibold">
            Status: <span className={sosActive ? 'text-red-400' : 'text-green-400'}>
              {sosActive ? 'SOS Active' : 'You Are Safe'}
            </span>
          </div>
        </div>

        {/* Device Connection & Location Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Device Connection Status */}
          <div className="bg-primary-900/20 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-sensual-offwhite">Device Status</h3>
            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full ${deviceConnected ? 'bg-green-400' : 'bg-red-400'}`}></div>
              <span className="text-lg">
                {deviceConnected ? 'Raksha Device Connected' : 'Device Disconnected'}
              </span>
            </div>
          </div>

          {/* Live Location */}
          <div className="bg-primary-900/20 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-sensual-offwhite">Live Location</h3>
            <div className="aspect-video bg-dark-800 rounded-lg mb-3 overflow-hidden">
              {/* Placeholder for map - using iframe for demo */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x73b6e9c6b0c7e4e!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Live Location Map"
              ></iframe>
            </div>
            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full ${isInSafeZone ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
              <span className="text-lg">
                {isInSafeZone ? 'Inside Safe Zone' : 'Outside Safe Zone'}
              </span>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-primary-900/20 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 text-sensual-offwhite">Emergency Contacts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-center justify-between bg-dark-800/50 rounded-lg p-4">
                <div>
                  <div className="font-semibold">{contact.name}</div>
                  <div className="text-sm text-dark-400">{contact.phone}</div>
                </div>
                <button
                  onClick={() => handleCall(contact.phone)}
                  className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Call
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="bg-primary-900/20 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 text-sensual-offwhite">Recent Activity</h3>

          {/* SOS Alerts */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-sensual-peach">Recent SOS Alerts</h4>
            <div className="space-y-2">
              {recentSosAlerts.map((alert, index) => (
                <div key={index} className="flex justify-between items-center bg-dark-800/30 rounded-lg p-3">
                  <span>{alert.time}</span>
                  <span className={`px-2 py-1 rounded text-sm ${
                    alert.status === 'Resolved' ? 'bg-green-600' : 'bg-yellow-600'
                  }`}>
                    {alert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Incident Reports */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-sensual-peach">Recent Incident Reports</h4>
            <div className="space-y-2">
              {recentIncidents.map((incident, index) => (
                <div key={index} className="flex justify-between items-center bg-dark-800/30 rounded-lg p-3">
                  <span>{incident.id}</span>
                  <span className={`px-2 py-1 rounded text-sm ${
                    incident.status === 'Closed' ? 'bg-green-600' : 'bg-yellow-600'
                  }`}>
                    {incident.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cyber Crime Complaints */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-sensual-peach">Recent Cyber Crime Complaints</h4>
            <div className="space-y-2">
              {recentCyberComplaints.map((complaint, index) => (
                <div key={index} className="flex justify-between items-center bg-dark-800/30 rounded-lg p-3">
                  <span>{complaint.ref}</span>
                  <span className={`px-2 py-1 rounded text-sm ${
                    complaint.status === 'Resolved' ? 'bg-green-600' : 'bg-yellow-600'
                  }`}>
                    {complaint.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="bg-primary-900/20 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 text-sensual-offwhite">Quick Actions</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/report-incident" className="block">
              <button className="w-full bg-primary-500 hover:bg-primary-600 px-4 py-3 rounded-lg font-semibold transition-colors">
                Report an Incident
              </button>
            </Link>
            <Link to="/cyber-complaint" className="block">
              <button className="w-full bg-primary-500 hover:bg-primary-600 px-4 py-3 rounded-lg font-semibold transition-colors">
                File Cyber Complaint
              </button>
            </Link>
            <Link to="/evidence-vault" className="block">
              <button className="w-full bg-primary-500 hover:bg-primary-600 px-4 py-3 rounded-lg font-semibold transition-colors">
                Open Evidence Vault
              </button>
            </Link>
            <Link to="/safety-map" className="block">
              <button className="w-full bg-primary-500 hover:bg-primary-600 px-4 py-3 rounded-lg font-semibold transition-colors">
                View Safety Map
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;
