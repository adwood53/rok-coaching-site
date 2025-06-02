'use client';

import React, { useRef, useEffect, useState } from 'react';

export default function ContactSection() {
  const [selectedReason, setSelectedReason] = useState('');

  // Load HubSpot tracking script
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'hs-script-loader';
    script.async = true;
    script.defer = true;
    script.src = '//js.hs-scripts.com/########.js'; //Replace with genuine tracking ID
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById(
        'hs-script-loader'
      );
      if (existingScript) existingScript.remove();
    };
  }, []);

  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const payload = {
      fields: [
        { name: 'firstname', value: form.firstname.value },
        { name: 'lastname', value: form.lastname.value },
        { name: 'email', value: form.email.value },
        { name: 'company', value: form.company?.value || '' },
        { name: 'message', value: form.message.value },
        { name: 'reason', value: selectedReason },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    console.log('Form submission payload:', payload);

    try {
      const response = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/########/########-####-####-####-############',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log('Form submission successful!', result);
        form.reset();
        setSelectedReason('');
        alert(
          'Thank you for your message! We will get back to you soon.'
        );
      } else {
        console.error('Form submission error:', result);
        alert(
          'There was an error submitting your form. Please try again later.'
        );
      }
    } catch (error) {
      console.error('Form submission exception:', error);
      alert(
        'There was an error submitting your form. Please try again later.'
      );
    }
  };

  // Define reasons for the dropdown
  const reasons = [
    { value: '', label: 'Please select a reason' },
    { value: 'general-inquiry', label: 'General Inquiry' },
    { value: 'supported-living', label: 'Supported Living Services' },
    { value: 'referral', label: 'Make a Referral' },
    { value: 'career', label: 'Career Opportunities' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'feedback', label: 'Feedback' },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background design element - right side color block */}
      <div className="absolute right-0 top-0 h-1/4 w-full bg-warm z-0"></div>

      <div className="container mx-auto relative z-10 px-4 hover:scale-102 transition-all duration-300 ease-in-out">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-xl mb-16">
            <div className="text-center p-8 bg-teal">
              <h2 className="text-4xl font-heading font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto font-body">
                Have questions? Need support? Looking to make a
                referral?
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left side - Form */}
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold text-purple mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* First Name and Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstname"
                        className="block text-purple font-heading mb-2"
                      >
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="w-full px-4 py-3 border-2 border-teal rounded-xl focus:outline-none focus:ring-2 focus:ring-db-red font-body text-purple"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastname"
                        className="block text-purple font-heading mb-2"
                      >
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="w-full px-4 py-3 border-2 border-teal rounded-xl focus:outline-none focus:ring-2 focus:ring-db-red font-body text-purple"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-purple font-heading mb-2"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border-2 border-teal rounded-xl focus:outline-none focus:ring-2 focus:ring-db-red font-body text-purple"
                      placeholder="Your email address"
                      required
                    />
                  </div>

                  {/* Organisation (optional) */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-purple font-heading mb-2"
                    >
                      Organisation (if applicable)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border-2 border-teal rounded-xl focus:outline-none focus:ring-2 focus:ring-db-red font-body text-purple"
                      placeholder="Your organisation"
                    />
                  </div>

                  {/* Reason for contact - Dropdown instead of checkboxes */}
                  <div>
                    <label
                      htmlFor="reason"
                      className="block text-purple font-heading mb-2"
                    >
                      Reason for contacting*
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      className="w-full px-4 py-3 border-2 border-teal rounded-xl focus:outline-none focus:ring-2 focus:ring-db-red font-body bg-white text-purple"
                      value={selectedReason}
                      onChange={(e) =>
                        setSelectedReason(e.target.value)
                      }
                      required
                    >
                      {reasons.map((reason) => (
                        <option
                          key={reason.value}
                          value={reason.value}
                        >
                          {reason.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-purple font-heading mb-2"
                    >
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-teal rounded-xl focus:outline-none focus:ring-2 focus:ring-db-red font-body text-purple"
                      placeholder="Please share any specific details or questions you have"
                      required
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-db-red text-black font-heading font-semibold rounded-xl hover:bg-opacity-90 hover:scale-105 transition-all shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              {/* Right side - Contact info */}
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-heading font-bold text-purple mb-6">
                  Contact Information
                </h3>
                <div className="space-y-8">
                  <div className="space-y-4 font-body">
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 mt-1 mr-4 flex-shrink-0 text-db-red hover:scale-110 transition-all duration-300 ease-in-out"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                      <div>
                        <p className="font-medium mb-1 text-purple">
                          Email:
                        </p>
                        <a
                          href="mailto:info@icsliving.co.uk"
                          className="text-teal hover:text-db-red"
                        >
                          info@icsliving.co.uk
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 mt-1 mr-4 flex-shrink-0 text-db-red hover:scale-110 transition-all duration-300 ease-in-out"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                      <div>
                        <p className="font-medium mb-1 text-purple">
                          Phone:
                        </p>
                        <a
                          href="tel:+447777777777"
                          className="text-teal hover:text-db-red"
                        >
                          +44 7777 777777
                        </a>
                      </div>
                    </div>
                    {/*
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 mt-1 mr-4 flex-shrink-0 text-db-red hover:scale-110 transition-all duration-300 ease-in-out"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <div>
                        <p className="font-medium mb-1 text-purple">
                          Address:
                        </p>
                        <p className="text-purple">Address 1</p>
                        <p className="text-purple">Address 2</p>
                        <p className="text-purple">United Kingdom</p>
                      </div>
                    </div>
                      */}
                  </div>

                  <div className="pt-8 border-t border-purple/20">
                    {/*
                    <h3 className="text-xl font-heading font-semibold mb-4 text-purple">
                      Follow Us
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.linkedin.com/company/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full transition-colors text-white hover:scale-110 transition-all duration-300 ease-in-out"
                        aria-label="LinkedIn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full transition-colors text-white hover:scale-110 transition-all duration-300 ease-in-out"
                        aria-label="Instagram"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.281.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.tiktok.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full transition-colors text-white hover:scale-110 transition-all duration-300 ease-in-out"
                        aria-label="TikTok"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                        </svg>
                      </a>
                    </div>
                      */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
