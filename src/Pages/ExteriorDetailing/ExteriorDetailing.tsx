import {Car, Phone} from 'lucide-react';
import ExeteriorBanner from '../../components/ExeteriorDetailing/ExeteriorBanner';
import ExeteriorService from '../../components/ExeteriorDetailing/ExeteriorService';
import ExeteriorBenifits from '../../components/ExeteriorDetailing/ExeteriorBenifits';

const ExteriorDetailing = () => {
  const services = [
    'Complete exterior hand wash',
    'Clay bar paint decontamination',
    'Paint correction and polishing',
    'Ceramic coating application',
    'Wheel and tire cleaning',
    'Chrome and trim restoration',
    'Headlight restoration',
    'Paint protection film options'
  ];


  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section with Green Theme */}
<ExeteriorBanner/>

      {/* Services Section */}
      <ExeteriorService
        title="Complete Exterior Restoration"
        description="Our exterior detailing services are designed to restore, enhance, and protect your vehicle's paintwork. Using premium products and proven techniques, we deliver results that exceed expectations."
        features={services}
      />


      {/* Benefits Section */}
      <ExeteriorBenifits/>

      {/* CTA Section */}
<section className="py-20 relative overflow-hidden bg-gradient-to-br from-emerald-900/10 to-green-900/5">
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="p-12 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Transform Your Vehicle Today
      </h2>
      <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
        Experience the difference professional exterior detailing makes. Book your appointment today.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" />
          Call for Quote
        </button>
        <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
          <Car className="w-5 h-5" />
          Schedule Service
        </button>
      </div>
    </div>

    {/* Free Consultation Card - Positioned below with proper spacing */}
    <div className="mt-8 p-8 rounded-3xl bg-secondary/19 backdrop-blur-sm border border-emerald-400/20 shadow-xl text-white">
      <h3 className="text-2xl font-bold text-white mb-4">
        Free Consultations Available
      </h3>
      <p className="text-white/80 mb-6 max-w-2xl mx-auto">
        Not sure which service is right for you? We offer free consultations to help you choose the perfect treatment for your vehicle.
      </p>
      <button className="px-8 py-4 bg-secondary text-black rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl">
        Request Free Consultation
      </button>
    </div>
  </div>
</section>

    </div>
  );
};

export default ExteriorDetailing;