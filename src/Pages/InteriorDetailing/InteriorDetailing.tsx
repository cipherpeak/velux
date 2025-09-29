
import {  Car, Phone } from 'lucide-react';
import InteriorBanner from '../../components/InteriorDetailing/InteriorBanner';
import InteriorServiceSection from '../../components/InteriorDetailing/InteriorServiceSection';
import InteriorBenefits from '../../components/InteriorDetailing/InteriorBenefits';

const InteriorDetailing = () => {
  const services = [
    'Complete vacuum and debris removal',
    'Leather cleaning and conditioning',
    'Fabric and upholstery deep cleaning',
    'Dashboard and console cleaning',
    'Window cleaning (interior)',
    'Carpet shampooing and stain removal',
    'Odor elimination treatment',
    'UV protection for leather and plastics'
  ];


  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section with Purple Theme */}
<InteriorBanner/>

      {/* Services Section */}
      <InteriorServiceSection
        title="Complete Interior Restoration"
        description="Our interior detailing services address every surface and component inside your vehicle. Using professional-grade equipment and products, we deliver exceptional results that refresh and protect your interior."
        features={services}
      />



      {/* Benefits Section */}
<InteriorBenefits/>

      {/* CTA Section */}
<section className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-900/10 to-violet-900/5">
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Main CTA Card */}
    <div className="p-12 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Refresh Your Interior Today
      </h2>
      <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
        Experience the comfort and cleanliness of a professionally detailed interior. Same-day service available.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" />
          Call Now
        </button>
        <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
          <Car className="w-5 h-5" />
          Book Online
        </button>
      </div>
    </div>

    {/* Combo Services Card */}
    <div className="mt-8 p-8 rounded-3xl bg-secondary/10 backdrop-blur-sm border border-violet-400/20 shadow-xl text-white">
      <h3 className="text-2xl font-bold text-white mb-4">
        Complete Vehicle Care
      </h3>
      <p className="text-white/80 mb-6 max-w-2xl mx-auto">
        Combine interior detailing with our exterior services for a complete vehicle transformation. Ask about our combo packages for additional convenience.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <button className="px-6 py-3 bg-secondary text-black rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl">
          Interior + Exterior Combo
        </button>
        <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
          Add Window Tinting
        </button>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default InteriorDetailing;