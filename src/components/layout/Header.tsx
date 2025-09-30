import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import logo from "../../assets/logo/VE LUX LOGO 2.png";
import { useLocation } from "react-router-dom"; // Import useLocation

// Type definitions
interface NavigationItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

interface ServiceMenuItem {
  name: string;
  href: string;
  description: string;
}

interface RippleState {
  x: number;
  y: number;
  isActive: boolean;
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isServicesHovered, setIsServicesHovered] = useState<boolean>(false);
  const [ripple, setRipple] = useState<RippleState>({ x: 0, y: 0, isActive: false });
  
  const navRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Get current location
  const location = useLocation();
  const currentPath = location.pathname;

  const navigationItems: NavigationItem[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#", hasDropdown: true },
    { name: "Packages", href: "/packages" },
    { name: "Franchise", href: "/franchise" },
    { name: "Contact Us", href: "/contact" },
  ];

  const servicesMenuItems: ServiceMenuItem[] = [
    { name: "Premium Detailing", href: "#", description: "Expert vehicle cleaning and protection" },
    { name: "Ceramic Coating", href: "#", description: "Long-lasting paint protection" },
    { name: "Paint Correction", href: "#", description: "Remove scratches and swirl marks" },
    { name: "Interior Cleaning", href: "#", description: "Deep clean and odor removal" },
    { name: "Window Tinting", href: "#", description: "UV protection and privacy" },
  ];

  // Function to check if a nav item is active
  const isNavItemActive = (item: NavigationItem): boolean => {
    if (item.href === "/" && currentPath === "/") {
      return true;
    }
    if (item.href !== "/" && item.href !== "#" && currentPath.startsWith(item.href)) {
      return true;
    }
    return false;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, itemName: string): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setRipple({ x, y, isActive: true });
    
    setTimeout(() => setRipple({ x: 0, y: 0, isActive: false }), 600);
  };

  // Improved hover handling with delay
  const handleServicesMouseEnter = (): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesHovered(true);
  };

  const handleServicesMouseLeave = (): void => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
    }, 300); // 300ms delay before closing
  };

  // Handle dropdown mouse enter
  const handleDropdownMouseEnter = (): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Handle dropdown mouse leave
  const handleDropdownMouseLeave = (): void => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
    }, 300); // 300ms delay before closing
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header 
      ref={navRef}
      className="fixed w-full font-family-secondary top-0 z-50 text-white py-3 bg-primary shadow-2xl shadow-black/30 backdrop-blur-xl bg-opacity-95 border-b border-white/10"
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90"></div>
        <div 
          className={`absolute w-24 h-24 bg-gradient-to-r from-secondary/30 to-white/20 rounded-full blur-2xl transition-all duration-1000 ease-out ${
            ripple.isActive ? 'scale-200 opacity-40' : 'scale-0 opacity-0'
          }`}
          style={{
            left: ripple.x - 48,
            top: ripple.y - 48,
          }}
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Main Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with enhanced animation */}
          <div className="flex-shrink-0 z-10">
            <img
              src={logo}
              alt="Company Logo"
              className="h-12 sm:h-14 md:h-11 lg:h-11 w-auto object-contain transition-all duration-500 hover:scale-110"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3 relative z-10">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={item.hasDropdown ? handleServicesMouseEnter : undefined}
                onMouseLeave={item.hasDropdown ? handleServicesMouseLeave : undefined}
                ref={item.hasDropdown ? servicesRef : undefined}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.name)}
                  className={`relative flex items-center text-sm font-semibold transition-all duration-500 px-6 py-3 rounded-2xl overflow-hidden group ${
                    isNavItemActive(item)
                      ? "text-secondary bg-white/15 backdrop-blur-xl shadow-2xl border border-white/20"
                      : "text-white/90 hover:text-secondary hover:bg-white/10 hover:border-white/10 border border-transparent"
                  }`}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
                  
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown 
                      size={16} 
                      className={`ml-2 transition-all duration-300 ${
                        isServicesHovered ? "rotate-180 text-secondary" : "text-white/60"
                      }`}
                    />
                  )}
                </a>

                {/* Enhanced Services Dropdown */}
                {item.hasDropdown && isServicesHovered && (
                  <div 
                    className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl py-4 z-50 border border-white/30"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    {/* Arrow */}
                    <div className="absolute -top-2 left-8 w-4 h-4 bg-white/95 transform rotate-45 border-l border-t border-white/30"></div>
                    
                    {/* Dropdown Header */}
                    <div className="px-6 py-3 border-b border-white/10 mb-2">
                      <h3 className="font-bold text-lg text-gray-900">Our Services</h3>
                      <p className="text-sm text-gray-600 mt-1">Premium automotive care solutions</p>
                    </div>

                    {/* Services Items */}
                    <div className="space-y-1">
                      {servicesMenuItems.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="flex items-center justify-between px-6 py-4 text-gray-800 hover:bg-secondary/15 transition-all duration-300 group hover:scale-[1.02] mx-2 rounded-xl"
                          onClick={(e) => {
                            handleNavClick(e, service.name);
                            setIsServicesHovered(false);
                          }}
                        >
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 group-hover:text-secondary transition-colors">
                              {service.name}
                            </div>
                            <div className="text-xs text-gray-600 mt-1">{service.description}</div>
                          </div>
                          <ArrowRight size={14} className="text-gray-400 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                        </a>
                      ))}
                    </div>

                    {/* Dropdown Footer */}
                    <div className="px-6 pt-3 border-t border-white/10">
                      <button className="w-full bg-secondary/10 hover:bg-secondary/20 text-gray-800 font-semibold py-2 rounded-lg transition-all duration-300 text-sm">
                        View All Services
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4 relative z-10">
            {/* Service Enquiry Button with enhanced effect */}
            <button className="hidden lg:block relative bg-secondary hover:bg-secondary/90 text-black font-bold px-6 py-3 rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 border-secondary/20">
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-white/40 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center">
                Service Enquiry
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="lg:hidden text-white transition-all duration-500 hover:text-secondary hover:scale-110 p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-secondary/30 shadow-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-24 mx-auto max-w-sm bg-primary/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 z-40 overflow-hidden">
          {/* Background effects for mobile menu */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          
          <div className="relative px-6 py-6 space-y-3">
            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                        setIsServicesHovered(!isServicesHovered);
                      } else {
                        handleNavClick(e, item.name);
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`flex items-center justify-between text-sm font-semibold transition-all duration-500 p-4 rounded-2xl group border ${
                      isNavItemActive(item)
                        ? "text-secondary bg-white/15 backdrop-blur-xl border-white/20"
                        : "text-white/90 hover:text-secondary hover:bg-white/10 border-white/10"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      {item.name}
                    </div>
                    {item.hasDropdown && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-all duration-300 ${
                          isServicesHovered ? "rotate-180 text-secondary" : "text-white/60"
                        }`}
                      />
                    )}
                  </a>
                  
                  {/* Mobile Services Dropdown */}
                  {item.hasDropdown && isServicesHovered && (
                    <div className="ml-6 mt-2 space-y-2 border-l-2 border-white/20 pl-4">
                      {servicesMenuItems.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="block text-sm text-gray-300 hover:text-secondary transition-all duration-500 p-3 rounded-xl bg-white/5 backdrop-blur-lg group border border-white/10 hover:border-secondary/30"
                          onClick={(e) => {
                            handleNavClick(e, service.name);
                            setIsMobileMenuOpen(false);
                            setIsServicesHovered(false);
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium group-hover:translate-x-2 transition-transform duration-300">
                                {service.name}
                              </div>
                              <div className="text-xs text-gray-400 mt-1">{service.description}</div>
                            </div>
                            <ArrowRight size={12} className="text-gray-400 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Service Enquiry Button - Mobile */}
            <div className="pt-4 border-t border-white/20">
              <button 
                className="w-full bg-secondary hover:bg-secondary/90 text-black font-bold py-4 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden group border-2 border-secondary/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center">
                  Service Enquiry
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}