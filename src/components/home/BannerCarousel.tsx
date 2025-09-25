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

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 2000)

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
    <div
      className="relative w-full h-[400px] md:h-[500px] lg:h-[800px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {bannerSlides.map((slide) => (
          <div key={slide.id} className="relative w-full h-full flex-shrink-0">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />
              
              {/* Bottom Gradient Overlay */}
              {/* <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#021d49] via-[#021d49]/10 to-transparent" /> */}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center text-white px-4 sm:px-6 lg:px-8">
              <div className="max-w-full mx-auto w-full">
                <div className="animate-fade-in-up text-left">
                  <p className="text-sm md:text-base lg:text-lg font-medium text-secondary mb-2 md:mb-4">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mb-6 md:mb-8">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-secondary text-black font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors duration-300 w-fit transform hover:scale-105">
                      Get Started
                    </button>
                    <button className="border-2 border-white hover:bg-white hover:text-black text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors duration-300 w-fit transform hover:scale-105">
                      Learn More
                    </button>
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full transition-colors duration-300 z-20 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full transition-colors duration-300 z-20 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-secondary scale-125" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}