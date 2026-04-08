import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ExpenseTracker from "./components/ExpenseTracker";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  // Common style for the links
  const linkStyle = {
    textDecoration: "none",
    color: "#4f46e5", // Indigo color
    fontWeight: "600",
    padding: "8px 16px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    fontSize: "0.95rem",
    border: "1px solid transparent",
  };

  return (
    <Router>
      <nav
        style={{
          padding: "15px 40px",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)", // Blurred background effect
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "space-between", // Pushes content to sides
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#1f2937" }}>
          🚀 Portal
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <Link to="/signup" style={linkStyle}>Signup</Link>
          <Link to="/login" style={linkStyle}>Login</Link>
          <Link 
            to="/dashboard" 
            style={{
              ...linkStyle,
              background: "#4f46e5",
              color: "white"
            }}
          >
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Main Container to give space below nav */}
      <main style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
          <Route path="/add-expense" element={<ExpenseForm />} />
          <Route path="/expense-list" element={<ExpenseList />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;