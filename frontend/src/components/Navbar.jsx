import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar({ darkMode, onToggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-shell">
      <div className="nav-inner container">
        <Link to="/home" className="brand-link">
          <span className="brand-mark">WB</span>
          <span>Workshop Booking</span>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="hamburger" />
        </button>

        <nav className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
          <Link to="/home" className="nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/workshops" className="nav-link" onClick={() => setMenuOpen(false)}>
            Workshops
          </Link>
          <Link to="/statistics" className="nav-link" onClick={() => setMenuOpen(false)}>
            Statistics
          </Link>
          <Link to="/dashboard" className="nav-link" onClick={() => setMenuOpen(false)}>
            Dashboard
          </Link>
          <Link to="/register" className="nav-link nav-link--button" onClick={() => setMenuOpen(false)}>
            Register
          </Link>
          <button className="toggle-button" onClick={onToggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </div>
    </header>
  );
}
