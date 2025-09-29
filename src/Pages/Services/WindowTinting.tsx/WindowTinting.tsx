import {  Car, Phone, } from 'lucide-react';
import ServiceSection from '../../../components/services/WindowTinting/ServiceSection';
import WindoTintingBanner from '../../../components/services/WindowTinting/WindoTintingBanner';
import TintTypesSection from '../../../components/services/WindowTinting/TintTypesSection';
import InstallationProccess from '../../../components/services/WindowTinting/InstallationProccess';

const WindowTinting = () => {
  const benefits = [
    'Premium automotive window films',
    '99% UV ray protection',
    'Heat reduction up to 60%',
    'Enhanced privacy and security',
    'Glare reduction for safer driving',
    'Fade protection for interior',
    'Professional installation',
    'Lifetime warranty available'
  ];



  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section with Blue Tint Theme */}
        <WindoTintingBanner/>
      {/* Benefits Section */}
      <ServiceSection
        title="Why Choose Professional Window Tinting?"
        description="Our premium window tinting services provide superior protection, comfort, and style for your vehicle. Using only the highest quality films and professional installation techniques."
        features={benefits}
      />

      {/* Tint Types Section with Unique Blue Theme */}
      <TintTypesSection/>

      {/* Process Section */}
     <InstallationProccess/>

      {/* CTA Section */}
<section className="py-20 relative overflow-hidden">
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="p-12 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        Ready to Enhance Your Vehicle?
      </h2>
      <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
        Get a free consultation for professional window tinting services. Same-day installation available.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" />
          Call for Quote
        </button>
        <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
          <Car className="w-5 h-5" />
          Book Online
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default WindowTinting;