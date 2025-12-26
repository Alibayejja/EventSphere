// src/components/EventCard.jsx
export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-img">
        <img src={event.image} alt={event.title} />
      </div>

      <div className="event-body">
        <p className="event-date">📅 {event.date}</p>

        <div className="event-title-row">
          <h3>{event.title}</h3>
          <span className="event-price">${event.price}</span>
        </div>

        <p className="event-category">{event.category}</p>

        <button className="event-btn">🛒Add to Cart</button>
      </div>
    </div>
  );
}
