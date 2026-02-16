import React from 'react';

export default function AdminEvents() {
    const events = [
        { id: 1, name: 'Symphony in Gold', date: 'Nov 05, 2023', price: '$180', status: 'ACTIVE', category: 'CONCERT', tickets: 120 },
        { id: 2, name: 'Culinary Masterpiece', date: 'Nov 12, 2023', price: '$350', status: 'LOW STOCK', category: 'DINING', tickets: 12 },
        { id: 3, name: 'Avant-Garde Exhibition', date: 'Nov 18, 2023', price: '$75', status: 'ACTIVE', category: 'EXHIBITION', tickets: 200 },
        { id: 4, name: 'Jazz on the Rooftop', date: 'Nov 25, 2023', price: '$120', status: 'SOLD OUT', category: 'CONCERT', tickets: 0 },
    ];

    return (
        <div className="admin-page-content animate-fade-in">
            <header className="admin-content-header">
                <div>
                    <h1 className="admin-title">Events Management</h1>
                    <p className="admin-subtitle">Create and manage your exclusive events</p>
                </div>
                <button className="admin-add-btn">+ CREATE EVENT</button>
            </header>

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>EVENT</th>
                            <th>CATEGORY</th>
                            <th>DATE</th>
                            <th>PRICE</th>
                            <th>STATUS</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event) => (
                            <tr key={event.id}>
                                <td>
                                    <div className="table-item-main">
                                        <span className="item-name">{event.name}</span>
                                    </div>
                                </td>
                                <td><span className="table-badge">{event.category}</span></td>
                                <td>{event.date}</td>
                                <td><span className="table-price">{event.price}</span></td>
                                <td>
                                    <span className={`status-tag ${event.status.toLowerCase().replace(' ', '-')}`}>
                                        {event.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="table-actions">
                                        <button className="icon-btn edit">✏️</button>
                                        <button className="icon-btn delete">🗑️</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
