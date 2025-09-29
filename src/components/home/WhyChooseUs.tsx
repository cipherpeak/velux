import { useState } from "react"
import { Handshake, Award, Shield, Settings, Wrench, Users, Leaf, CreditCard } from "lucide-react"


interface Feature {
  title: string
  description: string
  icon: any
}

const leftSideFeatures: Feature[] = [
  {
    title: "Commitment:",
    description: "At The Detailing Mafia, we aim for 3 A's- Accessible, Affordable and advanced car care services.",
    icon: Handshake,
  },
  {
    title: "Quality:",
    description: "We provide premium car care services without compromising on quality.",
    icon: Award,
  },
  {
    title: "Trust:",
    description:
      "You can bet your Chevy on us! Not to brag, but we are the most trusted car detailing company in the Indian Market.",
    icon: Shield,
  },
  {
    title: "Services:",
    description:
      "We imbibe a customer-centric approach, and all our exclusive car care services make us stand apart from the league.",
    icon: Settings,
  },
]

const rightSideFeatures: Feature[] = [
  {
    title: "Equipment:",
    description: "We do have an extra edge whilst complying with the Industry's Standards.",
    icon: Wrench,
  },
  {
    title: "The Gang:",
    description: "Our team is completely trained and professional to the word.",
    icon: Users,
  },
  {
    title: "Sustainability:",
    description: "We use eco-friendly products. Keeping the environment in mind.",
    icon: Leaf,
  },
  {
    title: "Mafia Cards:",
    description: "Our value card programs are considered a temptation that can't be resisted.",
    icon: CreditCard,
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
      {/* Full-screen ModelViewer */}
      <div className="absolute inset-0 w-full h-full">

      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 max-w-full mx-auto p-4 sm:p-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16 py-6 sm:py-9">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="text-white font-family-sans">Why</span> <span className="text-secondary font-family-sans">Choose Us?</span>
          </h2>
          <p className="text-white text-sm sm:text-lg max-w-4xl mx-auto px-2">
            We're obsessed with perfection, leaving no nook or cranny untouched. Explore the reasons why you should
            trust expert car detailing services by us!
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Left Side Features */}
          <div 
            className={`w-full lg:w-2/5 space-y-6 sm:space-y-8 transition-all duration-300 ${
              hoverSide === "right" ? "lg:opacity-0 lg:scale-95 lg:-translate-x-8 pointer-events-none" : "lg:opacity-100"
            }`}
            onMouseEnter={() => handleMouseEnter("left")}
            onMouseLeave={handleMouseLeave}
          >
            {leftSideFeatures.map((feature, index) => {
              const Icon = feature.icon
              const isVisible = hoverSide === null || hoverSide === "left"
              
              return (
                <div
                  key={index}
                  className={`p-4 sm:p-6 bg-secondary text-black rounded-lg shadow-md transition-all duration-300 transform ${
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
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
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

          {/* Center Spacer for desktop */}
          <div className="w-full lg:w-1/5 flex justify-center">
            {/* Empty space for the 3D model to show through */}
          </div>

          {/* Right Side Features */}
          <div 
            className={`w-full lg:w-2/5 space-y-6 sm:space-y-8 transition-all duration-300 ${
              hoverSide === "left" ? "lg:opacity-0 lg:scale-95 lg:translate-x-8 pointer-events-none" : "lg:opacity-100"
            }`}
            onMouseEnter={() => handleMouseEnter("right")}
            onMouseLeave={handleMouseLeave}
          >
            {rightSideFeatures.map((feature, index) => { // Fixed: using rightSideFeatures
              const Icon = feature.icon
              const isVisible = hoverSide === null || hoverSide === "right"
              
              return (
                <div
                  key={index}
                  className={`p-4 sm:p-6 bg-secondary text-black rounded-lg shadow-md transition-all duration-300 transform ${
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
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
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
        </div>
      </div>
    </section>
  )
}