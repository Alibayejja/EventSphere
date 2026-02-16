import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
    const { cartTotal } = useCart();
    const navigate = useNavigate();
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for completing purchase
        setStatus({ type: 'success', message: 'Thank you for your purchase!' });

        // Delay navigation so the user can see the "wa3ra" success message
        setTimeout(() => {
            navigate('/');
        }, 3000);
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
                                <input type="text" id="firstName" placeholder="John" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">LAST NAME</label>
                                <input type="text" id="lastName" placeholder="Doe" required />
                            </div>

                            <div className="form-group full-width">
                                <label htmlFor="email">EMAIL ADDRESS</label>
                                <input type="email" id="email" placeholder="john@example.com" required />
                            </div>

                            <div className="form-group full-width">
                                <label htmlFor="phone">PHONE NUMBER</label>
                                <input type="tel" id="phone" placeholder="+1 (555) 000-0000" required />
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

                        <button type="submit" className="complete-purchase-btn">
                            COMPLETE PURCHASE
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
