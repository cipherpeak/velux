import { useState, useEffect } from "react"
import banner1 from "../../assets/servicePage/banner/servive banner.jpg"





function FilmServiceCarousel() {
    const bannerSlides = [
  {
    id: 1,
    title: "Premium Services",
    subtitle: "Experience Excellence",
    description: "Discover our comprehensive range of professional services designed to meet your needs.",
    image: banner1,
  }
]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])


  return (
    <div
      className="w-full h-full"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {bannerSlides.map((slide) => (
          <div key={slide.id} className="relative w-full h-full flex-shrink-0">
            <div

            >
                <img src={slide.image}alt="" />
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default FilmServiceCarousel