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
// import { useState } from "react";

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

  const isAuthenticated = !!localStorage.getItem("token");
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
        <div
          style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#1f2937" }}
        >
          🚀 Portal
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <Link to="/login" style={linkStyle}>
            Login
          </Link>

          <Link to="/signup" style={linkStyle}>
            Signup
          </Link>
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
        </Routes>
      </main>
    </Router>
  );
}

export default App;

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Navigate,
// } from "react-router-dom";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// import ExpenseTracker from "./components/ExpenseTracker";
// import ExpenseForm from "./components/ExpenseForm";
// import ExpenseList from "./components/ExpenseList";
// import { useState } from "react";

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   // Handlers
//   function handleLogin() {
//     setLoggedIn(true);
//   }

//   function handleLogout() {
//     setLoggedIn(false);
//   }

//   // Common link style
//   const linkStyle = {
//     textDecoration: "none",
//     color: "#4f46e5",
//     fontWeight: "600",
//     padding: "8px 16px",
//     borderRadius: "8px",
//     fontSize: "0.95rem",
//     border: "1px solid transparent",
//   };

//   return (
//     <Router>
//       {/* Navbar */}
//       <nav
//         style={{
//           padding: "15px 40px",
//           background: "rgba(255, 255, 255, 0.8)",
//           backdropFilter: "blur(10px)",
//           borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           position: "sticky",
//           top: 0,
//           zIndex: 1000,
//           boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
//         }}
//       >
//         <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>🚀 Portal</div>

//         <div style={{ display: "flex", gap: "10px" }}>
//           {!loggedIn ? (
//             <>
//               <Link to="/signup" style={linkStyle}>
//                 Signup
//               </Link>
//               <Link to="/login" style={linkStyle}>
//                 Login
//               </Link>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/dashboard"
//                 style={{
//                   ...linkStyle,
//                   background: "#4f46e5",
//                   color: "white",
//                 }}
//               >
//                 Dashboard
//               </Link>

//               <button
//                 onClick={handleLogout}
//                 style={{
//                   ...linkStyle,
//                   cursor: "pointer",
//                   background: "#ef4444",
//                   color: "white",
//                   border: "none",
//                 }}
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main
//         style={{
//           padding: "40px 20px",
//           maxWidth: "1200px",
//           margin: "0 auto",
//         }}
//       >
//         <Routes>
//           <Route path="/" element={<Navigate to="/login" />} />

//           <Route path="/signup" element={<Signup />} />

//           <Route path="/login" element={<Login handleLogin={handleLogin} />} />

//           <Route
//             path="/dashboard"
//             element={loggedIn ? <Dashboard /> : <Navigate to="/login" />}
//           />

//           <Route
//             path="/expense-tracker"
//             element={loggedIn ? <ExpenseTracker /> : <Navigate to="/login" />}
//           />

//           <Route
//             path="/add-expense"
//             element={loggedIn ? <ExpenseForm /> : <Navigate to="/login" />}
//           />

//           <Route
//             path="/expense-list"
//             element={loggedIn ? <ExpenseList /> : <Navigate to="/login" />}
//           />

//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// export default App;
