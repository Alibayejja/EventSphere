import React from 'react';

export default function AdminOrders() {
    const orders = [
        { id: '#17665817', customer: 'yyhyh uuhuhu', email: 'alibayejja604@gmail.com', date: 'Dec 23, 2025', items: '1 items', total: '$180', status: 'CONFIRMED' },
        { id: '#17665818', customer: 'Ali Bale', email: 'ali@example.com', date: 'Dec 24, 2025', items: '2 items', total: '$360', status: 'PENDING' },
    ];

    return (
        <div className="admin-page-content animate-fade-in">
            <header className="admin-content-header">
                <div>
                    <h1 className="admin-title">Orders</h1>
                    <p className="admin-subtitle">View and manage customer orders</p>
                </div>
            </header>

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>ORDER ID</th>
                            <th>CUSTOMER</th>
                            <th>DATE</th>
                            <th>ITEMS</th>
                            <th>TOTAL</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td><span className="order-id">{order.id}</span></td>
                                <td>
                                    <div className="table-item-info">
                                        <span className="item-name">{order.customer}</span>
                                        <span className="item-subtext">{order.email}</span>
                                    </div>
                                </td>
                                <td>{order.date}</td>
                                <td>{order.items}</td>
                                <td><span className="table-price highlight">{order.total}</span></td>
                                <td>
                                    <span className={`status-tag ${order.status.toLowerCase()}`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
