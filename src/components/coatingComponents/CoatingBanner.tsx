import { ChevronRight } from "lucide-react"
import banner1 from "../../assets/servicePage/banner/servive banner.jpg"

const bannerData = {
  title: "Premium Paint",
  subtitle: "Advanced Nano Technology",
  description: "Advanced ceramic and graphene coatings for ultimate vehicle protection and shine",
}


const bannerSlides = [
  {
    id: 1,
    title: "CONTACT US",
    subtitle: "Get in Touch",
    description: "Get in touch with us for all your automotive detailing needs",
    image: banner1,
  }
]

function CoatingBanner() {
  return (
    <div className="px-4 sm:px-6 lg:px-4 xl:px-6 py-12 md:py-8 lg:py-12">
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[825px] overflow-hidden rounded-3xl md:rounded-4xl lg:rounded-3xl shadow-2xl">

        
        {/* Background Pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bannerSlides[0].image})` }}
        />
        
        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem]">
            <div className="max-w-2xl xl:max-w-5xl w-full bg-white/5 backdrop-blur-sm shadow-2xl border border-white/20 p-6 rounded-4xl">
              <div className="space-y-4 md:space-y-6">
                {/* Subtitle with accent line */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-0.5 bg-secondary" />
                  <p className="text-sm md:text-base lg:text-lg font-semibold text-transparent bg-secondary bg-clip-text tracking-wider uppercase">
                    {bannerData.subtitle}
                  </p>
                </div>
                
                {/* Main Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight bg-white bg-clip-text text-transparent">
                  {bannerData.title}
                  <span className="block bg-secondary bg-clip-text text-transparent">
                    Protection
                  </span>
                </h1>
                
                {/* Description */}
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-2xl font-light">
                  {bannerData.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button className="px-8 py-4 bg-secondary text-black rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center">
                    Book Service
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoatingBanner