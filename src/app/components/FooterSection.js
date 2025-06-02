'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import SectionDivider from '@/src/app/components/SectionDivider';

export default function FooterSection() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <footer className="bg-white text-tertiary">
      {/* Top Footer Section */}
      <div className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="col-span-1 md:col-span-2">
              <Link
                href="/"
                className="flex items-center gap-3 w-fit"
              >
                <Image
                  src="/images/Box-Logo.webp"
                  alt="ICS Living Logo"
                  width={60}
                  height={60}
                />
                <span className="font-heading text-3xl font-bold text-primary hover:scale-105 transition-all duration-300 ease-in-out">
                  Innovation Care Supported Living
                </span>
              </Link>
              <p className="mt-4 max-w-md font-body hover:scale-105 transition-all duration-300 ease-in-out">
                At Innovation Care Supported Living, our mission is
                simple yet powerful: to provide unwavering support,
                guidance, and care to young adults transitioning into
                independence.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-xl font-heading font-semibold text-secondary mb-6 hover:scale-105 transition-all duration-300 ease-in-out">
                Quick Links
              </h3>
              <ul className="space-y-3 font-body">
                <li>
                  <Link
                    href={isHomePage ? '#services' : '/#services'}
                    className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block duration-300 ease-in-out"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href={isHomePage ? '#howwework' : '/#howwework'}
                    className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block duration-300 ease-in-out"
                  >
                    How We Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block duration-300 ease-in-out"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={isHomePage ? '#contact' : '/#contact'}
                    className="hover:text-primary transition-colors hover:translate-x-1 transform inline-block duration-300 ease-in-out"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-xl font-heading font-semibold text-secondary mb-6 hover:scale-105 transition-all duration-300 ease-in-out">
                Contact
              </h3>
              <ul className="space-y-3 font-body">
                <li>
                  <span className="block font-medium">Email:</span>
                  <Link
                    href="mailto:info@icsliving.co.uk"
                    className="text-primary hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300 ease-in-out"
                  >
                    info@icsliving.co.uk
                  </Link>
                </li>
                <li>
                  <span className="block font-medium">Phone:</span>
                  <Link
                    href="tel:+447777777777"
                    className="text-primary hover:text-secondary transition-colors hover:translate-x-1 transform inline-block duration-300 ease-in-out"
                  >
                    +44 7777 777777
                  </Link>
                </li>
                {/*
                <li>
                  <span className="block font-medium">Address:</span>
                  <p className="transition-all hover:translate-x-1 transform inline-block duration-300 ease-in-out">
                    Address 1
                    <br />
                    Address 2
                    <br />
                    United Kingdom
                  </p>
                </li>
                */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SectionDivider
        variant="secondary-gradient"
        height="6px"
        className="my-4"
      />
      {/* Bottom Footer Section */}
      <div className="w-full bg-primary py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-light font-body">
            &copy; {year} ICS Living. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center gap-6">
            <div className="flex items-center gap-4">
              {/*
              <a
                href="https://www.linkedin.com/company/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light hover:text-secondary hover:scale-110 transition-all duration-300 ease-in-out"
                aria-label="ICS Living LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
