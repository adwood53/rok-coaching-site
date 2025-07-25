// src/app/components/NavbarSection.js
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/src/app/components/Logo';

export default function NavbarSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define navigation items
  const navigationItems = [
    {
      name: 'About',
      href: isHomePage ? '#about' : '/#about',
    },
    {
      name: 'How I Help',
      href: isHomePage ? '#how-i-help' : '/#how-i-help',
    },
    {
      name: 'Testimonials',
      href: isHomePage ? '#testimonials' : '/#testimonials',
    },
    {
      name: 'Contact',
      href: isHomePage ? '#contact' : '/#contact',
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all border-b border-primary to-primary-dark bg-white duration-500`}
      >
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between py-6">
            {/* Left – Navigation Links */}
            <div className="flex items-center space-x-12">
              {navigationItems.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-heading font-light tracking-wide uppercase transition-all duration-300 hover:opacity-60 text-primary`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Center – Logo */}
            <div className="flex-shrink-0">
              <Logo variant={'default'} />
            </div>

            {/* Right – Navigation Links & CTA */}
            <div className="flex items-center space-x-12">
              {navigationItems.slice(2).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-heading font-light tracking-wide uppercase transition-all duration-300 hover:opacity-60 text-primary`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="https://calendly.com/rhonda-rok-coaching-jtdb"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  'px-6 py-3 text-sm font-heading font-medium tracking-wide uppercase transition-all duration-300 border border-primary text-primary hover:bg-primary hover:!text-white'
                }
              >
                Book Free Call
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center justify-between py-4">
            {/* Mobile Logo */}
            <Logo variant={'default'} />

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleMenu}
              className={`relative z-50 focus:outline-none transition-colors duration-300 text-primary`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-px bg-current transition-all duration-300 ${
                    isMenuOpen
                      ? 'rotate-45 translate-y-px'
                      : '-translate-y-1'
                  }`}
                />
                <span
                  className={`block w-5 h-px bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block w-5 h-px bg-current transition-all duration-300 ${
                    isMenuOpen
                      ? '-rotate-45 -translate-y-px'
                      : 'translate-y-1'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-md z-40"
            >
              <div className="flex flex-col justify-center items-center h-full space-y-8">
                {/* Mobile Navigation Links */}
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      className="text-primary text-2xl font-heading font-semibold tracking-wide uppercase hover:text-secondary transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="pt-8"
                >
                  <Link
                    href="https://calendly.com/rhonda-rok-coaching-jtdb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-primary text-white text-sm font-heading font-medium tracking-wide uppercase hover:bg-primary-light transition-all duration-300"
                    onClick={closeMobileMenu}
                  >
                    Book Free Call
                  </Link>
                </motion.div>

                {/* Mobile Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex items-center space-x-6 pt-8"
                >
                  <a
                    href="mailto:rhonda@rok-coaching.com"
                    className="text-primary hover:text-secondary transition-colors duration-300"
                    aria-label="Email Rhonda"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/rhonda-olsen-gms-16165116/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors duration-300"
                    aria-label="Rhonda's LinkedIn"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="https://instagram.com/rokcoaching"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors duration-300"
                    aria-label="ROK Coaching Instagram"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-

6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.281.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Navbar Spacer – prevents content from being hidden behind fixed nav */}
      <div className="h-20 lg:h-24"></div>
    </>
  );
}
