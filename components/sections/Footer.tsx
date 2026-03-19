import Link from 'next/link'
import { Mail, MapPin, Phone, Heart, Twitter, Instagram, Facebook } from 'lucide-react'

const BRAND = {
  name: 'Furry Pet',
  tagline: 'Smart Pet Boarding, Simplified',
  description: 'Connecting pet owners with trusted home boarding services through a seamless and convenient digital experience.',
  email: 'jiachwen99@gmail.com',
  address: 'B5-1-3, Forest Green Condominium, Bandar Sungai Long',
  cta: 'Book a Stay',
}

const links = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  { label: 'Home Boarding', href: '#boarding' },
  { label: 'Pet Sitting', href: '#sitting' },
  { label: 'Day Care', href: '#daycare' },
  { label: 'Pet Transport', href: '#transport' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
]

const social = [
  { icon: Twitter, href: 'https://twitter.com/furrypet', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/furrypet', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/furrypet', label: 'Facebook' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0f0f13] border-t border-[#2a2a3a]">
      {/* Background glow effects */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[300px] rounded-full bg-brand-500/10 blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-shadow duration-300">
                  <span className="text-white font-heading font-bold text-lg">F</span>
                </div>
                <span className="font-heading font-bold text-2xl text-white group-hover:text-brand-400 transition-colors duration-300">
                  {BRAND.name}
                </span>
              </div>
            </Link>
            <p className="mt-5 text-base text-[#8b8ba7] leading-relaxed max-w-sm">
              {BRAND.description}
            </p>
            
            {/* CTA Button */}
            <div className="relative inline-flex mt-6">
              <div className="absolute inset-0 bg-brand-500/30 blur-xl rounded-xl scale-110" />
              <Link
                href="#book"
                className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl hover:from-brand-600 hover:to-brand-700 transition-all duration-300 shadow-glow-sm hover:shadow-glow"
              >
                <Heart className="w-4 h-4" />
                {BRAND.cta}
              </Link>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-8">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#17171f] border border-[#2a2a3a] flex items-center justify-center text-[#8b8ba7] hover:text-brand-400 hover:border-brand-500/50 hover:bg-brand-500/10 transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-[#8b8ba7] hover:text-brand-400 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-[#8b8ba7] hover:text-brand-400 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-start gap-3 text-sm text-[#8b8ba7] hover:text-brand-400 transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#17171f] border border-[#2a2a3a] flex items-center justify-center shrink-0 group-hover:border-brand-500/50 group-hover:bg-brand-500/10 transition-all duration-300">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="pt-1">{BRAND.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-[#8b8ba7]">
                <div className="w-8 h-8 rounded-lg bg-[#17171f] border border-[#2a2a3a] flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="pt-1 leading-relaxed">{BRAND.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2a2a3a]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-[#5a5a72]">
              © {year} {BRAND.name}. All rights reserved.
            </div>
            <ul className="flex items-center gap-6">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#5a5a72] hover:text-brand-400 transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tagline accent */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#5a5a72] tracking-widest uppercase">
            {BRAND.tagline} <span className="text-brand-500">•</span> Built with <Heart className="inline w-3 h-3 text-rose-500 mx-0.5" /> for pets everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}