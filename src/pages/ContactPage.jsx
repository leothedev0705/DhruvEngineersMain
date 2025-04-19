import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaIdCard, FaGlobe } from 'react-icons/fa';
import './ContactPage.css';
import logo from '../assets/images/Logo.png';

const GOOGLE_FORM_URL = 
  'https://docs.google.com/forms/d/e/1FAIpQLSejRoxN_4WLG-mT72dVbu_Wj88z9ZEh2IMrH4hKvcEbB1XrPg/formResponse';
const GOOGLE_FORM_FIELDS = {
  name:    'entry.528846873',
  email:   'entry.818318423',
  phone:   'entry.1028741362',
  subject: 'entry.1387483968',
  message: 'entry.1496193312'
};

const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const scaleIn = { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } };

export default function ContactPage() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit triggered'); // verify this appears in Console
    setIsSubmitting(true);
    setSubmitStatus(null);

    // trigger the browser form POST
    formRef.current.submit();

    // reset state & show success message
    setTimeout(() => {
      setFormData({ name:'', email:'', phone:'', subject:'', message:'' });
      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 1000);
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
          <a
            href="https://www.indiamart.com/dhruv-engineers/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
      {/* HERO */}
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
            <img src={logo} alt="Dhruv Engineers Logo" className="company-logo" />
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

      {/* CONTENT */}
      <motion.section
        className="contact-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          {/* Info Cards */}
          <motion.div className="contact-info-grid" variants={staggerContainer}>
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
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

          {/* Hidden iframe for Google redirect */}
          <iframe name="hidden_iframe" style={{ display: 'none' }} />

          {/* Contact Form */}
          <motion.div className="contact-form-container" variants={fadeInUp}>
            <h2>Send us a Message</h2>
            <form
              ref={formRef}
              action={GOOGLE_FORM_URL}
              method="POST"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className="contact-form"
            >
              {/* Name */}
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="hidden"
                  name={GOOGLE_FORM_FIELDS.name}
                  value={formData.name}
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="hidden"
                  name={GOOGLE_FORM_FIELDS.email}
                  value={formData.email}
                />
              </div>

              {/* Phone */}
              <div className="form-group">
                <input
                  name="phone"
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <input
                  type="hidden"
                  name={GOOGLE_FORM_FIELDS.phone}
                  value={formData.phone}
                />
              </div>

              {/* Subject */}
              <div className="form-group">
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="hidden"
                  name={GOOGLE_FORM_FIELDS.subject}
                  value={formData.subject}
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="hidden"
                  name={GOOGLE_FORM_FIELDS.message}
                  value={formData.message}
                />
              </div>

              <motion.button
                type="submit"
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  className="form-status success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! We'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  className="form-status error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  There was an error sending your message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 