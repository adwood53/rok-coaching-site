// src/app/components/mainPage/ServicesSection.js
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesSection() {
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

  const services = [
    {
      title: '1:1 Empowerment Coaching',
      description:
        'Deep coaching to rediscover your confidence, map your goals, and own your brilliance.',
      image: '/images/photos/rhonda-headshots/4.jpg',
      features: [
        'Personal confidence building',
        'Goal mapping & strategy',
        'Leadership development',
        'Mindset transformation',
      ],
      icon: '👑',
      color: 'primary',
    },
    {
      title: 'Strategy Days',
      description:
        'Focused time to rewire your offer, brand or leadership strategy - and leave recharged.',
      image: '/images/photos/rhonda-headshots/5.jpg',
      features: [
        'Brand positioning',
        'Offer optimization',
        'Leadership strategy',
        'Action planning',
      ],
      icon: '⚡',
      color: 'secondary',
    },
    {
      title: 'Scale & Grow Mentorship',
      description:
        'For ambitious founders ready to take their business global - with structure, support and soul.',
      image: '/images/photos/rhonda-headshots/6.jpg',
      features: [
        'Global expansion strategy',
        'Team leadership',
        'Operations scaling',
        'Cultural integration',
      ],
      icon: '🚀',
      color: 'tertiary',
    },
    {
      title: 'Confidence Club',
      description: 'A space for women to rise together.',
      image: '/images/photos/rhonda-headshots/7.jpg',
      features: [
        'Group mentorship',
        'Peer support network',
        'Monthly workshops',
        'Community building',
      ],
      icon: '🌟',
      color: 'secondary',
      comingSoon: true,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-light relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-warm to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6"
          >
            Ways to Work Together
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-tertiary max-w-3xl mx-auto"
          >
            Choose the path that feels right for your journey - from
            intensive 1:1 coaching to strategic deep dives and
            community support.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    {service.icon}
                  </div>

                  {/* Coming Soon Badge */}
                  {service.comingSoon && (
                    <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className={`text-2xl font-heading font-bold mb-3 text-${service.color}`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-tertiary mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-tertiary"
                      >
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="#contact"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all ${
                      service.comingSoon
                        ? 'bg-neutral text-neutral-dark cursor-not-allowed'
                        : `bg-${service.color} text-white hover:scale-105 hover:shadow-lg`
                    }`}
                  >
                    {service.comingSoon
                      ? 'Join Waitlist'
                      : 'Learn More'}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-heading font-bold mb-4">
            Ready to Unlock Your Potential?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Let&apos;s have a conversation about where you are and
            where you want to be.
          </p>
          <Link
            href="#contact"
            className="btn-secondary bg-white text-primary hover:bg-neutral-light px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all"
          >
            Book Your Free Discovery Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
