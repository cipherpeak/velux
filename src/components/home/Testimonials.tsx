import { useState, useEffect } from "react"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import first from "../../assets/homepage/pexels-ammy-k-106103999-9552475 1.png"

const testimonials = [
  {
    id: 1,
    text: "Good detailing but 750 rupees is expensive and not sustainable for every week wash. Looking for a good 250 to 300 rupees good car wash centres",
    name: "Mahesh Jangra",
    avatar: "/professional-man-with-red-cap.jpg",
    rating: 4,
  },
  {
    id: 2,
    text: "Excellent service! The team at Detailing Mafia transformed my car completely. Worth every penny and the attention to detail is incredible.",
    name: "Priya Sharma",
    avatar: "/professional-woman-smiling.png",
    rating: 5,
  },
  {
    id: 3,
    text: "Best car detailing service in the city. Professional staff, quality products, and amazing results. My car looks brand new every time!",
    name: "Rajesh Kumar",
    avatar: "/businessman-with-glasses.jpg",
    rating: 5,
  },
  {
    id: 4,
    text: "Outstanding work! The ceramic coating service exceeded my expectations. Highly recommend Detailing Mafia for premium car care.",
    name: "Anita Patel",
    avatar: "/professional-woman-short-hair.png",
    rating: 5,
  },
  {
    id: 5,
    text: "Amazing experience! The team is professional, punctual, and delivers exceptional results. My luxury car is in safe hands with them.",
    name: "Vikram Singh",
    avatar: "/professional-bearded-man.png",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

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
    <section className="py-16 lg:py-24 relative overflow-hidden bg-primary">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/15 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/15 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-secondary">What Our</span>{" "}
            <span className="text-white">Clients Say</span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Testimonial Content */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-100 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-black">
                <Quote className="w-16 h-16" />
              </div>
              
              {/* Decorative Border */}
              <div className="absolute left-0 top-0 h-full w-2 bg-secondary " />
              
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-seconfill-secondary  p-0.5">
                      <img
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full rounded-full object-cover border-2 border-white"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-seconfill-secondary text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 text-sm">Satisfied Customer</p>
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
                  className="p-3 rounded-full bg-secondary shadow-lg border border-seconfill-secondary transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Section */}
          <div className="relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={first} 
                alt="Detailing Mafia Cars"
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-seconfill-secondary/20 to-black/60" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <Quote className="w-12 h-12 text-white mb-4 mx-auto" />
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    Trusted by{" "}
                    <span className="text-seconfill-secondary">1000+</span>
                  </h3>
                  <p className="text-white/90 text-lg">Satisfied Car Owners</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">4.9/5</div>
                      <div className="text-white/80 text-sm">Average Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">500+</div>
                      <div className="text-white/80 text-sm">Cars Detailed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">98%</div>
                      <div className="text-white/80 text-sm">Satisfaction</div>
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