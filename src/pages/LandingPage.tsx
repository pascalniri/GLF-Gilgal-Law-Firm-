import About from "../components/About"
import Areas from "../components/Areas"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Team from "../components/Team"
import WhyUs from "../components/WhyUs"

const LandingPage = () => {
  return (
    <div>
        <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Team />
      <Areas />
      <Footer />
    </div>
  )
}

export default LandingPage
