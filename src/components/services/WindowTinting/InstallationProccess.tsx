import banner1 from "../../../assets/servicePage/banner/servive banner.jpg"

const bannerSlides = [
  {
    id: 1,
    title: "CONTACT US",
    subtitle: "Get in Touch",
    description: "Get in touch with us for all your automotive detailing needs",
    image: banner1,
  }
]

function InstallationProcess() {
  return (
    <section className="relative py-20 min-h-[600px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerSlides[0].image})` }}
      />
      
      {/* Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      
      {/* Content */}
      <div className="relative bg-white/30 backdrop-blur-lg rounded-xl shadow-lg p-9  z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Installation Process
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Professional installation ensuring perfect results every time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Consultation',
              description: 'We assess your needs and recommend the best tinting option for your vehicle.'
            },
            {
              step: '02',
              title: 'Preparation',
              description: 'Thorough cleaning and preparation of windows for optimal film adhesion.'
            },
            {
              step: '03',
              title: 'Installation',
              description: 'Precise application using professional tools and techniques by certified technicians.'
            },
            {
              step: '04',
              title: 'Quality Check',
              description: 'Final inspection and quality assurance to ensure perfect results.'
            }
          ].map((step, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-secondary rounded-full text-2xl font-bold text-secondary mb-6 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                {step.title}
              </h3>
              <p className="text-black leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>  
  )
}

export default InstallationProcess