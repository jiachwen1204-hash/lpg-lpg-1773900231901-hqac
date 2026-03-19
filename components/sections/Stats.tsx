'use client'
import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'

const stats = [
  { value: 12000, suffix: '+', label: 'Happy Pets Boarded' },
  { value: 98,    suffix: '%', label: 'Owner Satisfaction' },
  { value: 450,   suffix: '+', label: 'Verified Host Homes' },
  { value: 4.9,   suffix: '★', label: 'Average Rating'     },
]

function CountUp({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.unobserve(el)
      const duration = 2000
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        const current = eased * target
        setCount(decimals > 0 ? Math.round(current * 10) / 10 : Math.round(current))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, decimals])

  return <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="relative py-section overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0f0f13]" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-brand-500/[0.06] blur-[120px] pointer-events-none" />
      
      {/* Dot grid texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />
      
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100} className="text-center group">
              <div className="relative">
                {/* Glow behind number on hover */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.08] blur-xl rounded-2xl transition-all duration-500 -z-10" />
                
                <div className="font-heading font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-3">
                  <CountUp target={stat.value} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                </div>
                
                <div className="text-sm md:text-base font-medium text-content-secondary tracking-wide">
                  {stat.label}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
    </section>
  )
}