import React from 'react';
import HeroBanner from '@components/Herobanner';
import ServiceCards from '@components/ServiceCards';
import InsightSection from '@components/InsightSection';
import Partners from '@components/Partners';
import BlogCarousel from '@components/BlogCarousel';
import CTASection from '@components/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      {/* Leadership Team Section */}
      
      {/* Wrap content sections in a container for proper spacing and max-width */}
      <div id="services" className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <ServiceCards />
        <InsightSection />
        <Partners />
        <BlogCarousel />
      </div>
      <div id="contact">
        <CTASection />
      </div>
    </>
  );
}
