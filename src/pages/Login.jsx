import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("admin@prestige-events.com");
  const [password, setPassword] = useState("admin123");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@prestige-events.com" && password === "admin123") {
      navigate("/admin/dashboard");
    } else {
      // For this demo/premium version, let's still just navigate
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card animate-fade-in">
          <div className="login-header">
            <div className="prestige-logo">P</div>
            <h1 className="login-title">Prestige Portal</h1>
            <p className="login-subtitle">Management Console & Administrative Access</p>
          </div>

          <div className="admin-notice">
            <p><strong>Security Note:</strong> Use the administrative credentials provided for secure dashboard access.</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">ADMINISTRATIVE EMAIL</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@prestige-events.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">ACCESS KEY / PASSWORD</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                <span>Trust this device</span>
              </label>
              <a href="#" className="forgot-key">Recover Access Key</a>
            </div>

            <button type="submit" className="login-btn">
              SECURE SIGN IN
            </button>
          </form>

          <div className="login-footer">
            <p>© 2026 Prestige Events Palace • All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
