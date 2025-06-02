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
import SectionDivider from '@/src/app/components/SectionDivider';

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
    <main className="min-h-screen bg-light text-textDark overflow-hidden">
      {/* Initial loading animation for the whole page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <NavbarSection />

        <HeroSection />

        <SectionDivider
          variant="gradient"
          height="6px"
          className="my-0"
        />

        <div id="about">
          <AboutRhondaSection />
        </div>

        <SectionDivider
          variant="secondary-gradient"
          height="6px"
          className="my-0"
        />

        <WhoIHelpSection />

        <SectionDivider
          variant="primary-gradient"
          height="6px"
          className="my-0"
        />

        <div id="services">
          <ServicesSection />
        </div>

        <SectionDivider
          variant="tertiary-gradient"
          height="6px"
          className="my-0"
        />

        <div id="testimonials">
          <TestimonialsSection />
        </div>

        <SectionDivider
          variant="gradient"
          height="6px"
          className="my-0"
        />

        <div id="contact">
          <ContactSection />
        </div>

        <FooterSection />
      </motion.div>
    </main>
  );
}
