// src/app/components/mainPage/AboutRhondaSection.js
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function AboutRhondaSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const [randomHeadshot, setRandomHeadshot] = React.useState(1);
  useEffect(() => {
    // Randomly select a headshot from 1-13
    const randomNum = Math.floor(Math.random() * 13) + 1;
    setRandomHeadshot(randomNum);
  }, []);

  return (
    <section className="py-20 lg:py-32 border-t border-primary relative">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={`/images/photos/rhonda-headshots/${randomHeadshot}.jpg`}
                alt="Rhonda Olsen - ROK Coaching Founder"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                quality={95}
              />
              {/* Minimal overlay for text on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />

              {/* Mobile quote overlay */}
              <div className="absolute bottom-8 left-6 right-6 lg:hidden">
                <p className="text-white text-sm font-light italic leading-relaxed">
                  &quot;I&apos;m a woman who knows what it feels like
                  to second-guess yourself, dim your light, or shrink
                  your ambition to fit the room.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Brand Label */}
            <motion.p
              variants={fadeInUp}
              className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500"
            >
              About the Founder
            </motion.p>

            {/* Main Headline */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl lg:text-5xl font-heading font-bold leading-tight tracking-tight text-primary mb-6">
                I&apos;ve Been Where You Are.
                <br />
                <span className="font-body italic">
                  That&apos;s Why I Built ROK.
                </span>
              </h2>
            </motion.div>

            {/* Content Blocks */}
            <motion.div
              variants={fadeInUp}
              className="space-y-6 text-gray-600 leading-relaxed"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Content */}
                <div className="space-y-6">
                  <p className="text-base lg:text-lg font-light text-tertiary">
                    I&apos;m{' '}
                    <span className="text-primary font-medium">
                      Rhonda Olsen
                    </span>
                    , business coach, mentor and trainer with a
                    25-year global career in sales, marketing and
                    operations.
                  </p>

                  <p className="text-sm lg:text-base font-light text-tertiary">
                    But I&apos;m also a woman who knows what it feels
                    like to second-guess yourself, dim your light, or
                    shrink your ambition to fit the room.
                  </p>
                </div>

                {/* Right Content */}
                <div className="space-y-6">
                  <p className="text-base lg:text-lg font-light text-tertiary">
                    <span className="text-secondary font-medium">
                      ROK Coaching was born to change that.
                    </span>
                    <br />I work with women who are ready to step into
                    their full potential - with clarity, confidence,
                    and no apologies.
                  </p>

                  <p className="text-lg lg:text-xl font-light text-primary">
                    Let&apos;s make{' '}
                    <span className="font-body italic">your</span>{' '}
                    bold vision a reality.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-8 py-8 border-t border-gray-200"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-light text-secondary mb-1">
                  25+
                </div>
                <div className="text-xs tracking-wide uppercase text-tertiary">
                  Years Experience
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-light text-secondary mb-1">
                  20+
                </div>
                <div className="text-xs tracking-wide uppercase text-tertiary">
                  Countries
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-light text-secondary mb-1">
                  40+
                </div>
                <div className="text-xs tracking-wide uppercase text-tertiary">
                  Nationalities
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-sm font-heading font-medium tracking-wide uppercase hover:bg-primary-light transition-all duration-300 min-w-[200px]"
              >
                Find Out More About Me
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary text-sm font-heading font-medium tracking-wide uppercase hover:bg-primary hover:text-white transition-all duration-300 min-w-[200px]"
              >
                Let&apos;s Connect
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
