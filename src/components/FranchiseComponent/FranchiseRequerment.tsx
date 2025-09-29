import {
  TrendingUp,
  Award,
  Target,
  Users,
  BarChart3,
  MapPin
} from "lucide-react"

const partnerTypes = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Experienced Partner",
    description: "Individuals with extensive experience in automotive care & service industry",
    features: ["5+ years industry experience", "Management background", "Technical knowledge"],
    color: "white"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "New Entrepreneur",
    description: "Young entrepreneurs and professionals with passion for automotive & business growth",
    features: ["Business acumen", "Growth mindset", "Learning attitude"],
    color: "white"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Strategic Partner",
    description: "Partners with large local market network and ability to develop multiple locations",
    features: ["Local network", "Multi-location capability", "Investment capacity"],
    color: "white"
  },
]

function FranchiseRequerment() {
  return (
    <section 
      className="py-20 px-4 relative"
      style={{
        backgroundImage: `url("https://lirp.cdn-website.com/443aa17f/dms3rep/multi/opt/car+detailing+the+works+auto+center-640w.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/80"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-secondary text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Partnership Criteria
          </div>
          <h2 className="text-5xl font-bold mb-6 text-white">
            Ideal Partner Profile
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            We seek visionary individuals who combine business expertise with a passion for 
             automotive innovation and community growth
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {partnerTypes.map((partner, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="relative bg-white/30 backdrop-blur-lg rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-secondary">
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl border-secondary border bg-secondary mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-black">
                    {partner.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white  transition-colors">
                  {partner.title}
                </h3>
                <p className="text-white mb-6 leading-relaxed">
                  {partner.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {partner.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-white">
                      <div className={`w-2 h-2 rounded-full bg-secondary`} />
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 bg-white/30 backdrop-blur-lg border border-secondary rounded-xl shadow-lg p-8 ">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-xl mb-4">
              <BarChart3 className="w-6 h-6 text-black" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">₹25L - ₹50L</div>
            <div className="text-white">Investment Range</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-xl mb-4">
              <Target className="w-6 h-6 text-black" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12-18 Months</div>
            <div className="text-white">ROI Period</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-xl mb-4">
              <MapPin className="w-6 h-6 text-black" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1500+ sq.ft.</div>
            <div className="text-white">Space Requirement</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-white mb-6">
            Ready to start your journey as an automotive industry leader?
          </p>
          <button className="bg-secondary text-black px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            Schedule a Discovery Call
          </button>
        </div>
      </div>
    </section>
  )
}

export default FranchiseRequerment