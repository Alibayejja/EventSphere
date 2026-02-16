import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-image-wrapper">
        <img src={event.image} alt={event.title} className="event-image" />
        <div className="event-overlay">
          <span className="event-category-badge">{event.category}</span>
        </div>
        <span className="event-price-tag">${event.price}</span>
      </div>

      <div className="event-content">
        <div className="event-header">
          <span className="event-date">📅 {event.date}</span>
          <div className="event-rating">★★★★★</div>
        </div>

        <h3 className="event-title">{event.title}</h3>
        <p className="event-desc-short">Experience the elegance of {event.title}. Limited tickets available.</p>

        <Link to={`/events/${event.id}`} className="event-btn">
          VIEW DETAILS <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
