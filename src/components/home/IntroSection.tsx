import { ArrowRight, Sparkles, Shield, Award, Star, Globe } from "lucide-react"
import luxuary from "../../assets/homepage/introsec/pexels-victoria-ouarets-3535985-5288719 (1) 1.png"
import { useState, useEffect, useRef } from "react"

type VisibilityState = {
  [key: string]: boolean;
}

export function IntroSection() {
  const [typingText, setTypingText] = useState("")
  const [typingIndex, setTypingIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [currentLine, setCurrentLine] = useState(0)
  const [isVisible, setIsVisible] = useState<VisibilityState>({})
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const headingLines = [
    "Quality Matters in",
    "Every Detail!"
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
          if (entry.isIntersecting && entry.target.id === "intro-section") {
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
      }, 50)
    } else {
      // Move to next line or stop
      if (currentLine < headingLines.length - 1) {
        setTimeout(() => {
          setCurrentLine(prev => prev + 1)
          setTypingIndex(0)
          setTypingText("")
        }, 300)
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
    <section ref={sectionRef} id="intro-section" className="relative overflow-hidden py-16 lg:py-24 bg-primary">
      <div className="container mx-auto px-4 relative z-10 font-family-secondary">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Car Image with Animation */}
          <div 
            id="intro-image"
            className={`relative order-2 lg:order-1 transition-all duration-1000 ${
              getVisibility("intro-image") 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={luxuary}
                    alt="White luxury sports car"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -bottom-4 z-50 -right-4 bg-secondary shadow-2xl rounded-2xl p-4 border-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-black" />
                  <span className="font-bold text-black text-sm">Premium Protection</span>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute z-50 -top-4 -left-4 bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-900 text-xs">Since 2015</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Header Section */}
            <div className="space-y-6">
              <div 
                id="intro-badge"
                className={`inline-flex items-center gap-2 bg-setext-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium border border-setext-secondary/30 transition-all duration-1000 ${
                  getVisibility("intro-badge") 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 -translate-x-20"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <Globe className="w-4 h-4" />
                Global Car Care Excellence
              </div>
              
              <h2 
                id="intro-heading"
                className={`text-4xl md:text-5xl font-family-sans lg:text-6xl font-bold leading-tight min-h-[3.5em] md:min-h-[2.5em] transition-all duration-1000 ${
                  getVisibility("intro-heading") 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 -translate-x-20"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <span className="block text-white mb-4">
                  {currentLine === 0 ? typingText : headingLines[0]}
                  {isTyping && currentLine === 0 && (
                    <span className="inline-block w-2 h-[1.2em] bg-secondary ml-1 animate-pulse align-middle" />
                  )}
                </span>
                <span className="block text-secondary mt-2">
                  {currentLine >= 1 ? typingText : ""}
                  {isTyping && currentLine === 1 && (
                    <span className="inline-block w-2 h-[1.2em] bg-white ml-1 animate-pulse align-middle" />
                  )}
                </span>
              </h2>
            </div>

            {/* Description */}
            <div 
              id="intro-description"
              className={`space-y-6 transition-all duration-1000 ${
                getVisibility("intro-description") 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-20"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-white text-lg leading-relaxed">
                Welcome to <span className="font-semibold text-secondary">Velux</span> - a subsidiary of Weinber Inc. NY, USA, 
                and your trusted partner in premium automotive care solutions since 2015. 
                We bring American manufacturing excellence to the Middle East and beyond.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-setext-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-white leading-relaxed">
                    Our formulas are second to none, developed in partnership with world leaders in car care manufacturing and technology.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-setext-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-white leading-relaxed">
                    We offer advanced protection solutions including <span className="font-semibold text-white">Nano Ceramic Coating</span>,{" "}
                    <span className="font-semibold text-white">Graphene Coating</span>, and{" "}
                    <span className="font-semibold text-white">Paint Protection Films</span> for ultimate vehicle protection.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div 
              id="intro-features"
              className={`grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 transition-all duration-1000 ${
                getVisibility("intro-features") 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-20"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex items-center gap-4 p-4 rounded-xl border border-secondary transition-all duration-300">
                <div className="w-12 h-12 bg-setext-secondary/20 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-white block">5-Year Protection</span>
                  <span className="text-white text-sm">Ceramic Coating</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-secondary transition-all duration-300">
                <div className="w-12 h-12 bg-setext-secondary/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-white block">Global Reach</span>
                  <span className="text-white text-sm">Middle East & Beyond</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div 
              id="intro-cta"
              className={`pt-6 transition-all duration-1000 ${
                getVisibility("intro-cta") 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-20"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <button className="group relative bg-secondary from-setext-black to-setext-secondary hover:from-setext-secondary hover:to-setext-secondary text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 overflow-hidden">
                <span className="relative z-10">Explore Our Products</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}