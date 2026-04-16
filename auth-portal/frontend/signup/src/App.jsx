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
    color: "#ffff", // Dark slate for readability
    fontWeight: "600",
    padding: "8px 16px",
    borderRadius: "10px",
    transition: "all 0.3s ease",
    fontSize: "0.95rem",
    border: "1px solid rgba(230, 49, 49, 0.84)",
    background: "rgb(92, 117, 202)",
    };

  return (
    <Router>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          background: "linear-gradient(to right, #60a5fa, #93c5fd)", // Light Blue Gradient
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          border:"2px solid blue",
          borderRadius:"0.5rem"
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <Link
            to="/dashboard"
            style={{
              ...linkStyle,
              background:
                "linear-gradient(to right top, #1386de, #9770ce, #d058a0, #e15464, #cd6a2b)",
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
          border:"2px solid blue",
          borderRadius:"0.5rem",
          padding: "40px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          minHeight: "100vh",
          background:
            "linear-gradient(to right top, #1326de, #a23456, #d118a0, #a15464, #ff6a2b)",
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
