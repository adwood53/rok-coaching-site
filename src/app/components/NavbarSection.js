// src/app/components/Logo.js
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Logo({
  variant = 'default',
  className = '',
}) {
  // Logo animation variants
  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  const iconVariants = {
    hover: {
      rotate: 90,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <motion.div
        className="flex items-center space-x-3"
        variants={logoVariants}
        whileHover="hover"
      >
        {/* Minimal Logo Icon */}
        <div
          className={`w-8 h-8 flex items-center justify-center transition-colors duration-300 ${
            variant === 'light' ? 'bg-white' : 'bg-black'
          }`}
        >
          <motion.div
            className={`w-4 h-4 border transition-colors duration-300 transform rotate-45 ${
              variant === 'light' ? 'border-black' : 'border-white'
            }`}
            variants={iconVariants}
          />
        </div>

        {/* Brand Text */}
        <div
          className={`font-light tracking-wide transition-colors duration-300 ${
            variant === 'light' ? 'text-white' : 'text-black'
          }`}
        >
          <span className="text-lg font-medium">ROK</span>
          <span className="text-sm ml-1 opacity-80">Coaching</span>
        </div>
      </motion.div>
    </Link>
  );
}
