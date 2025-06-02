'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionDivider - A reusable component for creating visual breaks between page sections
 * @param {Object} props - Component props
 * @param {string} props.variant - Determines the color scheme ('primary', 'secondary', 'tertiary', or 'gradient')
 * @param {string} props.direction - Direction of the divider ('horizontal' or 'vertical')
 * @param {string} props.width - Width of the divider (for horizontal) - CSS value
 * @param {string} props.height - Height of the divider (for horizontal) - CSS value
 * @param {boolean} props.animate - Whether to animate the divider entrance
 * @param {string} props.className - Additional CSS classes
 */
export default function SectionDivider({
  variant = 'gradient',
  direction = 'horizontal',
  width = '100%',
  height = '6px',
  animate = true,
  className = '',
}) {
  // Determine the background based on variant
  const getBackground = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary';
      case 'secondary':
        return 'bg-secondary';
      case 'tertiary':
        return 'bg-tertiary';
      case 'warm':
        return 'bg-warm';
      case 'primary-gradient':
      case 'secondary-gradient':
      case 'tertiary-gradient':
      case 'gradient':
      default:
        // Don't return a class for gradients since we'll use inline styles
        return '';
    }
  };

  // Get the gradient style based on variant
  const getGradientStyle = () => {
    switch (variant) {
      case 'primary-gradient':
        return {
          background:
            'linear-gradient(to right, var(--primary), var(--primary-light))',
        };
      case 'secondary-gradient':
        return {
          background:
            'linear-gradient(to right, var(--secondary), var(--secondary-light))',
        };
      case 'tertiary-gradient':
        return {
          background:
            'linear-gradient(to right, var(--tertiary), var(--tertiary-light))',
        };
      case 'gradient':
      default:
        return direction === 'horizontal'
          ? {
              background:
                'linear-gradient(to right, var(--primary), var(--secondary), var(--tertiary))',
            }
          : {
              background:
                'linear-gradient(to bottom, var(--primary), var(--secondary), var(--tertiary))',
            };
    }
  };

  // Set the styles based on direction
  const dividerStyles = {
    width: direction === 'horizontal' ? width : height,
    height: direction === 'horizontal' ? height : width,
    margin: 0,
    // When used with parent elements that have margin-block, we need to ensure the
    // divider is properly positioned without gaps
    marginTop: '-1px', // Slight negative margin to prevent gap at the top
    marginBottom: '-1px', // Slight negative margin to prevent gap at the bottom
  };

  // Animation variants
  const variants = {
    hidden: {
      opacity: 0,
      scaleX: direction === 'horizontal' ? 0 : 1,
      scaleY: direction === 'vertical' ? 0 : 1,
    },
    visible: {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  // Check if we're using a gradient or solid color
  const isGradient = [
    'gradient',
    'primary-gradient',
    'secondary-gradient',
    'tertiary-gradient',
  ].includes(variant);

  return (
    <motion.div
      className={`${className}`}
      style={{
        display: 'block',
        marginBlock: 0, // Override any margin-block from parent styles
      }}
      initial={animate ? 'hidden' : 'visible'}
      whileInView={animate ? 'visible' : undefined}
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className={`${!isGradient ? getBackground() : ''}`}
        style={{
          ...dividerStyles,
          ...(isGradient ? getGradientStyle() : {}),
        }}
        variants={animate ? variants : undefined}
      />
    </motion.div>
  );
}
