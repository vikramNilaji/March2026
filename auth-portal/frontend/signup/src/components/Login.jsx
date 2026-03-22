import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://march2026-production.up.railway.app/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        // SAVE TOKEN TO LOCAL STORAGE
        localStorage.setItem("token", data.token);
        alert("Logged in successfully!");
        navigate("/dashboard");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error("Login Error:", err);
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
