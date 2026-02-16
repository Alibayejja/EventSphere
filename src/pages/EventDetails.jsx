import { useParams, Link, useNavigate } from "react-router-dom";
import { events } from "../data/events";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function EventDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const event = events.find((e) => e.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    if (!event) {
        return (
            <div className="error-container">
                <h2>Event not found</h2>
                <Link to="/events" className="btn btn-primary">Back to Events</Link>
            </div>
        );
    }

    const subtotal = event.price * quantity;

    const handleAddToCart = () => {
        addToCart(event, quantity);
        navigate("/cart");
    };

    return (
        <div className="event-details-page">
            {/* Hero Section */}
            <div
                className="event-details-hero"
                style={{ backgroundImage: `url(${event.image})` }}
            >
                <div className="hero-overlay-gradient"></div>
                <div className="event-hero-content">
                    <Link to="/events" className="back-btn">← Back to Events</Link>
                    <span className="hero-badge">{event.category}</span>
                    <h1 className="hero-event-title">{event.title}</h1>

                    <div className="hero-meta-row">
                        <div className="meta-item">
                            <span className="meta-icon">📅</span>
                            <span>{event.date}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-icon">🕒</span>
                            <span>10:00 AM</span> {/* Placeholder time as per current data structure */}
                        </div>
                        <div className="meta-item">
                            <span className="meta-icon">📍</span>
                            <span>Premium Venue, City Center</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Split Layout */}
            <div className="event-details-container">
                {/* Left Column: Info */}
                <div className="event-info-column">
                    <div className="info-block">
                        <h3 className="info-title">About the Event</h3>
                        <div className="info-content-wrapper">
                            <p className="info-text">
                                Join us for {event.title}, an exclusive experience designed for the discerning few.
                                Immerse yourself in an atmosphere of elegance and sophistication.
                                This event promises to be a highlight of the season, featuring curated moments
                                and exceptional presentation.
                            </p>
                            <p className="info-text">
                                Private viewing opportunities available before the main event.
                                Secure your place now to witness this masterpiece.
                            </p>
                        </div>
                    </div>

                    <div className="info-block">
                        <h3 className="info-title">Event Highlights</h3>
                        <ul className="highlights-list">
                            <li><span className="check-icon">✨</span> Premium experience guaranteed</li>
                            <li><span className="check-icon">✨</span> Exclusive access to VIP areas</li>
                            <li><span className="check-icon">✨</span> Curated selection of finest offerings</li>
                            <li><span className="check-icon">✨</span> Networking with industry leaders</li>
                            <li><span className="check-icon">✨</span> Complimentary welcome refreshments</li>
                        </ul>
                    </div>

                    <Link to="/events" className="back-link-bottom">
                        ← Back to Events
                    </Link>
                </div>

                {/* Right Column: Booking Card (Sticky) */}
                <div className="event-booking-column">
                    <div className="booking-card">
                        <div className="booking-header">
                            <span className="price-label">PRICE PER TICKET</span>
                            <div className="booking-price">
                                <span className="currency">$</span>
                                <span className="amount">{event.price}</span>
                                <span className="unit">USD</span>
                            </div>
                        </div>

                        <div className="booking-selector">
                            <label>SELECT QUANTITY</label>
                            <div className="quantity-controls">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                        </div>

                        <div className="booking-summary">
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className="summary-row total">
                                <span>Total</span>
                                <span className="total-amount">${subtotal}</span>
                            </div>
                        </div>

                        <button className="book-btn" onClick={handleAddToCart}>
                            🛒 ADD TO CART
                        </button>

                        <button className="share-btn">
                            🔗 SHARE EVENT
                        </button>

                        <div className="ticket-status">
                            <span className="status-dot"></span>
                            200 tickets remaining
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
