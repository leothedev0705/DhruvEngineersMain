import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaSitemap, FaChevronDown } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSitemap = () => {
    setIsSitemapOpen(!isSitemapOpen);
  };

  const handleClientsClick = (e) => {
    e.preventDefault();
    navigate('/', { state: { scrollTo: 'clients' } });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Dhruv Engineers</h3>
            <div className="contact-info">
              <span>
                <FaMapMarkerAlt />
                A65, A64 Oshiya Mata Compound, Pipe Line Road, Kalher Bhiwandi (421302)
              </span>
              <span>
                <FaPhone />
                <a href="tel:+919321077596">+91 9321077596</a>
              </span>
              <span>
                <FaEnvelope />
                <a href="mailto:dhruvengineers1@gmail.com">dhruvengineers1@gmail.com</a>
              </span>
            </div>
          </div>

          <div className="footer-section">
            <button className="sitemap-toggle" onClick={toggleSitemap}>
              <FaSitemap /> Sitemap
              <FaChevronDown className={`chevron ${isSitemapOpen ? 'open' : ''}`} />
            </button>
          </div>

          <div className="footer-section">
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://wa.me/+919321077596" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
            <div className="gst-info">
              <span>GST No: 27ALTPP8679G1Z1</span>
            </div>
          </div>
        </div>

        {/* Collapsible Sitemap */}
        <div className={`sitemap-section ${isSitemapOpen ? 'open' : ''}`}>
          <div className="sitemap-container">
            <div className="sitemap-column">
              <h4>Main Pages</h4>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="sitemap-column">
              <h4>Services</h4>
              <Link to="/services">Our Services</Link>
              <Link to="/products">Products</Link>
              <a href="#" onClick={handleClientsClick}>Our Clients</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; {currentYear} Dhruv Engineers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 