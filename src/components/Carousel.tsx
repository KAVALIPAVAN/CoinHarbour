import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/1.png", "/2.png"]; // Ensure these image paths are correct

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg">
      {/* Carousel Wrapper */}
      <div className="relative h-56 md:h-96 w-full">
        <AnimatePresence mode="wait">
          {images.map((image, index) =>
            index === currentIndex ? (
              <motion.img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="absolute w-full h-full object-cover rounded-lg"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Slider controls */}
      <button
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/80 transition"
        onClick={goPrev}
      >
        ❮
      </button>
      <button
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/80 transition"
        onClick={goNext}
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
