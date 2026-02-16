import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setStatus({ type: 'success', message: 'Thank you for your message! We will get back to you shortly.' });
      e.target.reset();
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Hero Section */}
        <section className="contact-hero animate-fade-in">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            Experience the pinnacle of event planning. Our team is here to turn your vision into an unforgettable reality.
          </p>
        </section>

        <div className="contact-content-grid">
          {/* Contact Info Column */}
          <div className="contact-info-column animate-slide-up">
            <h2 className="section-heading">Contact Information</h2>

            <div className="contact-info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="info-text">
                  <h3>Our Location</h3>
                  <p>123 Luxury Avenue, Beverly Hills<br />California, 90210</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="info-text">
                  <h3>Phone Number</h3>
                  <p>+1 (555) 123-4567<br />Mon - Fri, 9am - 6pm</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="info-text">
                  <h3>Email Address</h3>
                  <p>concierge@eventspalace.com<br />support@eventspalace.com</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <span className="social-label">Follow Us</span>
              <div className="social-links">
                {['Instagram', 'Facebook', 'LinkedIn', 'Twitter'].map(social => (
                  <a key={social} href="#" className="social-link">{social}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="contact-form-column animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="form-wrapper">
              <h2 className="section-heading">Send a Message</h2>
              <form onSubmit={handleSubmit} className="premium-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>YOUR NAME</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>EMAIL ADDRESS</label>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>SUBJECT</label>
                  <input type="text" placeholder="Inquiry about Event Services" required />
                </div>

                <div className="form-group">
                  <label>YOUR MESSAGE</label>
                  <textarea placeholder="How can we help you create something extraordinary?" rows="5" required></textarea>
                </div>

                {status.message && (
                  <div className={`status-message ${status.type}`}>
                    {status.message}
                  </div>
                )}

                <button type="submit" className="contact-submit-btn">
                  SEND MESSAGE
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

