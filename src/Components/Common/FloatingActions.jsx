import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { hotelInfo } from '../../assets/hotelImages';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappUrl = `https://wa.me/${hotelInfo.contact.whatsapp}?text=${encodeURIComponent(
    'Hello Abhinandan Guest House Gondia! I want to inquire about room booking.'
  )}`;

  return (
    <>
      {/* LEFT SIDE: Floating Call Icon Button (No Text, Mobile-Optimized) */}
      <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 select-none">
        <motion.a
          href={`tel:${hotelInfo.contact.phone}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white shadow-2xl flex items-center justify-center border-2 border-white/50 cursor-pointer group active:scale-90"
          title={`Call Hotel: ${hotelInfo.contact.phone}`}
          aria-label="Call hotel reception"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-amber-400 opacity-25 animate-ping pointer-events-none"></span>

          <FaPhoneAlt size={18} className="sm:text-[22px] group-hover:rotate-12 transition-transform drop-shadow" />
        </motion.a>
      </div>

      {/* RIGHT SIDE: Floating WhatsApp Icon Button & Scroll To Top (No Text, Mobile-Optimized) */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 select-none flex flex-col items-center gap-2.5 sm:gap-3">
        {/* Scroll To Top Button (Appears above WhatsApp on scroll) */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              key="scrollTopBtn"
              initial={{ opacity: 0, scale: 0.5, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 15 }}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-stone-900/90 hover:bg-stone-950 text-white shadow-xl backdrop-blur-md border border-stone-700/80 flex items-center justify-center cursor-pointer transition group active:scale-90"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp size={17} className="group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Floating Icon Button (No Text) */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl flex items-center justify-center border-2 border-white/50 cursor-pointer group active:scale-90"
          title="Chat on WhatsApp (8423517354)"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse notification dot */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-emerald-500 border-2 border-white"></span>
          </span>

          <FaWhatsapp size={24} className="sm:text-[28px] group-hover:scale-105 transition-transform drop-shadow" />
        </motion.a>
      </div>
    </>
  );
};

export default FloatingActions;
