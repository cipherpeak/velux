import type React from "react"
import { useState } from "react"
import FranchiseBanner from "../../components/FranchiseComponent/FranchiseBanner"
import FranchiseRequerment from "../../components/FranchiseComponent/FranchiseRequerment"
import WhyPartnerWithUs from "../../components/FranchiseComponent/WhyPartnerWithUs"
import Benifits from "../../components/FranchiseComponent/Benifits"
import OurStores from "../../components/FranchiseComponent/OurStores"


const Franchise: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    alternatePhone: "",
    state: "",
    city: "",
    query: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsFormOpen(false)
  }






  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}

      <FranchiseBanner setIsFormOpen={setIsFormOpen}/>

      {/* Franchise Requirements */}
<FranchiseRequerment/>

      {/* Why Partner With Us */}

<WhyPartnerWithUs/>
      {/* Benefits */}
<Benifits/>

      {/* Our Stores */}
<OurStores/>


      {/* Franchise Enquiry Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card border border-border rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Franchise Enquiry Form</h3>
              <button onClick={() => setIsFormOpen(false)} className="text-muted-foreground hover:text-foreground">
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name*</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email ID*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Alternate Phone Number</label>
                  <input
                    type="tel"
                    name="alternatePhone"
                    value={formData.alternatePhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">State*</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
                    required
                  >
                    <option value="">Select State</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="delhi">Delhi</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="tamil-nadu">Tamil Nadu</option>
                    <option value="gujarat">Gujarat</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">City*</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
                    placeholder="City where you plan to open franchise"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Do you have any queries or expectations related to this opportunity?
                </label>
                <textarea
                  name="query"
                  value={formData.query}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
                  placeholder="Enter your query here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Franchise
