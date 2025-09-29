import { Check, ArrowRight, Star, Clock, Shield, Zap } from 'lucide-react';

interface ServiceSectionProps {
  title: string;
  description: string;
  features: string[];
  reverse?: boolean;
}

const ExeteriorService = ({ 
  title, 
  description, 
  features, 
  reverse = false,
}: ServiceSectionProps) => {
  return (
    <section className="py-12 md:py-20 lg:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16 ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}>
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://lirp.cdn-website.com/443aa17f/dms3rep/multi/opt/car+detailing+the+works+auto+center-640w.jpg"
                  alt={title}
                  className="w-full h-auto object-cover aspect-square lg:aspect-video transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-2xl rotate-12 shadow-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-black" />
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-secondary  rounded-2xl -rotate-12 shadow-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              
              {/* Stats Badge */}
              <div className="absolute bottom-6 left-6 border border-secondary rounded-2xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-bold text-secondary">Quick Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6 lg:space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-secondary">
                  <Star className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-semibold text-secondary">Premium Service</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {title}
                </h2>
                
                <p className="text-lg text-white leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                      <Check className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm md:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold border border-slate-300 hover:border-slate-400 transition-all duration-300 shadow-sm hover:shadow-md">
                  View Case Studies
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-sm text-slate-600">100% Guaranteed</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm text-slate-600">Secure & Safe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExeteriorService;