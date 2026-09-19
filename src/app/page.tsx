import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroCards from "@/components/IntroCards";
import AboutSection from "@/components/AboutSection";
import TrustBanner from "@/components/TrustBanner";
import ApproachSection from "@/components/ApproachSection";
import ServicesSection from "@/components/ServicesSection";
import FacilitiesGallery from "@/components/FacilitiesGallery";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorkWithUsBanner from "@/components/WorkWithUsBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-stone-800">
      {/* Top Bar and Main Navigation */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section inspired by the reference layout */}
        <HeroSection />

        {/* 2. Intro Cards Strip with 4 Action Cards */}
        <IntroCards />

        {/* 3. About Section with Interactive Care Accordion & Rounded Image */}
        <AboutSection />

        {/* 4. Trust and Partnership Banner with Sage Green Background & Key Stats */}
        <TrustBanner />

        {/* 5. Approach Section with 3 Rounded Feature Cards */}
        <ApproachSection />

        {/* 6. Comprehensive Services Grid (All 7 Elohim Services with Modal Details) */}
        <ServicesSection />

        {/* 7. Real Facilities Gallery of Itaboraí with Interactive Lightbox */}
        <FacilitiesGallery />

        {/* 8. Multidisciplinary Technical & Medical Team with Real Credentials */}
        <TeamSection />

        {/* 9. Real Family Testimonials & Cicero Quote Banner */}
        <TestimonialsSection />

        {/* 10. Work With Us Banner for Recruitment */}
        <WorkWithUsBanner />

        {/* 11. Contact Section Exclusively for Itaboraí with Map & WhatsApp Form */}
        <ContactSection />
      </main>

      {/* Footer with Legal Modals & Author Credits */}
      <Footer />

      {/* Sticky Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
