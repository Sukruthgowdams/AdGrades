"use client"

import { useEffect } from "react"
import { Navbar } from "./components/Layout/Navbar"
import { HeroSection } from "./components/Sections/HeroSection"
import { ServicesSection } from "./components/Sections/ServicesSection"
import { ClientsSection } from "./components/Sections/ClientsSection"
import { ReviewsSection } from "./components/Sections/ReviewsSection"
import { CaseStudiesSection } from "./components/Sections/CaseStudiesSection"
import { FAQsSection } from "./components/Sections/FAQsSection"
import { ContactSection } from "./components/Sections/ContactSection"
import { Footer } from "./components/Layout/Footer"
import { PricingSection } from "./components/Sections/PricingSection"
import { FinalCTASection } from "./components/Sections/FinalCTASection"
import { ScrollProgressBar } from "./components/animations/ScrollProgressBar"
import { AnimatePresence } from "framer-motion"
import { LoadingScreen } from "./components/LoadingScreen"
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
    <LoadingScreen>
      <AnimatePresence>
        <div className="min-h-screen flex flex-col">
          <ScrollProgressBar />
          <Navbar />
          <main className="flex-grow pt-20">
            <HeroSection />
            <ServicesSection />
            <ClientsSection />
            <CaseStudiesSection />
            <ReviewsSection />
            <FAQsSection />
            <FinalCTASection />
            <PricingSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </LoadingScreen>
  )
}

export default App
