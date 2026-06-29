import type { Metadata } from 'next'
import EmergencyBanner from '@/components/EmergencyBanner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gas Services',
  description:
    'Certified gas line installation, inspection, and repair by Blue HIF₂ Mechanical Inc. Safe, professional gas services for residential and commercial properties.',
}

export default function GasServicesPage() {
  return (
    <>
      <EmergencyBanner />
      <Navbar />
      <main>
        <section className="bg-brand-blue py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">Services</div>
            <h1 className="font-condensed font-black text-5xl md:text-6xl text-white mb-5">
              GAS <span className="text-brand-orange">SERVICES</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">
              Certified gas fitting services for residential and commercial clients. Safety is our
              top priority — every gas job meets strict codes and safety standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact#booking"
                className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-md transition-colors text-center"
              >
                Book Gas Service
              </Link>
              <Link
                href="tel:4374323595"
                className="border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-md transition-colors text-center"
              >
                Emergency Line
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                { title: 'Gas Line Installation', desc: 'New gas line runs for appliances, BBQ hookups, generators, and more.' },
                { title: 'Gas Line Repair', desc: 'Leak detection and repair to restore safe gas flow.' },
                { title: 'Gas Safety Inspection', desc: 'Full inspection of gas appliances and lines for residential and commercial.' },
                { title: 'Gas Appliance Hook-Up', desc: 'Safe connection of stoves, dryers, fireplaces, and other gas appliances.' },
                { title: 'Furnace Gas Service', desc: 'Gas valve, burner, and igniter inspection, cleaning and repair.' },
                { title: 'Commercial Gas Work', desc: 'Gas infrastructure for restaurants, warehouses, industrial facilities.' },
              ].map((s) => (
                <div key={s.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-brand-blue text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Gas safety warning */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <h3 className="font-bold text-red-700 text-xl mb-3 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Gas Leak? Act Immediately.
              </h3>
              <p className="text-red-600 mb-4">
                If you smell gas: leave the building immediately, do not operate any electrical
                switches, call 911 and your gas utility, then call us.
              </p>
              <Link
                href="tel:4374323595"
                className="bg-red-600 text-white font-bold px-8 py-3 rounded-lg inline-block hover:bg-red-700 transition-colors"
              >
                Emergency: (437) 432-3595
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
