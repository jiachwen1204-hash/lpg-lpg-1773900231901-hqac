import AnimateIn from '@/components/ui/AnimateIn'
import { Home, Calendar, Camera } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Trusted Home Boarding',
    description: 'Connect with verified host families who provide safe, comfortable, and loving home environments for your pets while you travel.',
  },
  {
    icon: Calendar,
    title: 'Seamless Booking',
    description: 'Book boarding stays in minutes with our intuitive platform. Compare hosts, check availability, and reserve with confidence.',
  },
  {
    icon: Camera,
    title: 'Real-Time Updates',
    description: 'Stay connected with your furry companion through regular photo updates and transparent communication throughout their stay.',
  },
]

const HEADING = 'Smart Pet Boarding Made Simple'
const SUBTEXT = 'Everything you need to find trusted home boarding for your pet — from easy booking to peace of mind updates.'

export default function Services() {
  return (
    <section id="services" className="relative py-section bg-surface overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
             backgroundRepeat: 'repeat',
             backgroundSize: '256px 256px',
           }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateIn className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-brand-500 mb-3 font-body">
            Services
          </p>
          <h2 className="font-heading font-bold md:font-black text-display-lg md:text-display-xl text-content-primary mb-4 leading-tight">
            {HEADING}
          </h2>
          <p className="max-w-2xl mx-auto text-content-secondary text-lg md:text-xl leading-relaxed">
            {SUBTEXT}
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 100}>
              <div className="group relative h-full p-8 rounded-card-lg border border-surface-border bg-surface hover:border-brand-500/40 hover:shadow-card-lg transition-all duration-300 ease-expo-out overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-500/60 transition-all duration-500" />
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.02] transition-colors duration-300 rounded-card-lg" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-card bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-300">
                    <svc.icon className="w-7 h-7 text-brand-500" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-content-primary mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-content-secondary leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}