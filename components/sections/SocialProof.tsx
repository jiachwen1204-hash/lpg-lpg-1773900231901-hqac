import AnimateIn from '@/components/ui/AnimateIn'

const trustSignals = [
  { value: '2,500+', label: 'Verified Hosts' },
  { value: '15,000+', label: 'Happy Pets' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '1,200+', label: 'Reviews' },
]

const testimonials = [
  {
    quote: 'Furry Pet gave me complete peace of mind during my two-week trip. My golden retriever Max was treated like family — I received daily photo updates and he came back happy and healthy. This platform is a game-changer for pet owners!',
    author: 'Emily Tan',
    role: 'Dog Owner, 2 years with Furry Pet',
  },
  {
    quote: 'The transparency and communication exceeded all my expectations. From booking to pickup, every detail was handled professionally. My cat Luna felt completely at home — I will never use traditional kennels again.',
    author: 'David Lim',
    role: 'Cat Owner, Verified Boarder',
  },
  {
    quote: 'As a working professional who travels frequently, Furry Pet has become essential. The verified host network gives me confidence, and the easy booking process makes arranging care for my two beagles stress-free every time.',
    author: 'Sarah Chen',
    role: 'Multi-Pet Owner, Regular User',
  },
]

export default function SocialProof() {
  return (
    <section className="relative py-section overflow-hidden bg-[#0f0f13]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-500/[0.06] blur-[180px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            Trusted by Pet Parents
          </span>
          <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight text-white">
            Loved by owners,<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-sky-300">adored by pets</span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {trustSignals.map((stat, i) => (
            <AnimateIn key={i} delay={i * 80}>
              <div className="text-center p-6 rounded-card-lg border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand-500/30 transition-all duration-300 group">
                <div className="font-heading font-bold text-[clamp(1.5rem,3vw,2.5rem)] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-content-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 120}>
              <div className="group relative h-full p-8 rounded-card-lg border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-500/40 transition-all duration-500">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-card-lg bg-brand-500/0 group-hover:bg-brand-500/[0.02] transition-colors duration-500" />
                <div className="relative">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-brand-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-content-secondary leading-relaxed mb-6 text-base">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500/20 to-brand-400/10 border border-brand-500/20 flex items-center justify-center">
                      <span className="text-brand-400 font-semibold text-sm">{t.author.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-medium text-white text-sm">{t.author}</div>
                      <div className="text-xs text-content-muted">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}