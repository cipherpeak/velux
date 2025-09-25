import type React from "react"
import banner1 from "../../assets/servicePage/banner/servive banner.jpg"

interface PPFProduct {
  id: string
  name: string
  image: string
  features: string[]
}

const PPFShowcase: React.FC = () => {
  const ppfProducts: PPFProduct[] = [
    {
      id: "magnifence",
      name: "PPF MAGNIFENCE",
      image: banner1,
      features: [
        "Scratch Resistant",
        "Super Stability",
        "Excellent Tensile Properties",
        "Super Elastic TPU, No Rain Spot",
      ],
    },
    {
      id: "st-guard",
      name: "PPF ST GUARD",
      image: banner1,
      features: [
        "Strong Adhesive",
        "Excellent Coating Gloss",
        "High Corrosion Resistance",
        "Strong Resistance To Yellowing",
      ],
    },
    {
      id: "matte-finish",
      name: "PPF MATTE FINISH",
      image: banner1,
      features: ["Distinctive Finish", "Self - Healing", "Lasting Resistance", "Outstanding Endurance"],
    },
    {
      id: "dazzling-silver",
      name: "PPF DAZZLING SILVER",
      image: banner1,
      features: ["Distinctive Finish", "Lasting Resistance", "Instant - Healing"],
    },
    {
      id: "color-ppf",
      name: "COLOR PPF",
      image: banner1,
      features: ["Distinctive Finish", "Lasting Resistance", "Self - Healing"],
    },
  ]

  return (
    <div className="min-h-screen bg-primary py-16 px-4 relative overflow-hidden">


      <div className=" mx-auto relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center">
            <div className="w-1 h-16 bg-secondary rounded-full mr-6"></div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Premium PPF Collection</h1>
              <p className="text-lg text-white">Advanced Paint Protection Films for Ultimate Vehicle Care</p>
            </div>
          </div>

        </div>

        {/* Products Grid */}
        <div className="space-y-8 space-x-3 grid grid-cols-2">
          {ppfProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group flex flex-col lg:flex-row items-center gap-8 p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Product Image */}
              <div className="flex-shrink-0 relative">
                <div className="w-80 h-60 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black font-bold text-sm">{index + 1}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1 text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 relative z-10">{product.name}</h2>
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-secondary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center justify-center lg:justify-start p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-secondary transition-colors duration-300 group-hover:shadow-md"
                      style={{
                        animationDelay: `${featureIndex * 100}ms`,
                      }}
                    >
                      <div className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <button className="px-8 py-4 bg-secondary text-black font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-red-600 hover:to-red-700">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PPFShowcase
