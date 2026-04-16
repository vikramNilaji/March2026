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
    color: "#4f46e5",
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
          padding: "12px 40px",
          background: "linear-gradient(135deg, #293b 0%, #72aa 100%)", // Professional Dark Slate
          borderBottom: "1px solid rgba(175, 202, 21, 0.81)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px rgba(120, 175, 31, 0.88)",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <Link
            to="/dashboard"
            style={{
              ...linkStyle,
              background: "#4f46e5",
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
        style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}
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
