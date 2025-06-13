// src/app/components/mainPage/WhoIHelpSection.js
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhoIHelpSection() {
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
        staggerChildren: 0.15,
      },
    },
  };

  const helpPoints = [
    {
      icon: '+',
      text: 'Know you capable of more - but feel stuck in self-doubt or imposter syndrome',
      highlight: 'capable of more - but feel stuck in self-doubt',
    },
    {
      icon: '+',
      text: "Are ready to lead boldly - without changing to fit someone else's mold",
      highlight: 'ready to lead boldly',
    },
    {
      icon: '+',
      text: 'Are seeking clarity, not just in business - but on who you are as a leader',
      highlight: 'seeking clarity, not just in business',
    },
    {
      icon: '+',
      text: 'Are ready to stop shrinking, start owning your space, and show up unapologetically',
      highlight: 'stop shrinking, start owning your space',
    },
  ];

  return (
    <section className="py-20 border-t border-primary bg-gradient-to-br from-primary/5 via-primary/20 to-neutral/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          {/* Brand Label */}
          <motion.p
            variants={fadeInUp}
            className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500"
          >
            ROK IS FOR PEOPLE WHO...
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Points */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {helpPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-4 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-secondary flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg text-tertiary leading-relaxed">
                    {point.text
                      .split(point.highlight)
                      .map((part, i) => (
                        <span key={i}>
                          {part}
                          {i <
                            point.text.split(point.highlight).length -
                              1 && (
                            <strong className="text-secondary font-semibold">
                              {point.highlight}
                            </strong>
                          )}
                        </span>
                      ))}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Image and Quote */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Image */}
            <div className="relative overflow-hidden shadow-2xl">
              <Image
                src="/images/photos/1.png"
                alt="ROK Coaching - Empowering Leaders"
                width={500}
                height={400}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
            </div>

            {/* Quote Block */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 shadow-xl border-l-4 border-secondary"
            >
              <div className="mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-secondary"
                >
                  <path
                    d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-tertiary italic mb-4 leading-relaxed">
                Rhonda helped me find the confidence I didn&apos;t
                know I had - and the plan to match it.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <div className="font-semibold text-primary">
                    Maya
                  </div>
                  <div className="text-sm text-tertiary">
                    Tech Startup Founder
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
