import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const cartCount = 1; // مؤقت، من بعد غادي يجي من Redux

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          EventSphere
        </Link>
      </div>

      {/* Center Links */}
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className={({ isActive }) => (isActive ? "active" : "")}>
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Right: Cart + Login */}
      <div className="navbar-right">
        <Link to="/cart" className="cart-btn" aria-label="Cart">
          <span className="cart-icon">🛒​</span>
        </Link>

        <Link to="/login" className="navbar-login">
          Login
        </Link>
      </div>
    </nav>
  );
}
