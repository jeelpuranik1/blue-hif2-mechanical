import type { Metadata } from 'next'
import EmergencyBanner from '@/components/EmergencyBanner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'

export const metadata: Metadata = {
  title: 'Contact & Book a Service',
  description:
    'Contact Blue HIF₂ Mechanical Inc. to book HVAC service, get a free quote, or request emergency assistance. Call (437) 432-3595 — available 24/7.',
}

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    label: 'Phone',
    value: '(437) 432-3595',
    href: 'tel:4374323595',
    note: '24/7 emergency line',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
    label: 'Email',
    value: 'ibsa@bluehif2mechanical.com',
    href: 'mailto:ibsa@bluehif2mechanical.com',
    note: 'We respond within 2 hours',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
    label: 'Service Area',
    value: 'Toronto & Surrounding Areas',
    href: null,
    note: 'Residential & commercial',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
    ),
    label: 'Business Hours',
    value: 'Mon–Fri: 8am–6pm',
    href: null,
    note: 'Emergency: 24/7',
  },
]

export default function ContactPage() {
  return (
    <>
      <EmergencyBanner />
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-brand-blue py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
                Get In Touch
              </div>
              <h1 className="font-condensed font-black text-5xl md:text-6xl text-white mb-4">
                BOOK A SERVICE
              </h1>
              <p className="text-white/80 text-lg">
                Fill out the form below or call us directly. For emergencies, call our 24/7 line —
                we&apos;ll have a technician to you as fast as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Contact info sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h2 className="font-bold text-brand-blue text-xl mb-5">Contact Information</h2>
                  <div className="space-y-5">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex gap-4">
                        <div className="w-11 h-11 bg-brand-blue rounded-xl flex items-center justify-center text-white flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5">
                            {info.label}
                          </div>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="font-semibold text-brand-blue hover:text-brand-orange transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="font-semibold text-brand-blue">{info.value}</div>
                          )}
                          <div className="text-xs text-gray-500 mt-0.5">{info.note}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency box */}
                <div className="bg-brand-orange rounded-xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Emergency? Call Now
                  </h3>
                  <p className="text-white/85 text-sm mb-4">
                    No heat in winter? AC out in summer? Our emergency team responds fast.
                  </p>
                  <a
                    href="tel:4374323595"
                    className="block bg-white text-brand-orange font-bold text-center py-3 rounded-lg hover:bg-white/90 transition-colors"
                  >
                    (437) 432-3595
                  </a>
                </div>
              </div>

              {/* Booking form */}
              <div id="booking" className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="font-bold text-brand-blue text-xl mb-6">Request a Service Appointment</h2>
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
