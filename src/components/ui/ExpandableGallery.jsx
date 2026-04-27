import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * ExpandableGallery
 * Dark theme version with pronounced background animations.
 */
const ExpandableGallery = ({ images, className = '', isBackground = false }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Using pronounced flex values for visible animation
  const getFlexValue = (index) => {
    if (hoveredIndex === null) return 1;
    return hoveredIndex === index ? 3 : 0.4;
  };

  return (
    <div className={`${className} ${isBackground ? 'h-full w-full' : ''} bg-[#050505]`}>
      <div className={`flex h-full w-full ${isBackground ? 'gap-0' : 'gap-4'}`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer overflow-hidden"
            style={{ flex: 1 }}
            animate={{ flex: getFlexValue(index) }}
            transition={{ type: "spring", stiffness: 100, damping: 25, mass: 1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Dark Mode Background Image with Ken Burns zoom */}
            <motion.img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1]"
              animate={{ 
                scale: hoveredIndex === index ? 1.15 : 1.05, 
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            
            {/* Dark Overlays for depth */}
            <motion.div
              className="absolute inset-0 bg-[#050505]"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: hoveredIndex === index ? 0 : 0.25 }}
              transition={{ duration: 0.4 }}
            />

            {/* Dark gradient for bottom readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            
            {/* Thicker Active Highlight */}
            <motion.div 
              className="absolute bottom-0 left-0 h-1.5 bg-primary-500 shadow-[0_-5px_20px_rgba(244,63,94,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: hoveredIndex === index ? '100%' : '0%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExpandableGallery;
