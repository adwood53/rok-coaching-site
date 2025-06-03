'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import NavbarSection from '@/src/app/components/NavbarSection';
import FooterSection from '@/src/app/components/FooterSection';
import SectionDivider from '@/src/app/components/SectionDivider';

export default function PrivacyPolicy() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <NavbarSection />
        <SectionDivider
          variant="gradient"
          height="4px"
          className="my-0"
        />

        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-primary/20 to-primary/5">
          <div className="container max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              >
                Privacy Policy
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-tertiary max-w-2xl mx-auto leading-relaxed"
              >
                Your privacy matters to us. Here&apos;s how we protect
                and use your information.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-sm text-gray-500 mt-4"
              >
                Last updated:{' '}
                {new Date().toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </motion.p>
            </motion.div>
          </div>
        </section>

        <SectionDivider variant="neutral" height="2px" />

        {/* Privacy Policy Content */}
        <section className="py-16 lg:py-20">
          <div className="container max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-12"
            >
              {/* Introduction */}
              <motion.div variants={fadeInUp} className="mb-12">
                <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Who We Are
                </h2>
                <p className="text-tertiary leading-relaxed text-base">
                  ROK Coaching is a business coaching service operated
                  by Rhonda Olsen. We are committed to protecting your
                  personal information and being transparent about how
                  we collect, use, and share it.
                </p>
                <p className="text-tertiary leading-relaxed text-base mt-4">
                  <strong>Contact:</strong> rhonda@rok-coaching.com
                </p>
              </motion.div>

              {/* Information We Collect */}
              <motion.div variants={fadeInUp} className="mb-12">
                <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <p className="text-tertiary text-base">
                    <strong className="text-primary">
                      Contact Information:
                    </strong>{' '}
                    Name, email address, phone number, and business
                    details when you contact us or book services.
                  </p>
                  <p className="text-tertiary text-base">
                    <strong className="text-primary">
                      Communication Records:
                    </strong>{' '}
                    Our correspondence, coaching session notes, and
                    feedback.
                  </p>
                  <p className="text-tertiary text-base">
                    <strong className="text-primary">
                      Website Analytics:
                    </strong>{' '}
                    How you use our website through Google Analytics
                    (anonymised data).
                  </p>
                  <p className="text-tertiary text-base">
                    <strong className="text-primary">
                      Marketing Data:
                    </strong>{' '}
                    Email engagement and preferences if you subscribe
                    to our newsletter.
                  </p>
                </div>
              </motion.div>

              {/* How We Use Your Information */}
              <motion.div variants={fadeInUp} className="mb-12">
                <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
                  How We Use Your Information
                </h2>
                <div className="space-y-3">
                  <p className="text-tertiary text-base">
                    • Provide coaching services and support
                  </p>
                  <p className="text-tertiary text-base">
                    • Communicate about appointments and services
                  </p>
                  <p className="text-tertiary text-base">
                    • Send relevant business insights and updates
                    (with your consent)
                  </p>
                  <p className="text-tertiary text-base">
                    • Improve our website and services
                  </p>
                  <p className="text-tertiary text-base">
                    • Comply with legal obligations
                  </p>
                </div>
              </motion.div>

              {/* Information Sharing */}
              <motion.div variants={fadeInUp} className="mb-12">
                <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Information Sharing
                </h2>
                <p className="text-tertiary leading-relaxed text-base">
                  We do not sell, rent, or share your personal
                  information with third parties, except in the
                  following limited circumstances:
                </p>
                <div className="space-y-3 mt-4">
                  <p className="text-tertiary text-base">
                    •{' '}
                    <strong className="text-primary">
                      Service Providers:
                    </strong>{' '}
                    Trusted tools like HubSpot (CRM), Calendly
                    (scheduling), and Google Analytics
                  </p>
                  <p className="text-tertiary text-base">
                    •{' '}
                    <strong className="text-primary">
                      Legal Requirements:
                    </strong>{' '}
                    If required by law or to protect our rights
                  </p>
                  <p className="text-tertiary text-base">
                    •{' '}
                    <strong className="text-primary">
                      Business Transfer:
                    </strong>{' '}
                    In the unlikely event of a business sale or merger
                  </p>
                </div>
              </motion.div>

              {/* Data Security */}
              <motion.div variants={fadeInUp} className="mb-12">
                <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Data Security
                </h2>
                <p className="text-tertiary leading-relaxed text-base">
                  We take reasonable measures to protect your
                  information, including secure hosting, encrypted
                  communications, and access controls. However, no
                  method of transmission over the internet is 100%
                  secure.
                </p>
              </motion.div>

              {/* Your Rights */}
              <motion.div variants={fadeInUp} className="mb-12">
                <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Your Rights
                </h2>
                <p className="text-tertiary leading-relaxed text-base mb-4">
                  Under UK GDPR, you have the right to:
                </p>
                <div className="space-y-3">
                  <p className="text-tertiary text-base">
                    • Access your personal information
                  </p>
                  <p className="text-tertiary text-base">
                    • Correct inaccurate information
                  </p>
                  <p className="text-tertiary text-base">
                    • Request deletion of your information
                  </p>
                  <p className="text-tertiary text-base">
                    • Object to processing of your information
                  </p>
                  <p className="text-tertiary text-base">
                    • Withdraw consent at any time
                  </p>
                  <p className="text-tertiary text-base">
                    • Data portability
                  </p>
                </div>
                <p className="text-tertiary leading-relaxed text-base mt-4">
                  To exercise these rights, contact us at
                  rhonda@rok-coaching.com
                </p>
              </motion.div>

              {/* Cookies */}
              <motion.div variants={fadeInUp} className="mb-12">
                <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Cookies
                </h2>
                <p className="text-tertiary leading-relaxed text-base">
                  Our website uses essential cookies for functionality
                  and Google Analytics cookies to understand how
                  visitors use our site. You can control cookies
                  through your browser settings.
                </p>
              </motion.div>

              {/* Data Retention */}
              <motion.div variants={fadeInUp} className="mb-12">
                <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Data Retention
                </h2>
                <p className="text-tertiary leading-relaxed text-base">
                  We keep your information only as long as necessary
                  to provide services, comply with legal obligations,
                  or resolve disputes. Coaching records are typically
                  retained for 7 years after our last interaction.
                </p>
              </motion.div>

              {/* Third-Party Links */}
              <motion.div variants={fadeInUp} className="mb-12">
                <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Third-Party Links
                </h2>
                <p className="text-tertiary leading-relaxed text-base">
                  Our website may contain links to external sites. We
                  are not responsible for the privacy practices of
                  other websites. Please review their privacy
                  policies.
                </p>
              </motion.div>

              {/* Children's Privacy */}
              <motion.div variants={fadeInUp} className="mb-12">
                <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Children&apos;s Privacy
                </h2>
                <p className="text-tertiary leading-relaxed text-base">
                  Our services are not directed to individuals under
                  18. We do not knowingly collect personal information
                  from children.
                </p>
              </motion.div>

              {/* Changes to Policy */}
              <motion.div variants={fadeInUp} className="mb-12">
                <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-tertiary leading-relaxed text-base">
                  We may update this privacy policy from time to time.
                  We will notify you of any significant changes by
                  email or through our website.
                </p>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                variants={fadeInUp}
                className="bg-warm p-8 rounded-2xl"
              >
                <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Questions?
                </h2>
                <p className="text-tertiary leading-relaxed text-base mb-4">
                  If you have any questions about this privacy policy
                  or how we handle your information, please contact
                  us:
                </p>
                <div className="space-y-2">
                  <p className="text-tertiary text-base">
                    <strong className="text-primary">Email:</strong>{' '}
                    rhonda@rok-coaching.com
                  </p>
                  <p className="text-tertiary text-base">
                    <strong className="text-primary">Website:</strong>{' '}
                    rok-coaching.co.uk
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-heading font-medium hover:bg-primary-light transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <SectionDivider variant="gradient" height="4px" />
        <FooterSection />
      </motion.div>
    </main>
  );
}
