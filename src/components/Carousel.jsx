import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Carousel.css';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto advance every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex >= slides.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = slides.length - 1;
      return nextIndex;
    });
  };

  const nextSlide = () => paginate(1);
  const prevSlide = () => paginate(-1);

  return (
    <div className="carousel-container">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          className="carousel-slide"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {slides[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <button className="carousel-button prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        ›
      </button>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 