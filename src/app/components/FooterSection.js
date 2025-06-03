// src/app/components/FooterSection.js
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/src/app/components/Logo';

export default function FooterSection() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <footer className="bg-gradient-to-br from-primary to-primary-dark text-blac relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-secondary blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-white blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-tertiary blur-2xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <Logo variant="default" className="mb-6" />
              <p className="text-lg text-blac/90 mb-6 max-w-md leading-relaxed">
                ROK Coaching helps women unlock their boldest selves
                in business - with mentoring, strategy, and the belief
                they deserve to scale, lead, and thrive.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:rhonda@rokcoaching.com"
                  className="text-secondary hover:text-secondary-light transition-colors"
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
                  className="text-secondary hover:text-secondary-light transition-colors"
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
                <a
                  href="https://instagram.com/rokcoaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary-light transition-colors"
                  aria-label="ROK Coaching Instagram"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.281.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-heading font-semibold text-secondary mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={isHomePage ? '#about' : '/#about'}
                    className="text-blac/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300"
                  >
                    About Rhonda
                  </Link>
                </li>
                <li>
                  <Link
                    href={isHomePage ? '#services' : '/#services'}
                    className="text-blac/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      isHomePage ? '#testimonials' : '/#testimonials'
                    }
                    className="text-blac/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300"
                  >
                    Client Stories
                  </Link>
                </li>
                <li>
                  <Link
                    href={isHomePage ? '#contact' : '/#contact'}
                    className="text-blac/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-heading font-semibold text-secondary mb-6">
                Work With Me
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#contact"
                    className="text-blac/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300"
                  >
                    1:1 Empowerment Coaching
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-blac/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300"
                  >
                    Strategy Days
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-blac/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300"
                  >
                    Scale & Grow Mentorship
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-blac/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300"
                  >
                    Confidence Club
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-blac mb-4">
                Ready to Transform Your Leadership?
              </h3>
              <p className="text-lg text-blac/80 mb-6 max-w-2xl mx-auto">
                Book a free 30-minute clarity call and let&apos;s
                explore how ROK Coaching can help you unlock your
                potential.
              </p>
              <Link
                href="https://calendly.com/rhonda-rokcoaching"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary text-white text-blac px-8 py-4 font-heading font-semibold hover:bg-secondary-light hover:scale-105 transition-all shadow-lg"
              >
                📅 Book Your Free Call
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="relative z-10 bg-primary-dark py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blac/60 mb-4 md:mb-0">
              &copy; {year} ROK Coaching. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-blac/60">
              <span>Confidence | Growth | Leadership</span>
              <Link
                href="/privacy-policy"
                className="hover:text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
