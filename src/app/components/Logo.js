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
        {/* ROK Crown Icon - Simplified for Fashion Aesthetic */}
        <div className="relative w-10 h-10">
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Crown Base */}
            <motion.path
              d="M3 16h18v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z"
              fill={variant === 'light' ? '#ffffff' : '#50036C'}
              variants={iconVariants}
            />
            {/* Crown Points */}
            <motion.path
              d="M12 2l2 6-2 4-2-4 2-6z"
              fill={variant === 'light' ? '#ffffff' : '#FF514D'}
              variants={iconVariants}
            />
            <motion.path
              d="M6 4l1.5 8L4 16l-1-4 3-8z"
              fill={variant === 'light' ? '#ffffff' : '#50036C'}
              variants={iconVariants}
            />
            <motion.path
              d="M18 4l-1.5 8L20 16l1-4-3-8z"
              fill={variant === 'light' ? '#ffffff' : '#50036C'}
              variants={iconVariants}
            />
            {/* Center Jewel */}
            <motion.circle
              cx="12"
              cy="8"
              r="1.5"
              fill={variant === 'light' ? '#ffffff' : '#FF514D'}
              variants={iconVariants}
            />
          </svg>
        </div>

        {/* Brand Text - ROK Brand Typography */}
        <div
          className={`font-heading transition-colors duration-300 ${
            variant === 'light' ? 'text-white' : 'text-primary'
          }`}
        >
          <span className="text-2xl font-bold tracking-tight">
            ROK
          </span>
          <span
            className={`text-xl font-medium ml-2 ${
              variant === 'light' ? 'text-white' : 'text-secondary'
            }`}
          >
            Coaching
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
