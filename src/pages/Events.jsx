import { useState } from "react";
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
      <h2 className="events-title">Curated Events</h2>
      <p className="events-subtitle">
        Explore our exclusive selection of premium experiences.
      </p>

      {/* Categories Tabs */}
      <div className="events-tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="events-grid">
        {filteredEvents.map((e) => (
          <div key={e.id} className="event-card">
            <div className="event-image">
              <img src={e.image} alt={e.title} />
            </div>

            <div className="event-body">
              <div className="event-meta">
                <span className="event-date">📅 {e.date}</span>
                <span className="event-price">${e.price}</span>
              </div>

              <h3 className="event-title">{e.title}</h3>
              <p className="event-category">{e.category}</p>

              <button className="event-btn">🛒 Add to Cart</button>
            </div>
          </div>
        ))}A
      </div>
    </div>
  );
}

export default Events;