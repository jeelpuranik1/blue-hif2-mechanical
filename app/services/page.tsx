import type { Metadata } from 'next'
import EmergencyBanner from '@/components/EmergencyBanner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicesSection from '@/components/ServicesSection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services',
  description:
    'Complete HVAC, heating, cooling, gas, plumbing, and refrigeration services by Blue HIF₂ Mechanical Inc. Residential and commercial — licensed and insured.',
}

export default function ServicesPage() {
  return (
    <>
      <EmergencyBanner />
      <Navbar />
      <main>
        <section className="bg-brand-blue py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
                What We Offer
              </div>
              <h1 className="font-condensed font-black text-5xl md:text-6xl text-white mb-5">
                ALL HVAC &amp; MECHANICAL SERVICES
              </h1>
              <p className="text-white/80 text-lg leading-relaxed">
                From emergency repairs and seasonal maintenance to full system installations —
                Blue HIF₂ Mechanical provides the complete range of mechanical services for
                residential and commercial clients.
              </p>
            </div>
          </div>
        </section>

        <ServicesSection />

        {/* Additional services list */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-condensed font-black text-4xl text-brand-blue mb-3">
                FULL SCOPE OF WORK
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                We handle every aspect of your comfort system — no need to call multiple contractors.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Central Air Conditioning Repair',
                'AC Tune-Up & Seasonal Maintenance',
                'Furnace Repair & Servicing',
                'Heat Pump Installation & Service',
                'Boiler Maintenance & Repair',
                'Ductwork Inspection & Sealing',
                'Thermostat Installation & Programming',
                'Gas Line Installation & Repair',
                'Gas Safety Inspection',
                'Residential Plumbing',
                'Commercial Plumbing',
                'Walk-in Cooler & Refrigeration Service',
                'Mini-Split / Ductless AC Installation',
                'Air Quality & Ventilation',
                'Commercial HVAC Maintenance Contracts',
                'New Construction HVAC',
                'Energy Efficiency Assessments',
                '24/7 Emergency Response',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 py-3 border-b border-gray-100">
                  <svg className="w-5 h-5 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-blue text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-condensed font-black text-4xl text-white mb-4">
              DON&apos;T SEE YOUR SERVICE?
            </h2>
            <p className="text-white/80 mb-8">
              Call us or send a message — if it&apos;s mechanical, we can almost certainly help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#booking"
                className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-10 py-4 rounded-md transition-colors"
              >
                Book a Service
              </Link>
              <Link
                href="tel:4374323594"
                className="border-2 border-white/40 hover:border-white text-white font-bold px-10 py-4 rounded-md transition-colors"
              >
                Call (437) 432-3594
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
