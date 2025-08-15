// src/pages/HomePage.jsx
import React from 'react';
import HeroBanner   from '@components/HeroBanner';
import ServiceCards from '@components/ServiceCards';
import InsightSection from '../components/InsightSection';
import BlogCarousel from '@components/BlogCarousel';
import CTASection   from '@components/CTASection';
import Footer       from '@components/Footer';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ServiceCards />
      <InsightSection />
      <BlogCarousel />
      <CTASection />
      <Footer />
    </>
  );
}
