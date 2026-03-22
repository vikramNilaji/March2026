// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <Router>
//       <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
//         <Link to="/signup" style={{ marginRight: '10px' }}>Signup</Link>
//         <Link to="/login">Login</Link>
//       </nav>

//       <Routes>
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }


// export default App;

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc', display: 'flex', gap: '15px' }}>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        {/* 1. FIX: Map the root URL "/" to the Login component */}
        <Route path="/" element={<Login />} />

        {/* 2. Standard Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 3. OPTIONAL: A "Catch-All" route for 404 errors */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;