// src/app/components/mainPage/TestimonialsSection.js
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        'Working with Rhonda changed how I saw myself. I went from tentative founder to confident CEO.',
      author: 'Maya',
      role: 'Tech Startup Founder',
      image: '/images/photos/rhonda-headshots/8.jpg',
      result: 'Scaled team from 3 to 15 people',
      color: 'primary',
    },
    {
      quote:
        "I'd spent years helping others but forgot about me. Rhonda helped me find my power again.",
      author: 'Aisha',
      role: 'Service-Based Entrepreneur',
      image: '/images/photos/rhonda-headshots/9.jpg',
      result: 'Doubled revenue in 6 months',
      color: 'secondary',
    },
    {
      quote:
        "Rhonda doesn't just coach - she sees you. She believed in my vision when I couldn't.",
      author: 'Sarah',
      role: 'Creative Director',
      image: '/images/photos/rhonda-headshots/10.jpg',
      result: 'Launched dream agency',
      color: 'tertiary',
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-warm to-neutral/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-primary/10 to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6"
          >
            Words from Women I&apos;ve Worked With
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-tertiary max-w-3xl mx-auto"
          >
            Real stories from real women who decided to stop playing
            small and start leading boldly.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Active Testimonial */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  variants={slideIn}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-white shadow-2xl overflow-hidden"
                >
                  {/* Quote Section */}
                  <div className="p-8">
                    <div className="mb-6">
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

                    <blockquote className="text-xl md:text-2xl text-tertiary leading-relaxed mb-6 italic">
                      {testimonials[activeTestimonial].quote}
                    </blockquote>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-primary text-lg">
                          {testimonials[activeTestimonial].author}
                        </div>
                        <div className="text-tertiary">
                          {testimonials[activeTestimonial].role}
                        </div>
                      </div>

                      <div className="bg-secondary text-white px-4 py-2 text-sm font-semibold">
                        {testimonials[activeTestimonial].result}
                      </div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="relative h-64">
                    <Image
                      src={testimonials[activeTestimonial].image}
                      alt={`${testimonials[activeTestimonial].author} - ROK Coaching Client`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Right Column - Testimonial Navigation */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-white shadow-lg border-l-4 border-secondary'
                      : 'bg-white/50 hover:bg-white hover:shadow-md'
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                        index === activeTestimonial
                          ? 'bg-secondary'
                          : 'bg-neutral'
                      }`}
                    >
                      {testimonial.author[0]}
                    </div>

                    <div className="flex-1">
                      <div className="font-semibold text-primary">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-tertiary">
                        {testimonial.role}
                      </div>
                    </div>

                    {index === activeTestimonial && (
                      <div className="text-secondary">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {index === activeTestimonial && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-sm text-tertiary mt-3 italic"
                    >
                      {testimonial.quote.substring(0, 60)}...
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center gap-3 mt-12"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-secondary scale-125'
                    : 'bg-neutral hover:bg-secondary/50'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
