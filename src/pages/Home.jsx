import EventCard from "../components/EventCard";
import { events } from "../data/events";
import { Link } from "react-router-dom";

export default function Home() {
  const featured = events.slice(0, 4);

  return (
    <div>
      {/* ✅ HERO */}
      <section className="hero">
        <p className="hero-top">CURATED EXPERIENCES</p>

        <h1 className="hero-title">
          Exclusive Events for the <br />
          <span className="hero-highlight">Discerning</span> Few
        </h1>

        <p className="hero-sub">
          Discover a world of elegance, culture, and unforgettable moments.
        </p>
      </section>


      {/* Action Buttons */}
      <div className="hero-actions">
        <Link to="/events" className="btn btn-primary">EXPLORE EVENTS &rarr;</Link>
        <Link to="/contact" className="btn btn-outline">CONTACT CONCIERGE</Link>
      </div>

      {/* Stats Section with Animation */}
      <div className="stats-section">
        <div className="stat-card">
          <div style={{ marginBottom: 16 }}>
            <svg width="40" height="40" fill="none" stroke="#c9a227" strokeWidth="2"><circle cx="20" cy="20" r="18" stroke="#fff" strokeWidth="1.5"/><rect x="13" y="13" width="14" height="14" rx="3" stroke="#c9a227" strokeWidth="2"/><line x1="20" y1="17" x2="20" y2="23" stroke="#c9a227" strokeWidth="2"/></svg>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700 }}>500+</div>
          <div style={{ color: '#fff', marginTop: 6 }}>ACTIVE EVENTS</div>
        </div>
        <div className="stat-card">
          <div style={{ marginBottom: 16 }}>
            <svg width="40" height="40" fill="none" stroke="#c9a227" strokeWidth="2"><circle cx="20" cy="20" r="18" stroke="#fff" strokeWidth="1.5"/><path d="M20 25c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7zm0 0c-5 0-9 2.5-9 5.5v2.5h18v-2.5c0-3-4-5.5-9-5.5z" stroke="#c9a227" strokeWidth="2"/></svg>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700 }}>50K+</div>
          <div style={{ color: '#fff', marginTop: 6 }}>HAPPY ATTENDEES</div>
        </div>
        <div className="stat-card">
          <div style={{ marginBottom: 16 }}>
            <svg width="40" height="40" fill="none" stroke="#c9a227" strokeWidth="2"><circle cx="20" cy="20" r="18" stroke="#fff" strokeWidth="1.5"/><path d="M20 28l-8-8 8-8 8 8-8 8z" stroke="#c9a227" strokeWidth="2"/></svg>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700 }}>100+</div>
          <div style={{ color: '#fff', marginTop: 6 }}>PREMIUM VENUES</div>
        </div>
        <div className="stat-card">
          <div style={{ marginBottom: 16 }}>
            <svg width="40" height="40" fill="none" stroke="#c9a227" strokeWidth="2"><circle cx="20" cy="20" r="18" stroke="#fff" strokeWidth="1.5"/><polygon points="20,10 24,28 16,28" stroke="#c9a227" strokeWidth="2" fill="#c9a227"/></svg>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700 }}>4.9</div>
          <div style={{ color: '#fff', marginTop: 6 }}>5-STAR REVIEWS</div>
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
          <img
            src="/src/assets/concert-crowd.jpg"
            alt="Concert Crowd Event"
            className="cta-event-img"
          />
        </div>
        <div className="cta-event-content">
          <h2 className="cta-event-title">Discover Upcoming Experiences</h2>
          <p className="cta-event-text">From exclusive galas to vibrant concerts, there’s always something happening. Explore our handpicked events and make memories that last a lifetime. Don’t miss out—your next adventure awaits!</p>
          <Link to="/events" className="btn btn-primary cta-event-btn">See All Events</Link>
        </div>
      </section>
    </div>
  );
}