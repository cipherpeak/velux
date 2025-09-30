import { useState } from "react"
import { Handshake, Award, Shield, Globe, Wrench, Users, Leaf, Clock } from "lucide-react"
import leftimg from "../../assets/homepage/Redtronic-car-01.png"
import rightimg from "../../assets/homepage/Redtronic-car-02.png"

interface Feature {
  title: string
  description: string
  icon: any
}

const leftSideFeatures: Feature[] = [
  {
    title: "Quality Commitment:",
    description: "At Velux, quality matters in every detail. We deliver premium automotive protection with American manufacturing excellence.",
    icon: Award,
  },
  {
    title: "Global Standards:",
    description: "As a subsidiary of Weinber Inc. NY, USA, we bring world-class technology and formulations to the Middle East market.",
    icon: Globe,
  },
  {
    title: "Trust & Experience:",
    description: "Established in 2015, we've earned the trust of customers across GCC, MENA, Asian & African markets with reliable protection solutions.",
    icon: Shield,
  },
  {
    title: "Advanced Technology:",
    description: "Our formulas are second to none, developed in partnership with world leaders in car care manufacturing and technology.",
    icon: Wrench,
  },
]

const rightSideFeatures: Feature[] = [
  {
    title: "Premium Protection:",
    description: "We offer advanced solutions like Nano Ceramic Coating, Graphene Coating, and Paint Protection Films for ultimate vehicle protection.",
    icon: Shield,
  },
  {
    title: "Expert Team:",
    description: "Our skilled professionals are trained in the latest application techniques to ensure perfect results every time.",
    icon: Users,
  },
  {
    title: "Long-lasting Results:",
    description: "Our coatings provide up to 5 years of protection with self-healing properties and superior durability.",
    icon: Clock,
  },
  {
    title: "Customer Partnership:",
    description: "We have passion for our customers and their requirements, delivering excellent experiences with every service.",
    icon: Handshake,
  },
]

export function WhyChooseUs() {
  const [hoverSide, setHoverSide] = useState<"left" | "right" | null>(null)

  const handleMouseEnter = (side: "left" | "right") => {
    setHoverSide(side)
  }

  const handleMouseLeave = () => {
    setHoverSide(null)
  }

  return (
    <section className="relative overflow-hidden bg-primary font-family-secondary">
      {/* Content overlay */}
      <div className="relative z-10 max-w-full mx-auto p-4 sm:p-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16 py-6 sm:py-9">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="text-white font-family-sans">Why</span> <span className="text-secondary font-family-sans">Choose Velux?</span>
          </h2>
          <p className="text-white text-sm sm:text-lg max-w-4xl mx-auto px-2">
            With American manufacturing excellence and cutting-edge technology, we deliver unmatched automotive protection solutions. 
            Discover why customers across multiple continents trust Velux for their vehicle care needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Left Side - Shows features or image */}
          <div 
            className="w-full lg:w-2/5"
            onMouseEnter={() => handleMouseEnter("left")}
            onMouseLeave={handleMouseLeave}
          >
            {hoverSide === "right" ? (
              // Show image when right side is hovered
              <div className="transition-all duration-300 opacity-100 scale-100">
                <img 
                  src={leftimg} 
                  alt="Left Car" 
                  className="w-full h-auto object-contain rounded-lg shadow-md"
                />
              </div>
            ) : (
              // Show features when not hovered or left side is hovered
              <div className={`space-y-6 sm:space-y-8 transition-all duration-300 ${
                hoverSide === "left" ? "opacity-100" : "opacity-100"
              }`}>
                {leftSideFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  const isVisible = hoverSide === null || hoverSide === "left"
                  
                  return (
                    <div
                      key={index}
                      className={`p-4 sm:p-6 bg-white/30 backdrop-blur-lg  text-white border border-secondary rounded-lg shadow-md transition-all duration-300 transform ${
                        isVisible
                          ? "opacity-100 translate-x-0 scale-100"
                          : "lg:opacity-0 lg:-translate-x-8 lg:scale-95 pointer-events-none"
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${index * 50}ms` : '0ms'
                      }}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-shrink-0">
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 ">{feature.title}</h3>
                          <p className="text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>



          {/* Right Side - Shows features or image */}
          <div 
            className="w-full lg:w-2/5"
            onMouseEnter={() => handleMouseEnter("right")}
            onMouseLeave={handleMouseLeave}
          >
            {hoverSide === "left" ? (
              // Show image when left side is hovered
              <div className="transition-all duration-300 opacity-100 scale-100">
                <img 
                  src={leftimg} 
                  alt="Right Car" 
                  className="w-full h-auto object-contain rounded-lg shadow-md"
                />
              </div>
            ) : (
              // Show features when not hovered or right side is hovered
              <div className={`space-y-6 sm:space-y-8 transition-all duration-300 ${
                hoverSide === "right" ? "opacity-100" : "opacity-100"
              }`}>
                {rightSideFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  const isVisible = hoverSide === null || hoverSide === "right"
                  
                  return (
                    <div
                      key={index}
                      className={`p-4 sm:p-6 bg-white/30 backdrop-blur-lg  text-white border border-secondary rounded-lg shadow-md transition-all duration-300 transform ${
                        isVisible
                          ? "opacity-100 translate-x-0 scale-100"
                          : "lg:opacity-0 lg:translate-x-8 lg:scale-95 pointer-events-none"
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${index * 50}ms` : '0ms'
                      }}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-shrink-0">
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 ">{feature.title}</h3>
                          <p className="text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}