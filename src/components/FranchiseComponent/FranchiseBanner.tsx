import React from 'react'
import {
  ArrowRight,
  Star,
} from "lucide-react"
import banner1 from "../../assets/servicePage/banner/servive banner.jpg"

interface FranchiseBannerProps {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function FranchiseBanner({ setIsFormOpen }: FranchiseBannerProps) {
  return (
    <div className="px-4 sm:px-6 lg:px-4 xl:px-6 py-12 md:py-8 lg:py-12">
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[825px] overflow-hidden rounded-3xl md:rounded-4xl lg:rounded-3xl shadow-2xl">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${banner1})` }}
        />
        
        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/70 z-5"></div> */}

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem]">
            <div className="max-w-2xl xl:max-w-3xl w-full bg-white/5 backdrop-blur-sm shadow-2xl border border-white/20 p-6 rounded-4xl">
              <div className="space-y-4 md:space-y-6">
                {/* Badge with accent line */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-0.5 bg-secondary rounded-full" />
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                    <Star className="w-4 h-4" />
                    Franchise Opportunity Available
                  </div>
                </div>
                
                {/* Main Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight bg-white bg-clip-text text-transparent">
                  Build Your
                  <span className="text-secondary"> Automotive Empire</span>
                </h1>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg max-w-fit"
                  >
                    Start Your Journey
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 max-w-fit">
                    Download Brochure
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-2xl font-bold text-secondary mb-1">50+</div>
                    <div className="text-white/80 text-sm">Active Partners</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-2xl font-bold text-secondary mb-1">₹2.5L+</div>
                    <div className="text-white/80 text-sm">Avg Monthly Revenue</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-2xl font-bold text-secondary mb-1">95%</div>
                    <div className="text-white/80 text-sm">Partner Satisfaction</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
                    <div className="text-white/80 text-sm">Support Available</div>
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

export default FranchiseBanner