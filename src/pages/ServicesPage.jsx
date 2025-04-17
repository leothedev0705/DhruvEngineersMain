import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCog, FaIndustry, FaTools, FaWrench, FaRuler, FaCube, FaHammer, FaIndustry as FaFactory, FaWarehouse } from 'react-icons/fa';
import './ServicesPage.css';

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

const pageTransition = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 }
};

const ServicesPage = () => {
  const [activeSection, setActiveSection] = useState('fabrication');

  const fabricationServices = [
    {
      title: "SS Fabrication",
      description: "Specialized in high-quality stainless steel fabrication with various material grades including SS 310, 304, and 316.",
      icon: <FaIndustry />,
      details: [
        "SS Tanks (Multiple Grades)",
        "Industrial Chimneys",
        "Canteen Tables & Furniture",
        "Hoppers & Conveyors",
        "Custom Trolleys & Trays",
        "Industrial Cabinets"
      ]
    },
    {
      title: "MS Fabrication",
      description: "Comprehensive mild steel fabrication services for industrial applications.",
      icon: <FaHammer />,
      details: [
        "MS Brackets & Frames",
        "Custom MS Components",
        "Industrial Structures",
        "Heavy-duty Frames",
        "Mounting Plates",
        "Support Structures"
      ]
    },
    {
      title: "Welding Services",
      description: "Advanced welding capabilities with multiple welding processes.",
      icon: <FaTools />,
      details: [
        "TIG Welding",
        "Arc Welding",
        "CO2 Welding",
        "Custom Fabrication",
        "Heavy Equipment Support",
        "7-Ton Crane Facility"
      ]
    }
  ];

  const machineryServices = [
    {
      title: "Precision Machining",
      description: "State-of-the-art machining services with advanced CNC and conventional machines.",
      icon: <FaCog />,
      details: [
        "CNC Turning & Milling",
        "Horizontal Boring",
        "Precision Drilling",
        "Custom Components",
        "Large-scale Machining",
        "High-precision Parts"
      ]
    },
    {
      title: "Machine Shop Services",
      description: "Comprehensive machine shop capabilities for all types of industrial components.",
      icon: <FaFactory />,
      details: [
        "Turning Operations",
        "Milling Work",
        "Drilling Services",
        "Tapping Operations",
        "VMC Machining",
        "CNC Lathe Work"
      ]
    },
    {
      title: "Specialized Equipment",
      description: "Advanced machinery for precise and efficient manufacturing.",
      icon: <FaWarehouse />,
      details: [
        "Horizontal Boring Machine",
        "VMC Machines",
        "CNC Lathe Operations",
        "Radial Drilling",
        "Rolling & Bending",
        "Heavy Machining"
      ]
    }
  ];

  return (
    <div className="services-page">
      <motion.section 
        className="services-hero"
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
            Our Services
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Premium Quality Manufacturing & Fabrication Since 1998
          </motion.p>
          <div className="services-toggle">
            <button 
              className={`toggle-btn ${activeSection === 'fabrication' ? 'active' : ''}`}
              onClick={() => setActiveSection('fabrication')}
            >
              Fabrication Services
            </button>
            <button 
              className={`toggle-btn ${activeSection === 'machinery' ? 'active' : ''}`}
              onClick={() => setActiveSection('machinery')}
            >
              Machine Shop
            </button>
          </div>
        </div>
      </motion.section>

      <section className="services-content">
        <div className="container">
          <AnimatePresence mode="wait">
            {activeSection === 'fabrication' ? (
              <motion.div 
                key="fabrication"
                className="services-grid"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                exit="exit"
                {...pageTransition}
              >
                {fabricationServices.map((service, index) => (
                  <motion.div 
                    key={index}
                    className="service-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                  >
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="service-details">
                      <ul>
                        {service.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="machinery"
                className="services-grid"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                exit="exit"
                {...pageTransition}
              >
                {machineryServices.map((service, index) => (
                  <motion.div 
                    key={index}
                    className="service-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                  >
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="service-details">
                      <ul>
                        {service.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="machinery-specs">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Machinery Specifications
          </motion.h2>
          <motion.div 
            className="specs-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="spec-card" variants={fadeInUp}>
              <h3>Horizontal Boring Machine</h3>
              <ul>
                <li>X: 1600mm</li>
                <li>Y: 1550mm</li>
                <li>Z: 2000mm</li>
                <li>Table Size: 1500 x 1500mm</li>
                <li>Spindle: 115mm</li>
              </ul>
            </motion.div>
            <motion.div className="spec-card" variants={fadeInUp}>
              <h3>VMC Machines</h3>
              <ul>
                <li>Ace Micromatic 1060V (1000x600x600)</li>
                <li>Ace Micromatic 850V (800x500x500)</li>
                <li>Advanced CNC Controls</li>
                <li>High-precision Operations</li>
              </ul>
            </motion.div>
            <motion.div className="spec-card" variants={fadeInUp}>
              <h3>Additional Equipment</h3>
              <ul>
                <li>Ace CNC Lathe (550mm between center)</li>
                <li>Multiple Conventional Lathes</li>
                <li>Milling Machines (BFW)</li>
                <li>Rolling Machine (1200/8mm capacity)</li>
                <li>7-ton Crane Facility</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 