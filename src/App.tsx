import React, { useRef, useState, useEffect } from 'react';
import { LazyMotion, domAnimation } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { AboutTransitionSection } from './components/AboutTransitionSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { ReviewsSection } from './components/ReviewsSection';
import { VideosSection } from './components/VideosSection';
import { CoverageSection } from './components/CoverageSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { MobileFixedBar } from './components/MobileFixedBar';

export default function App() {
  const finalCtaRef = useRef<HTMLDivElement | null>(null);
  const [finalCtaInView, setFinalCtaInView] = useState(false);

  useEffect(() => {
    const target = finalCtaRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFinalCtaInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const handleAsteriskClick = () => {
    const el = document.getElementById('garantia');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen bg-[#0A0A0A] text-[#EFEBDD] font-sans selection:bg-[#EFEBDD] selection:text-[#0A0A0A] overflow-x-hidden">
        {/* Hanging Navbar */}
        <Navbar />

        {/* 1. Hero Section */}
        <Hero onAsteriskClick={handleAsteriskClick} />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. Services & Pricing Bento */}
        <ServicesSection />

        {/* 4. About Us (Scroll transition from dark #0A0A0A to light #F5F2EA) */}
        <AboutTransitionSection />

        {/* 5. How We Work & Guarantee */}
        <HowWeWorkSection />

        {/* 6. Real Google Reviews */}
        <ReviewsSection />

        {/* 7. Video Demonstrations (YouTube Shorts Lite-Embed) */}
        <VideosSection />

        {/* 8. Coverage & Corporate Clients */}
        <CoverageSection />

        {/* 9. Frequently Asked Questions */}
        <FaqSection />

        {/* 10. Final CTA (Inset like Hero) */}
        <FinalCtaSection sectionRef={finalCtaRef} />

        {/* 11. Footer */}
        <Footer />

        {/* Mobile Fixed Sticky Bar */}
        <MobileFixedBar finalCtaInView={finalCtaInView} />
      </div>
    </LazyMotion>
  );
}
