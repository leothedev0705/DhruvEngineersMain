import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Carousel from '../components/Carousel';
import './HomePage.css';
// Import client logos
import Client1 from '../assets/logos/Client1.png';
import Client2 from '../assets/logos/Client2.png';
import Client3 from '../assets/logos/Client3.png';
import Client4 from '../assets/logos/Client4.png';
import Client5 from '../assets/logos/Client5.png';
import Client6 from '../assets/logos/Client6.png';
import Client7 from '../assets/logos/Client7.png';
// Import carousel images
import CarouselImage1 from '../assets/images/carousel/image_1.png';
import CarouselImage2 from '../assets/images/carousel/image_2.png';
import CarouselImage3 from '../assets/images/carousel/image_3.png';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'clients') {
      const clientsSection = document.querySelector('.clients-section');
      if (clientsSection) {
        clientsSection.scrollIntoView({ behavior: 'smooth' });
        // Clear the state after scrolling
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

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
    <div className="slide-content" key="1" style={{ backgroundImage: `url(${CarouselImage1})` }}>
      <div className="slide-overlay">
        <h2>Welcome to Dhruv Engineers</h2>
        <p>Leading the way in precision engineering and manufacturing excellence</p>
        <Link to="/products" className="cta-button">Get Started</Link>
      </div>
    </div>,
    <div className="slide-content" key="2" style={{ backgroundImage: `url(${CarouselImage2})` }}>
      <div className="slide-overlay">
        <h2>Innovative Solutions</h2>
        <p>Cutting-edge technology meets engineering expertise</p>
        <Link to="/products" className="cta-button">Our Services</Link>
      </div>
    </div>,
    <div className="slide-content" key="3" style={{ backgroundImage: `url(${CarouselImage3})` }}>
      <div className="slide-overlay">
        <h2>Quality Assurance</h2>
        <p>Committed to delivering excellence in every project</p>
        <Link to="/products" className="cta-button">Learn More</Link>
      </div>
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
          <motion.div variants={fadeInUp}>
            <Link to="/contact" className="cta-button">
              Get in Touch
            </Link>
          </motion.div>
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

      <section className="clients-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Clients
          </motion.h2>
          <div className="client-logos-scroll-container">
            <div className="client-logos">
              {/* First set of logos */}
              <div className="client-logo">
                <img src={Client1} alt="Client 1" />
              </div>
              <div className="client-logo">
                <img src={Client2} alt="Client 2" />
              </div>
              <div className="client-logo">
                <img src={Client3} alt="Client 3" />
              </div>
              <div className="client-logo">
                <img src={Client4} alt="Client 4" />
              </div>
              <div className="client-logo">
                <img src={Client5} alt="Client 5" />
              </div>
              <div className="client-logo">
                <img src={Client6} alt="Client 6" />
              </div>
              <div className="client-logo">
                <img src={Client7} alt="Client 7" />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="client-logo">
                <img src={Client1} alt="Client 1" />
              </div>
              <div className="client-logo">
                <img src={Client2} alt="Client 2" />
              </div>
              <div className="client-logo">
                <img src={Client3} alt="Client 3" />
              </div>
              <div className="client-logo">
                <img src={Client4} alt="Client 4" />
              </div>
              <div className="client-logo">
                <img src={Client5} alt="Client 5" />
              </div>
              <div className="client-logo">
                <img src={Client6} alt="Client 6" />
              </div>
              <div className="client-logo">
                <img src={Client7} alt="Client 7" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 