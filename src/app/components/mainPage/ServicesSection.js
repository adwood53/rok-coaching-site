// src/app/components/mainPage/ServicesSection.js
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
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

  // Hover animation for cards
  const cardHover = {
    y: -8,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  };

  const services = [
    {
      title: '1:1 Empowerment Coaching',
      subtitle:
        'Deep coaching to rediscover your confidence, map your goals, and own your brilliance.',
      image: '/images/photos/17.png',
      features: [
        'Leadership development',
        'Goal mapping & strategy',
        'Personal confidence building',
        'Mindset transformation',
      ],
      category: 'Individual',
    },
    {
      title: 'Strategy Days',
      subtitle:
        'Focused time to rewire your offer, brand or leadership strategy - and leave recharged.',
      image: '/images/photos/14.jpg',
      features: [
        'Leadership strategy',
        'Action planning',
        'Offer optimisation',
        'Brand positioning',
      ],
      category: 'Intensive',
    },
    {
      title: 'Scale & Grow Mentorship',
      subtitle:
        'For ambitious founders ready to take their business global - with structure, support and soul.',
      image: '/images/photos/12.jpg',

      features: [
        'Global expansion strategy',
        'Team leadership',
        'Operations scaling',
        'Cultural integration',
      ],
      category: 'Mentorship',
    },
    {
      title: 'The Confidence Club',
      subtitle: 'A space for people to rise together.',
      image: '/images/photos/18.png',

      features: [
        'Group mentorship',
        'Peer support network',
        'Monthly workshops',
        'Community building',
      ],
      category: 'Community',
      comingSoon: true,
    },
  ];

  return (
    <section className="py-20 lg:py-32 border-t border-primary">
      <div className="container max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 lg:mb-24"
        >
          {/* Brand Label */}
          <motion.p
            variants={fadeInUp}
            className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500"
          >
            About the ROK Services
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl lg:text-5xl font-light leading-tight tracking-tight text-primary mb-6"
          >
            Ways to Work Together
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg font-light text-gray-600 max-w-2xl mx-auto"
          >
            Choose the path that feels right for your journey - from
            leadership coaching to strategic deep dives and community
            support.
          </motion.p>
        </motion.div>

        {/* Services Grid - Reduced image size */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              whileHover={cardHover}
              className="group relative bg-primary overflow-hidden hover:shadow-fashion transition-shadow duration-700"
            >
              {/* Image - Reduced aspect ratio from 1:1 to 5:4 for smaller height */}
              <div className="relative w-[100%] aspect-[8/4] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  quality={90}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Category Label */}
                <div className="absolute top-6 left-6">
                  <span className="inline-block px-3 py-1 bg-white/90 text-black text-xs font-medium tracking-wide uppercase">
                    {service.category}
                  </span>
                </div>
                {/* Coming Soon Badge */}
                {service.comingSoon && (
                  <div className="absolute top-6 right-6">
                    <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-medium tracking-wide uppercase">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm lg:text-base font-light text-gray-200 mb-6 leading-relaxed">
                  {service.subtitle}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center text-xs text-gray-100"
                    >
                      <div className="w-1 h-1 bg-white mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={service.comingSoon ? '#contact' : '#contact'}
                  className={`inline-flex items-center text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                    service.comingSoon
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-white hover:text-gray-400 group'
                  }`}
                >
                  {service.comingSoon
                    ? 'Join Waitlist'
                    : 'Learn More'}
                  {!service.comingSoon && (
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  )}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section - White Background with Red */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center bg-white"
        >
          {/* Brand Label */}
          <motion.p
            variants={fadeInUp}
            className="text-xs font-medium tracking-[0.2em] mb-2 uppercase text-gray-500"
          >
            Ready to Unlock Your Potential?
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-base font-light text-tertiary mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Let&apos;s have a conversation about where you are and
            where you want to be.
          </motion.p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-sm font-heading font-medium tracking-wide uppercase hover:bg-primary-light transition-all duration-300 min-w-[250px]"
          >
            Book Your Free Discovery Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
