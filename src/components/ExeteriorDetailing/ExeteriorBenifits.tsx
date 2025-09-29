import {  Shield,  Zap, Gem } from 'lucide-react';

function ExeteriorBenifits() {
  return (
      <section className="py-20 bg-gradient-surface text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Exterior Detailing Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional exterior detailing provides lasting benefits for your vehicle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Paint Protection',
                description: 'Protect your investment with advanced coatings that guard against environmental damage, UV rays, and contaminants.'
              },
              {
                icon: Gem,
                title: 'Enhanced Appearance',
                description: 'Restore that showroom shine and depth to your paint, making your vehicle look newer and more attractive.'
              },
              {
                icon: Zap,
                title: 'Increased Value',
                description: 'Well-maintained paintwork significantly increases your vehicle\'s resale value and overall appeal.'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 border border-secondary rounded-full mb-6 group-hover:shadow-lg group-hover:shadow-emerald-400/30 transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ExeteriorBenifits