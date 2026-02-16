import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-container">

                {/* Brand Column */}
                <div className="footer-col brand-col">
                    <Link to="/" className="footer-logo">
                        Events Palace
                    </Link>
                    <p className="footer-desc">
                        Your gateway to the most exclusive and unforgettable experiences in the city.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-col links-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/cart">My Cart</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-col contact-col">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>contact@eventspalace.com</li>
                        <li>+212 600 000 000</li>
                        <li>Casablanca, Morocco</li>
                    </ul>
                </div>

                {/* Newsletter (Optional minimalist) */}
                <div className="footer-col social-col">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        {/* Simple text placeholders for icons or use SVGs if available */}
                        <a href="#" aria-label="Instagram">Instagram</a>
                        <a href="#" aria-label="Facebook">Facebook</a>
                        <a href="#" aria-label="Twitter">Twitter</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Events Palace. All rights reserved.</p>
            </div>
        </footer>
    );
}
