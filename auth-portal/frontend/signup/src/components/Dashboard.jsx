// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "./Login.css"

// const Dashboard = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // 1. Check if token exists in LocalStorage
//     const token = localStorage.getItem('token');
    
//     if (!token) {
//       // If no token, redirect to login page immediately
//       alert("Please login to access the dashboard.");
//       navigate('/login');
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     // 2. Clear the token and go back to login
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <div className="dashboard-container">
//   <h1>Welcome to Your Dashboard!</h1>
//   <p>You have successfully logged in using your credentials.</p>

//   <div className="dashboard-card">
//     <h3>Available Apps</h3>
//     <ul>
//       <li>
//         <button onClick={() => alert("Redirecting to Expense Tracker...")}>
//           Open Expense Tracker
//         </button>
//       </li>
//       <li>
//         <button disabled>More Apps Coming Soon...</button>
//       </li>
//     </ul>
//   </div>

//   <button onClick={handleLogout} className="logout-btn">
//     Logout
//   </button>
// </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from 'react' ;
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css"; // Ensure you rename Login.css to Dashboard.css for clarity

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // REPLACE THIS with your actual Railway URL
  const API_URL = "https://march2026-production.up.railway.app";

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      // 1. If no token, kick them out immediately
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        // 2. Validate token with Backend (Optional but Recommended)
        // For now, we will use the user data saved during login or fetch a profile
        const savedUser = JSON.parse(localStorage.getItem('user'));
        
        if (savedUser) {
          setUser(savedUser);
        } else {
          // If you have a /me or /profile route on backend, fetch it here
          // const res = await fetch(`${API_URL}/profile`, { 
          //   headers: { Authorization: `Bearer ${token}` } 
          // });
          // const data = await res.json();
          // setUser(data);
        }
      } catch (error) {
        console.error("Dashboard error:", error);
        localStorage.removeItem('token');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (loading) return <div className="loader">Loading your workspace...</div>;

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <h2>Personal Portal</h2>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </nav>

      <header className="dashboard-header">
        <h1>Welcome back, {user?.name || "Developer"}! 👋</h1>
        <p>Logged in as: <strong>{user?.email}</strong></p>
      </header>

      <main className="dashboard-grid">
        {/* Expense Tracker Card */}
        <div className="app-card">
          <div className="card-icon">💰</div>
          <h3>Expense Tracker</h3>
          <p>Manage your daily budget and track spending.</p>
          <button 
            className="launch-btn"
            onClick={() => navigate('/expense-tracker')}
          >
            Open App
          </button>
        </div>

        {/* To-Do List Card (Coming Soon) */}
        <div className="app-card disabled">
          <div className="card-icon">📝</div>
          <h3>Task Manager</h3>
          <p>Stay organized with a simple to-do list.</p>
          <button disabled className="coming-soon-btn">Coming Soon</button>
        </div>

        {/* Settings Card */}
        <div className="app-card">
          <div className="card-icon">⚙️</div>
          <h3>Account Settings</h3>
          <p>Update your profile and security options.</p>
          <button className="secondary-btn">Edit Profile</button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;