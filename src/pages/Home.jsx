import EventCard from "../components/EventCard";
import { events } from "../data/events";

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
    </div>
  );
}
