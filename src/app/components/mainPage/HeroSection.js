'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[86vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/photos/1.webp"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto my-4 px-4 z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            <span className="block mb-2">
              Guiding Young Adults Towards Independence, Confidence,
              and a Brighter Future
            </span>
          </h1>

          <p className="text-xl text-white mb-10 max-w-2xl font-body">
            Changes in support can feel overwhelming no matter what
            the circumstances, but no one should have to face it
            alone. At Innovation Care Supported Living, we provide
            compassionate, person-centered care that nurtures
            independence while ensuring safety, stability, and growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#services"
              className="px-8 py-4 bg-white text-purple font-heading font-semibold rounded-full hover:bg-white hover:scale-105 transition-all shadow-lg"
            >
              Explore Our Services
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-secondary text-purple font-heading font-semibold rounded-full hover:bg-white hover:scale-105 transition-all shadow-lg"
            >
              Get in Touch Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
