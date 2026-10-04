import React from 'react';
import Hero from '../Components/HomePageComponents/Hero';
import QuickHighlights from '../Components/HomePageComponents/QuickHighlights';
import RoomsSection from '../Components/HomePageComponents/RoomsSection';
import AmenitiesSection from '../Components/HomePageComponents/AmenitiesSection';
import PhotoGallerySection from '../Components/HomePageComponents/PhotoGallerySection';
import AboutSection from '../Components/HomePageComponents/AboutSection';
import LocationSection from '../Components/HomePageComponents/LocationSection';
import TestimonialsSection from '../Components/HomePageComponents/TestimonialsSection';
import FAQSection from '../Components/HomePageComponents/FAQSection';

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-stone-50">
      <Hero />
      <QuickHighlights />
      <RoomsSection />
      <AmenitiesSection />
      <PhotoGallerySection />
      <AboutSection />
      <LocationSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
};

export default Home;