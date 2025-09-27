import { useState, useEffect, useRef } from "react"
import { CompareDemo } from './CompareDemo'

type VisibilityState = {
  [key: string]: boolean;
}

function ServiceIntro() {
  const [isVisible, setIsVisible] = useState<VisibilityState>({})
  const [typingText, setTypingText] = useState("")
  const [typingIndex, setTypingIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const typingTimeoutRef = useRef<NodeJS.Timeout>()
  const sectionRef = useRef<HTMLDivElement>(null)

  const headingText = "Professional Film Wrapping Services"

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
          
          // Start typing animation when heading becomes visible
          if (entry.isIntersecting && entry.target.id === "service-heading") {
            setIsTyping(true)
            setTypingText("")
            setTypingIndex(0)
          }
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

  // Typing animation effect
  useEffect(() => {
    if (!isTyping) return

    if (typingIndex < headingText.length) {
      typingTimeoutRef.current = setTimeout(() => {
        setTypingText(headingText.substring(0, typingIndex + 1))
        setTypingIndex(prev => prev + 1)
      }, 50)
    } else {
      setIsTyping(false)
    }

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
    }
  }, [typingIndex, isTyping, headingText])

  const getVisibility = (id: string): boolean => {
    return isVisible[id] || false
  }

  return (
    <div 
      ref={sectionRef}
      className='w-full min-h-full bg-primary py-16 px-4 sm:px-6 lg:px-8'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          
          {/* Left Section - Intro Content */}
          <div className='space-y-8'>
            {/* Badge */}
            <div 
              id="service-badge"
              className={`inline-flex items-center px-4 py-2 rounded-full bg-white border border-secondary transition-all duration-1000 ${
                getVisibility("service-badge") 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <span className='w-2 h-2 bg-secondary rounded-full mr-2'></span>
              <span className='text-secondary font-medium text-sm'>Premium Service</span>
            </div>

            {/* Heading with typing animation */}
            <h1 
              id="service-heading"
              className={`text-4xl lg:text-5xl font-bold text-white leading-tight transition-all duration-1000 ${
                getVisibility("service-heading") 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-20"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              {typingText}
              {isTyping && (
                <span className="inline-block w-2 h-[1.2em] bg-secondary ml-1 animate-pulse align-middle" />
              )}
              {!isTyping && getVisibility("service-heading") && (
                <>
                  Professional Film 
                  <span className='text-secondary'> Wrapping </span> 
                  Services
                </>
              )}
            </h1>

            {/* Rest of the content remains the same as first version */}
            <div 
              id="service-description"
              className={`space-y-4 text-lg text-white leading-relaxed transition-all duration-1000 ${
                getVisibility("service-description") 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-20"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p>
                Transform your vehicle with our premium film wrapping services. 
                We use only the highest quality materials and cutting-edge techniques 
                to ensure a flawless finish that protects and enhances your vehicle's appearance.
              </p>
              <p>
                Whether you're looking for a complete color change, custom designs, 
                or protective coating, our expert team delivers exceptional results 
                that exceed expectations.
              </p>
            </div>

            <div 
              id="service-features"
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-1000 ${
                getVisibility("service-features") 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-20"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              {[
                '5+ Years Warranty',
                'Premium Quality Materials',
                'Expert Installation',
                'Quick Turnaround'
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-3 transition-all duration-500 ${
                    getVisibility("service-features") 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${400 + (index * 100)}ms` }}
                >
                  <div className='flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center'>
                    <svg className='w-3 h-3 text-black' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <span className='text-white font-medium'>{feature}</span>
                </div>
              ))}
            </div>

            <div 
              id="service-cta"
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 ${
                getVisibility("service-cta") 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-20"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <button className='bg-secondary text-black px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg'>
                Get Free Quote
              </button>
              <button className='border-2 border-secondary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-secondary hover:text-black'>
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right Section - Compare Demo */}
          <div 
            id="service-demo"
            className={`relative transition-all duration-1000 ${
              getVisibility("service-demo") 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-20"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className='sticky top-24'>
              <CompareDemo />
              
              <div 
                className={`absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-xl transition-all duration-1000 ${
                  getVisibility("service-demo") 
                    ? "opacity-50 scale-100" 
                    : "opacity-0 scale-50"
                }`}
                style={{ transitionDelay: "800ms" }}
              ></div>
              <div 
                className={`absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-xl transition-all duration-1000 ${
                  getVisibility("service-demo") 
                    ? "opacity-50 scale-100" 
                    : "opacity-0 scale-50"
                }`}
                style={{ transitionDelay: "900ms" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceIntro