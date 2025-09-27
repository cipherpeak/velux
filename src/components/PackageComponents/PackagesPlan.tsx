import React from 'react'
import { useState, useRef, useEffect } from "react"
import { Check, Star, Sparkles, Shield, Car, Droplets, X, Calendar, User, MapPin } from "lucide-react"

function PackagesPlan() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<any>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const packages = [
    {
      id: 1,
      name: "Essential Wash",
      price: 29,
      duration: "45 mins",
      description: "Perfect for regular maintenance and quick refresh",
      popular: false,
      icon: <Droplets className="w-8 h-8" />,
      features: [
        "Exterior hand wash",
        "Wheel cleaning",
        "Tire shine",
        "Window cleaning",
        "Basic interior vacuum",
        "Dashboard wipe down",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      id: 2,
      name: "Premium Detail",
      price: 89,
      duration: "2.5 hours",
      description: "Comprehensive detailing for the discerning car owner",
      popular: true,
      icon: <Star className="w-8 h-8" />,
      features: [
        "Everything in Essential",
        "Clay bar treatment",
        "Paint decontamination",
        "Premium wax application",
        "Interior deep clean",
        "Leather conditioning",
        "Engine bay cleaning",
        "Headlight restoration",
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      id: 3,
      name: "Luxury Complete",
      price: 149,
      duration: "4 hours",
      description: "Ultimate detailing experience with premium protection",
      popular: false,
      icon: <Sparkles className="w-8 h-8" />,
      features: [
        "Everything in Premium",
        "Paint correction (1-step)",
        "Ceramic coating application",
        "Interior protection coating",
        "Steam cleaning",
        "Odor elimination",
        "Chrome polishing",
        "30-day guarantee",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      id: 4,
      name: "Paint Protection",
      price: 299,
      duration: "6 hours",
      description: "Professional paint correction and long-term protection",
      popular: false,
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Multi-step paint correction",
        "Premium ceramic coating",
        "Paint protection film (PPF)",
        "Interior ceramic coating",
        "Wheel coating",
        "Glass coating",
        "1-year warranty",
        "Maintenance kit included",
      ],
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
  ]

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedPackage(null), 300)
  }

  const handleBookPackage = (pkg: any) => {
    setSelectedPackage(pkg)
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="py-20 px-4 ">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 animate-pulse">
              <Sparkles className="w-4 h-4" />
              Premium Car Care Solutions
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">
              Choose Your Perfect Package
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Each package is meticulously crafted to deliver exceptional results with unparalleled attention to detail
            </p>
          </div>

          {/* Enhanced Package Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  hoveredCard === index ? "scale-105 z-10" : "hover:scale-102"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Popular Badge with Animation */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                    <div className="bg-secondary text-black px-6 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`relative h-full bg-white border-2 rounded-3xl p-8 transition-all duration-500 group-hover:shadow-2xl ${
                    pkg.popular
                      ? `${pkg.borderColor} shadow-xl ${pkg.bgColor}`
                      : "border-slate-200 hover:border-slate-300"
                  } ${hoveredCard === index ? "shadow-2xl transform -translate-y-2" : "shadow-lg"}`}
                >
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 rounded-3xl opacity-5 bg-gradient-to-br ${pkg.color}`}></div>
                  
                  {/* Package Icon with Enhanced Animation */}
                  <div
                    className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${pkg.color} text-white mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg ${
                      hoveredCard === index ? "scale-110 rotate-12" : ""
                    }`}
                  >
                    {pkg.icon}
                    <div className="absolute inset-0 rounded-2xl bg-white/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Package Info */}
                  <div className="relative mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">{pkg.name}</h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{pkg.description}</p>

                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                        ${pkg.price}
                      </span>
                      <span className="text-slate-500">/ service</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
                      <span>{pkg.duration} service time</span>
                    </div>
                  </div>

                  {/* Features List with Staggered Animation */}
                  <div className="relative space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 transition-transform duration-300 group-hover:translate-x-1"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm text-slate-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced CTA Button */}
                  <button
                    onClick={() => handleBookPackage(pkg)}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 relative overflow-hidden ${
                      pkg.popular
                        ? "bg-secondary text-white shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-amber-600"
                        : "bg-gradient-to-r from-slate-800 to-slate-700 text-white hover:from-slate-900 hover:to-slate-800"
                    }`}
                  >
                    <span className="relative z-10">Book This Package</span>
                    <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 text-slate-600">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>30-Day Satisfaction Guarantee</span>
              </div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5 text-blue-500" />
                <span>Free Pickup & Delivery</span>
              </div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                <span>Premium Products Used</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div
            ref={modalRef}
            className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full max-h-[95vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300 shadow-2xl"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 rounded-t-3xl p-6 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${selectedPackage?.color} text-white flex items-center justify-center shadow-lg`}
                  >
                    {selectedPackage?.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Book {selectedPackage?.name}</h3>
                    <p className="text-slate-600">
                      ${selectedPackage?.price} • {selectedPackage?.duration}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <form className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-800 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                    Personal Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Contact</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
                        <option>Phone</option>
                        <option>Email</option>
                        <option>Text Message</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Vehicle Information */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-800 flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Car className="w-4 h-4 text-green-600" />
                    </div>
                    Vehicle Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Vehicle Make</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="e.g., Toyota, BMW, Mercedes"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Vehicle Model</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="e.g., Camry, X5, C-Class"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Year</label>
                      <input
                        type="number"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="2020"
                        min="1990"
                        max="2025"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Vehicle Type</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
                        <option>Sedan</option>
                        <option>SUV</option>
                        <option>Truck</option>
                        <option>Coupe</option>
                        <option>Convertible</option>
                        <option>Hatchback</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-800 flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-purple-600" />
                    </div>
                    Appointment Details
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
                        <option>9:00 AM - 11:00 AM</option>
                        <option>11:00 AM - 1:00 PM</option>
                        <option>1:00 PM - 3:00 PM</option>
                        <option>3:00 PM - 5:00 PM</option>
                        <option>5:00 PM - 7:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Package Summary */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Booking Summary</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Package:</span>
                      <span className="font-medium text-slate-800">{selectedPackage?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Duration:</span>
                      <span className="font-medium text-slate-800">{selectedPackage?.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Base Price:</span>
                      <span className="font-medium text-slate-800">${selectedPackage?.price}</span>
                    </div>
                    <div className="border-t border-slate-300 pt-3 mt-3">
                      <div className="flex justify-between">
                        <span className="font-semibold text-slate-800">Total:</span>
                        <span className="font-bold text-blue-600 text-xl">${selectedPackage?.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 py-4 px-6 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-300 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PackagesPlan