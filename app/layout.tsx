import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://bluehif2mechanical.com'
const COMPANY = 'Blue HIF₂ Mechanical Inc.'
const PHONE = '(437) 432-3594'
const CITY = 'Toronto, ON'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY} | HVAC, Heating & Cooling Services in ${CITY}`,
    template: `%s | ${COMPANY}`,
  },
  description:
    'Blue HIF₂ Mechanical Inc. provides expert HVAC, heating, cooling, gas, plumbing, and refrigeration services for residential and commercial clients. 24/7 emergency service available.',
  keywords: [
    'HVAC services',
    'air conditioning repair',
    'furnace repair',
    'heating services',
    'cooling installation',
    'gas services',
    'heat pump installation',
    'plumbing services',
    'refrigeration',
    'emergency HVAC',
    'Blue HIF2 Mechanical',
    `HVAC ${CITY}`,
    `air conditioning ${CITY}`,
    `furnace repair ${CITY}`,
  ],
  authors: [{ name: COMPANY }],
  creator: COMPANY,
  publisher: COMPANY,
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: SITE_URL,
    siteName: COMPANY,
    title: `${COMPANY} | Expert HVAC, Heating & Cooling`,
    description:
      'Reliable HVAC, heating, cooling, gas, plumbing & refrigeration services for residential and commercial clients. Fast, professional service.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY} | Expert HVAC Services`,
    description: 'Reliable HVAC, heating & cooling services for residential and commercial clients.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: COMPANY,
  url: SITE_URL,
  telephone: PHONE,
  description:
    'Professional HVAC, heating, cooling, gas, plumbing and refrigeration services for residential and commercial clients.',
  priceRange: '$$',
  openingHours: 'Mo-Su 00:00-23:59',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HVAC Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Repair & Maintenance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Heating & Furnace Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HVAC Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '24/7 Emergency Service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gas Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plumbing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Refrigeration' } },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}
