import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate successful admin authentication
        navigate('/admin/dashboard');
    };

    return (
        <div className="admin-login-page">
            <div className="admin-login-card animate-fade-in">
                <div className="login-header">
                    <div className="login-logo">
                        <span>P</span>
                    </div>
                    <h1>Prestige Admin</h1>
                    <p>Access the management console for Prestige Events Palace.</p>
                </div>

                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <label>ADMINISTRATOR EMAIL</label>
                        <input
                            type="email"
                            placeholder="admin@prestige-events.com"
                            defaultValue="admin@prestige-events.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>SECURITY PASSWORD</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            defaultValue="admin123"
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        ENTER DASHBOARD
                    </button>
                </form>

                <div className="login-footer">
                    <p>© 2026 Prestige Events Palace • Secure Access</p>
                </div>
            </div>
        </div>
    );
}
