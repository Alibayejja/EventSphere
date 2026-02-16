import React from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';

export default function AdminLayout() {
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { path: '/admin/dashboard', icon: '📊', label: 'Dashboard' },
        { path: '/admin/events', icon: '📅', label: 'Events' },
        { path: '/admin/orders', icon: '🛍️', label: 'Orders' },
    ];

    const handleSignOut = () => {
        // Simulate sign out
        navigate('/admin/login');
    };

    return (
        <div className="admin-layout">
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <div className="admin-sidebar-header">
                    <div className="admin-logo">
                        <span className="logo-icon">L</span>
                        <span className="logo-text">ADMIN</span>
                    </div>
                </div>

                <nav className="admin-nav">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`admin-nav-item ${location.pathname === item.path ? 'active' : ''}`}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-label">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="admin-sidebar-footer">
                    <button onClick={handleSignOut} className="sign-out-btn">
                        <span className="nav-icon">↪️</span>
                        <span className="nav-label">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="admin-main">
                <header className="admin-topbar">
                    <div className="topbar-left">
                        <h2 className="page-title">
                            {menuItems.find(i => i.path === location.pathname)?.label || 'Admin Panel'}
                        </h2>
                    </div>
                    <div className="topbar-right">
                        <div className="admin-profile">
                            <div className="profile-info">
                                <span className="profile-name">Admin User</span>
                                <span className="profile-role">Administrator</span>
                            </div>
                            <div className="profile-avatar">A</div>
                        </div>
                    </div>
                </header>

                <div className="admin-content">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
