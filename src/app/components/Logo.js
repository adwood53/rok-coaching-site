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
      textClass: `${baseTextClass} text-textLight`,
      brandClass: 'text-primary',
    },
    light: {
      container: '',
      textClass: `${baseTextClass} text-primary`,
      brandClass: 'text-textDark',
    },
    dark: {
      container: '',
      textClass: `${baseTextClass} text-textDark`,
      brandClass: 'text-primary',
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

  const heartVariants = {
    beat: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 2,
      },
    },
  };

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <motion.div
        className="relative w-10 h-10"
        initial="hidden"
        animate={['visible', 'beat']}
        variants={heartVariants}
      >
        {/* Custom Heart + Care Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Heart */}
          <motion.path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="#DB5461"
            variants={pathVariants}
          />
          {/* Hands (care symbol) */}
          <motion.path
            d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 5c-.55 0-1-.45-1-1v-1c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v1c0 .55-.45 1-1 1s-1-.45-1-1v-1c0-2.21 1.79-4 4-4h6c2.21 0 4 1.79 4 4v1c0 .55-.45 1-1 1z"
            fill="#3C7A89"
            variants={pathVariants}
          />
        </svg>
      </motion.div>

      <div className={textClass}>
        <span className="text-xl">ICS</span>{' '}
        <span className={`${brandClass} text-xl`}>Living</span>
      </div>
    </Link>
  );
}
