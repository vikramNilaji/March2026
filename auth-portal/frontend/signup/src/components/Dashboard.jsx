import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Check if token exists in LocalStorage
    const token = localStorage.getItem('token');
    
    if (!token) {
      // If no token, redirect to login page immediately
      alert("Please login to access the dashboard.");
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    // 2. Clear the token and go back to login
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
  <h1>Welcome to Your Dashboard!</h1>
  <p>You have successfully logged in using your credentials.</p>

  <div className="dashboard-card">
    <h3>Available Apps</h3>
    <ul>
      <li>
        <button onClick={() => alert("Redirecting to Expense Tracker...")}>
          Open Expense Tracker
        </button>
      </li>
      <li>
        <button disabled>More Apps Coming Soon...</button>
      </li>
    </ul>
  </div>

  <button onClick={handleLogout} className="logout-btn">
    Logout
  </button>
</div>
  );
};

export default Dashboard;