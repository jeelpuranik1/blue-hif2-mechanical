'use client'

import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'

const services = [
  { label: 'AC Repair & Maintenance', href: '/services/ac-repair-maintenance' },
  { label: 'Heating & Furnace', href: '/services/heating-furnace' },
  { label: 'HVAC Installation', href: '/services/hvac-installation' },
  { label: '24/7 Emergency Service', href: '/services/emergency-service' },
  { label: 'Gas Services', href: '/services/gas' },
  { label: 'All Services', href: '/services' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md border-b border-gray-100 overflow-visible">
      <div className="max-w-7xl mx-auto pl-0 pr-4 sm:pr-6 lg:pr-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Logo variant="light" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="text-brand-blue hover:text-brand-orange px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-brand-blue hover:text-brand-orange px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors">
                Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-blue/10 hover:text-brand-blue transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-brand-blue hover:text-brand-orange px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-brand-blue hover:text-brand-orange px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </Link>

            <Link
              href="/contact#booking"
              className="ml-3 bg-brand-orange hover:bg-brand-orange-dark text-white px-5 py-2 rounded-md text-sm font-bold transition-colors shadow-sm"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-brand-blue p-2 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4">
          <Link
            href="/"
            className="block px-6 py-3 text-brand-blue hover:text-brand-orange text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <div className="px-6 py-3 text-xs font-bold text-brand-orange uppercase tracking-widest">
            Services
          </div>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block px-8 py-2.5 text-brand-blue/80 hover:text-brand-orange text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {s.label}
            </Link>
          ))}
          <Link
            href="/about"
            className="block px-6 py-3 text-brand-blue hover:text-brand-orange text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-6 py-3 text-brand-blue hover:text-brand-orange text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="px-6 pt-3">
            <Link
              href="/contact#booking"
              className="block w-full bg-brand-orange text-white text-center py-3 rounded-md font-bold text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Book Service
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
