// src/app/components/mainPage/HeroSection.js
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-warm via-light to-neutral-light">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-tertiary rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="max-w-2xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6"
              variants={fadeInUp}
            >
              <span className="block mb-2">Confidence to Lead.</span>
              <span className="text-gradient">Power to Grow.</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-tertiary mb-8 font-body leading-relaxed"
              variants={fadeInUp}
            >
              ROK Coaching helps women unlock their boldest selves in
              business - with mentoring, strategy, and the belief they
              deserve to scale, lead, and thrive.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              variants={fadeInUp}
            >
              <Link
                href="#services"
                className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all shadow-lg"
              >
                🔸 Start Your Journey
              </Link>
              <Link
                href="#contact"
                className="btn-outline px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all"
              >
                🔸 Book a Free Discovery Call
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 text-sm text-tertiary"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Global Leadership</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Women Empowerment</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/photos/rhonda-headshots/1.jpg"
                alt="Rhonda Olsen - Business Coach and Mentor"
                width={600}
                height={700}
                className="object-cover w-full h-[600px]"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="text-2xl">👑</div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-secondary text-white p-4 rounded-xl shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
            >
              <div className="text-sm font-semibold">
                Unlock Your Potential
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="flex flex-col items-center text-tertiary">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 16l-6-6h12l-6 6z" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
