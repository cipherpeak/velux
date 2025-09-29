
import PackageBanner from "../../components/PackageComponents/PackageBanner"
import PackagesPlan from "../../components/PackageComponents/PackagesPlan"

const Packages = () => {



  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
     <PackageBanner/>

      {/* Packages Grid */}
<PackagesPlan/>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Vehicle?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your detailing appointment today and experience the difference professional care makes
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105">
              Schedule Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300">
              Get Custom Quote
            </button>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Packages
