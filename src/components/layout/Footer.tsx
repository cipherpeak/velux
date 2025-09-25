import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react"
import logo from "../../assets/logo/VE LUX LOGO 2.png";

export function Footer() {
  return (
    <footer className="text-white relative overflow-hidden bg-primary">

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Section - Enhanced */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center space-x-3">
                <img
                  src={logo}
                  alt="VE LUX Logo"
                  className="h-16 w-auto object-contain filter brightness-0 invert"
                />
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 text-lg italic leading-relaxed font-light">
                "Paying Attention to Every Detail."
              </p>
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 bg-[#f4c55c]/10 px-4 py-2 rounded-full border border-[#f4c55c]/20">
                  <span className="text-[#f4c55c] text-sm font-semibold">#ABOVEANDBEYOND</span>
                </div>
                <div className="inline-flex items-center space-x-2 bg-[#f4c55c]/10 px-4 py-2 rounded-full border border-[#f4c55c]/20">
                  <span className="text-[#f4c55c] text-sm font-semibold">#THEPRESPECIALISTS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section - Modernized */}
          <div className="space-y-6">
            <h3 className="text-[#f4c55c] text-xl font-bold relative inline-block">
              SERVICES
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#f4c55c] to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "Paint Protection Film",
                "Ceramic Coating",
                "Valeting & Detailing",
                "Window Films",
                "Vehicle Storage",
                "Studio & Photography",
                "Price My Car"
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="group flex items-center space-x-2 text-white hover:text-[#f4c55c] transition-all duration-300 text-base"
                  >
                    <ArrowRight className="w-3 h-3 text-[#f4c55c] transform group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:translate-x-1 transition-transform">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information - Enhanced */}
          <div className="space-y-6">
            <h3 className="text-[#f4c55c] text-xl font-bold relative inline-block">
              CONTACT US
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#f4c55c] to-transparent"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                <div className="w-10 h-10 bg-[#f4c55c]/10 rounded-full flex items-center justify-center group-hover:bg-[#f4c55c]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#f4c55c]" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">+971 433 888 04</p>
                  <p className="text-gray-300 text-sm">+971 56 5788 333</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                <div className="w-10 h-10 bg-[#f4c55c]/10 rounded-full flex items-center justify-center group-hover:bg-[#f4c55c]/20 transition-colors">
                  <Mail className="w-4 h-4 text-[#f4c55c]" />
                </div>
                <span className="text-gray-300 text-sm">info@velux.ae</span>
              </div>
              
              <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                <div className="w-10 h-10 bg-[#f4c55c]/10 rounded-full flex items-center justify-center group-hover:bg-[#f4c55c]/20 transition-colors mt-1">
                  <MapPin className="w-4 h-4 text-[#f4c55c]" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">
                  42 6th St - Al Quoz - Dubai - UAE
                </span>
              </div>
              
              <div className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                <div className="w-10 h-10 bg-[#f4c55c]/10 rounded-full flex items-center justify-center group-hover:bg-[#f4c55c]/20 transition-colors">
                  <Clock className="w-4 h-4 text-[#f4c55c]" />
                </div>
                <span className="text-gray-300 text-sm">9:00 AM to 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Newsletter Section - New Addition */}
          <div className="space-y-6">
            <h3 className="text-[#f4c55c] text-xl font-bold relative inline-block">
              NEWSLETTER
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#f4c55c] to-transparent"></div>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Subscribe to our newsletter for exclusive offers and car care tips.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#f4c55c] transition-colors"
              />
              <button className="w-full bg-gradient-to-r from-[#f4c55c] to-[#f8d78b] text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Enhanced */}
      <div className="relative z-10 border-t border-white/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Media Icons - Enhanced */}
            <div className="flex items-center space-x-5">
              <a href="#" className="group w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:border-[#f4c55c] hover:bg-[#f4c55c]/10 transition-all duration-300">
                <Facebook className="w-5 h-5 text-white group-hover:text-[#f4c55c] transition-colors" />
              </a>
              <a href="#" className="group w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:border-[#f4c55c] hover:bg-[#f4c55c]/10 transition-all duration-300">
                <Instagram className="w-5 h-5 text-white group-hover:text-[#f4c55c] transition-colors" />
              </a>
              <a href="#" className="group w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:border-[#f4c55c] hover:bg-[#f4c55c]/10 transition-all duration-300">
                <Youtube className="w-5 h-5 text-white group-hover:text-[#f4c55c] transition-colors" />
              </a>
            </div>

            {/* Legal Links - Enhanced */}
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-[#f4c55c] transition-colors duration-300 text-sm font-medium relative group">
                Terms and Conditions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f4c55c] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f4c55c] transition-colors duration-300 text-sm font-medium relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f4c55c] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* Copyright - Enhanced */}
            <div className="text-gray-300 text-sm font-medium bg-white/5 px-4 py-2 rounded-full border border-white/10">
              © VELUX Car Care | 2024
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}