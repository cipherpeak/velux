  import { Check, ArrowRight, Star } from 'lucide-react';
  import banner1 from "../../../assets/servicePage/banner/servive banner.jpg"

  interface ServiceSectionProps {
    title: string;
    description: string;
    features: string[];
    reverse?: boolean;
    pricing?: {
      starting: string;
      packages: Array<{
        name: string;
        price: string;
        features: string[];
        popular?: boolean;
      }>;
    };
  }

  const ServiceSection = ({ 
    title, 
    description, 
    features, 
    reverse = false,
    pricing 
  }: ServiceSectionProps) => {
    return (
      <section className="py-8 md:py-16 lg:py-20 relative overflow-hidden">
        {/* Enhanced Background with Multiple Layers */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url(${banner1})` }}
          />
          {/* Modern Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-800/70" />
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border border-white/20">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ${
              reverse ? 'lg:grid-flow-col-dense' : ''
            }`}>
              
              {/* Text Content */}
              <div className={`space-y-6 lg:space-y-8 ${
                reverse ? 'lg:col-start-2' : ''
              }`}>
                {/* Header Section */}
                <div className="space-y-4 md:space-y-6">
                  <div className="inline-flex items-center gap-2  rounded-full px-4 py-2 border border-secondary">
                    <Star className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium text-white">Premium Service</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {title}
                  </h2>
                  
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                    {description}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-white font-medium text-sm md:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Enhanced Pricing Section */}
                {pricing && (
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Starting from {pricing.starting}
                      </h3>
                      <p className="text-white/70">Transparent pricing, no hidden fees</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {pricing.packages.map((pkg, index) => (
                        <div 
                          key={index}
                          className={`relative rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                            pkg.popular 
                              ? 'bg-gradient-to-br from-blue-500/20 to-purple-600/20 border-blue-400/50 shadow-2xl' 
                              : 'bg-white/10 border-white/20'
                          }`}
                        >
                          {pkg.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                Most Popular
                              </span>
                            </div>
                          )}
                          
                          <h4 className={`text-xl font-bold mb-2 ${
                            pkg.popular ? 'text-white' : 'text-white'
                          }`}>
                            {pkg.name}
                          </h4>
                          
                          <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                            {pkg.price}
                          </p>
                          
                          <ul className="space-y-3 mb-6">
                            {pkg.features.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-center gap-3 text-white/90 text-sm">
                                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          
                          <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                            pkg.popular
                              ? 'bg-secondary text-white shadow-lg hover:shadow-xl '
                              : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
                          }`}>
                            Get Started
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Enhanced CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="group px-8 py-4 bg-secondary text-white rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <span>Book This Service</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Visual Element Placeholder - You can add an image here */}
              <div className={`flex items-center justify-center ${
                reverse ? 'lg:col-start-1' : ''
              }`}>
                <div className="w-full h-64 md:h-80 lg:h-96 rounded-2xl bg-secondary/50 border-2 border-secondary flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center text-white/70">
                    <div className="w-16 h-16 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✨</span>
                    </div>
                    <p className="text-lg font-medium text-white">Service Visual</p>
                    <p className="text-sm mt-2 text-white">Add your image or illustration here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default ServiceSection;