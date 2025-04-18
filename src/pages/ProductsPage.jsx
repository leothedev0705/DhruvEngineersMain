import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

// Import all product images
import cncImage from '../assets/images/cnc.png';
import rooftopChimneyImage from '../assets/images/RooftopChimney.png';
import warehouseImage from '../assets/images/warehouse.png';
import aceCncTurningImage from '../assets/images/ace_cnc_turning.png';
import cycloneDustCreatorImage from '../assets/images/cyclone_dust_creator.jpg';
import chemicalStorageImage from '../assets/images/chemical_storage.jpg';
import vmcImage from '../assets/images/vmc.png';
import welderImage from '../assets/images/welder.png';
import industrialKitchenImage from '../assets/images/industrial_kitchen_ventilation.png';
import stainlessSteelTankImage from '../assets/images/stainless_steel_tank.png';
import cncCustomMachineryImage from '../assets/images/cnc_custom_machinery.png.jpg';
import pressureVesselImage from '../assets/images/pressure_vessel.png';
import moldImage from '../assets/images/mold.png';

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'CNC Machine', image: cncImage, description: 'High-precision well developed CNC machining solutions' },
    { id: 2, name: 'Rooftop Chimney', image: rooftopChimneyImage, description: 'Industrial-grade rooftop ventilation systems' },
    { id: 3, name: 'Warehouse Solutions', image: warehouseImage, description: 'Custom warehouse storage and organization systems' },
    { id: 4, name: 'ACE CNC Turning', image: aceCncTurningImage, description: 'Advanced CNC turning and milling services' },
    { id: 5, name: 'Cyclone Dust Creator', image: cycloneDustCreatorImage, description: 'Efficient dust collection and management systems' },
    { id: 6, name: 'Chemical Storage', image: chemicalStorageImage, description: 'Safe and compliant chemical storage solutions' },
    { id: 7, name: 'VMC Machine', image: vmcImage, description: 'Vertical Machining Center for complex operations' },
    { id: 8, name: 'Welding Equipment', image: welderImage, description: 'Professional welding and fabrication tools' },
    { id: 9, name: 'Industrial Kitchen Ventilation', image: industrialKitchenImage, description: 'Commercial kitchen ventilation systems' },
    { id: 10, name: 'Stainless Steel Tank', image: stainlessSteelTankImage, description: 'Custom stainless steel storage tanks' },
    { id: 11, name: 'CNC Custom Machinery', image: cncCustomMachineryImage, description: 'Specialized CNC machinery solutions' },
    { id: 12, name: 'Pressure Vessel', image: pressureVesselImage, description: 'Industrial pressure vessel manufacturing' },
    { id: 13, name: 'Industrial Molds', image: moldImage, description: 'Custom mold design and manufacturing' }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle"
          >
            Discover our range of high-quality engineering solutions
          </motion.p>
        </div>
      </section>

      <section className="products-grid-section">
        <div className="container">
          <motion.div
            className="products-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="product-card"
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link to="/contact" className="quote-btn">Get Best Quote</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage; 