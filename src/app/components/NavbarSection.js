// src/app/components/NavbarSection.js
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/src/app/components/Logo';

export default function NavbarSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      name: 'Services',
      href: isHomePage ? '#services' : '/#services',
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
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between py-4">
          {/* Left - Navigation Items */}
          <div className="flex items-center space-x-8">
            {navigationItems.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-heading font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? 'text-tertiary hover:text-primary'
                    : 'text-white hover:text-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Center - Logo */}
          <div className="flex-shrink-0">
            <Logo
              variant={isScrolled ? 'default' : 'light'}
              className="transition-all duration-300"
            />
          </div>

          {/* Right - Navigation Items & CTA */}
          <div className="flex items-center space-x-8">
            {navigationItems.slice(2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-heading font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? 'text-tertiary hover:text-primary'
                    : 'text-white hover:text-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="https://calendly.com/rhonda-rokcoaching"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-xl font-heading font-semibold transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary-light shadow-lg'
                  : 'bg-secondary text-white hover:bg-secondary-light shadow-lg'
              }`}
            >
              Book Free Call
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between py-4">
          {/* Mobile Logo */}
          <Logo
            variant={isScrolled ? 'default' : 'light'}
            className="transition-all duration-300"
          />

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className={`relative z-50 focus:outline-none transition-colors ${
              isScrolled ? 'text-tertiary' : 'text-white'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-primary/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center">
            <div className="py-8 px-4 space-y-8 w-full max-w-sm text-center">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-4 text-white font-heading text-2xl font-semibold hover:text-secondary transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="pt-8 border-t border-white/20">
                <Link
                  href="https://calendly.com/rhonda-rokcoaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-secondary text-white px-8 py-4 rounded-xl font-heading font-semibold text-lg hover:bg-secondary-light transition-all"
                  onClick={closeMobileMenu}
                >
                  Book Free Call
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6 pt-8">
                <a
                  href="mailto:rhonda@rokcoaching.com"
                  className="text-white hover:text-secondary transition-colors"
                  aria-label="Email Rhonda"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/rhondaolsen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors"
                  aria-label="Rhonda's LinkedIn"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
