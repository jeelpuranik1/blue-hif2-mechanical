import Link from 'next/link'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'AC Repair & Maintenance',
    description:
      'Expert air conditioning repair, tune-ups, and seasonal maintenance to keep your system running at peak efficiency all summer long.',
    href: '/services/ac-repair-maintenance',
    keywords: ['AC repair', 'air conditioning tune-up', 'cooling maintenance'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'Heating & Furnace',
    description:
      'Furnace repair, heat pump service, boiler maintenance, and complete heating system diagnostics to ensure warmth all winter.',
    href: '/services/heating-furnace',
    keywords: ['furnace repair', 'heating service', 'heat pump'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'HVAC Installation',
    description:
      'New system installation for residential and commercial properties. We size, supply, and install the right system for maximum comfort and efficiency.',
    href: '/services/hvac-installation',
    keywords: ['HVAC installation', 'new AC unit', 'furnace installation'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: '24/7 Emergency Service',
    description:
      'HVAC emergencies don\'t wait for business hours. Our certified technicians are on call around the clock for fast, reliable emergency response.',
    href: '/services/emergency-service',
    badge: '24/7',
    keywords: ['emergency HVAC', '24/7 service', 'emergency heating repair'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Gas Services',
    description:
      'Safe, certified gas line installation, inspection, and repair. We handle residential and commercial gas work with strict safety standards.',
    href: '/services/gas',
    keywords: ['gas line installation', 'gas repair', 'gas services'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Plumbing & Refrigeration',
    description:
      'Full plumbing services and refrigeration system maintenance and repair for residential and commercial applications.',
    href: '/services',
    keywords: ['plumbing services', 'refrigeration repair', 'commercial refrigeration'],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            What We Do
          </div>
          <h2 className="font-condensed font-black text-4xl md:text-5xl text-brand-blue mb-4">
            COMPREHENSIVE HVAC SERVICES
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From routine maintenance to emergency repairs and full system installations — we cover
            every aspect of your comfort system.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.href + service.title}
              className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-orange/20 transition-all group"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 bg-brand-blue/8 rounded-xl flex items-center justify-center text-brand-blue group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-colors">
                  {service.icon}
                </div>
                {service.badge && (
                  <span className="bg-brand-orange text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-lg text-brand-blue mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>
              <Link
                href={service.href}
                className="text-brand-orange font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-bold px-8 py-4 rounded-md hover:bg-brand-blue-dark transition-colors"
          >
            View All Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
