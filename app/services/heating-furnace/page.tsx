import type { Metadata } from 'next'
import EmergencyBanner from '@/components/EmergencyBanner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Heating & Furnace Repair',
  description:
    'Expert furnace repair, heat pump service, and heating maintenance by Blue HIF₂ Mechanical Inc. 24/7 emergency heating service available.',
}

const services = [
  { title: 'Furnace Repair', desc: 'Fast diagnosis and repair of gas, oil, and electric furnaces.' },
  { title: 'Furnace Tune-Up', desc: 'Annual maintenance to improve efficiency and extend system life.' },
  { title: 'Heat Pump Service', desc: 'Installation, repair, and maintenance for all heat pump types.' },
  { title: 'Boiler Service', desc: 'Boiler inspection, repair, and seasonal maintenance.' },
  { title: 'Thermostat Service', desc: 'Smart thermostat installation and calibration.' },
  { title: 'Ductwork', desc: 'Duct inspection, sealing, and cleaning for optimal airflow.' },
]

export default function HeatingPage() {
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
                  HEATING &amp;<br />
                  <span className="text-brand-orange">FURNACE REPAIR</span>
                </h1>
                <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">
                  Don&apos;t let a broken furnace leave you in the cold. Our certified technicians deliver
                  fast, reliable heating repairs and maintenance — including 24/7 emergency service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact#booking"
                    className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-md transition-colors text-center"
                  >
                    Book Heating Service
                  </Link>
                  <Link
                    href="tel:4374323594"
                    className="border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-md transition-colors text-center"
                  >
                    Emergency: (437) 432-3594
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:block h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/furnace.jpg"
                  alt="Lennox high-efficiency furnace installed by Blue HIF₂ Mechanical"
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
            <h2 className="font-condensed font-black text-4xl text-brand-blue mb-3 text-center">
              HEATING SERVICES WE PROVIDE
            </h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
              Comprehensive heating solutions for every system type, residential or commercial.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div key={s.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-brand-blue text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-orange">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-condensed font-black text-4xl text-white mb-4">
              NO HEAT? CALL US NOW — 24/7
            </h2>
            <p className="text-white/85 text-lg mb-8">
              A heating emergency in winter is urgent. Our technicians are on call around the clock.
            </p>
            <Link
              href="tel:4374323594"
              className="bg-white text-brand-orange font-bold px-12 py-4 rounded-md inline-block hover:bg-white/90 transition-colors text-lg"
            >
              Call (437) 432-3594
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
