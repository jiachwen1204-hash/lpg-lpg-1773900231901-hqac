import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  eyebrow: 'Smart Pet Boarding, Simplified',
  heading: 'Give Your Pet a Home Away From Home',
  subtext: 'Book trusted home boarding through Furry Pet and enjoy peace of mind knowing your furry companion is in safe, loving hands.',
  cta: { label: 'Book a Stay', href: '#booking' },
  secondary: { label: 'Learn More', href: '#how-it-works' },
}

export default function CTA() {
  return (
    <section className="py-section relative overflow-hidden bg-[#0f0f13]">
      {/* Ambient glow orbs */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-sky-500/15 blur-[180px]" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-cyan-500/8 blur-[100px]" />
      </div>

      {/* Dot grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)',
        }}
      />

      {/* Noise texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <AnimateIn>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            {CONTENT.eyebrow}
          </span>
          <h2 className="font-heading font-bold text-[clamp(2rem,5vw,3.5rem)] text-content-inverse leading-[1.1] tracking-tight mb-6">
            Give Your Pet a{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 bg-[length:200%_auto] animate-shimmer">
              Home Away From Home
            </span>
          </h2>
          <p className="text-lg text-white/60 font-light leading-relaxed mb-10 max-w-xl mx-auto">
            {CONTENT.subtext}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-500/40 blur-2xl rounded-xl scale-110 pointer-events-none" />
              <a
                href={CONTENT.cta.href}
                className="relative inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-sky-500 text-white rounded-xl hover:bg-sky-400 transition-all ease-expo-out active:scale-[0.97] shadow-lg shadow-sky-500/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {CONTENT.cta.label}
              </a>
            </div>
            <a
              href={CONTENT.secondary.href}
              className="inline-flex items-center gap-2 px-8 py-4 font-body font-medium border border-white/15 text-white/80 rounded-xl hover:border-white/30 hover:text-white hover:bg-white/5 transition-all ease-expo-out"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {CONTENT.secondary.label}
            </a>
          </div>
        </AnimateIn>

        {/* Floating trust indicators */}
        <AnimateIn delay={200} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Vetted Hosts</span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              <span>Trusted by Pet Owners</span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>Loving Home Care</span>
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
    </section>
  )
}