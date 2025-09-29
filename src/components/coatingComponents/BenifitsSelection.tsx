import React from 'react'
import { Shield, Droplets, Sparkles, Award, Zap,Clock } from "lucide-react"


  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Insane Gloss",
      description: "Mirror-like finish that enhances your vehicle's natural beauty",
      color: "bg-gradient-to-br from-purple-400 to-pink-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "10H Hardness",
      description: "Military-grade protection against scratches and environmental damage",
      color: "bg-gradient-to-br from-blue-400 to-cyan-500"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Hydrophobic",
      description: "Self-cleaning surfaces that stay pristine",
      color: "bg-gradient-to-br from-green-400 to-teal-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Advanced Technology",
      description: "Superior strength and flexibility",
      color: "bg-gradient-to-br from-yellow-400 to-amber-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Permanent Bond",
      description: "Unbreakable molecular bond with your vehicle's paint",
      color: "bg-gradient-to-br from-red-400 to-rose-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Long Protection",
      description: "Durability measured in years, not months",
      color: "bg-gradient-to-br from-indigo-400 to-purple-500"
    },
  ]

function BenifitsSelection() {
  return (
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl font-bold mb-4 text-white">
              Superior <span className="text-white">Protection</span>
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              Advanced technology that transforms your vehicle into a protected masterpiece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-transparent hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-800">{benefit.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default BenifitsSelection