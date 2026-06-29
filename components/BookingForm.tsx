'use client'

import { useState } from 'react'

const serviceOptions = [
  'AC Repair & Maintenance',
  'Heating & Furnace Repair',
  'HVAC Installation',
  '24/7 Emergency Service',
  'Gas Services',
  'Plumbing',
  'Refrigeration',
  'Heat Pump Service',
  'Other / Not Sure',
]

const inputCls =
  'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange focus:bg-white transition-all duration-150'

const labelCls = 'block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5'

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    propertyType: 'residential',
    preferredDate: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-brand-blue mb-2">Request Received!</h3>
        <p className="text-gray-500 text-sm mb-1">
          Thanks, <span className="font-semibold text-gray-700">{form.name}</span>. We&apos;ll call you at{' '}
          <span className="font-semibold text-gray-700">{form.phone || form.email}</span> to confirm.
        </p>
        <p className="text-xs text-gray-400 mt-4">
          Urgent?{' '}
          <a href="tel:4374323595" className="text-brand-orange font-semibold hover:underline">
            Call (437) 432-3595
          </a>
        </p>
        <button onClick={() => setSubmitted(false)} className="mt-5 text-xs text-brand-blue underline opacity-60 hover:opacity-100">
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Row 1: Name + Phone */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>
            Full Name <span className="text-brand-orange normal-case tracking-normal">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <input type="text" name="name" required value={form.name} onChange={handleChange}
              placeholder="John Smith"
              className={`${inputCls} pl-9`} />
          </div>
        </div>
        <div>
          <label className={labelCls}>
            Phone <span className="text-brand-orange normal-case tracking-normal">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
              placeholder="(437) 432-3595"
              className={`${inputCls} pl-9`} />
          </div>
        </div>
      </div>

      {/* Row 2: Email */}
      <div>
        <label className={labelCls}>Email Address</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <input type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            className={`${inputCls} pl-9`} />
        </div>
      </div>

      {/* Row 3: Service + Property Type */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>
            Service <span className="text-brand-orange normal-case tracking-normal">*</span>
          </label>
          <div className="relative">
            <select name="service" required value={form.service} onChange={handleChange}
              className={`${inputCls} appearance-none pr-9 cursor-pointer`}>
              <option value="" disabled>Select service…</option>
              {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <label className={labelCls}>Property Type</label>
          <div className="relative">
            <select name="propertyType" value={form.propertyType} onChange={handleChange}
              className={`${inputCls} appearance-none pr-9 cursor-pointer`}>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Row 4: Preferred Date */}
      <div>
        <label className={labelCls}>Preferred Date</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
          <input type="date" name="preferredDate" value={form.preferredDate} onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className={`${inputCls} pl-9`} />
        </div>
      </div>

      {/* Row 5: Message */}
      <div>
        <label className={labelCls}>Describe the Issue <span className="normal-case tracking-normal font-normal text-gray-400">(optional)</span></label>
        <textarea name="message" rows={3} value={form.message} onChange={handleChange}
          placeholder="Tell us about your HVAC issue or what you need..."
          className={`${inputCls} resize-none`} />
      </div>

      {/* Submit */}
      <button type="submit" disabled={loading}
        className="w-full bg-brand-orange hover:bg-brand-orange-dark disabled:opacity-60 text-white font-bold py-3.5 rounded-xl text-sm tracking-wide transition-all duration-150 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting…
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Request Service Appointment
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        For emergencies call{' '}
        <a href="tel:4374323595" className="text-brand-orange font-semibold hover:underline">
          (437) 432-3595
        </a>{' '}
        — available 24/7
      </p>
    </form>
  )
}
