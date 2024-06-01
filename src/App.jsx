import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import FeatureSection from "./components/FeatureSection"
import WorkflowSection from "./components/WorkflowSection"
import PricingSection from "./components/PricingSection"
import TestimonialSection from "./components/TestimonialSection"
import FooterSection from "./components/FooterSection"

function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkflowSection />
        <PricingSection />
        <TestimonialSection />
        <FooterSection />
      </div>


    </>
  )
}

export default App
