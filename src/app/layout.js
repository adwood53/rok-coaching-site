// src/app/layout.js
import { Poppins } from 'next/font/google';
import React from 'react';
import Script from 'next/script';
import './globals.css';

// Define fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-body',
  display: 'swap',
});

// Agrandir will be loaded via CSS @font-face

const SITE_NAME = 'ROK Coaching';
const BASE_URL = 'https://rok-coaching.co.uk';
const OG_IMAGE_URL = `${BASE_URL}/images/rok-logo.webp`;
const TWITTER_HANDLE = '@RhondaOlsen';

export const metadata = {
  title: 'ROK Coaching | Confidence to Lead. Power to Grow.',
  description:
    'ROK Coaching helps women unlock their boldest selves in business - with mentoring, strategy, and the belief they deserve to scale, lead, and thrive.',
  keywords:
    "Women's Business Coaching, Female Leadership Coach, Women Empowerment Coaching, Confidence Coaching for Women, Women in Leadership, Business Growth Mentor, Scale Your Business Women, Rhonda Olsen",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'ROK Coaching | Confidence to Lead. Power to Grow.',
    description:
      'ROK Coaching helps women unlock their boldest selves in business - with mentoring, strategy, and the belief they deserve to scale, lead, and thrive.',
    url: BASE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 1200,
        alt: 'ROK Coaching - Confidence to Lead. Power to Grow.',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROK Coaching | Confidence to Lead. Power to Grow.',
    description:
      'ROK Coaching helps women unlock their boldest selves in business - with mentoring, strategy, and the belief they deserve to scale, lead, and thrive.',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    images: [OG_IMAGE_URL],
  },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: '128x128' }],
    apple: [{ url: '/favicon.ico' }],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  'theme-color': '#50036C',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" //Replace with Genuine tracking ID
        />
        <Script strategy="afterInteractive" id="ga-script">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `}
        </Script>
      </head>
      <body className={`${poppins.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
