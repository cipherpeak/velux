import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import banner1 from "../../assets/homepage/banner/Firefly 20241207100622.png"
import banner2 from "../../assets/homepage/banner/Firefly 20250203110842.png"
import banner3 from "../../assets/homepage/banner/Firefly 20250203151358.jpg"

const bannerSlides = [
  {
    id: 1,
    title: "Premium Services",
    subtitle: "Experience Excellence",
    description: "Discover our comprehensive range of professional services designed to meet your needs.",
    image: banner1,
  },
  {
    id: 2,
    title: "Innovation & Quality",
    subtitle: "Leading the Industry",
    description: "We combine cutting-edge technology with proven expertise to deliver outstanding results.",
    image: banner2,
  },
  {
    id: 3,
    title: "Your Success Partner",
    subtitle: "Growing Together",
    description: "Partner with us for sustainable growth and exceptional business solutions.",
    image: banner3,
  },
]

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto slide effect
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
  }

  return (
    <div className="px-4 sm:px-6 lg:px-4 xl:px-6 py-12 md:py-8 lg:py-12">
      <div
        className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[825px] overflow-hidden rounded-3xl md:rounded-4xl lg:rounded-3xl shadow-2xl"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slides Container */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bannerSlides.map((slide, index) => (
            <div key={slide.id} className="relative w-full h-full flex-shrink-0">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Content Container with Safe Area */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem]">
                  <div className="max-w-2xl xl:max-w-3xl w-full bg-white/5 backdrop-blur-sm shadow-2xl border border-white/20 p-6 rounded-4xl">
                    <div className={`space-y-4 md:space-y-6 transition-all duration-500 ${
                      currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                      {/* Subtitle with accent line */}
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-0.5 bg-secondary rounded-full" />
                        <p className="text-sm md:text-base font-family-secondary lg:text-lg font-semibold text-secondary tracking-wider uppercase">
                          {slide.subtitle}
                        </p>
                      </div>
                      
                      {/* Main Title - Simple display without typing animation */}
                      <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight bg-white bg-clip-text text-transparent">
                        {slide.title}
                      </h1>
                      
                      {/* Description */}
                      <p className="text-lg md:text-xl font-family-secondary lg:text-2xl text-white leading-relaxed max-w-2xl font-light">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 md:left-6 hidden md:block top-1/2  -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 md:p-4 rounded-xl transition-all duration-300 z-20 backdrop-blur-md border border-white/10 hover:border-white/20 hover:scale-110 shadow-2xl"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 md:right-6 hidden md:block top-1/2  -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 md:p-4 rounded-xl transition-all duration-300 z-20 backdrop-blur-md border border-white/10 hover:border-white/20 hover:scale-110 shadow-2xl"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20 backdrop-blur-md bg-black/20 rounded-2xl p-3 border border-white/10">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 ${
                index === currentSlide 
                  ? "scale-125" 
                  : "hover:scale-110"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-secondary shadow-lg shadow-secondary/50" 
                  : "bg-white/50 hover:bg-white/75"
              }`} />
              {index === currentSlide && (
                <div className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-30" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}