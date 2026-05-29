import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import "./Signup.css";

const API_BASE_URL = "https://vaulthub-xm1r.onrender.com";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const passwordHelp = useMemo(() => {
    if (!formData.password) return "Use at least 6 characters.";
    if (formData.password.length < 6) return "Password is too short.";
    return "Password length looks good.";
  }, [formData.password]);

  const formdataHandle = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage({ type: "", text: "" });
  };

  const validateForm = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();

    if (name.length < 2) return "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Please enter a valid email.";
    if (formData.password.length < 6) {
      return "Password must be at least 6 characters.";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();

    if (validationError) {
      setMessage({ type: "error", text: validationError });
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          name: formData.name.trim(),
          email: formData.email.trim(),
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || "Signup failed");
      }

      setMessage({
        type: "success",
        text: "Account created. Redirecting you to login...",
      });
      window.setTimeout(() => navigate("/login"), 900);
    } catch (err) {
      setMessage({ type: "error", text: err.message || "Signup failed" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-page signup-page">
      <div className="auth-intro">
        <span className="eyebrow">
          <ShieldCheck size={18} />
          Secure MERN Workspace
        </span>
        <h1>Create access for your VaultHub workspace.</h1>
        <p>
          Register with a clean account flow, then use the dashboard to manage
          profile, expenses, and project modules.
        </p>
      </div>

      <div className="signup-container">
        <div className="form-heading">
          <h2>Create Account</h2>
          <p>Start with your name, email, and a secure password.</p>
        </div>

        {message.text && (
          <div className={`form-message ${message.type}`}>{message.text}</div>
        )}

        <form onSubmit={handleSubmit} className="signup-form" noValidate>
          <label>
            Full Name
            <input
              type="text"
              placeholder="Vikram C. Nilaji"
              name="name"
              value={formData.name}
              onChange={formdataHandle}
              autoComplete="name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              name="email"
              value={formData.email}
              onChange={formdataHandle}
              autoComplete="email"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="At least 6 characters"
              name="password"
              value={formData.password}
              onChange={formdataHandle}
              autoComplete="new-password"
            />
            <small>{passwordHelp}</small>
          </label>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create account"}
            {!isLoading && <ArrowRight size={18} />}
          </button>
        </form>

        <div className="signup-prompt">
          <span>Already have access?</span>
          <button type="button" onClick={() => navigate("/login")}>
            Sign in
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
