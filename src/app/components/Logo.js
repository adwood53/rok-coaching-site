// src/app/components/Logo.js
'use client';

import React from 'react';
import Image from 'next/image';
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

  // Determine logo source based on variant
  let logoSrc;
  if (variant === 'dark') {
    logoSrc = '/images/box-logo-dark.png';
  } else if (variant === 'light') {
    logoSrc = '/images/box-logo-light.png';
  } else if (variant === 'default') {
    logoSrc = '/images/logo.png';
  } else {
    logoSrc = '/images/box-logo-light.png'; // fallback
  }

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <motion.div
        //relative to fit image height but w-32 always
        className="relative w-32 h-full"
        variants={logoVariants}
        whileHover="hover"
      >
        <Image
          src={logoSrc}
          alt="ROK Coaching Logo"
          //if the logo is light or dark, its 128 x 128, otherwise 128 x 64
          width={128}
          height={
            logoSrc.includes('box-logo-light') ||
            logoSrc.includes('box-logo-dark')
              ? 128
              : 64
          }
          className="object-contain"
          priority
        />
      </motion.div>
    </Link>
  );
}
