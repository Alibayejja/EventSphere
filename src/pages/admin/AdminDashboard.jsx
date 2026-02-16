import React from 'react';

export default function AdminDashboard() {
    const stats = [
        { label: 'Total Events', value: '12', trend: '+2 this month', icon: '📅' },
        { label: 'Upcoming Bookings', value: '48', trend: '+15.4%', icon: '🎟️' },
        { label: 'Total Revenue', value: '$124,500', trend: '+8.2%', icon: '💰', highlight: true },
        { label: 'Pending Orders', value: '7', trend: 'Requires action', icon: '🕒' },
    ];

    return (
        <div className="admin-page-content animate-fade-up">
            <div className="dashboard-header-simple">
                <p className="welcome-text">Overview of your event empire performance.</p>
            </div>

            <div className="admin-stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className={`stat-card ${stat.highlight ? 'gold' : ''}`}>
                        <div className="stat-card-header">
                            <span className="stat-card-icon">{stat.icon}</span>
                        </div>
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                        <span className={`stat-trend ${stat.trend.includes('+') ? 'positive' : ''}`}>
                            {stat.trend}
                        </span>
                    </div>
                ))}
            </div>

            <div className="dashboard-secondary-grid">
                <div className="dashboard-card recent-activity">
                    <h3 className="card-title">Recent Activity</h3>
                    <div className="activity-list">
                        <div className="activity-item">
                            <span className="activity-dot"></span>
                            <div className="activity-info">
                                <p><strong>New Order</strong> #17665818 by Ali Bale</p>
                                <span className="activity-time">2 mins ago</span>
                            </div>
                        </div>
                        <div className="activity-item">
                            <span className="activity-dot"></span>
                            <div className="activity-info">
                                <p><strong>Event Verified</strong>: "Symphony in Gold"</p>
                                <span className="activity-time">45 mins ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
