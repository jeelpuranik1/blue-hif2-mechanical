import type { Metadata } from 'next'
import EmergencyBanner from '@/components/EmergencyBanner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Blue HIF₂ Mechanical Inc. — a modern, dependable mechanical brand delivering total comfort solutions for residential and commercial clients.',
}

const values: { title: string; description: string; icon: React.ReactNode }[] = [
  {
    title: 'Reliability',
    description: 'We show up when we say we will and deliver on every promise.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Quality',
    description: 'Precision workmanship using top-tier equipment and proven techniques.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: 'Efficiency',
    description: 'We work smart to minimize your downtime and maximize your comfort.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Safety',
    description: 'Every job meets or exceeds safety codes and industry standards.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Professionalism',
    description: 'Uniformed, courteous technicians who respect your home and time.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Customer Focus',
    description: 'Your satisfaction is our priority — from first call to final follow-up.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <>
      <EmergencyBanner />
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="bg-brand-blue py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">About Us</div>
              <h1 className="font-condensed font-black text-5xl md:text-6xl text-white mb-5">
                BLUE HIF₂ <span className="text-brand-orange">MECHANICAL</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed">
                A modern, dependable mechanical brand delivering total comfort solutions — built on
                trust, reliability, and professional service.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                  Our Mission
                </div>
                <h2 className="font-condensed font-black text-4xl md:text-5xl text-brand-blue mb-6 leading-none">
                  DELIVERING TOTAL<br />
                  <span className="text-brand-orange">COMFORT SOLUTIONS</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Blue HIF₂ Mechanical Inc. was founded with a clear objective: to deliver
                  reliable mechanical services in gas, HVAC, heat pumps, plumbing, refrigeration,
                  and cooling systems that ensure comfort, safety, and efficiency for every client.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We serve residential homeowners and commercial businesses with equal dedication,
                  bringing the same high standards of workmanship and customer care to every job,
                  large or small.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '24/7', label: 'Emergency Service' },
                  { number: '100%', label: 'Satisfaction Guarantee' },
                  { number: 'Res + Com', label: 'Residential & Commercial' },
                  { number: 'Licensed', label: '& Fully Insured' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                    <div className="font-condensed font-black text-3xl text-brand-orange mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Brand & Colors */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-condensed font-black text-4xl text-brand-blue mb-3">
                OUR BRAND IDENTITY
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Every element of our brand reflects who we are and what we stand for.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { color: 'bg-brand-blue', label: 'Blue', meaning: 'Trust, reliability, and professionalism' },
                { color: 'bg-brand-orange', label: 'Orange', meaning: 'Energy, heat, and active service' },
                { color: 'bg-gray-200', label: 'Symbol', meaning: 'Fire + Snowflake + Fan — balance of heating, cooling, and airflow' },
                { color: 'bg-white border-2 border-gray-200', label: 'Identity', meaning: 'A modern, dependable mechanical brand delivering total comfort solutions' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className={`w-12 h-12 ${item.color} rounded-lg mb-4`} />
                  <h3 className="font-bold text-brand-blue mb-1">{item.label}</h3>
                  <p className="text-gray-600 text-sm">{item.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-brand-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-condensed font-black text-4xl md:text-5xl text-white mb-3">
                OUR <span className="text-brand-orange">CORE VALUES</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-white/10 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="font-bold text-white text-lg mb-2">{v.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-condensed font-black text-4xl text-brand-blue mb-4">
              WORK WITH US
            </h2>
            <p className="text-gray-600 mb-8">
              Experience the Blue HIF₂ difference. Book a service today and see why clients trust
              us for all their mechanical needs.
            </p>
            <Link
              href="/contact#booking"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-10 py-4 rounded-md inline-block transition-colors"
            >
              Book a Service
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
