// src/app/components/mainPage/HeroSection.js
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const slides = [
    {
      id: 1,
      image: '/images/photos/8.png',
      title: 'Confidence to Lead.',
      subtitle: 'Power to Grow.',
      description:
        'At ROK Coaching, we empower people to step into their boldest, most capable selves. Whether you’re ready to scale your business, elevate your leadership, or simply believe more deeply in your own potential—we’re here to guide the way. Through focused coaching, strategic mentoring and mindset transformation, we help you unlock the clarity, courage, and confidence to thrive.',
      cta: 'Start Your Journey',
      ctaLink: '#services',
      secondaryCta: 'Book Free Discovery Call',
      secondaryCtaLink: '#contact',
    },
    {
      id: 2,
      image: '/images/photos/7.png',
      title: "I've Been Where You Are.",
      subtitle: "That's Why I Built ROK.",
      description:
        'I know what it feels like to second-guess yourself, dim your light, or shrink your ambition to fit the room.',
      cta: 'Find Out More About Me',
      ctaLink: '#about',
      secondaryCta: "Let's Connect",
      secondaryCtaLink: '#contact',
    },
    {
      id: 3,
      image: '/images/photos/6.png',
      title: 'Ways to Work Together',
      subtitle: '121 Coaching | Mentoring | Strategy Days | Training',
      description:
        'Choose the path that feels right for your journey - from leadership coaching to strategic deep dives and community support.',
      cta: 'Explore Services',
      ctaLink: '#services',
      secondaryCta: 'Book Discovery Call',
      secondaryCtaLink: '#contact',
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isClient) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [slides.length, isClient]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (!isClient) {
    return (
      <div className="relative w-full h-screen border-t bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border border-gray-300 border-t-black animate-spin mb-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden border-t border-primary">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={`${slides[currentSlide].title} - ROK Coaching`}
            fill
            className="object-cover object-center"
            priority
            quality={95}
          />
          {/* Red Brand Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container max-w-6xl">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="text-white"
              >
                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 1 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[0.9] tracking-tight mb-4 text-white"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* Subtitle - Increased font size and weight */}
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-xl md:text-3xl lg:text-4xl font-heading font-bold tracking-wide text-white mb-8 max-w-lg leading-relaxed"
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-sm md:text-base font-light text-gray-300 mb-10 max-w-lg leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    href={slides[currentSlide].ctaLink}
                    className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white text-sm font-heading font-medium tracking-wide uppercase hover:bg-secondary-light transition-all duration-300 min-w-[200px]"
                  >
                    {slides[currentSlide].cta}
                  </Link>

                  <Link
                    href={slides[currentSlide].secondaryCtaLink}
                    className="inline-flex items-center justify-center px-8 py-4 border border-white text-white text-sm font-heading font-medium tracking-wide uppercase hover:bg-white hover:text-primary transition-all duration-300 min-w-[200px]"
                  >
                    {slides[currentSlide].secondaryCta}
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-6">
          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Side Navigation Arrows - Minimal */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-xs tracking-widest uppercase mb-2 rotate-90 origin-center">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-px h-12 bg-white/60"
          />
        </div>
      </motion.div>
    </div>
  );
}
