import EventCard from "../components/EventCard";
import { events } from "../data/events";
import { Link } from "react-router-dom";

export default function Home() {
  const featured = events.slice(0, 4);

  return (
    <div>
      {/* ✅ HERO */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/vidio1.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-top">CURATED EXPERIENCES</p>

          <h1 className="hero-title">
            Exclusive Events for the <br />
            <span className="hero-highlight">Discerning</span> Few
          </h1>

          <p className="hero-sub">
            Discover a world of elegance, culture, and unforgettable moments.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <Link to="/events" className="btn btn-primary">EXPLORE EVENTS &rarr;</Link>
            <Link to="/contact" className="btn btn-outline">CONTACT CONCIERGE</Link>
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <div className="stats-section">
        <div className="stat-card">
          <div className="stat-icon-circle">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
          </div>
          <div className="stat-number">500+</div>
          <div className="stat-label">ACTIVE EVENTS</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-circle">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
          </div>
          <div className="stat-number">50K+</div>
          <div className="stat-label">HAPPY ATTENDEES</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-circle">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          </div>
          <div className="stat-number">100+</div>
          <div className="stat-label">PREMIUM VENUES</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-circle">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
          </div>
          <div className="stat-number">4.9</div>
          <div className="stat-label">5-STAR REVIEWS</div>
        </div>
      </div>

      {/* ✅ Featured 4 events */}
      <section className="featured">
        <h2 className="featured-title">Curated Events</h2>
        <p className="featured-subtitle">
          Explore our exclusive selection of premium experiences.
        </p>

        <div className="featured-grid">
          {featured.map((ev) => (
            <EventCard key={ev.id} event={ev} />
          ))}
        </div>
      </section>

      {/* Modern Event Call to Action Section */}
      <section className="cta-section cta-event">
        <div className="cta-event-img-wrap">
          <video
            className="cta-event-img"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/vidio2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="cta-event-content">
          <h2 className="cta-event-title">Discover Upcoming Experiences</h2>
          <p className="cta-event-text">From exclusive galas to vibrant concerts, there’s always something happening. Explore our handpicked events and make memories that last a lifetime. Don’t miss out—your next adventure awaits!</p>
          <Link to="/events" className="btn btn-primary cta-event-btn">See All Events</Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-header">
          <span className="testimonials-badge">TESTIMONIALS</span>
          <h2 className="testimonials-title">What Our Community Says</h2>
          <p className="testimonials-subtitle">Thousands of event-goers trust Events Palace for their next unforgettable experience.</p>
        </div>

        <div className="testimonials-grid">
          {/* Review 1 */}
          <div className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">"Events Palace made it so easy to find and book tickets for the Jazz Night. The experience was seamless from start to finish!"</p>
            <div className="testimonial-stars">★★★★★</div>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ backgroundColor: '#e2e8f0', color: '#0f172a' }}>SJ</div>
              <div className="author-info">
                <h4>Sarah Johnson</h4>
                <span>EVENT ENTHUSIAST</span>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">"I've attended over 20 events through this platform. The quality of events and the booking process is unmatched."</p>
            <div className="testimonial-stars">★★★★★</div>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ backgroundColor: '#cbd5e1', color: '#0f172a' }}>MC</div>
              <div className="author-info">
                <h4>Michael Chen</h4>
                <span>REGULAR ATTENDEE</span>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">"The Avant-Garde Exhibition was breathtaking! Events Palace always curates the best cultural experiences in the city."</p>
            <div className="testimonial-stars">★★★★★</div>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ backgroundColor: '#94a3b8', color: '#0f172a' }}>AE</div>
              <div className="author-info">
                <h4>Amira El Fassi</h4>
                <span>ART LOVER</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}