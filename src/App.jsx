import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LegalProvider } from './context/LegalContext';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBadges from './components/TrustBadges';
import ServicesSection from './components/ServicesSection';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import ReviewScreenshots from './components/ReviewScreenshots';
import CustomerReviews from './components/CustomerReviews';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieBanner from './components/CookieBanner';
import LegalModals from './components/LegalModals';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LegalProvider>
      <div className="min-h-screen bg-[#F4F8FC] text-[#0F172A] flex flex-col font-sans selection:bg-[#00B2FE]/20 selection:text-[#043263]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-[#043263] focus:shadow-lg"
        >
          Skip to main content
        </a>

        <AnimatePresence mode="wait">
          {isLoading && <Preloader key="preloader" />}
        </AnimatePresence>

        <Navbar />

        <main id="main-content" tabIndex="-1" className="flex-grow">
          <HeroSection />
          <TrustBadges />
          <ServicesSection />
          <BeforeAfterGallery />
          <ReviewScreenshots />
          <CustomerReviews />
          <ContactSection />
        </main>

        <Footer />
        <FloatingWhatsApp />
        <CookieBanner />
        <LegalModals />
      </div>
    </LegalProvider>
  );
}
