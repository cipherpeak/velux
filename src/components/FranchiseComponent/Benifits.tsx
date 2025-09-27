import React, { useState } from 'react'
import {
  Users,
  Shield,
  Zap,
  Globe,
  DollarSign,
  BarChart3,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

// Define types for the benefit data
interface Benefit {
  icon: React.ReactElement;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  features: string[];
  gradient: string;
}

const benefits: Benefit[] = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Team Access",
    description: "Access to 8-10+ experienced professionals per month through our network",
    detailedDescription: "Our network provides you with direct access to a team of seasoned automotive professionals. Get guidance on technical challenges, business strategies, and operational excellence from experts who have been in the industry for decades.",
    image: "https://lirp.cdn-website.com/443aa17f/dms3rep/multi/opt/car+detailing+the+works+auto+center-640w.jpg",
    features: ["Monthly expert consultations", "Technical support", "Business strategy sessions", "Operational guidance"],
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Brand Recognition",
    description: "Valuable and reputed brand with nationwide recognition and trust",
    detailedDescription: "Leverage our established brand reputation that customers already know and trust. Benefit from years of marketing investment and customer loyalty that gives you an immediate competitive advantage.",
    image: "https://lirp.cdn-website.com/443aa17f/dms3rep/multi/opt/car+detailing+the+works+auto+center-640w.jpg",
    features: ["Established customer trust", "National marketing campaigns", "Brand consistency", "Proven reputation"],
    gradient: "from-green-500 to-teal-600"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Technical Expertise",
    description: "Years of technical & practical experience to help understand business operations",
    detailedDescription: "Tap into our extensive technical knowledge base covering everything from equipment selection to advanced automotive techniques. We provide comprehensive training and ongoing support.",
    image: "https://lirp.cdn-website.com/443aa17f/dms3rep/multi/opt/car+detailing+the+works+auto+center-640w.jpg",
    features: ["Advanced training programs", "Equipment guidance", "Technical manuals", "Ongoing support"],
    gradient: "from-orange-500 to-red-600"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Marketing Support",
    description: "Comprehensive marketing and promotional support across all channels",
    detailedDescription: "Our marketing team works with you to create customized campaigns that drive local business. From digital marketing to traditional advertising, we've got you covered.",
    image: "https://lirp.cdn-website.com/443aa17f/dms3rep/multi/opt/car+detailing+the+works+auto+center-640w.jpg",
    features: ["Digital marketing", "Local advertising", "Social media management", "Promotional materials"],
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Low Investment",
    description: "No large investments needed for interiors or main staff access required",
    detailedDescription: "Start your business with minimal upfront investment. Our streamlined model eliminates unnecessary costs while maintaining quality standards and profitability.",
    image: "https://lirp.cdn-website.com/443aa17f/dms3rep/multi/opt/car+detailing+the+works+auto+center-640w.jpg",
    features: ["Minimal startup costs", "Cost-effective equipment", "Flexible staffing", "Quick ROI"],
    gradient: "from-emerald-500 to-cyan-600"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Proven Systems",
    description: "Understanding of equipment, materials, and vendor relationships for cost savings",
    detailedDescription: "Benefit from our established systems and processes that have been refined over years of operation. Save time and money with proven workflows and vendor partnerships.",
    image: "https://lirp.cdn-website.com/443aa17f/dms3rep/multi/opt/car+detailing+the+works+auto+center-640w.jpg",
    features: ["Established workflows", "Vendor discounts", "Quality control systems", "Performance tracking"],
    gradient: "from-amber-500 to-yellow-600"
  },
]

function Benefits() {
  const [selectedBenefit, setSelectedBenefit] = useState<Benefit | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const openModal = (benefit: Benefit, index: number): void => {
    setSelectedBenefit(benefit)
    setCurrentIndex(index)
  }

  const closeModal = (): void => {
    setSelectedBenefit(null)
  }

  const goToNext = (): void => {
    const nextIndex = (currentIndex + 1) % benefits.length
    setSelectedBenefit(benefits[nextIndex])
    setCurrentIndex(nextIndex)
  }

  const goToPrev = (): void => {
    const prevIndex = (currentIndex - 1 + benefits.length) % benefits.length
    setSelectedBenefit(benefits[prevIndex])
    setCurrentIndex(prevIndex)
  }

  return (
    <>
      <section className="py-20 px-4 relative overflow-hidden">

        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-secondary text-secondary px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              PARTNERSHIP BENEFITS
            </div>
            <h2 className="text-5xl font-bold mb-6 text-white">
              Benefits of Joining Our Network
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Comprehensive support and proven systems to help you build a successful automotive service business
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-transparent rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer"
                onClick={() => openModal(benefit, index)}
              >
                {/* Full Width Image Container */}
                <div 
                  className="relative h-80 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${benefit.image})` }}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/60 transition-all duration-300"></div>
                  
                  {/* Gradient Overlay */}
                  {/* <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-300`}></div> */}
                  
                  {/* Content - Hidden until hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/30">
                      <div className="text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {benefit.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-200 text-sm mb-4">
                      {benefit.description}
                    </p>
                    
                    {/* Click to View Button */}
                    <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300">
                      Click to View Details
                    </button>
                  </div>

                  {/* Number Badge - Always Visible */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/30">
                      <span className="text-sm font-bold text-white">0{index + 1}</span>
                    </div>
                  </div>

                  {/* Title - Always Visible at Bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white truncate">
                      {benefit.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-lg border border-secondary rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Get Started?</h3>
              <p className="text-gray-200 mb-6">Join hundreds of successful partners in our growing network</p>
              <button className="bg-secondary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedBenefit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Close Button - Increased z-index */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons - Increased z-index */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Modal Content - Lower z-index */}
            <div className="grid lg:grid-cols-2 h-full relative z-10">
              {/* Image Section */}
              <div 
                className="h-64 lg:h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedBenefit.image})` }}
              >
                <div className="absolute inset-0 bg-black/60 transition-all duration-300"></div>

                {/* <div className={`absolute inset-0 bg-gradient-to-br ${selectedBenefit.gradient} opacity-60`}></div> */}
                <div className="relative h-full flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                      {selectedBenefit.icon}
                    </div>
                    <h2 className="text-3xl font-bold mb-2">{selectedBenefit.title}</h2>
                    <p className="text-gray-200">{selectedBenefit.description}</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 overflow-y-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Detailed Overview</h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {selectedBenefit.detailedDescription}
                </p>

                <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                <ul className="space-y-3 mb-6">
                  {selectedBenefit.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-200">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-secondary text-black py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Learn More About This Benefit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Benefits