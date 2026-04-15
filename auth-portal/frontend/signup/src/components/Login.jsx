import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch("https://vaulthub-xm1r.onrender.com/signin", { // Verify this path!
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // 1. Check if the server actually returned JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server sent back HTML instead of JSON. Check your URL path!");
      }

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Logged in successfully!");
        navigate("/dashboard");
        
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login Error:", err.message);
      alert("Login Error: " + err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Sign In</h2>

      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
<button type="submit" disabled={isLoading}>
          {isLoading ? <div className="spinner"></div> : "Log in"}
        </button>
      </form>
      <h2>Guest Login Credentials</h2>
      <h3 style={{color:"black"}}>Email : guest@gmail.com </h3>
      <h3 style={{color:"black"}}>Password: 123456</h3>
    </div>
  );
};

export default Login;
