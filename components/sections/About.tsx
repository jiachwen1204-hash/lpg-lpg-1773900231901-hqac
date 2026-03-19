import AnimateIn from '@/components/ui/AnimateIn'
import { Heart, Shield, Calendar, MessageCircle, Home, Smartphone } from 'lucide-react'

const CONTENT = {
  label: 'About Furry Pet',
  heading: 'Smart Pet Boarding,\nSimplified.',
  headingAccent: 'Simplified.',
  paragraphs: [
    'Furry Pet is a modern pet-care platform that connects pet owners with trusted home boarding services through a seamless and convenient digital experience. Designed to simplify pet care arrangements, Furry Pet enables owners to easily find safe, comfortable, and loving home environments for their pets whenever they travel or need temporary care.',
    'By combining technology with genuine love for animals, we deliver a smarter, more personal way to arrange home-based pet boarding.',
  ],
  values: [
    {
      icon: Shield,
      title: 'Care Standards',
      description: 'Every boarding home meets strict care standards that prioritize pets\' well-being, routines, and comfort.',
    },
    {
      icon: MessageCircle,
      title: 'Transparent Communication',
      description: 'Stay connected with regular updates and direct communication with your pet\'s host throughout their stay.',
    },
    {
      icon: Calendar,
      title: 'Easy Booking',
      description: 'Find and book the perfect home environment in minutes with our streamlined digital experience.',
    },
    {
      icon: Home,
      title: 'Loving Homes',
      description: 'Verified hosts provide safe, comfortable, and nurturing environments where your pet can thrive.',
    },
    {
      icon: Heart,
      title: 'Peace of Mind',
      description: 'Know your furry companion is in good hands with quality-assured care and constant updates.',
    },
    {
      icon: Smartphone,
      title: 'Stay Connected',
      description: 'Access real-time updates and photos of your pet, keeping you confident while you\'re apart.',
    },
  ],
  stats: [
    { value: '24/7', label: 'Host Support' },
    { value: '100%', label: 'Verified Homes' },
    { value: '500+', label: 'Happy Pets' },
  ],
  cta: { label: 'Book a Stay', href: '#booking' },
}

export default function About() {
  return (
    <section id="about" className="relative py-section overflow-hidden bg-[#0f0f13]">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] rounded-full bg-sky-500/10 blur-[180px] animate-float pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] rounded-full bg-sky-600/8 blur-[150px] animate-float [animation-delay:3s] pointer-events-none" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }}
        />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <AnimateIn>
            <p className="text-sm font-medium tracking-widest uppercase text-sky-400 mb-4">
              {CONTENT.label}
            </p>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h2 className="font-heading font-black text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-[-0.03em] text-white mb-6">
              Smart Pet Boarding,<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 bg-[length:200%_auto] animate-shimmer">
                {CONTENT.headingAccent}
              </span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={200}>
            <div className="space-y-5">
              {CONTENT.paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-white/60 leading-relaxed font-light">
                  {p}
                </p>
              ))}
            </div>
          </AnimateIn>
        </div>

        {/* Stats Row */}
        <AnimateIn delay={300}>
          <div className="grid grid-cols-3 gap-6 mb-20 p-6 rounded-card-lg border border-white/8 bg-white/[0.03] backdrop-blur-sm">
            {CONTENT.stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-black text-[clamp(2rem,4vw,3rem)] text-sky-400 leading-none">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTENT.values.map((value, i) => (
            <AnimateIn key={value.title} delay={400 + i * 100}>
              <div className="group relative rounded-card-lg border border-white/8 bg-white/[0.03] hover:border-sky-500/30 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden h-full">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Inner glow on hover */}
                <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/[0.02] transition-colors duration-300 rounded-card-lg" />
                
                <div className="relative p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4 group-hover:bg-sky-500/15 group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-6 h-6 text-sky-400" />
                  </div>
                  {/* Content */}
                  <h3 className="font-heading font-semibold text-lg text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* CTA */}
        <AnimateIn delay={800}>
          <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 p-8 rounded-card-lg border border-white/8 bg-white/[0.03]">
            <div className="flex-1">
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Ready to book your pet's next stay?
              </h3>
              <p className="text-white/50 text-sm">
                Find trusted home boarding near you and give your furry friend the care they deserve.
              </p>
            </div>
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-sky-500/40 blur-xl rounded-pill scale-110" />
              <a
                href={CONTENT.cta.href}
                className="relative inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-sky-500 text-white rounded-pill hover:bg-sky-400 transition-all duration-300 shadow-glow"
              >
                {CONTENT.cta.label}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}