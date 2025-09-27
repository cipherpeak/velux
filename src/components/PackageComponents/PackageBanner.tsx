import React from 'react'
import { ArrowRight, Star, Shield, Car } from "lucide-react"
import banner1 from "../../assets/servicePage/banner/servive banner.jpg"

function PackageBanner() {
  return (
    <div className="px-4 sm:px-6 lg:px-4 xl:px-6 py-12 md:py-8 lg:py-12">
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[825px] overflow-hidden rounded-3xl md:rounded-4xl lg:rounded-3xl shadow-2xl">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage:`url(${banner1})` }}
        />
        
        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/70 z-5"></div> */}

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem]">
            <div className="max-w-2xl xl:max-w-3xl w-full bg-white/5 backdrop-blur-sm shadow-2xl border border-white/20 p-6 rounded-4xl">
              <div className="space-y-4 md:space-y-6">
                {/* Badge with accent line */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-0.5 bg-primary rounded-full" />
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                    <Star className="w-4 h-4" />
                    Professional Car Detailing Services
                  </div>
                </div>
                
                {/* Main Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight bg-white bg-clip-text text-transparent">
                  Detailing
                  <span className="text-transparent bg-clip-text"> Packages</span>
                </h1>

                {/* Description */}
                <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">
                  Choose the perfect detailing package for your vehicle. From quick maintenance to complete transformation, we have the expertise to make your car look its absolute best.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="border border-secondary px-8 py-4 rounded-lg font-semibold bg-secondary text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg max-w-fit">
                    View Packages
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border border-secondary bg-white/70 backdrop-blur-sm text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 max-w-fit">
                    Book Consultation
                  </button>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-6 pt-8">
                  <div className="flex items-center gap-2 text-white/80">
                    <Car className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">All Vehicle Types</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Shield className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Satisfaction Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Star className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Premium Products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackageBanner