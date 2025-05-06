"use client"
import CaseStudies from "./pages/CaseStudies" // Import CaseStudies page

import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" // Import Router components
import { Navbar } from "./components/Layout/Navbar"
import { HeroSection } from "./components/Sections/HeroSection"
import { ServicesSection } from "./components/Sections/ServicesSection"
import { ClientsSection } from "./components/Sections/ClientsSection"
import { ReviewsSection } from "./components/Sections/ReviewsSection"
import { FAQsSection } from "./components/Sections/FAQsSection"
import { ContactSection } from "./components/Sections/ContactSection"
import { Footer } from "./components/Layout/Footer"
import { PricingSection } from "./components/Sections/PricingSection"
import { FinalCTASection } from "./components/Sections/FinalCTASection"
import { ScrollProgressBar } from "./components/animations/ScrollProgressBar"
import { AnimatePresence } from "framer-motion"
import { LoadingScreen } from "./components/LoadingScreen"
import AboutUs from "./pages/AboutUs" // Import the AboutUs page
import "./App.css"

function App() {
  useEffect(() => {
    // Load custom fonts if needed
    const loadFonts = async () => {
      if (typeof window !== "undefined") {
        // Font loading logic here if needed
      }
    }

    loadFonts()
  }, [])

  return (
    <Router>
      <LoadingScreen>
        <AnimatePresence>
          <div className="min-h-screen flex flex-col bg-[#12141e]">
            <ScrollProgressBar />
            <Navbar />
            <main className="flex-grow pt-20">
              <Routes>
                <Route path="/" element={
                  <>
                    <HeroSection />
                    <ClientsSection />
                    <FAQsSection />
                    <FinalCTASection />
                    <PricingSection />
                    <ContactSection />
                  </>
                } />
                <Route path="/aboutus" element={<AboutUs />} /> {/* Add About Us route */}
                <Route path="/casestudies" element={<CaseStudies />} /> {/* Add Case Studies route */}
                <Route path="/clients" element={<ClientsSection />} /> {/* Add Case Studies route */}
                <Route path="/services" element={<ServicesSection />} /> {/* Add Services route */}
                <Route path="/reviews" element={<ReviewsSection />} /> {/* Add Reviews route */}
                <Route path="/faqs" element={<FAQsSection />} /> {/* Add FAQs route */}

              </Routes>
            </main>
            <Footer />
          </div>
        </AnimatePresence>
      </LoadingScreen>
    </Router>
  )
}

export default App