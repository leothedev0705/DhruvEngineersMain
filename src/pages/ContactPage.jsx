import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaIdCard, FaGlobe } from 'react-icons/fa';
import './ContactPage.css';
import logo from '../assets/images/Logo.png';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Google Form configuration
  const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSejRoxN_4WLG-mT72dVbu_Wj88z9ZEh2IMrH4hKvcEbB1XrPg/formResponse';
  
  const GOOGLE_FORM_FIELDS = {
    name: 'entry.528846873',      // Name field
    email: 'entry.818318423',     // Email field
    phone: 'entry.1028741362',    // Phone field
    subject: 'entry.1387483968',  // Subject field
    message: 'entry.1496193312'   // Message field
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Store form data before clearing
    const submittedData = { ...formData };

    // Clear form immediately
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // Show success message
    setSubmitStatus('success');
    setIsSubmitting(false);

    // Create the form element
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = GOOGLE_FORM_ACTION_URL;
    form.target = '_blank';

    // Add the form fields
    Object.keys(submittedData).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = GOOGLE_FORM_FIELDS[key];
      input.value = submittedData[key];
      form.appendChild(input);
    });

    // Submit the form
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    // Close the submission tab after a delay
    setTimeout(() => {
      window.focus();
    }, 1000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      details: "A65, A64 Oshiya Mata Compound, Pipe Line Road, Kalher Bhiwandi (421302)"
    },
    {
      icon: <FaPhone />,
      title: "Contact Numbers",
      details: "+91 9321077596"
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: <a href="mailto:dhruvengineers1@gmail.com">dhruvengineers1@gmail.com</a>
    },
    {
      icon: <FaIdCard />,
      title: "GST Number",
      details: "27ALTPP8679G1Z1"
    },
    {
      icon: <FaGlobe />,
      title: "IndiaMart Profile",
      details: (
        <>
          <a href="https://www.indiamart.com/dhruv-engineers/" target="_blank" rel="noopener noreferrer">
            Visit our IndiaMart Profile
          </a>
          <br />
          Verified Supplier
        </>
      )
    }
  ];

  return (
    <div className="contact-page">
      <motion.section 
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div
            className="logo-container"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={logo}
              alt="Dhruv Engineers Logo" 
              className="company-logo"
            />
          </motion.div>
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We'd love to hear from you
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        className="contact-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div 
            className="contact-info-grid"
            variants={staggerContainer}
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="contact-info-card"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
              >
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p>{info.details}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="contact-form-container"
            variants={fadeInUp}
          >
            <h2>Send us a Message</h2>
            <form 
              action="https://docs.google.com/forms/d/e/1FAIpQLSejRoxN_4WLG-mT72dVbu_Wj88z9ZEh2IMrH4hKvcEbB1XrPg/formResponse" 
              method="POST" 
              target="_blank"
              onSubmit={(e) => {
                // Store current form values
                const currentFormData = { ...formData };
                
                // Clear form and show success message immediately
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  subject: '',
                  message: ''
                });
                setSubmitStatus('success');
                setIsSubmitting(false);

                // Focus back to the window after submission
                setTimeout(() => {
                  window.focus();
                }, 1000);
              }}
              className="contact-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="entry.528846873"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="entry.818318423"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="entry.1028741362"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="entry.1387483968"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="entry.1496193312"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <motion.button
                type="submit"
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              {submitStatus === 'success' && (
                <motion.div
                  className="form-status success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          <div className="indiamart-profile-card">
            <div className="globe-icon">
              <img src="/globe-icon.svg" alt="Globe Icon" />
            </div>
            <h2>IndiaMart Profile</h2>
            <a href="https://www.indiamart.com/dhruv-engineers/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="indiamart-link">
              Visit our IndiaMart Profile
            </a>
            <p className="verified-text">Verified Supplier</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage; 