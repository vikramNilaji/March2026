import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { Gauge, UserRound } from "lucide-react";
import Profile from "./components/ProfilePage/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ExpenseTracker from "./components/ExpenseTracker";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <Router>
      <div className="app-shell">
        <nav className="topbar" aria-label="Primary navigation">
          <NavLink to="/dashboard" className="brand-mark">
            <span className="brand-icon">VH</span>
            <span>
              <strong>VaultHub</strong>
              <small>Professional Workspace</small>
            </span>
          </NavLink>

          <div className="nav-links">
            <NavLink to="/dashboard" className="nav-pill">
              <Gauge size={18} />
              Dashboard
            </NavLink>
            <NavLink to="/profile" className="nav-pill">
              <UserRound size={18} />
              Vikram's Profile
            </NavLink>
          </div>
        </nav>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/expense-tracker" element={<ExpenseTracker />} />
            <Route path="/add-expense" element={<ExpenseForm />} />
            <Route path="/expense-list" element={<ExpenseList />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
