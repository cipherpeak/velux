import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react"
import logo from "../../assets/logo/VE LUX LOGO 2.png";
import { useState, useEffect, useRef } from "react"

// Define the type for visibility state
type VisibilityState = {
  [key: string]: boolean;
}

export function Footer() {
  const [isVisible, setIsVisible] = useState<VisibilityState>({})
  const sectionRef = useRef<HTMLElement>(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll("[id]")
      elements.forEach((el) => {
        observer.observe(el)
      })
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Helper function to check visibility
  const getVisibility = (id: string): boolean => {
    return isVisible[id] || false
  }

  const services = [
    "Paint Protection Film",
    "Ceramic Coating", 
    "Valeting & Detailing",
    "Window Films",
    "Vehicle Storage",
    "Studio & Photography",
    "Price My Car"
  ]

  return (
    <footer ref={sectionRef} className="text-white relative overflow-hidden bg-primary">

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section - Left Aligned */}
          <div 
            id="footer-brand"
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              getVisibility("footer-brand") 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="VE LUX Logo"
                className="h-16 w-auto object-contain filter brightness-0 invert"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 text-lg italic leading-relaxed font-light max-w-xs">
                "Paying Attention to Every Detail."
              </p>
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center justify-start space-x-2 bg-[#f4c55c]/10 px-4 py-2 rounded-full border border-[#f4c55c]/20 w-fit">
                  <span className="text-[#f4c55c] text-sm font-semibold">#ABOVEANDBEYOND</span>
                </div>
                <div className="inline-flex items-center justify-start space-x-2 bg-[#f4c55c]/10 px-4 py-2 rounded-full border border-[#f4c55c]/20 w-fit">
                  <span className="text-[#f4c55c] text-sm font-semibold">#THEPRESPECIALISTS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section - Proper Alignment */}
          <div 
            id="footer-services"
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              getVisibility("footer-services") 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-[#f4c55c] text-xl font-bold relative inline-block pb-2">
              SERVICES
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#f4c55c] to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="group flex items-center space-x-3 text-white hover:text-[#f4c55c] transition-all duration-300 text-base py-1"
                  >
                    <ArrowRight className="w-3 h-3 text-[#f4c55c] transform group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform text-left leading-relaxed">
                      {service}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information - Better Alignment */}
          <div 
            id="footer-contact"
            className={`space-y-6 transition-all duration-1000 delay-600 ${
              getVisibility("footer-contact") 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-[#f4c55c] text-xl font-bold relative inline-block pb-2">
              CONTACT US
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#f4c55c] to-transparent"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                <div className="w-10 h-10 bg-[#f4c55c]/10 rounded-full flex items-center justify-center group-hover:bg-[#f4c55c]/20 transition-colors flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#f4c55c]" />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-300 text-sm leading-tight">+971 433 888 04</p>
                  <p className="text-gray-300 text-sm leading-tight">+971 56 5788 333</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                <div className="w-10 h-10 bg-[#f4c55c]/10 rounded-full flex items-center justify-center group-hover:bg-[#f4c55c]/20 transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#f4c55c]" />
                </div>
                <span className="text-gray-300 text-sm break-words min-w-0">info@velux.ae</span>
              </div>
              
              <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                <div className="w-10 h-10 bg-[#f4c55c]/10 rounded-full flex items-center justify-center group-hover:bg-[#f4c55c]/20 transition-colors flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#f4c55c]" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed break-words">
                  42 6th St - Al Quoz - Dubai - UAE
                </span>
              </div>
              
              <div className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                <div className="w-10 h-10 bg-[#f4c55c]/10 rounded-full flex items-center justify-center group-hover:bg-[#f4c55c]/20 transition-colors flex-shrink-0">
                  <Clock className="w-4 h-4 text-[#f4c55c]" />
                </div>
                <span className="text-gray-300 text-sm">9:00 AM to 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section - Added for better grid balance */}
          <div 
            id="footer-links"
            className={`space-y-6 transition-all duration-1000 delay-800 ${
              getVisibility("footer-links") 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-[#f4c55c] text-xl font-bold relative inline-block pb-2">
              QUICK LINKS
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#f4c55c] to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Services", 
                "Gallery",
                "Testimonials",
                "Blog",
                "Careers",
                "Contact"
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="group flex items-center space-x-3 text-white hover:text-[#f4c55c] transition-all duration-300 text-base py-1"
                  >
                    <ArrowRight className="w-3 h-3 text-[#f4c55c] transform group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform text-left leading-relaxed">
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Improved Alignment */}
      <div className="relative z-10 border-t border-white/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
            
            {/* Social Media Icons - Centered on mobile */}
            <div 
              id="footer-social"
              className={`flex items-center justify-center lg:justify-start space-x-5 transition-all duration-1000 delay-1000 ${
                getVisibility("footer-social") 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
            >
              <a href="#" className="group w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:border-[#f4c55c] hover:bg-[#f4c55c]/10 transition-all duration-300">
                <Facebook className="w-5 h-5 text-white group-hover:text-[#f4c55c] transition-colors" />
              </a>
              <a href="#" className="group w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:border-[#f4c55c] hover:bg-[#f4c55c]/10 transition-all duration-300">
                <Instagram className="w-5 h-5 text-white group-hover:text-[#f4c55c] transition-colors" />
              </a>
              <a href="#" className="group w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:border-[#f4c55c] hover:bg-[#f4c55c]/10 transition-all duration-300">
                <Youtube className="w-5 h-5 text-white group-hover:text-[#f4c55c] transition-colors" />
              </a>
            </div>

            {/* Legal Links - Centered */}
            <div 
              id="footer-legal"
              className={`flex items-center justify-center flex-wrap gap-6 lg:gap-8 transition-all duration-1000 delay-1200 ${
                getVisibility("footer-legal") 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
            >
              <a href="#" className="text-gray-300 hover:text-[#f4c55c] transition-colors duration-300 text-sm font-medium relative group whitespace-nowrap">
                Terms and Conditions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f4c55c] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f4c55c] transition-colors duration-300 text-sm font-medium relative group whitespace-nowrap">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f4c55c] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* Copyright - Right aligned on desktop */}
            <div 
              id="footer-copyright"
              className={`text-gray-300 text-sm font-medium bg-white/5 px-6 py-3 rounded-full border border-white/10 transition-all duration-1000 delay-1400 ${
                getVisibility("footer-copyright") 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
            >
              © VELUX Car Care | 2024
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}