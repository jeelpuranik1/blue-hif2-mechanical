import EmergencyBanner from '@/components/EmergencyBanner'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'

export default function HomePage() {
  return (
    <>
      <EmergencyBanner />
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <WhyChooseUs />

        {/* Mission / About strip */}
        <section className="py-16 bg-brand-orange">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-condensed font-black text-4xl md:text-5xl text-white mb-4 leading-none">
                  OUR OBJECTIVE
                </h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  To deliver reliable mechanical services in gas, HVAC, heat pumps, plumbing,
                  refrigeration, and cooling systems; to ensure comfort, safety, and efficiency
                  for residential and commercial clients; and to provide high-quality solutions
                  with fast, professional service.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {([
                  {
                    label: 'Gas Services',
                    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />,
                  },
                  {
                    label: 'Cooling Systems',
                    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                  },
                  {
                    label: 'Heating / Furnace',
                    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />,
                  },
                  {
                    label: 'Plumbing',
                    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
                  },
                  {
                    label: 'Heat Pumps',
                    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />,
                  },
                  {
                    label: 'Commercial',
                    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
                  },
                ] as { label: string; svg: React.ReactNode }[]).map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/15 rounded-xl p-4 text-center text-white border border-white/20"
                  >
                    <div className="flex justify-center mb-2">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        {item.svg}
                      </svg>
                    </div>
                    <div className="text-xs font-bold">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <FAQ />

        {/* Booking Section */}
        <section id="booking" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              {/* Left: info */}
              <div className="lg:sticky lg:top-8">
                <div className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
                  Book a Service
                </div>
                <h2 className="font-condensed font-black text-4xl md:text-5xl text-brand-blue mb-5 leading-tight">
                  READY TO BOOK<br />A SERVICE?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Fill out the form and we&apos;ll contact you to confirm your appointment.
                  Same-day service available for most requests.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Fast response — we confirm within 1 hour' },
                    { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Same-day & emergency appointments available' },
                    { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Transparent pricing — no hidden fees' },
                    { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Licensed & insured technicians' },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <div className="bg-brand-blue rounded-xl p-5 flex items-center gap-4">
                  <svg className="w-8 h-8 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <div className="text-white/70 text-xs mb-0.5">Prefer to call? We&apos;re available 24/7</div>
                    <a href="tel:4374323595" className="text-white font-bold text-lg hover:text-brand-orange transition-colors">
                      (437) 432-3595
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: form */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
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
