'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  titleSize = 'large',
  theme = 'light',
  className = '',
}) {
  // Alignment styles
  const alignStyles = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  // Title size styles
  const titleSizes = {
    small: 'text-2xl md:text-3xl',
    medium: 'text-3xl md:text-4xl',
    large: 'text-4xl md:text-5xl',
  };

  // Theme styles
  const themeStyles = {
    light: {
      title: 'text-primary',
      subtitle: 'text-accent',
      description: 'text-textDark opacity-80',
    },
    dark: {
      title: 'text-textLight',
      subtitle: 'text-primary',
      description: 'text-textLight opacity-80',
    },
    primary: {
      title: 'text-textLight',
      subtitle: 'text-textLight',
      description: 'text-textLight opacity-90',
    },
  };

  // Animation variants
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '6rem',
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  const currentTheme = themeStyles[theme] || themeStyles.light;

  return (
    <motion.div
      className={`max-w-3xl ${alignStyles[align]} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {subtitle && (
        <motion.p
          className={`text-lg md:text-xl font-medium mb-2 ${currentTheme.subtitle}`}
          variants={headerVariants}
        >
          {subtitle}
        </motion.p>
      )}

      {title && (
        <motion.h2
          className={`font-heading font-bold ${titleSizes[titleSize]} mb-4 ${currentTheme.title}`}
          variants={headerVariants}
        >
          {title}
        </motion.h2>
      )}

      {align === 'center' && (
        <motion.div
          className={`h-1 bg-primary ${alignStyles[align]} mb-6`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={lineVariants}
        />
      )}

      {description && (
        <motion.p
          className={`${
            align === 'center' ? 'max-w-2xl mx-auto' : ''
          } ${currentTheme.description} leading-relaxed text-lg`}
          variants={{
            ...headerVariants,
            visible: {
              ...headerVariants.visible,
              transition: { duration: 0.6, delay: 0.2 },
            },
          }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
