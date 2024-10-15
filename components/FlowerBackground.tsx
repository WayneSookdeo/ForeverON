'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FlowerBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="hydrangea"
        animate={{
          y: [0, -100],
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      />
      <motion.div
        className="hearts"
        animate={{
          y: [0, -100],
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default FlowerBackground;