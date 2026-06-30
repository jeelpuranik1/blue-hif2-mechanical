import Link from 'next/link'
import BookingForm from './BookingForm'

export default function Hero() {
  return (
    <section className="relative bg-brand-blue overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(242,101,34,0.5) 0%, transparent 55%),
            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)`,
        }}
      />
      {/* Decorative circles — behind the form */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-5 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-white rounded-full"
            style={{
              width: `${(i + 1) * 100}px`,
              height: `${(i + 1) * 100}px`,
              right: `-${(i + 1) * 25}px`,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 text-brand-orange rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              24/7 Emergency Service Available
            </div>

            <h1 className="font-condensed font-black text-5xl sm:text-6xl md:text-7xl text-white leading-none mb-4">
              YOUR COMFORT,
              <br />
              <span className="text-brand-orange">OUR PRIORITY.</span>
            </h1>

            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Blue HIF₂ Mechanical Inc. delivers expert HVAC, heating, cooling, gas, plumbing, and
              refrigeration services for residential and commercial clients — fast, reliable, and
              professional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="#booking"
                className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-md text-base transition-colors shadow-lg hover:shadow-xl text-center"
              >
                Book a Service
              </Link>
              <Link
                href="tel:4374323594"
                className="border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-md text-base transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (437) 432-3594
              </Link>
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-white/70">
              {['✓ Licensed & Insured', '✓ Same-Day Service', '✓ Residential & Commercial', '✓ 100% Satisfaction Guaranteed'].map((b) => (
                <span key={b} className="font-medium">{b}</span>
              ))}
            </div>
          </div>

          {/* Right: booking form card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-7">
            <div className="mb-5">
              <h2 className="font-condensed font-black text-2xl text-brand-blue leading-tight">
                BOOK A SERVICE
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                We&apos;ll confirm your appointment within 1 hour.
              </p>
            </div>
            <BookingForm />
          </div>

        </div>
      </div>

      {/* Bottom service strip */}
      <div className="relative bg-brand-orange/10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-white/60 text-sm">
            {['AC Repair', 'Heating & Furnace', 'HVAC Installation', 'Gas Services', 'Plumbing', 'Refrigeration', 'Heat Pumps'].map((service, i) => (
              <span key={service} className="flex items-center gap-2">
                {i > 0 && <span className="opacity-40">·</span>}
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
