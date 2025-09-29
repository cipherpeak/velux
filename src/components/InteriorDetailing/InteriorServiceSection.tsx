import { Check, ArrowRight, Star } from 'lucide-react';

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

const InteriorServiceSection = ({ 
  title, 
  description, 
  features, 
}: ServiceSectionProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-8 max-w-3xl">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  {title}
                </h2>
                <p className="text-xl text-white leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-white font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-secondary text-white rounded-xl font-semibold  transition-colors flex items-center gap-3">
                  Book Service
                  <ArrowRight className="w-5 h-5" />
                </button>

              </div>
            </div>


          </div>

          {/* Side Visual */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="aspect-square bg-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-secondary/20 rounded-2xl mx-auto flex items-center justify-center">
                    <Star className="w-10 h-10 text-secondary" />
                  </div>
                  <p className="text-black font-medium">Service Preview</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorServiceSection;