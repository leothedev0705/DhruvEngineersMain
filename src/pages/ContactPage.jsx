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

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // trigger the real POST
    formRef.current.submit();

    // reset UI after a short delay
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

          {/* Hidden iframe to swallow redirect */}
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
              {Object.entries(GOOGLE_FORM_FIELDS).map(([key, entryId]) => (
                <div className="form-group" key={key}>
                  {key !== 'message' ? (
                    <input
                      type={
                        key === 'email'
                          ? 'email'
                          : key === 'phone'
                          ? 'tel'
                          : 'text'
                      }
                      placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                      value={formData[key]}
                      onChange={e =>
                        setFormData(prev => ({
                          ...prev,
                          [key]: e.target.value
                        }))
                      }
                      required={key !== 'phone'}
                      disabled={isSubmitting}
                    />
                  ) : (
                    <textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={e =>
                        setFormData(prev => ({
                          ...prev,
                          message: e.target.value
                        }))
                      }
                      required
                      disabled={isSubmitting}
                    />
                  )}
                  {/* hidden field for Google Forms */}
                  <input type="hidden" name={entryId} value={formData[key]} />
                </div>
              ))}

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

          {/* IndiaMart Profile */}
          <div className="indiamart-profile-card">
            <div className="globe-icon">
              <img src="/globe-icon.svg" alt="Globe Icon" />
            </div>
            <h2>IndiaMart Profile</h2>
            <a
              href="https://www.indiamart.com/dhruv-engineers/"
              target="_blank"
              rel="noopener noreferrer"
              className="indiamart-link"
            >
              Visit our IndiaMart Profile
            </a>
            <p className="verified-text">Verified Supplier</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 