import type { Metadata } from 'next'
import EmergencyBanner from '@/components/EmergencyBanner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'AC Repair & Maintenance',
  description:
    'Professional air conditioning repair, tune-ups, and seasonal maintenance by Blue HIF₂ Mechanical Inc. Fast, reliable AC service for homes and businesses.',
}

const included = [
  'Full AC system diagnostic',
  'Refrigerant level check & top-up',
  'Condenser and evaporator coil cleaning',
  'Air filter inspection and replacement',
  'Thermostat calibration',
  'Electrical connections & capacitor check',
  'Fan motor & blade inspection',
  'Drain line flush & pan inspection',
  'System performance test',
  'Written service report',
]

const faqs = [
  {
    q: 'Why is my AC blowing warm air?',
    a: 'Common causes include low refrigerant, a dirty air filter blocking airflow, a faulty compressor, or a frozen evaporator coil. Our technicians will diagnose the root cause and fix it correctly.',
  },
  {
    q: 'How often should I service my AC unit?',
    a: 'Annual maintenance (ideally in spring before the cooling season) keeps your AC running efficiently and extends its life by years. Regular tune-ups also catch small issues before they become expensive repairs.',
  },
  {
    q: 'How long does an AC repair take?',
    a: 'Most repairs are completed same-day. Complex repairs or parts orders may require 1–2 days. We always give you a clear timeline before starting work.',
  },
]

export default function ACRepairPage() {
  return (
    <>
      <EmergencyBanner />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-brand-blue py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">Services</div>
                <h1 className="font-condensed font-black text-5xl md:text-6xl text-white mb-5">
                  AC REPAIR &amp;<br />
                  <span className="text-brand-orange">MAINTENANCE</span>
                </h1>
                <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">
                  Expert air conditioning repair and seasonal maintenance to keep your home or business
                  cool and comfortable. Same-day service available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact#booking"
                    className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-md transition-colors text-center"
                  >
                    Book AC Service
                  </Link>
                  <Link
                    href="tel:4374323594"
                    className="border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-md transition-colors text-center"
                  >
                    Call for Emergency
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:block h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/ac-unit.jpg"
                  alt="Lennox AC condenser unit installed by Blue HIF₂ Mechanical"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0px, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-condensed font-black text-4xl text-brand-blue mb-5">
                  WHAT&apos;S INCLUDED IN AN AC TUNE-UP
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our comprehensive AC maintenance covers everything needed to keep your system
                  running at peak efficiency, reduce energy costs, and prevent unexpected breakdowns.
                </p>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                {/* Warning signs */}
                <div className="bg-brand-blue/5 rounded-2xl p-7 border border-brand-blue/10">
                  <h3 className="font-bold text-brand-blue text-xl mb-4">Signs Your AC Needs Service</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {[
                      'Blowing warm or insufficiently cool air',
                      'Unusual noises (banging, squealing, clicking)',
                      'Weak airflow from vents',
                      'Ice forming on the unit',
                      'Frequent on/off cycling',
                      'Noticeably higher electricity bills',
                      'Unpleasant smells from vents',
                    ].map((sign) => (
                      <li key={sign} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" />
                        {sign}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA card */}
                <div className="bg-brand-orange rounded-2xl p-7 text-white">
                  <h3 className="font-bold text-xl mb-2">Ready to Book?</h3>
                  <p className="text-white/85 text-sm mb-5">
                    Same-day appointments available. Call now or fill out our online form.
                  </p>
                  <Link
                    href="/contact#booking"
                    className="block bg-white text-brand-orange font-bold text-center py-3 rounded-lg hover:bg-white/90 transition-colors"
                  >
                    Book AC Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-condensed font-black text-4xl text-brand-blue mb-10 text-center">
              AC SERVICE FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-brand-blue mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
