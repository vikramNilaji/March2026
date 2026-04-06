import React, { useEffect, useState } from 'react' ;
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css"; 
const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const API_URL = "http://localhost:5000/api/expenses/add";

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

     
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const savedUser = JSON.parse(localStorage.getItem('user'));
        
        if (savedUser) {
          setUser(savedUser);
        } else {
          // If you have a /me or /profile route on backend, fetch it here
           const res = await fetch(`${API_URL}/profile`, { 
             headers: { Authorization: `Bearer ${token}` } 
           });
           const data = await res.json();
           setUser(data);
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