import { useState } from "react";
import { Menu, X, Facebook, Twitter, Instagram, Youtube, ChevronDown } from "lucide-react";
import logo from "../../assets/logo/VE LUX LOGO 2.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const navigationItems = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#", hasDropdown: true },
    { name: "Franchise", href: "#" },
    { name: "Barricade", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Career", href: "#" },
    { name: "Our Stores", href: "#" },
  ];

  const servicesMenuItems = [
    { name: "Service 1", href: "#" },
    { name: "Service 2", href: "#" },
    { name: "Service 3", href: "#" },
    { name: "Service 4", href: "#" },
    { name: "Service 5", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 text-white py-2 bg-primary shadow-sm shadow-black">
      {/* Top Bar - Centered on mobile */}
      <div className="border-b border-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Contact Info - Hidden on mobile, visible on desktop */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <a
                href="mailto:contact@company.com"
                className="flex items-center transition-colors hover:text-secondary"
              >
                <span className="mr-2">✉</span>
                contact@company.com
              </a>
              <a
                href="tel:08142220018"
                className="flex items-center transition-colors hover:text-secondary"
              >
                <span className="mr-2">📞</span>
                08142220018
              </a>
            </div>

            {/* Social Icons - Centered on mobile, hidden on desktop (since desktop has them in right side) */}
            <div className="flex sm:hidden items-center justify-center space-x-3 flex-1">
              <a
                href="#"
                className="w-8 h-8 bg-white border border-secondary text-black rounded-full flex items-center justify-center transition-colors hover:bg-secondary"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white border border-secondary text-black rounded-full flex items-center justify-center transition-colors hover:bg-secondary"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white border border-secondary text-black rounded-full flex items-center justify-center transition-colors hover:bg-secondary"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white border border-secondary text-black rounded-full flex items-center justify-center transition-colors hover:bg-secondary"
              >
                <Youtube size={16} />
              </a>
            </div>

            {/* Social Icons & Auth Buttons - Hidden on mobile, visible on desktop */}
            <div className="hidden sm:flex items-center space-x-4">
              {/* Social Icons */}
              <div className="flex items-center space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-white border border-secondary text-black rounded-full flex items-center justify-center transition-colors hover:bg-secondary"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white border border-secondary text-black rounded-full flex items-center justify-center transition-colors hover:bg-secondary"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white border border-secondary text-black rounded-full flex items-center justify-center transition-colors hover:bg-secondary"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white border border-secondary text-black rounded-full flex items-center justify-center transition-colors hover:bg-secondary"
                >
                  <Youtube size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Company Logo"
              className="h-10 sm:h-12 md:h-9 lg:h-9 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsServicesHovered(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesHovered(false)}
              >
                <a
                  href={item.href}
                  className={`flex items-center text-sm font-medium transition-colors hover:text-secondary ${
                    item.active
                      ? "text-secondary border-b-2 border-secondary pb-1"
                      : "text-white"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown 
                      size={16} 
                      className={`ml-1 transition-transform duration-200 ${
                        isServicesHovered ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Services Dropdown */}
                {item.hasDropdown && isServicesHovered && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                    {servicesMenuItems.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-secondary hover:text-black transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Service Enquiry Button - Hidden on mobile */}
            <button className="hidden lg:block bg-secondary p-3 rounded-2xl text-black transition-colors font-medium">
              Service Enquiry
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white transition-colors hover:text-secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-gray-500">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Contact Info */}
            <div className="md:hidden space-y-2 text-sm border-b border-gray-500 pb-4">
              <a
                href="mailto:contact@company.com"
                className="flex items-center transition-colors hover:text-secondary"
              >
                <span className="mr-2">✉</span>
                contact@company.com
              </a>
              <a
                href="tel:08142220018"
                className="flex items-center transition-colors hover:text-secondary"
              >
                <span className="mr-2">📞</span>
                08142220018
              </a>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-3">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className={`flex items-center justify-between text-sm font-medium transition-colors hover:text-secondary py-2 ${
                      item.active ? "text-secondary" : "text-white"
                    }`}
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                        // For mobile, you might want to implement a toggle instead of hover
                        setIsServicesHovered(!isServicesHovered);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${
                          isServicesHovered ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>
                  
                  {/* Mobile Services Dropdown */}
                  {item.hasDropdown && isServicesHovered && (
                    <div className="ml-4 mt-2 space-y-2 border-l border-gray-500 pl-4">
                      {servicesMenuItems.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="block text-sm text-gray-300 hover:text-secondary transition-colors py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Service Enquiry Button - Visible only in mobile menu */}
            <div className="pt-4 border-t border-gray-500">
              <button 
                className="w-full bg-secondary p-3 rounded-2xl text-black transition-colors font-medium text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Service Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}