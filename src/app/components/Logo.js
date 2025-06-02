// src/app/components/Logo.js
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Logo({
  variant = 'default',
  className = '',
}) {
  const baseTextClass = 'font-heading font-bold tracking-tight';

  // Variants
  const variants = {
    default: {
      container: '',
      textClass: `${baseTextClass} text-primary`,
      brandClass: 'text-secondary',
    },
    light: {
      container: '',
      textClass: `${baseTextClass} text-light`,
      brandClass: 'text-secondary',
    },
    dark: {
      container: '',
      textClass: `${baseTextClass} text-primary`,
      brandClass: 'text-secondary',
    },
  };

  const { textClass, brandClass } =
    variants[variant] || variants.default;

  // SVG animation variants
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  const logoVariants = {
    beat: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 3,
      },
    },
  };

  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <motion.div
        className="relative w-12 h-12"
        initial="hidden"
        animate={['visible', 'beat']}
        variants={logoVariants}
      >
        {/* ROK Icon - Crown/Leadership Symbol */}
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Crown Base */}
          <motion.path
            d="M3 16h18v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z"
            fill="#50036C"
            variants={pathVariants}
          />
          {/* Crown Points */}
          <motion.path
            d="M12 2l2 6-2 4-2-4 2-6z"
            fill="#FF514D"
            variants={pathVariants}
          />
          <motion.path
            d="M6 4l1.5 8L4 16l-1-4 3-8z"
            fill="#50036C"
            variants={pathVariants}
          />
          <motion.path
            d="M18 4l-1.5 8L20 16l1-4-3-8z"
            fill="#50036C"
            variants={pathVariants}
          />
          {/* Center Jewel */}
          <motion.circle
            cx="12"
            cy="8"
            r="1.5"
            fill="#FF514D"
            variants={pathVariants}
          />
        </svg>
      </motion.div>

      <div className={textClass}>
        <span className="text-2xl font-bold">ROK</span>{' '}
        <span className={`${brandClass} text-xl font-medium`}>
          Coaching
        </span>
      </div>
    </Link>
  );
}
