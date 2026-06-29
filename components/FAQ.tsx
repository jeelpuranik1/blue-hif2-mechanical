'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How often should I have my HVAC system serviced?',
    answer:
      'We recommend servicing your HVAC system at least twice a year — once in spring before cooling season and once in fall before heating season. Regular maintenance extends system life, improves efficiency, and prevents costly breakdowns.',
  },
  {
    question: 'What are signs my AC or furnace needs repair?',
    answer:
      'Common warning signs include unusual noises (banging, squealing, rattling), weak or uneven airflow, frequent cycling on and off, rising energy bills, unusual smells, or the system not reaching your set temperature. If you notice any of these, call us for a diagnostic.',
  },
  {
    question: 'Do you offer 24/7 emergency HVAC service?',
    answer:
      'Yes! We provide around-the-clock emergency HVAC service 365 days a year. Whether your heat stops on a cold winter night or your AC fails during a heat wave, call our emergency line and we\'ll dispatch a certified technician promptly.',
  },
  {
    question: 'How long does a new HVAC system installation take?',
    answer:
      'A standard residential HVAC installation typically takes 4–8 hours for a single unit replacement. Full system installations for larger homes or commercial properties may take 1–3 days. We\'ll give you a clear timeline during your free consultation.',
  },
  {
    question: 'Do you service both residential and commercial properties?',
    answer:
      'Absolutely. Blue HIF₂ Mechanical provides comprehensive mechanical services for homeowners, landlords, property managers, and commercial businesses of all sizes — from small retail shops to large industrial facilities.',
  },
  {
    question: 'Are your technicians licensed and insured?',
    answer:
      'Yes. All our technicians are fully licensed, bonded, and insured. We carry liability insurance and maintain all required certifications for HVAC, gas fitting, plumbing, and refrigeration work in our service area.',
  },
  {
    question: 'What HVAC brands do you service and install?',
    answer:
      'We work with all major HVAC brands including Carrier, Trane, Lennox, Goodman, Daikin, Mitsubishi, Bryant, and more. We can recommend the best system for your needs and budget during a free consultation.',
  },
  {
    question: 'Do you offer maintenance plans or service contracts?',
    answer:
      'Yes, we offer annual maintenance plans for both residential and commercial clients. A maintenance plan includes scheduled seasonal tune-ups, priority service, and discounts on repairs — giving you peace of mind year-round.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <section className="py-20 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            FAQ
          </div>
          <h2 className="font-condensed font-black text-4xl md:text-5xl text-brand-blue mb-4">
            COMMON QUESTIONS
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about our HVAC and mechanical services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-brand-blue pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-brand-orange flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
