import React from "react";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  country: string;
  state: string;
  city: string;
  address: string;
  zipcode: string;
  query: string;
}

// Define the type for visibility state
type VisibilityState = {
  [key: string]: boolean;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    country: "",
    state: "",
    city: "",
    address: "",
    zipcode: "",
    query: "",
  });

  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with IDs within this section
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll("[id]");
      elements.forEach((el) => {
        observer.observe(el);
      });
      
      // Also observe the section itself
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  // Helper function to check visibility with fallback
  const getVisibility = (id: string): boolean => {
    return isVisible[id] || false;
  };

  return (
    <div ref={sectionRef} className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Location Card */}
          <div 
            id="contact-card-1"
            className={`bg-white/30 backdrop-blur-lg rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-secondary transform transition-all duration-1000 ${
              getVisibility("contact-card-1") 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-semibold text-white mb-2">Our Location</h3>
            <p className="text-white text-sm leading-relaxed">
              D-120, SECTOR-63, Noida,
              <br />
              Gautambuddha Nagar, Uttar-Pradesh,
              <br />
              201307
            </p>
          </div>

          {/* Phone Card */}
          <div 
            id="contact-card-2"
            className={`bg-white/30 backdrop-blur-lg rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-secondary transform transition-all duration-1000 ${
              getVisibility("contact-card-2") 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-semibold text-white mb-2">Call Us</h3>
            <p className="text-white text-sm">+91-9289444440</p>
          </div>

          {/* Email Card */}
          <div 
            id="contact-card-3"
            className={`bg-white/30 backdrop-blur-lg rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-secondary transform transition-all duration-1000 ${
              getVisibility("contact-card-3") 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-semibold text-white mb-2">Email Us</h3>
            <p className="text-white text-sm">
              info@thedetailingmafia.com
              <br />
              hello@manmachinecarcare.com
            </p>
          </div>

          {/* Support Card */}
          <div 
            id="contact-card-4"
            className={`bg-white/30 backdrop-blur-lg rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-secondary transform transition-all duration-1000 ${
              getVisibility("contact-card-4") 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-semibold text-white mb-2">Support Line</h3>
            <p className="text-white text-sm">+80-100-44-000</p>
          </div>
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div 
            id="contact-form"
            className={`bg-white/30 backdrop-blur-lg rounded-xl shadow-lg p-8 border border-secondary transform transition-all duration-1000 ${
              getVisibility("contact-form") 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-20"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Beauty is in The Details
              </h2>
              <p className="text-lg text-white">
                Let's{" "}
                <span className="text-white font-semibold">Connect</span> for
                Perfection
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200 placeholder-gray-600"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200 placeholder-gray-600"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200 placeholder-gray-600"
                  required
                />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Phone Number"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200 placeholder-gray-600"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200 text-white"
                  required
                >
                  <option value="" className="text-gray-600">Select Country</option>
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                </select>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200 text-white"
                  required
                >
                  <option value="" className="text-gray-600">Select State</option>
                  <option value="uttar-pradesh">Uttar Pradesh</option>
                  <option value="delhi">Delhi</option>
                  <option value="maharashtra">Maharashtra</option>
                </select>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200 text-white"
                  required
                >
                  <option value="" className="text-gray-600">Select City</option>
                  <option value="noida">Noida</option>
                  <option value="delhi">Delhi</option>
                  <option value="gurgaon">Gurgaon</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200 placeholder-gray-600"
                  required
                />
                <input
                  type="text"
                  name="zipcode"
                  placeholder="ZIP / Postal Code"
                  value={formData.zipcode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200 placeholder-gray-600"
                  required
                />
              </div>

              <textarea
                name="query"
                placeholder="Tell us about your requirements..."
                value={formData.query}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/30 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200 resize-vertical placeholder-gray-600"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-secondary text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:bg-gray-900"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div 
            id="contact-map"
            className={`bg-white/30 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-secondary transform transition-all duration-1000 ${
              getVisibility("contact-map") 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-20"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="h-full min-h-[600px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503523.0804198959!2d76.10892667164971!3d9.614712540137374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08854108b2e13d%3A0x143be07e823deea0!2sClemx%20Auto%20Detailing!5e0!3m2!1sen!2sin!4v1758969024476!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[600px]"
                title="Google Maps - Clemx Auto Detailing Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;