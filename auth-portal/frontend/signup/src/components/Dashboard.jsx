import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Calculator,
  ClipboardList,
  LogOut,
  Settings,
  WalletCards,
} from "lucide-react";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const API_URL = "https://vaulthub-xm1r.onrender.com/api/expenses/add";

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (savedUser) {
          setUser(savedUser);
        } else {
          const res = await fetch(`${API_URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const data = await res.json();
          setUser(data);
        }
      } catch (error) {
        console.error("Dashboard error:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) return <div className="loader">Loading your workspace...</div>;

  const dashboardCards = [
    {
      icon: WalletCards,
      title: "Expense Tracker",
      copy: "Manage daily budget entries, category details, and spending history.",
      action: "Open App",
      onClick: () => navigate("/expense-tracker"),
      variant: "primary",
    },
    {
      icon: Calculator,
      title: "Calculator",
      copy: "Run quick calculations from the same professional workspace.",
      action: "Open App",
      onClick: () => navigate("/calculator"),
      variant: "primary",
    },
    {
      icon: Settings,
      title: "Profile Settings",
      copy: "Review portfolio details and recruiter-ready profile material.",
      action: "View Profile",
      onClick: () => navigate("/profile"),
      variant: "secondary",
    },
    {
      icon: ClipboardList,
      title: "Task Manager",
      copy: "A productivity module reserved for the next VaultHub upgrade.",
      action: "Coming Soon",
      disabled: true,
    },
  ];

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div>
          <p className="dashboard-kicker">Workspace Overview</p>
          <h2>VaultHub Dashboard</h2>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={14} />
          Logout
        </button>
      </nav>

      <header className="dashboard-header">
        <div>
          <span className="status-chip">{user?.role || "Authenticated"}</span>
          <h1>Welcome back, {user?.name || "Developer"}</h1>
          <p>
            Signed in as <strong>{user?.email || "workspace user"}</strong>
          </p>
        </div>
        <div className="summary-panel">
          <span>VaultHub</span>
          <strong>4</strong>
          <small>professional modules</small>
        </div>
      </header>

      <main className="dashboard-grid">
        {dashboardCards.map((card) => {
          const Icon = card.icon;
          return (
            <article
              className={`app-card ${card.disabled ? "disabled" : ""}`}
              key={card.title}
            >
              <div className="card-icon">
                <Icon size={26} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              <button
                className={
                  card.variant === "secondary" ? "secondary-btn" : "launch-btn"
                }
                onClick={card.onClick}
                disabled={card.disabled}
              >
                {card.action}
                {!card.disabled && <ArrowRight size={17} />}
              </button>
            </article>
          );
        })}
      </main>
    </div>
  );
};

export default Dashboard;
