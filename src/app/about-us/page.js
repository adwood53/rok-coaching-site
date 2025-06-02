'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import NavbarSection from '@/src/app/components/NavbarSection';
import AboutSection from '@/src/app/components/aboutPage/AboutSection';
import LeadershipSection from '@/src/app/components/aboutPage/LeadershipSection';
import ContactSection from '@/src/app/components/mainPage/ContactSection';
import FooterSection from '@/src/app/components/FooterSection';
import SectionDivider from '@/src/app/components/SectionDivider';

export default function AboutUs() {
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
    <main className="min-h-screen bg-backgroundLight text-textDark overflow-hidden">
      {/* Initial loading animation for the whole page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <NavbarSection />
        <SectionDivider
          variant="secondary-gradient"
          height="6px"
          className="my-4"
        />
        <AboutSection />
        <SectionDivider
          variant="gradient"
          height="6px"
          className="my-2"
        />
        <LeadershipSection />
        <SectionDivider
          variant="secondary-gradient"
          height="6px"
          className="my-4"
        />
        <ContactSection />
        <SectionDivider
          variant="gradient"
          height="6px"
          className="my-2"
        />
        <FooterSection />
      </motion.div>
    </main>
  );
}
