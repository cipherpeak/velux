import React from 'react'
import { Brush, ChevronRight } from 'lucide-react';

function ExeteriorBanner() {
  return (
    <div className="px-4 sm:px-6 lg:px-4 xl:px-6 py-12 md:py-8 lg:py-12">
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[825px] overflow-hidden rounded-3xl md:rounded-4xl lg:rounded-3xl shadow-2xl">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://lirp.cdn-website.com/443aa17f/dms3rep/multi/opt/car+detailing+the+works+auto+center-640w.jpg")`
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background/80 backdrop-blur-[1px]" />

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem]">
            <div className="max-w-2xl xl:max-w-5xl w-full bg-white/5 backdrop-blur-sm shadow-2xl border border-white/20 p-6 rounded-4xl">
              <div className="space-y-4 md:space-y-6">
                {/* Subtitle with accent line */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-0.5 bg-secondary" />
                  <p className="text-sm md:text-base lg:text-lg font-semibold text-secondary tracking-wider uppercase">
                    Paint Perfection
                  </p>
                </div>
                
                {/* Main Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight bg-white bg-clip-text text-transparent">
                  Exterior
                  <span className="block bg-white bg-clip-text text-transparent">
                    Detailing
                  </span>
                </h1>
                
                {/* Description */}
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-2xl font-light">
                  Restore your vehicle's showroom shine with our comprehensive exterior detailing services. From basic wash to ceramic coating protection.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button className="px-8 py-4 bg-secondary text-black rounded-xl font-medium  transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center">
                    Get Detailing Quote
                    <Brush className="w-4 h-4" />
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

export default ExeteriorBanner