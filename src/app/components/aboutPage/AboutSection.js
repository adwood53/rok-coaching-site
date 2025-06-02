'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const values = [
    {
      title: 'Caring',
      description:
        'Every person is unique, and so is our approach. We offer tailored support that nurtures emotional and physical well-being.',
      image: '/images/photos/9.webp',
    },
    {
      title: 'Aspiration',
      description:
        'We believe in potential, not limitations. Our role is to uplift, encourage, and inspire young people to dream bigger and achieve more.',
      image: '/images/photos/10.webp',
    },
    {
      title: 'Respect',
      description:
        "Each individual's choices, background, and identity are honoured. We create spaces where dignity and autonomy are at the forefront.",
      image: '/images/photos/11.webp',
    },
    {
      title: 'Empowerment',
      description:
        'We provide innovative, compassionate care that helps individuals take control of their future with confidence.',
      image: '/images/photos/12.webp',
    },
  ];

  return (
    <section className="py-20 bg-light relative overflow-hidden">
      {/* Background design element - right side color block */}
      <div className="absolute right-0 top-0 h-full w-1/4 bg-warm z-0"></div>

      <div className="container mx-auto relative z-10px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-purple mb-6">
            About Us
          </h1>
          <p className="text-2xl text-secondary mb-4 font-heading">
            A Vision of Care & Possibility
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="bg-white p-10 rounded-xl shadow-lg mb-6 hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-purple">
                Our Mission
              </h2>
              <p className="text-lg font-body text-purple">
                At Innovation Care Supported Living, our mission is
                simple yet powerful: to provide unwavering support,
                guidance, and care to young adults transitioning into
                independence. Through structured programs,
                individualised care, and a community-driven approach,
                we give every person the tools to thrive.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-purple">
                Our Vision
              </h2>
              <p className="text-lg font-body text-purple">
                To create a world where every young adult, regardless
                of their past circumstances, feels empowered, valued,
                and fully prepared to lead a safe, fulfilling, and
                independent life.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-purple text-center mb-6">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-3 text-purple">
                    {value.title}
                  </h3>
                  <p className="font-body text-purple mb-6">
                    {value.description}
                  </p>
                  <div className="h-48 relative rounded-lg overflow-hidden">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
