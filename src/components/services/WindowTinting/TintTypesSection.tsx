import React from 'react'
import { Shield, Zap, Lock } from 'lucide-react';

  const tintTypes = [
    {
      icon: Shield,
      title: 'Ceramic Tint',
      description: 'Premium ceramic technology offering superior heat rejection without signal interference. The ultimate choice for performance and clarity.',
      features: ['Superior heat rejection', 'No signal interference', 'Color stable', 'Lifetime warranty']
    },
    {
      icon: Zap,
      title: 'Carbon Tint',
      description: 'Advanced carbon technology providing excellent heat rejection with a distinctive matte finish that never fades.',
      features: ['Great heat rejection', 'Matte finish', 'Fade resistant', '5-year warranty']
    },
    {
      icon: Lock,
      title: 'Security Film',
      description: 'Maximum protection with shatter-resistant technology that enhances security while providing excellent privacy.',
      features: ['Shatter resistance', 'Theft deterrent', 'Enhanced privacy', '10-year warranty']
    }
  ];

function TintTypesSection() {
  return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional Tinting Options
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Choose the perfect tinting solution engineered for your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-white">
            {tintTypes.map((option, index) => (
              <div key={index} className="group rounded-xl p-8 border border-secondary shadow-xl hover:shadow-secondary transition-all duration-300 hover:transform hover:-translate-y-2 backdrop-blur-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 border border-secondary rounded-full mb-6 group-hover:shadow-lg group-hover:shadow-secondary transition-all duration-300">
                  <option.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {option.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {option.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-secondary p-3 rounded-3xl text-black">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
        )
}

export default TintTypesSection