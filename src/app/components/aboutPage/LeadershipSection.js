'use client';

import React from 'react';
import Image from 'next/image';

export default function LeadershipSection() {
  const leaders = [
    {
      name: 'Danielle Hackwell',
      title: 'Managing Director & Director of Operations',
      quote:
        'From support worker to leader, my career has been driven by a deep passion for helping young people navigate the complexities of adult life. With expertise in mental health, learning disabilities, and trauma-informed care, my mission is to ensure that every individual we support feels safe, heard, and empowered.',
      image: '/images/Danielle-Hackwell.jpg',
    },
    {
      name: 'Daniel Desachy',
      title: 'Managing Director & Director of Finance',
      quote:
        'With a background in both care and finance, I understand that exceptional service begins with strong foundations. My focus is on ensuring that every young adult we support receives the resources, stability, and personalised attention they deserve.',
      image: '/images/Daniel-Desachy.jpg',
    },
  ];

  return (
    <section className="py-20 bg-light relative overflow-hidden">
      {/* Background design element - right side color block */}
      <div className="absolute left-0 top-0 h-full w-1/4 bg-primary z-0"></div>

      <div className="container mx-auto relative z-10px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-6 text-purple">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-body text-secondary">
            We support and nurture the each member of our staff team
            to build and grow in areas of need, from bespoken
            wellbeing plans to development and progression, we feel
            that staff are just as important as the individuals we
            care for, and we can&apos;t achieve our goal as a company
            if we didn&apos;t invest and build our team to make sure
            that we can build a successful business model for all
            members of innovation.
          </p>
          <p className="text-xl max-w-3xl mx-auto font-body text-secondary">
            Together, we are building a future where no young adult
            has to transition into independence alone.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index > 0
                  ? 'mt-12 pt-12 border-t border-gray-200'
                  : ''
              }`}
            >
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="h-64 md:h-full relative rounded-xl overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-heading text-purple font-bold mb-2">
                  {leader.name}
                </h3>
                <p className="text-lg text-db-red mb-4 font-body">
                  {leader.title}
                </p>
                <div className="relative pl-6 border-l-4 border-purple italic">
                  <blockquote className="text-lg text-purple font-body">
                    &quot;{leader.quote}&quot;
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 bg-secondary text-light p-10 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <p className="text-xl italic font-body">
            Together, we are building a future where no young adult
            has to transition into independence alone.
          </p>
        </div>
      </div>
    </section>
  );
}
