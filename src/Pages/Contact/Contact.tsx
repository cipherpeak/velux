
import type React from "react"
import ContactBanner from "../../components/contact/ContactBanner"
import ContactForm from "../../components/contact/ContactForm"



const Contact: React.FC = () => {

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <ContactBanner/>
     <ContactForm/>

    </div>
  )
}

export default Contact
