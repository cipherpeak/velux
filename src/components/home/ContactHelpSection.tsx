import { useState, useEffect, useRef } from "react"
import backbg from "../../assets/homepage/pexels-pixabay-326259 1.png"

// Define the type for visibility state
type VisibilityState = {
  [key: string]: boolean;
}

export function ContactHelpSection() {
  const [typingText, setTypingText] = useState("")
  const [typingIndex, setTypingIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [currentLine, setCurrentLine] = useState(0)
  const [isVisible, setIsVisible] = useState<VisibilityState>({})
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const headingLines = [
    "Need Expert Advice on Vehicle Protection?",
    "We're Here to Guide You"
  ]

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
          
          // Start typing animation when section becomes visible
          if (entry.isIntersecting && entry.target.id === "contact-section") {
            setIsTyping(true)
            setTypingText("")
            setTypingIndex(0)
            setCurrentLine(0)
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe all elements with IDs within this section
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll("[id]")
      elements.forEach((el) => {
        observer.observe(el)
      })
      
      // Also observe the section itself
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Typing animation effect
  useEffect(() => {
    if (!isTyping) return

    // Add bounds checking
    if (currentLine >= headingLines.length) {
      setIsTyping(false)
      return
    }

    const currentLineText = headingLines[currentLine]
    
    // Add safety check
    if (!currentLineText) {
      setIsTyping(false)
      return
    }
    
    if (typingIndex < currentLineText.length) {
      typingTimeoutRef.current = setTimeout(() => {
        setTypingText(currentLineText.substring(0, typingIndex + 1))
        setTypingIndex(prev => prev + 1)
      }, 40) // Slightly faster typing speed
    } else {
      // Move to next line or stop
      if (currentLine < headingLines.length - 1) {
        setTimeout(() => {
          setCurrentLine(prev => prev + 1)
          setTypingIndex(0)
          setTypingText("")
        }, 200)
      } else {
        setIsTyping(false)
      }
    }

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
    }
  }, [typingIndex, isTyping, currentLine, headingLines])

  // Helper function to check visibility with fallback
  const getVisibility = (id: string): boolean => {
    return isVisible[id] || false
  }

  return (
    <section ref={sectionRef} id="contact-section" className="relative py-12 md:py-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={backbg} 
          alt="Velux Automotive Protection" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Content Container with Glass Effect */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Glass Morphism Card - Reduced Padding */}
          <div 
            id="contact-card"
            className={`bg-white/30 backdrop-blur-lg  text-white border border-secondary rounded-2xl p-6 md:p-8  shadow-2xl transition-all duration-1000 ${
              getVisibility("contact-card") 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-95"
            }`}
          >
            <div className="text-center">
              
              {/* Main Heading with Typing Animation */}
              <h2 
                id="contact-heading"
                className={`text-3xl md:text-4xl font-bold text-white mb-4 leading-tight min-h-[1.2em] transition-all duration-1000 delay-200 ${
                  getVisibility("contact-heading") 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                }`}
              >
                {currentLine === 0 ? (
                  <>
                    {typingText}
                    {isTyping && currentLine === 0 && (
                      <span className="inline-block w-2 h-[1.2em] bg-secondary ml-1 animate-pulse align-middle" />
                    )}
                  </>
                ) : (
                  "Need Expert Advice on Vehicle Protection?"
                )}
              </h2>

              {/* Subtext with Animation */}
              <div 
                id="contact-subtext"
                className={`mb-6 transition-all duration-1000 delay-400 ${
                  getVisibility("contact-subtext") 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                }`}
              >
                <p className="text-lg text-white mb-2 font-medium">
                  Quality matters in every detail of vehicle protection.
                </p>
                <p className="text-base text-white opacity-90">
                  Get professional guidance on ceramic coating, PPF, and graphene protection.
                </p>
              </div>

              {/* Contact Information - Animated Items */}
              <div 
                id="contact-info"
                className={`space-y-6 mb-6 transition-all duration-1000 delay-600 ${
                  getVisibility("contact-info") 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Phone Number */}
                <div 
                  id="phone-contact"
                  className={`text-center transition-all duration-700 delay-700 ${
                    getVisibility("phone-contact") 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-90"
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12  rounded-full mb-3 border border-secondary">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-white mb-1">
                    Call Us: <span className="text-secondary bg-gradient-to-r from-secondary to-yellow-300 bg-clip-text ">+971 4 33 99 550</span>
                  </p>
                  <p className="text-white text-sm opacity-90">Professional consultation available</p>
                </div>

                {/* Email */}
                <div 
                  id="email-contact"
                  className={`text-center transition-all duration-700 delay-900 ${
                    getVisibility("email-contact") 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-90"
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12  rounded-full mb-3 border border-secondary">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-base text-white opacity-90">
                    Email us -{" "}
                    <a
                      href="mailto:info@redtronicllc.com"
                      className="text-secondary hover:text-yellow-300 transition-colors duration-300 font-medium underline underline-offset-4"
                    >
                      info@redtronicllc.com
                    </a>
                  </p>
                </div>

                {/* Location */}
                <div 
                  id="location-info"
                  className={`text-center transition-all duration-700 delay-1000 ${
                    getVisibility("location-info") 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-90"
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12  rounded-full mb-3 border border-secondary">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-base text-white opacity-90">
                    Based in Dubai, UAE - Serving GCC, MENA, Asia & Africa
                  </p>
                </div>
              </div>

              {/* Call to Action Button - Animated */}
              <div 
                id="contact-cta"
                className={`mt-6 transition-all duration-1000 delay-1100 ${
                  getVisibility("contact-cta") 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                }`}
              >
                <button className="bg-secondary  text-black font-bold py-3 px-8 rounded-xl text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-secondary/25 border-2 border-transparent hover:border-secondary/30">
                  Get Professional Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reduced Decorative Elements */}
      <div 
        className={`absolute top-0 left-0 w-20 h-20 bg-secondary/10 rounded-full blur-lg transition-all duration-1500 delay-1200 ${
          getVisibility("contact-section") 
            ? "opacity-100 scale-100" 
            : "opacity-0 scale-50"
        }`}
      ></div>
      <div 
        className={`absolute bottom-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-xl transition-all duration-1500 delay-1400 ${
          getVisibility("contact-section") 
            ? "opacity-100 scale-100" 
            : "opacity-0 scale-50"
        }`}
      ></div>
    </section>
  )
}