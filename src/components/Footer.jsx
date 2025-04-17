import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column company-info">
            <h4 className="company-name">Dhruv Engineers</h4>
            <p className="footer-tagline">Precision Machining & Fabrication Excellence Since 1998</p>
          </div>
          
          <div className="footer-column contact-info">
            <h4>Contact Information</h4>
            <ul className="footer-contact-list">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                A65, A64 Oshiya Mata Compound Pipe Line Road<br />Kalher, Bhiwandi (421302)
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:dhruvengineers1@gmail.com">dhruvengineers1@gmail.com</a>
              </li>
            </ul>
          </div>
          
          <div className="footer-column quick-links">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/#machinery">Machinery</Link></li>
              <li><Link to="/#clients">Our Clients</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="gst-info">
            <span className="footer-gst">GST No: 27ALTPP8679G1Z1</span>
          </div>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-icon" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Dhruv Engineers. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 