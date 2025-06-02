'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function NavbarSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Define navigation items for both sides of the logo
  const leftMenuItems = [
    {
      name: 'Services',
      href: isHomePage ? '#services' : '/#services',
    },
    {
      name: 'How We Work',
      href: isHomePage ? '#howwework' : '/#howwework',
    },
  ];

  const rightMenuItems = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white border-primary py-4 relative z-50">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left Menu Items */}
          <div className="flex items-center space-x-8 ">
            {leftMenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-tertiary font-heading font-semibold text-lg hover:text-secondary hover:scale-105 transition-all duration-300 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <Link
            href="/"
            className="flex items-center justify-center -mt-4 -mb-6"
          >
            <Image
              src="/images/Logo.webp"
              alt="ICS Living Logo"
              width={120}
              height={120}
            />
          </Link>

          {/* Right Menu Items */}
          <div className="flex items-center space-x-8">
            {rightMenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-tertiary font-heading font-semibold text-lg hover:text-secondary hover:scale-105 transition-all duration-300 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/images/Box-Logo.webp"
              alt="ICS Living Logo"
              width={60}
              height={60}
              className="logo-heartbeat transition-all duration-300"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="text-tertiary focus:outline-none relative z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-warm bg-opacity-95 z-40 flex flex-col items-center justify-center">
            <div className="py-8 px-4 space-y-6 w-full max-w-sm">
              {[...leftMenuItems, ...rightMenuItems].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-center text-tertiary font-heading text-xl font-semibold hover:text-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
