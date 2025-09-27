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
  const typingTimeoutRef = useRef<NodeJS.Timeout>()
  const sectionRef = useRef<HTMLElement>(null)

  const headingLines = [
    "Do You Need Help In Choosing a Service?",
    "We're Here to Help"
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
          alt="Detailing Mafia Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      </div>

      {/* Content Container with Glass Effect */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Glass Morphism Card - Reduced Padding */}
          <div 
            id="contact-card"
            className={`bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-700/50 shadow-2xl transition-all duration-1000 ${
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
                      <span className="inline-block w-2 h-[1.2em] bg-[#f4c55c] ml-1 animate-pulse align-middle" />
                    )}
                  </>
                ) : (
                  "Do You Need Help In Choosing a Service?"
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
                <p className="text-lg text-gray-200 mb-2 font-medium">
                  The Mafia always stays true to its words.
                </p>
                <p className="text-base text-gray-300 opacity-90">
                  For any queries and assistance.
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
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-700/50 rounded-full mb-3 border border-gray-600/30">
                    <svg className="w-6 h-6 text-[#f4c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-white mb-1">
                    Call Us at: <span className="text-[#f4c55c] bg-gradient-to-r from-[#f4c55c] to-[#f8d78b] bg-clip-text text-transparent">80-100-44000</span>
                  </p>
                  <p className="text-gray-300 text-sm opacity-90">9AM - 6PM assistance</p>
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
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-700/50 rounded-full mb-3 border border-gray-600/30">
                    <svg className="w-6 h-6 text-[#f4c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-base text-gray-300 opacity-90">
                    Mail us -{" "}
                    <a
                      href="mailto:info@thedetailingmafia.com"
                      className="text-[#f4c55c] hover:text-[#f8d78b] transition-colors duration-300 font-medium underline underline-offset-4"
                    >
                      info@thedetailingmafia.com
                    </a>
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
                <button className="bg-gradient-to-r from-[#f4c55c] to-[#f8d78b] text-black font-bold py-3 px-8 rounded-xl text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#f4c55c]/25 border-2 border-transparent hover:border-[#f4c55c]/30">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reduced Decorative Elements */}
      <div 
        className={`absolute top-0 left-0 w-20 h-20 bg-[#f4c55c]/10 rounded-full blur-lg transition-all duration-1500 delay-1200 ${
          getVisibility("contact-section") 
            ? "opacity-100 scale-100" 
            : "opacity-0 scale-50"
        }`}
      ></div>
      <div 
        className={`absolute bottom-0 right-0 w-24 h-24 bg-[#f4c55c]/5 rounded-full blur-xl transition-all duration-1500 delay-1400 ${
          getVisibility("contact-section") 
            ? "opacity-100 scale-100" 
            : "opacity-0 scale-50"
        }`}
      ></div>
    </section>
  )
}