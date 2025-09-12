import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import gurus from "./gurus.jpg";

// Dummy pages
function GameImprovement() { return <h2>Game Improvement / Club Recommendations Page</h2>; }
function DistanceToHole() { return <h2>Distance to Hole Page</h2>; }
function Handicap() { return <h2>Handicap Page</h2>; }
function Scorecard() { return <h2>Scorecard Page</h2>; }

// Profile / Onboarding page
function Profile({ profileData, setProfileData }) {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(!profileData.name);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🏌️‍♂️ Profile Setup</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px", margin: "0 auto" }}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            disabled={!editing}
            style={inputStyle}
          />
        </label>

        <label>
          Handicap:
          <input
            type="number"
            name="handicap"
            value={profileData.handicap}
            onChange={handleChange}
            disabled={!editing}
            style={inputStyle}
          />
        </label>

        <label>
          Favorite Club:
          <input
            type="text"
            name="favoriteClub"
            value={profileData.favoriteClub}
            onChange={handleChange}
            disabled={!editing}
            style={inputStyle}
          />
        </label>

        {editing ? (
          <button style={buttonStyle} onClick={() => setEditing(false)}>
            Save
          </button>
        ) : (
          <button style={buttonStyle} onClick={() => setEditing(true)}>
            Edit Answers
          </button>
        )}

        <button style={{ ...buttonStyle, backgroundColor: "darkred" }} onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
}

// Main App
function App() {
  const [profileData, setProfileData] = useState({
    name: "",
    handicap: "",
    favoriteClub: "",
  });

  return (
    <Router>
      <div style={{ 
        backgroundImage: `url(${gurus})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        paddingTop: "50px",
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "40px", textShadow: "2px 2px 6px black" }}>
          🏌️‍♂️ Golf App
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "300px", margin: "0 auto" }}>
          <Link to="/game-improvement" style={navButtonStyle}>Game Improvement / Club Recommendations</Link>
          <Link to="/distance-to-hole" style={navButtonStyle}>Distance to Hole</Link>
          <Link to="/handicap" style={navButtonStyle}>Handicap</Link>
          <Link to="/scorecard" style={navButtonStyle}>Scorecard</Link>
          <Link to="/profile" style={navButtonStyle}>Profile</Link>
        </div>
      </div>

      <Routes>
        <Route path="/game-improvement" element={<GameImprovement />} />
        <Route path="/distance-to-hole" element={<DistanceToHole />} />
        <Route path="/handicap" element={<Handicap />} />
        <Route path="/scorecard" element={<Scorecard />} />
        <Route path="/profile" element={<Profile profileData={profileData} setProfileData={setProfileData} />} />
        {/* Default route redirects to profile on first visit */}
        <Route path="*" element={<Profile profileData={profileData} setProfileData={setProfileData} />} />
      </Routes>
    </Router>
  );
}

// Styles
const containerStyle = {
  paddingTop: "50px",
  textAlign: "center",
  color: "white",
  minHeight: "100vh",
  backgroundImage: `url(${gurus})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  textShadow: "1px 1px 4px black",
};

const titleStyle = {
  fontSize: "2.5rem",
  marginBottom: "30px",
};

const inputStyle = {
  marginLeft: "10px",
  padding: "8px",
  borderRadius: "6px",
  border: "none",
  fontSize: "1rem",
};

const buttonStyle = {
  padding: "12px",
  backgroundColor: "green",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "bold",
};

const navButtonStyle = {
  ...buttonStyle,
  backgroundColor: "rgba(0,128,0,0.8)",
  textDecoration: "none",
  display: "block",
};

export default App;
