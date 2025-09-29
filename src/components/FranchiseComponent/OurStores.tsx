import { MapPin, Car, ChevronRight, Phone, Calendar } from "lucide-react"

interface Store {
  city: string;
  status: "Active" | "Opening Soon" | "Coming Soon";
  services: string;
  address?: string;
  phone?: string;
  rating?: number;
  customersServed?: number;
  image?: string;
}

const stores: Store[] = [
  { 
    city: "Mumbai", 
    status: "Active", 
    services: "Full Service Center",
    address: "Bandra Kurla Complex, Mumbai",
    phone: "+91 98765 43210",
    rating: 4.8,
    customersServed: 1250,
    image: "https://images.unsplash.com/photo-1567599754651-6d49dbd3d28c?w=400&h=300&fit=crop"
  },
  { 
    city: "Delhi", 
    status: "Active", 
    services: "Premium Detailing",
    address: "Connaught Place, Delhi",
    phone: "+91 98765 43211",
    rating: 4.9,
    customersServed: 980,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop"
  },
  { 
    city: "Bangalore", 
    status: "Opening Soon", 
    services: "Full Service Center",
    address: "Koramangala, Bangalore",
    phone: "+91 98765 43212",
    rating: 0,
    customersServed: 0,
    image: "https://images.unsplash.com/photo-1612852094356-8d82d11386e6?w=400&h=300&fit=crop"
  },
  { 
    city: "Chennai", 
    status: "Active", 
    services: "Express Service",
    address: "Anna Nagar, Chennai",
    phone: "+91 98765 43213",
    rating: 4.7,
    customersServed: 850,
    image: "https://images.unsplash.com/photo-1599661044176-63b47b876b2a?w=400&h=300&fit=crop"
  },
  { 
    city: "Hyderabad", 
    status: "Coming Soon", 
    services: "Full Service Center",
    address: "Hitech City, Hyderabad",
    phone: "Coming Soon",
    rating: 0,
    customersServed: 0,
    image: "https://images.unsplash.com/photo-1612852094356-8d82d11386e6?w=400&h=300&fit=crop"
  },
  { 
    city: "Pune", 
    status: "Active", 
    services: "Premium Detailing",
    address: "Koregaon Park, Pune",
    phone: "+91 98765 43214",
    rating: 4.6,
    customersServed: 720,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop"
  },
  { 
    city: "Kolkata", 
    status: "Opening Soon", 
    services: "Express Service",
    address: "Park Street, Kolkata",
    phone: "+91 98765 43215",
    rating: 0,
    customersServed: 0,
    image: "https://images.unsplash.com/photo-1567599754651-6d49dbd3d28c?w=400&h=300&fit=crop"
  },
  { 
    city: "Ahmedabad", 
    status: "Coming Soon", 
    services: "Full Service Center",
    address: "Prahlad Nagar, Ahmedabad",
    phone: "Coming Soon",
    rating: 0,
    customersServed: 0,
    image: "https://images.unsplash.com/photo-1612852094356-8d82d11386e6?w=400&h=300&fit=crop"
  }
]

function OurStores() {



  return (
    <section className="py-20 px-4 relative overflow-hidden">

      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-secondary gap-2  border border-secondary px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            OUR GROWING NETWORK
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-white bg-clip-text text-transparent">
            Our Store Network
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Join our expanding network of premium automotive service centers across major cities. 
            Each location offers state-of-the-art facilities and expert service.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/30 backdrop-blur-lg rounded-xl  p-6 text-center shadow-lg border border-secondary">
            <div className="text-3xl font-bold text-white mb-2">{stores.length}+</div>
            <div className="text-white">Cities</div>
          </div>
          <div className="bg-white/30 backdrop-blur-lg rounded-xl  p-6 text-center shadow-lg border border-secondary">
            <div className="text-3xl font-bold text-white mb-2">
              {stores.filter(s => s.status === "Active").length}
            </div>
            <div className="text-white">Active Stores</div>
          </div>
          <div className="bg-white/30 backdrop-blur-lg rounded-xl  p-6 text-center shadow-lg border border-secondary">
            <div className="text-3xl font-bold text-white mb-2">
              {stores.filter(s => s.status === "Opening Soon").length}
            </div>
            <div className="text-white">Opening Soon</div>
          </div>
          <div className="bg-white/30 backdrop-blur-lg rounded-xl  p-6 text-center shadow-lg border border-secondary">
            <div className="text-3xl font-bold text-white mb-2">
              {stores.reduce((acc, store) => acc + (store.customersServed || 0), 0)}+
            </div>
            <div className="text-white">Happy Customers</div>
          </div>
        </div>

        {/* Stores Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {stores.map((store, index) => (
            <div 
              key={index} 
              className="group bg-white/30 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-secondary"
            >
              {/* Store Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={store.image} 
                  alt={store.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 border border-secondary  rounded-full text-xs font-semibold text-secondary  backdrop-blur-sm`}>
                    <div className="w-2 h-2 rounded-full bg-secondary mr-1"></div>
                    {store.status}
                  </span>
                </div>

                {/* City Name Overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{store.city}</h3>
                </div>
              </div>

              {/* Store Content */}
              <div className="p-6">
                {/* Services */}
                <div className="flex items-center gap-2 mb-4">
                  <Car className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-white">{store.services}</span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white line-clamp-2">{store.address}</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="text-sm text-white">{store.phone}</span>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-2">
                  {store.status === "Active" ? (
                    <>
                      <button className="flex-1 bg-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-1">
                        <Phone className="w-4 h-4" />
                        Call Now
                      </button>
                      <button className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300">
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                      </button>
                    </>
                  ) : (
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Notify Me
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 ">
          <div className="bg-white/30 backdrop-blur-lg rounded-xl shadow-lg p-8 max-w-2xl mx-auto border border-secondary">
            <h3 className="text-2xl font-bold text-white mb-4">Want to Bring Us to Your City?</h3>
            <p className="text-blue-100 mb-6">Be the first to know when we expand to new locations</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg">
                Request Your City
              </button>
              <button className="border-2 border-secondary text-secondary px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Franchise Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStores