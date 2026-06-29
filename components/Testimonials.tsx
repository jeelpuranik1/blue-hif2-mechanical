const testimonials = [
  {
    name: 'Michael R.',
    location: 'Homeowner',
    rating: 5,
    text: 'Blue HIF₂ responded within hours when my furnace stopped working in the middle of winter. The technician was professional, explained everything clearly, and had it fixed same day. Exceptional service!',
  },
  {
    name: 'Sarah T.',
    location: 'Property Manager',
    rating: 5,
    text: 'We use Blue HIF₂ for all our commercial HVAC maintenance contracts. They are reliable, always on time, and their technicians are knowledgeable. Highly recommend for any commercial property.',
  },
  {
    name: 'James K.',
    location: 'Homeowner',
    rating: 5,
    text: 'Had a new AC system installed last summer. The installation crew was clean, efficient, and respectful of my home. The system has been running perfectly. Fair pricing and great workmanship.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Customer Reviews
          </div>
          <h2 className="font-condensed font-black text-4xl md:text-5xl text-white mb-4">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Don&apos;t just take our word for it — hear from satisfied homeowners and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="bg-white/10 backdrop-blur rounded-xl p-7 border border-white/10"
            >
              <Stars count={t.rating} />
              <p className="text-white/85 mt-4 mb-6 leading-relaxed text-sm">&ldquo;{t.text}&rdquo;</p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/50 text-xs">{t.location}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
