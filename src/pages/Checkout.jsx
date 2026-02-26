import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// ✅ URL DE PRODUCTION (corrigée)
const N8N_WEBHOOK_URL = 'https://n8n.deontex.com/webhook/orders-ali';

export default function Checkout() {
    const { cartTotal, cartItems } = useCart();
    const navigate = useNavigate();
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        const orderPayload = {
            orderId: `#${Date.now()}`,
            customer: {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
            },
            items: cartItems ?? [],
            total: cartTotal,
            date: new Date().toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            }),
            status: 'CONFIRMED',
        };

        try {
            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderPayload),
            });

            if (!response.ok) throw new Error('Erreur webhook');

            setStatus({ type: 'success', message: '✅ Merci pour votre achat ! Un email de confirmation a été envoyé.' });

            setTimeout(() => {
                navigate('/');
            }, 3000);

        } catch (error) {
            console.error('Erreur n8n:', error);
            setStatus({ type: 'error', message: '❌ Une erreur est survenue. Veuillez réessayer.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="checkout-page">
            <Link to="/cart" className="back-to-cart">
                <span>&larr;</span> Back to Cart
            </Link>

            <div className="checkout-container">

                <div className="checkout-header">
                    <h1 className="checkout-title">Secure Checkout</h1>
                    <div className="checkout-subtitle">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        <span>Complete your order securely</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="checkout-form">
                    <div className="contact-info-section">
                        <h2 className="section-title">Contact Information</h2>

                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="firstName">FIRST NAME</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="John"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">LAST NAME</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group full-width">
                                <label htmlFor="email">EMAIL ADDRESS</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group full-width">
                                <label htmlFor="phone">PHONE NUMBER</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="+1 (555) 000-0000"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="checkout-summary-section">
                        <div className="summary-total">
                            <span className="total-label">Total Amount</span>
                            <span className="total-value">${cartTotal}</span>
                        </div>

                        {status.message && (
                            <div className={`status-message ${status.type}`}>
                                {status.message}
                            </div>
                        )}

                        <button type="submit" className="complete-purchase-btn" disabled={loading}>
                            {loading ? 'ENVOI EN COURS...' : 'COMPLETE PURCHASE'}
                        </button>

                        <p className="terms-text">
                            By clicking "Complete Purchase", you agree to our Terms of Service and Privacy Policy.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
