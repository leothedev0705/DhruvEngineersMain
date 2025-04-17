import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please enter a valid email address.'
      });
      return;
    }

    // Here you would typically send the form data to a server
    // For now, we'll simulate a successful submission
    
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-form-container">
      {formStatus.submitted ? (
        <div className="success-message">
          <p>{formStatus.message}</p>
          <button 
            onClick={() => setFormStatus({ submitted: false, error: false, message: '' })}
            className="submit-btn"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {formStatus.error && (
            <div className="error-message">
              <p>{formStatus.message}</p>
            </div>
          )}
          
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email *"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message *"
              rows="5"
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm; 