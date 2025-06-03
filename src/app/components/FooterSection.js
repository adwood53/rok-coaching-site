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
    <footer className="bg-gradient-to-br from-primary to-primary-dark text-black border-t relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-secondary blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-white blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-tertiary blur-2xl"></div>
      </div>
      {/* Main Footer Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={isHomePage ? '#about' : '/#about'}
                    className="text-blac/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300"
                  >
                    ABOUT RHONDA
                  </Link>
                </li>
                <li>
                  <Link
                    href={isHomePage ? '#services' : '/#services'}
                    className="text-blac/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300"
                  >
                    SERVICES
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      isHomePage ? '#testimonials' : '/#testimonials'
                    }
                    className="text-blac/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300"
                  >
                    CLIENT STORIES
                  </Link>
                </li>
                <li>
                  <Link
                    href={isHomePage ? '#contact' : '/#contact'}
                    className="text-blac/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#contact"
                    className="text-blac/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300"
                  >
                    1:1 EMPOWERMENT COACHING
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-blac/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300"
                  >
                    STRATEGY DAYS
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-blac/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300"
                  >
                    SCALE & GROW MENTORSHIP
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-blac/80 hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300"
                  >
                    CONFIDENCE CLUB
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer Bar */}
      <div className="relative z-10 bg-primary-dark py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-black/60 mb-4 md:mb-0">
              &copy; {year} ROK COACHING. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-6 text-xxs text-blac/60">
              <span>CONFIDENCE | GROWTH | LEADERSHIP</span>
              <Link
                href="/privacy-policy"
                className="hover:text-secondary transition-colors"
              >
                PRIVACY POLICY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
