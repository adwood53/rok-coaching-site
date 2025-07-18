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
        'For me Rhonda’s mentorship, guidance and the times that she both challenged and supported me have all been instrumental in my development over the last few months.  I know a lot more about myself and understand the person and leader I want to be.  I will carry with me, the lessons she has so freely given, long into the future.',
      author: '',
      role: 'Global Director Supply Chain',
      image: '/images/photos/4.png',
      result: '',
      color: 'primary',
    },
    {
      quote:
        "Rhonda's incredibly skilled and insightful support and guidance as my coach has empowered me to focus on what I really want to achieve, start to rebuild my life and totally transformed how I see my future. I cannot thank her enough.",
      author: '',
      role: 'Strategy Consultant',
      image: '/images/photos/2.png',
      result: '',
      color: 'secondary',
    },
    {
      quote:
        'Rhonda has many skills as a coach.  She has influenced the way I think, the way I speak and the way I act.  I am very grateful for the experience of working with her.',
      author: '',
      role: 'International Operations Director',
      image: '/images/photos/6.png',
      result: '',
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
    <section className="py-20 border-t  border-primary bg-gradient-to-br from-primary/5 via-primary/20 to-neutral/10 relative overflow-hidden">
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
          <motion.p
            variants={fadeInUp}
            className="text-xs font-medium tracking-[0.2em] mb-2 uppercase text-gray-500"
          >
            Where you will get to...
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6"
          >
            Words from People I&apos;ve Worked With
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-tertiary max-w-3xl mx-auto"
          >
            Real stories from real people who decided to stop playing
            small and start leading life boldly.
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
