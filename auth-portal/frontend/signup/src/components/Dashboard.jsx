import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Welcome to Your Dashboard!</h1>
      <p>You have successfully logged in using your credentials.</p>
      
      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        border: '1px solid #ddd', 
        borderRadius: '8px',
        display: 'inline-block' 
      }}>
        <h3>Available Apps</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}>
            <button onClick={() => alert("Redirecting to Expense Tracker...")}>
              Open Expense Tracker
            </button>
          </li>
          <li style={{ margin: '10px 0' }}>
            <button disabled>More Apps Coming Soon...</button>
          </li>
        </ul>
      </div>

      <div style={{ marginTop: '50px' }}>
        <button 
          onClick={handleLogout} 
          style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer', borderRadius: '5px' }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;