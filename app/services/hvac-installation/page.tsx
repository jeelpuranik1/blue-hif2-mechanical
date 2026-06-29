import type { Metadata } from 'next'
import EmergencyBanner from '@/components/EmergencyBanner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'HVAC Installation',
  description:
    'Professional HVAC system installation for residential and commercial properties. Blue HIF₂ Mechanical supplies and installs the right system for your needs.',
}

const steps = [
  { step: '01', title: 'Free Consultation', desc: 'We assess your space, needs, and budget to recommend the best system.' },
  { step: '02', title: 'Custom Quote', desc: 'Receive a transparent, itemized quote with no hidden fees.' },
  { step: '03', title: 'Professional Installation', desc: 'Certified technicians install your system to code and manufacturer specs.' },
  { step: '04', title: 'Testing & Commissioning', desc: 'We test the complete system and make all adjustments before we leave.' },
  { step: '05', title: 'Walkthrough & Support', desc: 'We explain operation and maintenance, and provide ongoing support.' },
]

export default function InstallationPage() {
  return (
    <>
      <EmergencyBanner />
      <Navbar />
      <main>
        <section className="bg-brand-blue py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">Services</div>
                <h1 className="font-condensed font-black text-5xl md:text-6xl text-white mb-5">
                  HVAC<br />
                  <span className="text-brand-orange">INSTALLATION</span>
                </h1>
                <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">
                  New construction, system replacement, or upgrades — we size, supply, and install the
                  right HVAC system for your home or business. All brands and system types.
                </p>
                <Link
                  href="/contact#booking"
                  className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-md transition-colors inline-block"
                >
                  Get a Free Quote
                </Link>
              </div>
              <div className="relative hidden lg:block h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/minisplit-install.jpg"
                  alt="Mini-split heat pump installation by Blue HIF₂ Mechanical"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0px, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-condensed font-black text-4xl text-brand-blue mb-5">
                  SYSTEMS WE INSTALL
                </h2>
                <div className="space-y-3">
                  {[
                    'Central Air Conditioning Systems',
                    'Gas Furnaces (all efficiencies)',
                    'Heat Pumps (air-source & ground-source)',
                    'Ductless Mini-Split Systems',
                    'Boilers (gas & oil)',
                    'Commercial Rooftop Units (RTUs)',
                    'Make-Up Air Units',
                    'Ventilation & ERV/HRV Systems',
                    'Smart Thermostats',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-condensed font-black text-4xl text-brand-blue mb-8">
                  OUR INSTALLATION PROCESS
                </h2>
                <div className="space-y-6">
                  {steps.map((s) => (
                    <div key={s.step} className="flex gap-5">
                      <div className="font-condensed font-black text-3xl text-brand-orange/30 w-10 flex-shrink-0">
                        {s.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-brand-blue mb-1">{s.title}</h3>
                        <p className="text-gray-600 text-sm">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-condensed font-black text-4xl text-brand-blue mb-4">
              FREE INSTALLATION CONSULTATION
            </h2>
            <p className="text-gray-600 mb-8">
              Not sure what system you need? Our experts will assess your space and recommend the
              best solution — completely free, no obligation.
            </p>
            <Link
              href="/contact#booking"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-10 py-4 rounded-md inline-block transition-colors"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
