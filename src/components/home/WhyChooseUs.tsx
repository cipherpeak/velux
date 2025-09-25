import { useState, useEffect } from "react"
import { Handshake, Award, Shield, Settings, Wrench, Users, Leaf, CreditCard } from "lucide-react"
import acc12 from "../../assets/accessories/VE-LUX-Brand-Guidlines_2025_Prog-V1-(sept04).png"
import car from "../../assets/landingPage/car  png.png"

const leftSideFeatures = [
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

const rightSideFeatures = [
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
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Disable hover effects on mobile
  const handleMouseEnter = (side: "left" | "right") => {
    if (!isMobile) {
      setHoveredSide(side)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredSide(null)
    }
  }

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={acc12} 
          alt="Detailing Mafia Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-full mx-auto p-4 sm:p-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16 py-6 sm:py-9">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="text-white">Why</span> <span className="text-secondary">Choose Us?</span>
          </h2>
          <p className="text-white text-sm sm:text-lg max-w-4xl mx-auto px-2">
            We're obsessed with perfection, leaving no nook or cranny untouched. Explore the reasons why you should
            trust <span className="font-semibold">expert car detailing services</span> by us!
          </p>
        </div>

        {/* Main Content */}
        <div className="relative flex flex-col lg:grid lg:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Left Side Features - Mobile: above image, Desktop: left side */}
          <div className={`lg:block ${isMobile ? 'order-1' : ''}`}>
            <div
              className={`space-y-3 sm:space-y-4 lg:space-y-6 transition-all duration-300 ${
                !isMobile && hoveredSide === "right" ? "lg:opacity-0 lg:scale-95 lg:-translate-x-8 pointer-events-none absolute" : "lg:opacity-100"
              }`}
              onMouseEnter={() => handleMouseEnter("left")}
              onMouseLeave={handleMouseLeave}
            >
              {leftSideFeatures.map((feature, index) => {
                const Icon = feature.icon
                const isVisible = isMobile || hoveredSide === null || hoveredSide === "left"
                
                return (
                  <div
                    key={index}
                    className={`p-4 sm:p-6 bg-secondary text-black rounded-lg shadow-md transition-all duration-300 transform ${
                      isVisible
                        ? "opacity-100 translate-x-0 scale-100"
                        : "lg:opacity-0 lg:-translate-x-8 lg:scale-95 pointer-events-none"
                    } ${!isMobile ? 'hover:scale-105 hover:shadow-xl' : ''}`}
                    style={{
                      transitionDelay: isVisible ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 italic">{feature.title}</h3>
                        <p className="text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Center Car Image */}
          <div className={`relative flex justify-center items-center transition-all duration-300 ${
            isMobile ? 'order-2 my-4' : 
            hoveredSide === "left" ? "lg:col-span-2" : 
            hoveredSide === "right" ? "lg:col-span-2 lg:col-start-1" : 
            "lg:col-span-1"
          }`}>
            <div className="relative w-full max-w-md lg:max-w-full">
              <img
                src={car}
                alt="Premium car detailing"
                className={`w-full h-auto object-contain transition-all duration-300 ${
                  !isMobile && (hoveredSide === "left" || hoveredSide === "right") ? "lg:scale-110" : "scale-100"
                }`}
              />
            </div>
          </div>

          {/* Right Side Features - Mobile: below image, Desktop: right side */}
          <div className={`lg:block ${isMobile ? 'order-3' : ''}`}>
            <div
              className={`space-y-3 sm:space-y-4 lg:space-y-6 transition-all duration-300 ${
                !isMobile && hoveredSide === "left" ? "lg:opacity-0 lg:scale-95 lg:translate-x-8 pointer-events-none absolute" : "lg:opacity-100"
              }`}
              onMouseEnter={() => handleMouseEnter("right")}
              onMouseLeave={handleMouseLeave}
            >
              {rightSideFeatures.map((feature, index) => {
                const Icon = feature.icon
                const isVisible = isMobile || hoveredSide === null || hoveredSide === "right"
                
                return (
                  <div
                    key={index}
                    className={`p-4 sm:p-6 bg-secondary text-black rounded-lg shadow-md transition-all duration-300 transform ${
                      isVisible
                        ? "opacity-100 translate-x-0 scale-100"
                        : "lg:opacity-0 lg:translate-x-8 lg:scale-95 pointer-events-none"
                    } ${!isMobile ? 'hover:scale-105 hover:shadow-xl' : ''}`}
                    style={{
                      transitionDelay: isVisible ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 lg:hidden">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 italic">{feature.title}</h3>
                        <p className="text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                      </div>
                      <div className="flex-shrink-0 hidden lg:block">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}