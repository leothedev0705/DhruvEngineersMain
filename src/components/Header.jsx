import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Dhruv Engineers</h1>
          </Link>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
              </li>
              <li>
                <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 