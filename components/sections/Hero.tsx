import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  badge: 'Trusted by 500+ Pet Parents',
  headline: 'Smart Pet Boarding,',
  highlight: 'Simplified.',
  subline: 'Furry Pet connects pet owners with trusted home boarding services through a seamless digital experience. Find safe, comfortable, and loving environments for your furry companions — with easy booking, transparent communication, and peace of mind.',
  cta: { label: 'Book a Stay', href: '#booking' },
  secondary: { label: 'How It Works', href: '#how-it-works' },
  stats: [
    { value: '500+', label: 'Trusted Hosts' },
    { value: '2,000+', label: 'Happy Pets' },
    { value: '98%', label: 'Satisfaction Rate' },
  ],
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0f13] pt-nav"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Primary gradient orb */}
        <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-brand-500/20 blur-[180px] animate-float pointer-events-none" />
        {/* Secondary orb */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-sky-400/10 blur-[150px] animate-float [animation-delay:3s] pointer-events-none" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }} />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-white/10 bg-white/5 text-sm text-sky-400 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Live in 50+ neighborhoods
              </div>
            </AnimateIn>

            {/* Headline */}
            <AnimateIn delay={80}>
              <h1 className="font-heading font-black text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.04em] text-white mb-6">
                Smart Pet<br />
                <span className="bg-gradient-to-r from-brand-400 via-sky-400 to-brand-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                  Boarding,
                </span><br />
                Simplified.
              </h1>
            </AnimateIn>

            {/* Subline */}
            <AnimateIn delay={160}>
              <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-lg mb-10">
                Connect with trusted home boarding hosts who treat your furry family members like their own. Easy booking, regular updates, and complete peace of mind.
              </p>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn delay={240}>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-500/40 blur-xl rounded-pill scale-110" />
                  <a
                    href={CONTENT.cta.href}
                    className="relative inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-brand-500 text-white rounded-card hover:bg-brand-700 transition-all ease-expo-out active:scale-[0.97] shadow-glow"
                  >
                    {CONTENT.cta.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                <a
                  href={CONTENT.secondary.href}
                  className="inline-flex items-center gap-2 px-8 py-4 font-body font-medium border border-white/20 text-white/80 rounded-card hover:border-brand-500 hover:text-brand-400 transition-all ease-expo-out"
                >
                  {CONTENT.secondary.label}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </AnimateIn>

            {/* Stats */}
            <AnimateIn delay={320}>
              <div className="flex flex-wrap gap-10 mt-14 pt-8 border-t border-white/10">
                {CONTENT.stats.map(stat => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className="font-heading font-black text-4xl md:text-5xl text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/40">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right: Floating UI mockup */}
          <AnimateIn delay={200} animation="scale-in" className="hidden lg:block relative">
            <div className="relative">
              {/* Main booking card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 shadow-card-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-wider">Upcoming Stay</span>
                    <h3 className="font-heading font-semibold text-white text-lg mt-1">Max's Boarding</h3>
                  </div>
                  <span className="text-xs text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full font-medium">Confirmed</span>
                </div>

                {/* Host info */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-heading font-bold text-lg">
                    SJ
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">Sarah J.</div>
                    <div className="text-sm text-white/40">Bandar Sungai Long</div>
                  </div>
                  <div className="flex items-center gap-1 text-brand-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                </div>

                {/* Stay details */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/[0.03] p-4 border border-white/5">
                    <div className="text-xs text-white/40 mb-1">Check-in</div>
                    <div className="font-semibold text-white">Dec 20, 2024</div>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] p-4 border border-white/5">
                    <div className="text-xs text-white/40 mb-1">Check-out</div>
                    <div className="font-semibold text-white">Dec 27, 2024</div>
                  </div>
                </div>

                {/* Updates preview */}
                <div className="mt-5 p-4 rounded-xl border border-green-500/20 bg-green-500/5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400 font-medium">Latest Update</span>
                  </div>
                  <p className="text-sm text-white/70">Max had a great walk today! He's making friends with Luna next door 🐕</p>
                </div>
              </div>

              {/* Floating badge - booking count */}
              <div className="absolute -top-5 -right-4 animate-float">
                <div className="card-glass p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/40">Next Booking</div>
                    <div className="font-heading font-bold text-white">Dec 20</div>
                  </div>
                </div>
              </div>

              {/* Floating badge - rating */}
              <div className="absolute -bottom-4 -left-4 animate-float [animation-delay:2s]">
                <div className="card-glass p-3 flex items-center gap-2">
                  <span className="text-2xl">🐾</span>
                  <div>
                    <div className="text-xs font-semibold text-white">Verified Host</div>
                    <div className="text-xs text-green-400">Background checked</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0f13] to-transparent pointer-events-none" />
    </section>
  )
}