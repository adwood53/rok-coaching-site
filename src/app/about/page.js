// src/app/about/page.js
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Components
import NavbarSection from '@/src/app/components/NavbarSection';
import FooterSection from '@/src/app/components/FooterSection';
import SectionDivider from '@/src/app/components/SectionDivider';

export default function AboutRhonda() {
  const [randomHeadshot, setRandomHeadshot] = useState(1);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
    // Randomly select a headshot from 1-13
    const randomNum = Math.floor(Math.random() * 13) + 1;
    setRandomHeadshot(randomNum);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
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

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <NavbarSection />
        <SectionDivider
          variant="gradient"
          height="4px"
          className="my-0"
        />

        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-primary/20 to-primary/5">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
            >
              <motion.p
                variants={fadeInUp}
                className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mb-4"
              >
                Meet Your Coach
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl lg:text-6xl font-heading font-bold text-primary mb-6"
              >
                Rhonda Olsen
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-secondary font-medium"
              >
                Business Coach, Mentor & Trainer
              </motion.p>
            </motion.div>
          </div>
        </section>

        <SectionDivider variant="neutral" height="2px" />

        {/* Bio Content Section */}
        <section className="py-16 lg:py-24">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
              {/* Left Column - Image */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInLeft}
                className="lg:sticky lg:top-32"
              >
                <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
                  <Image
                    src={`/images/photos/rhonda-headshots/${randomHeadshot}.jpg`}
                    alt="Rhonda Olsen - ROK Coaching Founder"
                    fill
                    className="object-cover object-center"
                    quality={95}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Right Column - Bio Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="space-y-6">
                  <h2 className="text-3xl font-heading font-bold text-primary">
                    Bio – Rhonda Olsen | ROK Coaching
                  </h2>

                  <p className="text-lg font-light text-tertiary leading-relaxed">
                    I&apos;m Rhonda Olsen -{' '}
                    <strong>
                      a qualified business and executive coach,
                    </strong>{' '}
                    mentor, and trainer with a 25-year journey
                    building global sales in more than 20 countries,
                    working with over 40 nationalities. My career has
                    spanned boardrooms, startups, and scale-ups - but
                    at the heart of it all is one truth: leadership
                    changes everything.
                  </p>

                  <p className="text-lg font-light text-tertiary leading-relaxed">
                    I created ROK Coaching to help people like you
                    step into their power. I&apos;ve seen too many
                    brilliant, capable people hold themselves back -
                    not because they lacked talent, but because they
                    lacked support, clarity, or belief. That&apos;s
                    where I come in.
                  </p>

                  <p className="text-lg font-light text-tertiary leading-relaxed">
                    My coaching blends strategy with soul. I&apos;m
                    here to challenge you, back you, and help you
                    build something that not only grows - but feels
                    good to grow. Whether you&apos;re leading a team,
                    scaling a business, or rewriting your story
                    entirely, we&apos;ll work together to create the
                    kind of clarity and confidence that can&apos;t be
                    undone.
                  </p>

                  <p className="text-lg font-light text-tertiary leading-relaxed">
                    This isn&apos;t just about goals - it&apos;s about
                    growth. Bold, unapologetic, lasting growth. And if
                    you&apos;re ready to take the changes lead like
                    you mean it, I&apos;m ready to walk with you.
                  </p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-3 gap-8 py-8 border-y border-gray-200"
                >
                  <div className="text-center">
                    <div className="text-3xl font-light text-secondary mb-2">
                      25+
                    </div>
                    <div className="text-xs tracking-wide uppercase text-tertiary">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-secondary mb-2">
                      20+
                    </div>
                    <div className="text-xs tracking-wide uppercase text-tertiary">
                      Countries
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-secondary mb-2">
                      40+
                    </div>
                    <div className="text-xs tracking-wide uppercase text-tertiary">
                      Nationalities
                    </div>
                  </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div variants={fadeInUp} className="space-y-4">
                  <h3 className="text-2xl font-heading font-semibold text-primary">
                    Ready to Begin Your Journey?
                  </h3>
                  <p className="text-base text-tertiary">
                    Let&apos;s have a conversation about where you are
                    and where you want to be.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-sm font-heading font-medium tracking-wide uppercase hover:bg-primary-light transition-all duration-300 min-w-[200px]"
                    >
                      Book Discovery Call
                    </Link>
                    <Link
                      href="/#services"
                      className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary text-sm font-heading font-medium tracking-wide uppercase hover:bg-primary hover:text-white transition-all duration-300 min-w-[200px]"
                    >
                      View Services
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <SectionDivider variant="gradient" height="4px" />
        <FooterSection />
      </motion.div>
    </main>
  );
}
