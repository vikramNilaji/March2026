import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Profile from "./components/ProfilePage/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ExpenseTracker from "./components/ExpenseTracker";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Calculator from "./components/Calculator/Calculator";

function App() {
  const linkStyle = {
    textDecoration: "none",
    color: "#1e293b", // Dark slate for readability
    fontWeight: "600",
    padding: "8px 16px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    fontSize: "0.95rem",
    border: "1px solid rgba(0,0,0,0.05)",
    background: "#fef08a", // Light Yellow accent
  };

  return (
    <Router>
      <nav
        style={{
          padding: "15px 40px",
          /* The line below MUST have quotes around the gradient */
          backgroundImage:
            "linear-gradient(to right top, #60a5fa, #93c5fd, #fef08a)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <Link
            to="/dashboard"
            style={{
              ...linkStyle,
              background: "#1d4ed8", // Strong Blue
              color: "white",
            }}
          >
            Dashboard
          </Link>

          <Link to="/profile" style={linkStyle}>
            Vikram's Profile
          </Link>
        </div>
      </nav>

      {/* Main Container to give space below nav */}
      <main
        style={{
          padding: "40px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          minHeight: "100vh",
          background: "#f8fafc", // Very light blue-grey background for the page
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
          <Route path="/add-expense" element={<ExpenseForm />} />
          <Route path="/expense-list" element={<ExpenseList />} />
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
