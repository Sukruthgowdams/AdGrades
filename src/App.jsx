import React, { useEffect } from 'react';
import { Navbar } from './components/Layout/Navbar';
import { HeroSection } from './components/Sections/HeroSection';
import { ServicesSection } from './components/Sections/ServicesSection';
import { ClientsSection } from './components/Sections/ClientsSection';
import { ReviewsSection } from './components/Sections/ReviewsSection';
import { CaseStudiesSection } from './components/Sections/CaseStudiesSection';
import { FAQsSection } from './components/Sections/FAQsSection';
import { ContactSection } from './components/Sections/ContactSection';
import { Footer } from './components/Layout/Footer';
import { ScrollAnimation } from './components/ScrollAnimation';
import './App.css';
import { PricingSection } from './components/Sections/PricingSection';
import { FinalCTASection } from './components/Sections/FinalCTASection';

function App() {
  useEffect(() => {
    // Ensure DOM is fully loaded before querying sections
    if (typeof document === 'undefined') return;
    
    const sections = document.querySelectorAll('#services, #clients, #case-studies, #reviews, #faqs, #contact, #pricing, #final-cta');
    sections.forEach(section => {
      section.classList.add('fade-in-section');
    });

    // Handle scroll animations with intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.9 }
    );
    
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
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
      <ScrollAnimation />
    </div>
  );
}

export default App;
