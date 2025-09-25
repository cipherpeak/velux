"use client"

import { ArrowRight, Sparkles, Shield, Award, Star } from "lucide-react"
import luxuary from "../../assets/homepage/introsec/pexels-victoria-ouarets-3535985-5288719 (1) 1.png"
import acc12 from "../../assets/accessories/VE-LUX-Brand-Guidlines_2025_Prog-V1-(sept04).png"

export function IntroSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-primary">

      {/* Background Pattern */}
        {/* <div className="absolute inset-0 w-full h-full">
        <img 
          src={acc12} 
          alt="Detailing Mafia Background" 
          className="w-full h-full object-cover"
        />
        
      </div>
       */}
      <div className="container mx-auto px-4 relative z-10 ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Car Image */}
          <div className="relative order-2 lg:order-1">
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
              <div className="absolute -bottom-4 z-50 -right-4 bg-secondary  shadow-2xl rounded-2xl p-4 border-2 ">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-black" />
                  <span className="font-bold text-black text-sm">Premium Detailing</span>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute z-50 -top-4 -left-4 bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-setext-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-900 text-xs">5-Star Rated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Header Section */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-setext-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium border border-setext-secondary/30">
                <Sparkles className="w-4 h-4" />
                Premium Car Care Excellence
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-white">
                  Detailing is not a skill,
                </span>
                <span className="block text-secondary mt-2">
                  It's an Attitude!
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-white text-lg leading-relaxed">
                Welcome to <span className="font-semibold text-secondary">The Detailing Mafia</span>: Your ultimate solution for premium car care. 
                We believe "Perfection is in the Detail" and this philosophy has earned us the title 
                <span className="font-semibold text-white"> "King of the Detailing World"</span> in the Automotive Industry.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-setext-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-white leading-relaxed">
                    Our skilled team transforms ordinary cars into stunning masterpieces through meticulous attention to detail.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-setext-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-white leading-relaxed">
                    We offer advanced solutions like <span className="font-semibold text-white">Clarity Coat</span>,{" "}
                    <span className="font-semibold text-white">Ceramic Coating</span>, and{" "}
                    <span className="font-semibold text-white">Paint Protection Film</span> tailored to your vehicle's needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-secondary  transition-all duration-300">
                <div className="w-12 h-12 bg-setext-secondary/20 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-white block">5-Year Warranty</span>
                  <span className="text-white text-sm">Quality Guaranteed</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-secondary  transition-all duration-300">
                <div className="w-12 h-12 bg-setext-secondary/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-white block">Award Winning</span>
                  <span className="text-white text-sm">Industry Recognition</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="group relative bg-secondary from-setext-black to-setext-secondary hover:from-setext-secondary hover:to-setext-secondary text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 overflow-hidden">
                <span className="relative z-10">Discover Our Services</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}