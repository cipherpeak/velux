import { useState } from "react";
import { ChevronRight } from "lucide-react";

// Import coating images
import grapheneImg from "../../assets/services/graphene bottle 2 1.png";
import ceramicImg from "../../assets/services/person-working-car-wrapping.jpg";

const coatingTypes = [
  {
    id: "graphene",
    name: "Premium Graphene Coating",
    tagline: "Next Generation Protection",
    description:
      "Revolutionary graphene technology provides superior strength and flexibility with unmatched durability.",
    features: [
      "Long lasting Durability",
      "High Glass & Gloss",
      "10H+ Hardness",
      "Super Hydrophobic",
      "7+ Years Protection",
    ],
    image: grapheneImg, // 🔥 use image here
  },
  {
    id: "ceramic",
    name: "Premium Nano Ceramic Coating",
    tagline: "Proven Performance",
    description:
      "Advanced ceramic technology designed to defend against contaminants with excellent durability.",
    features: [
      "High Class Finish",
      "Super Hydrophobic",
      "Weather Resistant",
      "Hard Protective Shield",
      "Up to 5 Year Protection",
    ],
    image: ceramicImg, // 🔥 ceramic image
  },
];

function CoatingSelection() {
  const [activeCoating, setActiveCoating] = useState("graphene");

  const activeCoatingData =
    coatingTypes.find((coating) => coating.id === activeCoating) ||
    coatingTypes[0];

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 " />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-6xl font-bold mb-4 text-white">
            Choose Your Protection
          </h2>
          <p className="text-white">
            Select between our advanced coating technologies
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          {coatingTypes.map((coating) => (
            <button
              key={coating.id}
              onClick={() => setActiveCoating(coating.id)}
              className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                activeCoating === coating.id
                  ? `border-transparent bg-secondary text-white shadow-xl scale-105`
                  : "border-slate-300 bg-white/70 hover:border-slate-400 backdrop-blur-sm"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{coating.name}</h3>
              <p
                className={`text-sm mb-3 ${
                  activeCoating === coating.id ? "text-white/90" : "text-black"
                }`}
              >
                {coating.tagline}
              </p>
              <p
                className={`text-sm ${
                  activeCoating === coating.id ? "text-white/80" : "text-slate-600"
                }`}
              >
                {coating.description}
              </p>
            </button>
          ))}
        </div>

        {/* Active Coating Details */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Text */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {activeCoatingData.name}
              </h3>
              <p className="text-slate-600 mb-6">
                {activeCoatingData.description}
              </p>
              <div className="space-y-3">
                {activeCoatingData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-secondary`} />
                    <span className="text-sm font-medium text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl font-medium hover:from-slate-900 hover:to-slate-800 transition-all duration-300 flex items-center gap-2">
                Learn More
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-full max-h-[400px]">
                <div className="absolute inset-0 bg-secondary rounded-2xl opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/50 to-transparent rounded-2xl" />
                <img
                  src={activeCoatingData.image}
                  alt={activeCoatingData.name}
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoatingSelection;
