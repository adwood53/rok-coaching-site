'use client';

import React from 'react';
import { Button as HeroButton } from '@heroui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'medium',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  motionProps = {},
  icon,
  iconPosition = 'right',
  ...props
}) {
  // Base styles
  const baseStyles =
    'font-medium transition-all duration-300 inline-flex items-center justify-center';

  // Variant styles
  const variantStyles = {
    primary: 'bg-primary text-textLight hover:bg-accent',
    secondary:
      'border-2 border-primary text-primary hover:bg-primary/10',
    outline:
      'bg-transparent border-2 border-textLight text-textLight hover:bg-textLight/10',
    ghost: 'bg-transparent text-primary hover:bg-primary/10',
    link: 'bg-transparent text-primary hover:underline p-0 hover:text-accent',
    accent: 'bg-accent text-textLight hover:bg-primary',
  };

  // Size styles
  const sizeStyles = {
    small: 'text-sm px-4 py-2 rounded',
    medium: 'px-6 py-3 rounded-md',
    large: 'text-lg px-8 py-4 rounded-md',
  };

  // Combine styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // Button with motion wrapper
  const ButtonComponent = (
    <motion.div
      whileHover={{ scale: variant !== 'link' ? 1.02 : 1 }}
      whileTap={{ scale: 0.98 }}
      {...motionProps}
    >
      {href ? (
        <HeroButton
          as={Link}
          href={href}
          className={buttonStyles}
          disabled={disabled}
          {...props}
        >
          {iconPosition === 'left' && icon && (
            <span className="mr-2">{icon}</span>
          )}
          {children}
          {iconPosition === 'right' && icon && (
            <span className="ml-2">{icon}</span>
          )}
        </HeroButton>
      ) : (
        <HeroButton
          type={type}
          className={buttonStyles}
          disabled={disabled}
          onClick={onClick}
          {...props}
        >
          {iconPosition === 'left' && icon && (
            <span className="mr-2">{icon}</span>
          )}
          {children}
          {iconPosition === 'right' && icon && (
            <span className="ml-2">{icon}</span>
          )}
        </HeroButton>
      )}
    </motion.div>
  );

  return ButtonComponent;
}
