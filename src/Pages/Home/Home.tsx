import BannerCarousel from "../../components/home/BannerCarousel";
import { ContactHelpSection } from "../../components/home/ContactHelpSection";
import { IntroSection } from "../../components/home/IntroSection";
import { ServicesSection } from "../../components/home/Services";
import { TestimonialsSection } from "../../components/home/Testimonials";
import { WhyChooseUs } from "../../components/home/WhyChooseUs";

function Home() {

  return(
    <>
      <BannerCarousel/>
      <IntroSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <TestimonialsSection/>
      <ContactHelpSection/>
    </>
  )

}

export default Home;