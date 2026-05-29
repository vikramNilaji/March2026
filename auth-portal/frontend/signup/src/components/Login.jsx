import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck, UserRoundCheck } from "lucide-react";
import "./Login.css";

const guestUser = {
  name: "Guest Recruiter",
  email: "guest@vaulthub.dev",
  role: "Guest Access",
};

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setMessage({ type: "", text: "" });
  };

  const validateForm = () => {
    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }
    if (!formData.password) return "Please enter your password.";
    return "";
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationError = validateForm();

    if (validationError) {
      setMessage({ type: "error", text: validationError });
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("https://vaulthub-xm1r.onrender.com/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("The server response was not valid JSON.");
      }

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      } else {
        setMessage({
          type: "error",
          text: data.error || data.message || "Login failed",
        });
      }
    } catch (err) {
      console.error("Login Error:", err.message);
      setMessage({
        type: "error",
        text: "Unable to sign in right now. Please check your connection.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = () => {
    localStorage.setItem("token", "guest-access-token");
    localStorage.setItem("user", JSON.stringify(guestUser));
    navigate("/dashboard");
  };

  return (
    <section className="auth-page">
      <div className="auth-intro">
        <span className="eyebrow">
          <ShieldCheck size={18} />
          Secure MERN Workspace
        </span>
        <h1>Professional VaultHub access for work, demos, and reviews.</h1>
        <p>
          Sign in to continue, or enter instantly as a guest to explore the
          dashboard without credentials.
        </p>
      </div>

      <div className="login-container">
        <div className="form-heading">
          <h2>Sign In</h2>
          <p>Access your personal VaultHub dashboard.</p>
        </div>

        {message.text && (
          <div className={`form-message ${message.type}`}>{message.text}</div>
        )}

        <form onSubmit={handleLogin} className="login-form" noValidate>
          <label>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              autoComplete="email"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => updateField("password", e.target.value)}
              autoComplete="current-password"
            />
          </label>
          <button type="submit" className="primary-auth-btn" disabled={isLoading}>
            {isLoading ? <span className="spinner" /> : "Log in"}
            {!isLoading && <ArrowRight size={18} />}
          </button>
        </form>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <button className="guest-login-btn" onClick={handleGuestLogin}>
          <UserRoundCheck size={19} />
          Guest Login
        </button>

        <div className="signup-prompt">
          <span>New to VaultHub?</span>
          <button onClick={() => navigate("/signup")}>Create account</button>
        </div>
      </div>
    </section>
  );
};

export default Login;
