import React from 'react';
import { motion } from 'framer-motion';
import { FaIndustry, FaCertificate, FaTools, FaHandshake, FaChartLine, FaUsers } from 'react-icons/fa';
import './AboutPage.css';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const AboutPage = () => {
  return (
    <div className="about-page">
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Engineering Excellence
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Pioneering industrial solutions with precision, innovation, and expertise
          </motion.p>
        </div>
      </motion.section>

      <section className="overview-section">
        <div className="container">
          <div className="overview-content">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Legacy of Innovation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              With decades of experience in industrial engineering, we've established ourselves as leaders in providing cutting-edge solutions for complex manufacturing challenges. Our commitment to excellence drives us to continuously innovate and deliver superior results.
            </motion.p>
          </div>
          
          <motion.div 
            className="overview-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="overview-item" variants={fadeInUp}>
              <FaIndustry className="overview-icon" />
              <h3>Industrial Expertise</h3>
              <p>Specialized knowledge in manufacturing processes and industrial automation</p>
            </motion.div>
            <motion.div className="overview-item" variants={fadeInUp}>
              <FaTools className="overview-icon" />
              <h3>Technical Excellence</h3>
              <p>Advanced engineering capabilities with state-of-the-art technology</p>
            </motion.div>
            <motion.div className="overview-item" variants={fadeInUp}>
              <FaChartLine className="overview-icon" />
              <h3>Continuous Growth</h3>
              <p>Commitment to innovation and continuous improvement</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="capabilities-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Capabilities
          </motion.h2>
          <motion.div 
            className="capabilities-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="capability-card" variants={fadeInUp}>
              <h3>Design & Engineering</h3>
              <ul>
                <li>3D Modeling & Simulation</li>
                <li>Process Optimization</li>
                <li>Custom Machine Design</li>
                <li>Industrial Automation</li>
              </ul>
            </motion.div>
            <motion.div className="capability-card" variants={fadeInUp}>
              <h3>Manufacturing</h3>
              <ul>
                <li>Precision Machining</li>
                <li>Assembly & Integration</li>
                <li>Quality Control</li>
                <li>Production Planning</li>
              </ul>
            </motion.div>
            <motion.div className="capability-card" variants={fadeInUp}>
              <h3>Support Services</h3>
              <ul>
                <li>Maintenance Programs</li>
                <li>Technical Support</li>
                <li>Training & Documentation</li>
                <li>Spare Parts Management</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <motion.div 
            className="mission-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="mission-card" variants={fadeInUp}>
              <h2>Our Mission</h2>
              <p>To deliver innovative engineering solutions that drive industrial progress, enhance operational efficiency, and create sustainable value for our clients through technical excellence and unwavering commitment to quality.</p>
            </motion.div>
            <motion.div className="mission-card" variants={fadeInUp}>
              <h2>Our Vision</h2>
              <p>To be the global leader in industrial engineering solutions, recognized for our innovation, expertise, and commitment to transforming the future of manufacturing through advanced technology and sustainable practices.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="certifications-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Certifications
          </motion.h2>
          <motion.div 
            className="certifications-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="certification-card" variants={fadeInUp}>
              <FaCertificate className="certification-icon" />
              <h3>ISO 9001:2015</h3>
              <p>Quality Management System</p>
            </motion.div>
            <motion.div className="certification-card" variants={fadeInUp}>
              <FaCertificate className="certification-icon" />
              <h3>ISO 14001:2015</h3>
              <p>Environmental Management</p>
            </motion.div>
            <motion.div className="certification-card" variants={fadeInUp}>
              <FaCertificate className="certification-icon" />
              <h3>OHSAS 18001</h3>
              <p>Occupational Health & Safety</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.div 
            className="features-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="feature-card" variants={fadeInUp}>
              <FaHandshake className="feature-icon" />
              <h3>Client Partnership</h3>
              <p>We work closely with our clients to understand their unique needs and deliver tailored solutions.</p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeInUp}>
              <FaUsers className="feature-icon" />
              <h3>Expert Team</h3>
              <p>Our team of experienced engineers and technicians brings diverse expertise to every project.</p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeInUp}>
              <FaTools className="feature-icon" />
              <h3>Advanced Technology</h3>
              <p>We utilize the latest technology and tools to ensure optimal results for our clients.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 