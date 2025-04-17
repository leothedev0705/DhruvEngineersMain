import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import './HomePage.css';

const HomePage = () => {
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

  const carouselSlides = [
    <div className="slide-content" key="1">
      <h2>Welcome to Dhruv Engineers</h2>
      <p>Leading the way in precision engineering and manufacturing excellence</p>
      <a href="#contact" className="cta-button">Get Started</a>
    </div>,
    <div className="slide-content" key="2">
      <h2>Innovative Solutions</h2>
      <p>Cutting-edge technology meets engineering expertise</p>
      <a href="#services" className="cta-button">Our Services</a>
    </div>,
    <div className="slide-content" key="3">
      <h2>Quality Assurance</h2>
      <p>Committed to delivering excellence in every project</p>
      <a href="#about" className="cta-button">Learn More</a>
    </div>,
    <div className="slide-content" key="4">
      <h2>Global Reach</h2>
      <p>Serving clients worldwide with innovative engineering solutions</p>
      <a href="#contact" className="cta-button">Contact Us</a>
    </div>
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <Carousel slides={carouselSlides} />
      </section>

      <motion.section
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp}>About Us</motion.h2>
          <motion.p variants={fadeInUp}>
            With over two decades of experience, Dhruv Engineers has established itself as a leader in precision engineering and manufacturing. Our commitment to quality and innovation drives us to deliver exceptional results for our clients.
          </motion.p>
          <motion.div className="stats-container" variants={staggerContainer}>
            {[
              { number: "25+", label: "Years Experience" },
              { number: "500+", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "50+", label: "Expert Engineers" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                variants={fadeInUp}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="services-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp}>Our Services</motion.h2>
          <motion.div className="services-grid" variants={staggerContainer}>
            {[
              {
                title: "Precision Manufacturing",
                description: "High-precision components and assemblies"
              },
              {
                title: "Design Engineering",
                description: "Innovative solutions for complex challenges"
              },
              {
                title: "Quality Testing",
                description: "Comprehensive quality assurance services"
              },
              {
                title: "Maintenance",
                description: "Regular maintenance and support services"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={fadeInUp}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp}>Ready to Start Your Project?</motion.h2>
          <motion.p variants={fadeInUp}>
            Contact us today to discuss how we can help bring your ideas to life.
          </motion.p>
          <motion.a
            href="#contact"
            className="cta-button"
            variants={fadeInUp}
          >
            Get in Touch
          </motion.a>
        </div>
      </motion.section>

      <motion.section 
        id="machinery" 
        className="machinery-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            variants={fadeInUp}
          >
            Our Machinery
          </motion.h2>
          <motion.div 
            className="machinery-grid"
            variants={staggerContainer}
          >
            <motion.div 
              className="machinery-item"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>CNC Machines</h3>
              <p>Latest CNC machines for high precision manufacturing</p>
            </motion.div>
            <motion.div 
              className="machinery-item"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>Laser Cutting</h3>
              <p>Advanced laser cutting technology for precise fabrication</p>
            </motion.div>
            <motion.div 
              className="machinery-item"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>Milling Machines</h3>
              <p>High-quality milling machines for complex parts</p>
            </motion.div>
            <motion.div 
              className="machinery-item"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>Quality Testing</h3>
              <p>State-of-the-art quality testing equipment</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        id="clients" 
        className="clients-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            variants={fadeInUp}
          >
            Our Clients
          </motion.h2>
          <motion.div 
            className="clients-list"
            variants={staggerContainer}
          >
            {[1, 2, 3, 4, 5, 6].map((client) => (
              <motion.div 
                key={client}
                className="client-logo"
                variants={scaleIn}
                whileHover={{ scale: 1.1, filter: 'grayscale(0%)' }}
                whileTap={{ scale: 0.95 }}
              >
                Client {client}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage; 