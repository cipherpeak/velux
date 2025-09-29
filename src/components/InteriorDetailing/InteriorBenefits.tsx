import {  Car, Shield, Heart } from 'lucide-react';

function InteriorBenefits() {
  return (
      <section className="py-20 bg-gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Interior Detailing Difference
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              See the remarkable transformation professional interior detailing provides
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Health Benefits',
                description: 'Remove allergens, bacteria, and contaminants that accumulate in your interior, creating a healthier environment for you and your passengers.',
                icon: Shield
              },
              {
                title: 'Comfort Enhancement',
                description: 'Clean, conditioned leather and fresh fabrics create a more comfortable and pleasant driving experience every time.',
                icon: Heart
              },
              {
                title: 'Value Preservation',
                description: 'Regular interior maintenance prevents wear and deterioration, maintaining your vehicle\'s resale value over time.',
                icon: Car
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 border border-secondary rounded-full mb-6 group-hover:shadow-lg group-hover:secondary/30 transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-white leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
        )
}

export default InteriorBenefits