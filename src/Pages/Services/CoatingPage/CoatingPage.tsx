"use client"

import type React from "react"
import { useState } from "react"
import { Play, Shield, Droplets, Sparkles, Clock, Award, Zap, ChevronRight, Star } from "lucide-react"
import CoatingBanner from "../../../components/coatingComponents/CoatingBanner"
import CoatingSelection from "../../../components/coatingComponents/CoatingSelection"
import BenifitsSelection from "../../../components/coatingComponents/BenifitsSelection"

const CoatingPage: React.FC = () => {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("all")



  const galleryItems = [
    { type: "image", src: "/luxury-car-with-ceramic-coating.jpg", category: "before-after" },
    { type: "video", src: "/ceramic-coating-application-process.jpg", category: "process" },
    { type: "image", src: "/graphene-coating-product-bottle.jpg", category: "products" },
    { type: "image", src: "/car-paint-protection-film.jpg", category: "before-after" },
    { type: "video", src: "/water-beading-on-coated-car.jpg", category: "results" },
    { type: "image", src: "/professional-detailing-workspace.jpg", category: "process" },
  ]

  const filteredGallery =
    activeGalleryFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeGalleryFilter)


  return (
    <div className="min-h-screen text-slate-900 font-family-secondary">
      {/* Hero Section */}
      <CoatingBanner/>

      {/* Coating Selection Section */}
      <CoatingSelection/>

      {/* Benefits Section */}
      <BenifitsSelection/>


      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Protect Your Investment?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Experience the ultimate in automotive protection with our premium coating services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                Book Your Service
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoatingPage