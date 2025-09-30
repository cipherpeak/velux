import { useState, useEffect, useRef } from "react"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import first from "../../assets/homepage/pexels-ammy-k-106103999-9552475 1.png"

const testimonials = [
  {
    id: 1,
    text: "The ceramic coating from Velux has protected my car for over 3 years now. The hydrophobic properties are still as strong as day one. Amazing quality!",
    name: "Ahmed Al Mansouri",
    avatar: "/professional-man-with-red-cap.jpg",
    rating: 5,
  },
  {
    id: 2,
    text: "Professional service and exceptional results! The paint protection film installation was flawless. My luxury car looks showroom-new even after 2 years of daily use.",
    name: "Sarah Johnson",
    avatar: "/professional-woman-smiling.png",
    rating: 5,
  },
  {
    id: 3,
    text: "As a car dealership, we trust Velux for all our premium vehicle protection needs. Their graphene coating provides the ultimate shine and protection for our clients.",
    name: "Mohammed Hassan",
    avatar: "/businessman-with-glasses.jpg",
    rating: 5,
  },
  {
    id: 4,
    text: "The nano ceramic coating exceeded my expectations. The self-cleaning feature saves me so much time on maintenance. Worth every dirham for the 5-year protection.",
    name: "Fatima Al Rais",
    avatar: "/professional-woman-short-hair.png",
    rating: 5,
  },
  {
    id: 5,
    text: "Outstanding workmanship! The window tinting combined with paint protection has kept my car cool and protected in the Dubai heat. Professional team and premium products.",
    name: "David Chen",
    avatar: "/professional-bearded-man.png",
    rating: 5,
  },
]

// Define the type for visibility state
type VisibilityState = {
  [key: string]: boolean;
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [typingText, setTypingText] = useState("")
  const [typingIndex, setTypingIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [currentLine, setCurrentLine] = useState(0)
  const [isVisible, setIsVisible] = useState<VisibilityState>({})
    const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const headingLines = [
    "Client Experiences",
    "Trusted Across Continents"
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
          if (entry.isIntersecting && entry.target.id === "testimonials-section") {
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

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Helper function to check visibility with fallback
  const getVisibility = (id: string): boolean => {
    return isVisible[id] || false
  }

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "fill-secondary text-secondary" : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <section ref={sectionRef} id="testimonials-section" className="py-16 lg:py-24 relative overflow-hidden bg-primary font-family-secondary">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/15 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/15 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Typing Animation */}
        <div 
          id="testimonials-header"
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
            getVisibility("testimonials-header") 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-family-sans font-bold mb-4 min-h-[1.2em]">
            {currentLine === 0 ? (
              <>
                <span className="text-secondary">
                  {typingText.substring(0, 7)}
                  {isTyping && currentLine === 0 && typingText.length < 7 && (
                    <span className="inline-block w-2 h-[1.2em] bg-secondary ml-1 animate-pulse align-middle" />
                  )}
                </span>
                <span className="text-white">
                  {typingText.length > 7 ? typingText.substring(7) : ""}
                  {isTyping && currentLine === 0 && typingText.length >= 7 && (
                    <span className="inline-block w-2 h-[1.2em] bg-white ml-1 animate-pulse align-middle" />
                  )}
                </span>
              </>
            ) : (
              <>
                <span className="text-secondary">Client</span>{" "}
                <span className="text-white">Experiences</span>
              </>
            )}
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Discover why customers across GCC, MENA, Asia, and Africa trust Velux for premium automotive protection solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Testimonial Content */}
          <div 
            id="testimonials-content"
            className={`relative transition-all duration-1000 delay-300 ${
              getVisibility("testimonials-content") 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-100 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-black">
                <Quote className="w-16 h-16" />
              </div>
              
              {/* Decorative Border */}
              <div className="absolute left-0 top-0 h-full w-2 bg-secondary" />
              
              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="mb-6">
                  <StarRating rating={testimonials[currentIndex].rating} />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-8 font-light italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-secondary p-0.5">
                      <img
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full rounded-full object-cover border-2 border-white"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 text-sm">Satisfied Client</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Carousel Indicators */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-secondary scale-125" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  className="p-3 rounded-full bg-white shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextTestimonial}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  className="p-3 rounded-full bg-secondary shadow-lg border border-secondary transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Section */}
          <div 
            id="testimonials-visual"
            className={`relative transition-all duration-1000 delay-500 ${
              getVisibility("testimonials-visual") 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={first} 
                alt="Velux Protected Cars"
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-black/60" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <Quote className="w-12 h-12 text-white mb-4 mx-auto" />
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    Trusted in{" "}
                    <span className="text-secondary">20+</span>
                  </h3>
                  <p className="text-white/90 text-lg">Countries Worldwide</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">4.9/5</div>
                      <div className="text-white/80 text-sm">Average Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">1000+</div>
                      <div className="text-white/80 text-sm">Cars Protected</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">99%</div>
                      <div className="text-white/80 text-sm">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Indicators */}
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-secondary scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}