import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Image as ImageIcon,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { hotelImages } from '../../assets/hotelImages';

const PhotoGallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [filter, setFilter] = useState('all');

  // Categorize images
  const categorizedImages = hotelImages.map((img, idx) => {
    let category = 'rooms';
    let label = 'Deluxe Room View';

    if (idx === 0 || idx === 1) {
      category = 'rooms';
      label = 'Deluxe Air-Conditioned Bedroom';
    } else if (idx === 2 || idx === 3 || idx === 4) {
      category = 'single';
      label = 'Single Bed & Clean Linen Stay';
    } else if (idx === 5 || idx === 6 || idx === 7) {
      category = 'interior';
      label = 'Guest House Interior & Corridor';
    } else if (idx % 2 === 0) {
      category = 'rooms';
      label = 'Spacious Guest Accommodation';
    } else {
      category = 'facilities';
      label = 'Clean Facilities & Amenities';
    }

    return { img, category, label, index: idx };
  });

  const filteredImages =
    filter === 'all'
      ? categorizedImages
      : categorizedImages.filter((item) => item.category === filter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % hotelImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex === 0 ? hotelImages.length - 1 : lightboxIndex - 1));
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-stone-100/70 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100/80 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Real Photos & Cleanliness
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Take a Visual Tour of <br />
            <span className="text-amber-600 font-serif-luxury italic font-medium">
              Abhinandan Guest House
            </span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3">
            Every photo shown here is taken directly at our property in Gondia. What you see is exactly what you get: clean, quiet, and well-maintained rooms.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {[
              { id: 'all', label: 'All Photos (17)' },
              { id: 'rooms', label: 'Deluxe Rooms' },
              { id: 'single', label: 'Single Bed Stays' },
              { id: 'interior', label: 'Interior & Corridors' },
            ].map((btn) => (
              <motion.button
                key={btn.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  filter === btn.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                {btn.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {filteredImages.map((item) => (
            <motion.div
              layout
              key={item.index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(item.index)}
              className="group relative h-48 sm:h-64 rounded-2xl overflow-hidden bg-stone-200 border border-stone-200 cursor-pointer shadow-sm hover:shadow-xl transition duration-300"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/40 transition duration-300 flex flex-col justify-end p-3 sm:p-4 text-white opacity-0 group-hover:opacity-100">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300">
                  Photo #{item.index + 1}
                </span>
                <p className="text-xs font-semibold truncate">{item.label}</p>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Maximize2 size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/25 flex items-center justify-center z-50 transition cursor-pointer"
              aria-label="Close photo"
            >
              <X size={22} />
            </button>

            {/* Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/25 flex items-center justify-center z-50 transition cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/25 flex items-center justify-center z-50 transition cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>

            {/* Active Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={hotelImages[lightboxIndex]}
                alt={`Hotel Photo ${lightboxIndex + 1}`}
                className="max-h-[80vh] w-auto mx-auto object-contain rounded-xl"
              />
              <div className="bg-stone-900/90 text-white text-center py-2.5 px-4 text-xs flex justify-between items-center">
                <span>Abhinandan Guest House, Gondia</span>
                <span className="font-mono text-amber-400 font-bold">
                  {lightboxIndex + 1} / {hotelImages.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallerySection;
