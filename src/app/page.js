// src/app/page.js
'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import NavbarSection from '@/src/app/components/NavbarSection';
import HeroSection from '@/src/app/components/mainPage/HeroSection';
import AboutRhondaSection from '@/src/app/components/mainPage/AboutRhondaSection';
import WhoIHelpSection from '@/src/app/components/mainPage/WhoIHelpSection';
import ServicesSection from '@/src/app/components/mainPage/ServicesSection';
import TestimonialsSection from '@/src/app/components/mainPage/TestimonialsSection';
import ContactSection from '@/src/app/components/mainPage/ContactSection';
import FooterSection from '@/src/app/components/FooterSection';

export default function Home() {
  // Scroll to hash on load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Add a slight delay to ensure all content is loaded
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    } else {
      // Scroll to top if no hash is present
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Initial loading animation for the whole page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <NavbarSection />

        <HeroSection />

        {/* Minimal Section Divider */}
        <div className="h-px bg-gray-200 max-w-screen-xl mx-auto" />

        <div id="about">
          <AboutRhondaSection />
        </div>

        <div className="h-px bg-gray-200 max-w-screen-xl mx-auto" />

        <WhoIHelpSection />

        <div className="h-px bg-gray-200 max-w-screen-xl mx-auto" />

        <div id="services">
          <ServicesSection />
        </div>

        <div className="h-px bg-gray-200 max-w-screen-xl mx-auto" />

        <div id="testimonials">
          <TestimonialsSection />
        </div>

        {/* Newsletter Section - Minimal */}
        <section className="py-16 bg-black">
          <div className="container max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-light tracking-wide text-white mb-4">
                Stay Connected
              </h3>
              <p className="text-sm text-gray-400 mb-8 font-light">
                Join our newsletter for insights on leadership,
                confidence, and growth.
              </p>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:border-white focus:outline-none text-sm"
                />
                <button className="px-6 py-3 bg-white text-black text-sm font-medium tracking-wide uppercase hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <div id="contact">
          <ContactSection />
        </div>

        <FooterSection />
      </motion.div>
    </main>
  );
}
