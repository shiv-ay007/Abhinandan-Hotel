import React from 'react';
import AboutSection from '../Components/HomePageComponents/AboutSection';
import AmenitiesSection from '../Components/HomePageComponents/AmenitiesSection';
import TestimonialsSection from '../Components/HomePageComponents/TestimonialsSection';

const AboutPage = () => {
  return (
    <div className="pt-6 bg-stone-50">
      <div className="bg-stone-900 text-white py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/20 border border-amber-500/30 px-3.5 py-1.5 rounded-full inline-block">
            Our Hospitality & Story
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            About Abhinandan Guest House
          </h1>
          <p className="text-sm sm:text-base text-stone-300">
            Providing clean, peaceful, and honest hospitality in central Gondia for travelers and families.
          </p>
        </div>
      </div>

      <AboutSection />
      <AmenitiesSection />
      <TestimonialsSection />
    </div>
  );
};

export default AboutPage;
