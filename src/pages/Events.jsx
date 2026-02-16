import { useState } from "react";
import { Link } from "react-router-dom";
import { events } from "../data/events";

const CATEGORIES = ["All", "Exhibitions", "Gala", "Music"];

function Events() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((e) => e.category === selectedCategory);

  return (
    <div className="events-page">
      {/* Hero Section */}
      <header className="events-hero">
        <h2 className="events-title">Curated Events</h2>
        <p className="events-subtitle">
          Explore our exclusive selection of premium experiences.
        </p>
      </header>

      {/* Categories Tabs */}
      <div className="events-tabs-container">
        <div className="events-tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`tab-btn ${selectedCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="events-grid">
        {filteredEvents.map((e) => (
          <div key={e.id} className="event-card">
            <div className="event-image-wrapper">
              <img src={e.image} alt={e.title} className="event-image" />
              <div className="event-overlay">
                <span className="event-category-badge">{e.category}</span>
              </div>
              <span className="event-price-tag">${e.price}</span>
            </div>

            <div className="event-content">
              <div className="event-header">
                <span className="event-date">📅 {e.date}</span>
                <div className="event-rating">★★★★★</div>
              </div>

              <h3 className="event-title">{e.title}</h3>
              <p className="event-desc-short">Join us for an unforgettable experience at {e.title}. Only a few seats left!</p>

              <Link to={`/events/${e.id}`} className="event-btn">
                VIEW DETAILS <span>&rarr;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;