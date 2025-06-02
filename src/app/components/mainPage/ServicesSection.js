'use client';

import React from 'react';
import Image from 'next/image';

export default function ServicesSection() {
  const services = [
    {
      title: 'Supported Living Services',
      description:
        'Safe, structured accommodation designed to nurture independence.',
      image: '/images/photos/2.webp',
      points: [
        'Warm, community-driven environments where young adults feel valued.',
        'A holistic support system that bridges the gap between childhood services and adult autonomy.',
      ],
    },
    {
      title: 'Developing Independent Living Skills',
      description:
        'Cooking, cleaning, and managing a home with confidence.',
      image: '/images/photos/3.webp',
      points: [
        'Budgeting, financial literacy, and smart spending habits.',
        'Learning to navigate daily life with structure and self-sufficiency.',
      ],
    },
    {
      title: 'Health & Well-being',
      description: 'Access to medical care and emotional support.',
      image: '/images/photos/4.webp',
      points: [
        'Therapy, counseling, and mentorship for personal development.',
        'Encouraging healthy habits and self-care routines.',
      ],
    },
    {
      title: 'Social Inclusion & Community Engagement',
      description:
        'Partnering with organisations like The Island, The Wolf Pack Project and the local amenities that will provide engaging activities, volunteering opportunities, and social events.',
      image: '/images/photos/5.webp',
      points: [
        'Tailored progression plans that help each individual build confidence in community settings.',
        'Encouraging friendships, social connections, and personal growth.',
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-light relative overflow-hidden"
    >
      {/* Background design element - right side color block */}
      <div className="absolute right-0 top-0 h-full w-1/4 bg-warm z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-tertiary mb-4">
            Our Services - Tailored Support for Unique Journeys
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-tertiary font-body">
            No two individuals have the same needs, which is why we
            offer <b>bespoke, compassionate care </b>that adapts to
            each individual&apos;s journey.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } bg-white rounded-xl overflow-hidden shadow-lg border-l-4 ${
                index % 2 === 0
                  ? 'border-primary'
                  : 'border-secondary'
              } hover:scale-105 transition-all duration-300 ease-in-out`}
            >
              <div className="lg:w-1/3 relative overflow-hidden h-64 lg:h-auto">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:w-2/3 p-8">
                <h3 className="text-2xl font-heading font-bold text-tertiary mb-4">
                  {service.title}
                </h3>
                <p className="mb-4 font-body text-tertiary">
                  {service.description}
                </p>
                <ul className="space-y-2 font-body text-tertiary">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-secondary">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
