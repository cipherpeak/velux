"use client"

import { useState, useEffect, useRef } from "react"
import first from "../../assets/services/car-window-shield-060220210503.jpg"
import second from "../../assets/services/person-working-car-wrapping.jpg"
import third from "../../assets/services/beautiful-car-interior-clean-up-service 1.png"
import four from "../../assets/services/bee 1.png"
import five from "../../assets/services/graphene bottle 2 1.png"
import acc1 from "../../assets/accessories/VE-LUX-Brand-Guidlines_2025_Prog-V1-(sept04)2.png"
import { Link } from "react-router-dom"

const services = [
  {
    image: "https://lirp.cdn-website.com/443aa17f/dms3rep/multi/opt/car+detailing+the+works+auto+center-640w.jpg",
    title: "Exterior Detailing",
    description: "Complete exterior wash, wax, and protection for your vehicle's paint and finish.",
    features: ["Paint correction", "Ceramic coating", "Chrome polishing"],
  },
  {
    image: first,
    title: "Interior Detailing",
    description: "Deep cleaning and conditioning of all interior surfaces, seats, and carpets.",
    features: ["Leather conditioning", "Steam cleaning", "Odor elimination"],
  },
  {
    image: second,
    title: "Paint Protection",
    description: "Advanced paint protection films and ceramic coatings for long-lasting shine.",
    features: ["PPF installation", "Ceramic coating", "Paint sealant"],
  },
  {
    image: four,
    title: "Premium Wash",
    description: "Hand wash service with premium products and attention to every detail.",
    features: ["Hand washing", "Wheel cleaning", "Tire shine"],
  },
  {
    image: third,
    title: "Express Service",
    description: "Quick and efficient detailing service for busy schedules without compromising quality.",
    features: ["Quick wash", "Interior vacuum", "Window cleaning"],
  },
  {
    image: five,
    title: "VIP Package",
    description: "Our most comprehensive service combining all premium treatments.",
    features: ["Full detailing", "Protection coating", "Monthly maintenance"],
  },
]

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 w-full h-full">
        {/* <img 
          src={acc1} 
          alt="Detailing Mafia Background" 
          className="w-46 h-full object-cover"
        /> */}
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/10 "></div> */}
      </div>

      {/* Animated marquee */}
      <div className="relative w-full overflow-hidden bg-secondary py-5"
      
      >
        <div className="flex whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center animate-marquee justify-between">
              <span className="text-xl md:text-xl font-black text-black mx-8 tracking-wider uppercase">
                PAINT PROTECTION FILM WRAPPING
              </span>
              <span className="text-xl md:text-xl font-black text-black mx-8 tracking-wider uppercase">
                PREMIUM 
NANOCERAMIC COATING
              </span>
              <span className="text-xl md:text-xl font-black text-black mx-8 tracking-wider uppercase">
                PREMIUM GRAPHENE
COATING
              </span>
              <span className="text-xl md:text-xl font-black text-black mx-8 tracking-wider uppercase">
                WINDOW TINTING
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-secondary text-sm font-semibold tracking-widest uppercase border border-secondary px-4 py-2 rounded-full">
                Our Services
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance relative">
              SIGNATURE SERVICES
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary rounded-full"></div>
            </h2>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 text-white">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium">Expert Technicians</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
    >
      <div
        className="perspective-1000 h-80 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Card Container */}
        <div
          className={`relative w-full h-full transform-3d transition-transform duration-700 ease-in-out ${
            isHovered ? "rotate-y-180" : ""
          }`}
        >
          {/* Front Side */}
          <div className="absolute inset-0 w-full h-full backface-hidden">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white text-center">
                  {service.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Back Side - Visible on hover */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-black rounded-lg border-2 border-secondary p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              {service.title}
            </h3>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <ul className="text-gray-400 text-sm mb-6">
              {service.features.map((feature, i) => (
                <li key={i} className="mb-1">• {feature}</li>
              ))}
            </ul>
            <Link to="/film-wrapping">
              <button className="bg-secondary text-black font-bold py-2 px-6 rounded-full transition-colors duration-300 transform hover:scale-105">
                View More ›
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}