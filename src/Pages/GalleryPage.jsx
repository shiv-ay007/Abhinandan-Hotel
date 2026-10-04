import React from 'react';
import PhotoGallerySection from '../Components/HomePageComponents/PhotoGallerySection';

const GalleryPage = () => {
  return (
    <div className="pt-6 bg-stone-50">
      <div className="bg-stone-900 text-white py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/20 border border-amber-500/30 px-3.5 py-1.5 rounded-full inline-block">
            Verified Property Photos
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Hotel Photo Gallery
          </h1>
          <p className="text-sm sm:text-base text-stone-300">
            Real, unedited photos of our bedrooms, beds, and facilities at Abhinandan Guest House Gondia.
          </p>
        </div>
      </div>

      <PhotoGallerySection />
    </div>
  );
};

export default GalleryPage;
