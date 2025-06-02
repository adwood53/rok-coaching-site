'use client';

import React from 'react';
import Image from 'next/image';

export default function HowWeWorkSection() {
  const steps = [
    {
      number: '01',
      title: 'Personalised Matching & Goal Setting',
      description:
        'We take time to understand each person; their background, needs, strengths, and aspirations, to create a bespoke care plan that truly fits.',
      image: '/images/photos/6.webp',
    },
    {
      number: '02',
      title: 'Structured, Goal-Focused Progression',
      description:
        'Through hands-on coaching, real-world experience, and ongoing guidance, we help young adults build confidence in managing daily life.',
      image: '/images/photos/7.webp',
    },
    {
      number: '03',
      title: 'Continuous Support & Adaptation',
      description:
        'Life evolves and so do needs. Our regular reviews and care plan adjustments ensure the right support at every stage.',
      image: '/images/photos/8.webp',
    },
  ];

  return (
    <section
      id="howwework"
      className="py-20 bg-light relative overflow-hidden"
    >
      {/* Background design element - left side color block */}
      <div className="absolute left-0 top-0 w-1/4 h-full bg-primary z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-tertiary mb-4">
            How We Work
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-tertiary font-body">
            A Thoughtful Approach to Care
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="w-full md:w-1/2 p-8">
                <div className="inline-block text-5xl font-heading text-secondary font-bold bg-warm rounded-lg py-2 px-4 mb-4">
                  {step.number}
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4 text-tertiary">
                  {step.title}
                </h3>
                <p className="text-lg font-body text-tertiary">
                  {step.description}
                </p>
              </div>

              {/* Modified image container to ensure proper display on small screens */}
              <div className="w-full md:w-1/2 h-64 md:h-96 relative">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 bg-secondary text-light p-10 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <p className="text-xl italic font-body">
            Our goal? To empower every individual to embrace
            independence with strength and self-belief.
          </p>
        </div>
      </div>
    </section>
  );
}
