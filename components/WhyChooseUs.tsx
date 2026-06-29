const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Licensed & Certified',
    description:
      'Our technicians are fully licensed, certified, and continuously trained on the latest HVAC technologies and safety protocols.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Response',
    description:
      'Same-day service for urgent repairs and 24/7 emergency availability — because we know your comfort can\'t wait.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Transparent Pricing',
    description:
      'No hidden fees or surprise charges. We provide clear, upfront quotes before any work begins so you always know what to expect.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Residential & Commercial',
    description:
      'From single-family homes to large commercial facilities, we have the experience and equipment to handle projects of any scale.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Customer-First Approach',
    description:
      'We build long-term relationships based on trust, respect, and quality workmanship. Your satisfaction is our measure of success.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Full-Service Mechanical',
    description:
      'Gas, HVAC, heat pumps, plumbing, and refrigeration all under one roof — your single-source mechanical contractor.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-block bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Why Blue HIF₂
            </div>
            <h2 className="font-condensed font-black text-4xl md:text-5xl text-brand-blue mb-5 leading-none">
              RELIABILITY YOU CAN
              <br />
              <span className="text-brand-orange">COUNT ON</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We&apos;re committed to delivering reliable mechanical services that ensure comfort,
              safety, and efficiency for every client — with the professionalism you deserve.
            </p>

            {/* Core values strip */}
            <div className="flex flex-wrap gap-3">
              {['Reliability', 'Quality', 'Efficiency', 'Safety', 'Professionalism', 'Customer Focus'].map(
                (value) => (
                  <span
                    key={value}
                    className="bg-brand-blue/8 text-brand-blue text-sm font-semibold px-4 py-2 rounded-full"
                  >
                    {value}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Right: Reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex gap-4">
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-bold text-brand-blue mb-1">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
