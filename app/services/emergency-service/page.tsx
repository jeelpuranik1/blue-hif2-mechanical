import type { Metadata } from 'next'
import EmergencyBanner from '@/components/EmergencyBanner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type React from 'react'

export const metadata: Metadata = {
  title: '24/7 Emergency HVAC Service',
  description:
    'Blue HIF₂ Mechanical provides 24/7 emergency HVAC service. No heat? AC failed? We respond fast — call (437) 432-3594 any time, day or night.',
}

export default function EmergencyServicePage() {
  return (
    <>
      <EmergencyBanner />
      <Navbar />
      <main>
        {/* Emergency hero */}
        <section className="bg-brand-orange py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Available 24 Hours · 7 Days a Week · 365 Days a Year
            </div>
            <h1 className="font-condensed font-black text-5xl md:text-7xl text-white mb-5">
              HVAC EMERGENCY?<br />CALL NOW.
            </h1>
            <p className="text-white/85 text-xl max-w-2xl mx-auto mb-10">
              Don&apos;t suffer in the heat or freeze in the cold. Our on-call technicians respond fast
              and get your system back up — any time of day or night.
            </p>
            <Link
              href="tel:4374323594"
              className="bg-white text-brand-orange font-bold text-2xl px-12 py-5 rounded-xl inline-flex items-center gap-3 hover:bg-white/90 transition-colors shadow-xl"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (437) 432-3594
            </Link>
          </div>
        </section>

        {/* What counts as emergency */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-condensed font-black text-4xl text-brand-blue mb-5">
                  WHAT COUNTS AS AN HVAC EMERGENCY?
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  When your comfort system fails at the worst possible time, we treat it as the
                  emergency it is — no extra charges for night or weekend calls.
                </p>
                <div className="space-y-3">
                  {[
                    'Complete heating failure in cold weather',
                    'AC breakdown during extreme heat',
                    'Gas leak or gas odour (call 911 first, then us)',
                    'Frozen pipes or refrigerant lines',
                    'Flooding from HVAC/plumbing',
                    'Carbon monoxide detector triggered',
                    'Electrical issues with HVAC system',
                    'Commercial refrigeration failure',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                <div className="bg-brand-blue rounded-2xl p-8 text-white">
                  <h3 className="font-bold text-xl mb-4">Our Emergency Promise</h3>
                  <div className="space-y-4">
                    {(
                      [
                        {
                          text: 'Fast response — we prioritize true emergencies',
                          icon: (
                            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          ),
                        },
                        {
                          text: 'Certified technicians, fully stocked service vehicles',
                          icon: (
                            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            </svg>
                          ),
                        },
                        {
                          text: 'Upfront pricing — no surprise fees',
                          icon: (
                            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ),
                        },
                        {
                          text: 'Live answer — no automated phone maze',
                          icon: (
                            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                          ),
                        },
                      ] as { text: string; icon: React.ReactNode }[]
                    ).map((item) => (
                      <div key={item.text} className="flex items-start gap-3">
                        <span className="text-white/80">{item.icon}</span>
                        <span className="text-white/85">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100 text-center">
                  <div className="font-condensed font-black text-6xl text-brand-orange mb-1">24/7</div>
                  <div className="text-brand-blue font-bold">Emergency Service</div>
                  <div className="text-gray-500 text-sm mt-1">365 days a year</div>
                  <Link
                    href="tel:4374323594"
                    className="mt-5 block bg-brand-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-orange-dark transition-colors"
                  >
                    Call Now: (437) 432-3594
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
