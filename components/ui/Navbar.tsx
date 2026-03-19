'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, PawPrint } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const BRAND_NAME = 'Furry Pet'
const BRAND_TAGLINE = 'Smart Pet Boarding, Simplified'
const CTA = { label: 'Book a Stay', href: '#booking' }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0f0f13]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-brand-500/5'
          : 'bg-transparent',
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-brand-500/30 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/25">
              <PawPrint className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl text-white tracking-tight">
              {BRAND_NAME}
            </span>
            <span className="text-[10px] text-white/40 font-body -mt-1 hidden sm:block">
              {BRAND_TAGLINE}
            </span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 font-body"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={CTA.href}
            className="group relative px-6 py-2.5 text-sm font-semibold rounded-xl overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-400" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/20 blur-xl scale-150 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            <span className="relative text-white font-body flex items-center gap-2">
              {CTA.label}
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-[#0f0f13]/98 backdrop-blur-xl border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-4 pb-2">
              <a
                href={CTA.href}
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-gradient-to-r from-brand-500 to-brand-400 text-white rounded-xl shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all duration-300 font-body"
              >
                {CTA.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}