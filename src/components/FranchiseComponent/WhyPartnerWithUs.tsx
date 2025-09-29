import { useRef } from 'react'
import { Award, Users, Shield, TrendingUp, Star } from "lucide-react"
import { useInView } from 'framer-motion'

// Custom hook for fade-in animation
function useFadeInAnimation(delay = 0) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return {
    ref,
    style: {
      opacity: isInView ? 1 : 0,
      transform: isInView ? 'translateY(0)' : 'translateY(30px)',
      transition: `all 0.6s ease-out ${delay}ms`
    }
  }
}

function WhyPartnerWithUs() {
  const headingAnim = useFadeInAnimation()
  const text1Anim = useFadeInAnimation(200)
  const text2Anim = useFadeInAnimation(400)
  const cardAnim = useFadeInAnimation(400)

  const benefits = [
    { icon: Shield, text: "Ongoing marketing support and social media presence" },
    { icon: TrendingUp, text: "Dedicated R&D team for continuous innovation" },
    { icon: Users, text: "Comprehensive training and operational support" },
    { icon: Star, text: "Proven business model with high success rate" }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <div {...headingAnim}>
              <div className="inline-flex border border-secondary p-3 rounded-3xl items-center gap-2 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                <div className="w-2 h-2 border border-secondary rounded-full"></div>
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">PARTNERSHIP ADVANTAGES</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mt-4">
                Why Partner With <span className="text-secondary">Our Team?</span>
              </h2>
            </div>

            <p {...text1Anim} className="text-lg text-gray-300 mb-6 leading-relaxed">
              Our success is driven by <span className="text-secondary font-semibold">quality, innovation, and customer satisfaction</span>. By partnering with us, you're not just investing in a business but joining a legacy that's reshaping the automotive service industry.
            </p>

            <p {...text2Anim} className="text-lg text-gray-300 mb-8 leading-relaxed">
              As a franchisee, you'll receive <span className="text-primary font-semibold">full support from day one</span>, including assistance with setting up your facility to meet our high standards. We offer comprehensive training in all aspects of the business.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon
                const anim = useFadeInAnimation(600 + index * 100)
                
                return (
                  <div
                    key={index}
                    {...anim}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <BenefitIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{benefit.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Card */}
          <div {...cardAnim}>
            <div className="relative group">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              <div className="relative bg-transparent rounded-xl shadow-lg hover:shadow-secondary/20 transition-all duration-500 group-hover:scale-105 overflow-hidden">
                
                {/* Full Width Image Container */}
                <div 
                  className="relative h-96 w-full rounded-xl overflow-hidden"
                  style={{
                    backgroundImage: `url("https://lirp.cdn-website.com/443aa17f/dms3rep/multi/opt/car+detailing+the+works+auto+center-640w.jpg")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Dark Overlay for Better Text Readability */}
                  <div className="absolute inset-0 bg-black/60"></div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                  
                  {/* Absolute Centered Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    {/* Icon Container */}
                    <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-secondary">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Comprehensive Support System
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-gray-200 font-semibold mb-6 text-lg">
                      Professional Training Program
                    </p>
                    
                    {/* Description */}
                    <p className="text-gray-100 mb-8 leading-relaxed max-w-md">
                      From initial setup to ongoing operations, we provide end-to-end support to ensure your success in the automotive service industry.
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-8 pt-6 border-t border-white/30">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-secondary">98%</div>
                        <div className="text-sm text-gray-200">Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">24/7</div>
                        <div className="text-sm text-gray-200">Support</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-secondary">50+</div>
                        <div className="text-sm text-gray-200">Locations</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-secondary rounded-full animate-bounce"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-primary rounded-full animate-bounce delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="relative bg-secondary text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-300 hover:scale-105 group">
            <span className="relative z-10">Start Your Partnership Journey</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyPartnerWithUs