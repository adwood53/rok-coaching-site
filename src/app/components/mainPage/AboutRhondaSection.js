// src/app/components/mainPage/AboutRhondaSection.js
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutRhondaSection() {
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
    <section className="py-20 bg-light relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-warm to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/photos/rhonda-headshots/2.jpg"
                alt="Rhonda Olsen - I've Been Where You Are"
                width={500}
                height={600}
                className="object-cover w-full h-[600px]"
              />
              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                <p className="text-white text-lg font-medium italic">
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
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                I&apos;ve Been Where You Are. That&apos;s Why I Built
                ROK.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="space-y-6 text-lg text-tertiary leading-relaxed"
            >
              <p>
                I&apos;m{' '}
                <strong className="text-primary">Rhonda Olsen</strong>
                , business coach, mentor and trainer with a 25-year
                global career in sales, marketing and operations.
              </p>

              <p>
                But I&apos;m also a woman who knows what it feels like
                to second-guess yourself, dim your light, or shrink
                your ambition to fit the room.
              </p>

              <p>
                <strong className="text-secondary">
                  ROK Coaching was born to change that.
                </strong>
                <br />I work with women who are ready to step into
                their full potential - with clarity, confidence, and
                no apologies.
              </p>

              <p className="text-xl font-semibold text-primary">
                Let&apos;s make <em>your</em> bold vision a reality.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/about"
                className="btn-primary px-6 py-3 rounded-xl hover:scale-105 transition-all"
              >
                Find out more about me
              </Link>
              <Link
                href="#contact"
                className="btn-outline px-6 py-3 rounded-xl hover:scale-105 transition-all"
              >
                Let&apos;s Connect
              </Link>
            </motion.div>

            {/* Stats/Credentials */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">
                  25+
                </div>
                <div className="text-sm text-tertiary">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">
                  20+
                </div>
                <div className="text-sm text-tertiary">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">
                  40+
                </div>
                <div className="text-sm text-tertiary">
                  Nationalities
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
