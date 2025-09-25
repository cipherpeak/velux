import backbg from "../../assets/homepage/pexels-pixabay-326259 1.png"

export function ContactHelpSection() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={backbg} 
          alt="Detailing Mafia Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      </div>

      {/* Content Container with Glass Effect */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Glass Morphism Card - Reduced Padding */}
          <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-700/50 shadow-2xl">
            <div className="text-center">
              
              {/* Main Heading with Compact Spacing */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Do You Need Help In <span className="text-[#f4c55c] bg-gradient-to-r from-[#f4c55c] to-[#f8d78b] bg-clip-text text-transparent">Choosing a Service?</span>
              </h2>

              {/* Subtext with Reduced Spacing */}
              <div className="mb-6">
                <p className="text-lg text-gray-200 mb-2 font-medium">The Mafia always stays true to its words.</p>
                <p className="text-base text-gray-300 opacity-90">For any queries and assistance.</p>
              </div>

              {/* Contact Information - Compact Layout */}
              <div className="space-y-6 mb-6">
                {/* Phone Number */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-700/50 rounded-full mb-3 border border-gray-600/30">
                    <svg className="w-6 h-6 text-[#f4c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-white mb-1">
                    Call Us at: <span className="text-[#f4c55c] bg-gradient-to-r from-[#f4c55c] to-[#f8d78b] bg-clip-text text-transparent">80-100-44000</span>
                  </p>
                  <p className="text-gray-300 text-sm opacity-90">9AM - 6PM assistance</p>
                </div>

                {/* Email */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-700/50 rounded-full mb-3 border border-gray-600/30">
                    <svg className="w-6 h-6 text-[#f4c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-base text-gray-300 opacity-90">
                    Mail us -{" "}
                    <a
                      href="mailto:info@thedetailingmafia.com"
                      className="text-[#f4c55c] hover:text-[#f8d78b] transition-colors duration-300 font-medium underline underline-offset-4"
                    >
                      info@thedetailingmafia.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Call to Action Button - Smaller */}
              <div className="mt-6">
                <button className="bg-gradient-to-r from-[#f4c55c] to-[#f8d78b] text-black font-bold py-3 px-8 rounded-xl text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#f4c55c]/25 border-2 border-transparent hover:border-[#f4c55c]/30">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reduced Decorative Elements */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-[#f4c55c]/10 rounded-full blur-lg"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#f4c55c]/5 rounded-full blur-xl"></div>
    </section>
  )
}