// src/app/components/mainPage/ContactSection.js
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Centralized email configuration
const CONTACT_EMAIL = 'rhonda@rok-coaching.com';

export default function ContactSection() {
  const [selectedReason, setSelectedReason] = useState('');

  // Define reasons for the dropdown
  const reasons = [
    { value: '', label: 'What brings you here today?' },
    { value: '1-1-coaching', label: '1:1 Empowerment Coaching' },
    { value: 'strategy-day', label: 'Strategy Day Session' },
    { value: 'scale-mentorship', label: 'Scale & Grow Mentorship' },
    { value: 'confidence-club', label: 'Confidence Club (Waitlist)' },
    { value: 'speaking', label: 'Speaking Opportunities' },
    { value: 'partnership', label: 'Partnership Inquiry' },
    { value: 'general', label: 'General Question' },
  ];

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

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br border-t border-primary relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-medium tracking-[0.2em] mb-2 uppercase text-gray-500"
          >
            Taking the first step
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info & Image */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              {/* Image */}
              <div className="relative overflow-hidden shadow-2xl">
                <Image
                  src="/images/photos/8.png"
                  alt="Rhonda Olsen - Let's Connect"
                  width={500}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-primary">
                  <h3 className="text-2xl text-white font-heading font-bold mb-2">
                    READY TO BEGIN?
                  </h3>
                  <p className="text-lg text-white opacity-90">
                    YOUR TRANSFORMATION STARTS WITH A CONVERSATION
                  </p>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="bg-white/10 backdrop-blur-sm p-6 space-y-6">
                <h3 className="text-lg font-heading font-bold text-black mb-4">
                  GET IN TOUCH
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary flex items-center justify-center text-white">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-black">
                        Email
                      </p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-secondary hover:text-secondary-light transition-colors"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary flex items-center justify-center text-white">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-black">
                        LinkedIn
                      </p>
                      <a
                        href="https://www.linkedin.com/in/rhonda-olsen-gms-16165116/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-secondary-light transition-colors"
                      >
                        Connect with Rhonda
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <Link
                      href="https://calendly.com/rhonda-rok-coaching-jtdb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 font-semibold hover:bg-secondary-light hover:scale-105 transition-all"
                    >
                      📅 Book a 30-min Clarity Call
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Send Me a Message
              </h3>

              <form
                action={`https://formsubmit.co/${CONTACT_EMAIL}`}
                method="POST"
                className="space-y-6"
              >
                {/* FormSubmit Configuration */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New ROK Coaching Contact Form Submission"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-tertiary font-semibold mb-2"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="w-full px-4 py-3 border-2 border-neutral focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary font-body text-tertiary"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastname"
                      className="block text-tertiary font-semibold mb-2"
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="w-full px-4 py-3 border-2 border-neutral focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary font-body text-tertiary"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-tertiary font-semibold mb-2"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border-2 border-neutral focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary font-body text-tertiary"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Company (optional) */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-tertiary font-semibold mb-2"
                  >
                    Business/Company (if applicable)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border-2 border-neutral focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary font-body text-tertiary"
                    placeholder="Your business name"
                  />
                </div>

                {/* Reason for contact */}
                <div>
                  <label
                    htmlFor="reason"
                    className="block text-tertiary font-semibold mb-2"
                  >
                    How can I help you?*
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    className="w-full px-4 py-3 border-2 border-neutral focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary font-body bg-white text-tertiary"
                    value={selectedReason}
                    onChange={(e) =>
                      setSelectedReason(e.target.value)
                    }
                    required
                  >
                    {reasons.map((reason) => (
                      <option key={reason.value} value={reason.value}>
                        {reason.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-tertiary font-semibold mb-2"
                  >
                    Tell me more*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-neutral focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary font-body text-tertiary"
                    placeholder="Share your goals, challenges, or questions. The more you tell me, the better I can help you."
                    required
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-primary text-white font-heading font-semibold hover:bg-primary-light hover:scale-105 transition-all shadow-lg"
                >
                  Send Message
                </button>

                <p className="text-sm text-tertiary/70 text-center">
                  I&apos;ll get back to you within 24 hours. Promise.
                </p>
              </form>
            </motion.div>
          </div>

          {/* Bottom Quote */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mt-16 bg-white/10 backdrop-blur-sm p-8"
          >
            <p className="text-2xl font-heading italic text-primary mb-4">
              &quot;Your transformation starts with a single
              conversation.&quot;
            </p>
            <p className="text-m text-black/80">
              — RHONDA OLSEN, ROK COACHING
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
