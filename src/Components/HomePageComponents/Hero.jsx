import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  Users,
  MapPin,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Bed,
} from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { hotelImages, hotelInfo } from '../../assets/hotelImages';

const Hero = () => {
  const { openBooking, bookingDetails, setBookingDetails } = useBooking();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Top hotel images
  const heroSlides = hotelImages.slice(0, 6);

  // Smooth auto slide
  useEffect(() => {
    if (heroSlides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    openBooking({
      checkIn: bookingDetails.checkIn,
      checkOut: bookingDetails.checkOut,
      guests: bookingDetails.guests,
    });
  };

  return (
    <section className="relative w-full bg-stone-950 text-white overflow-hidden pb-12 sm:pb-20">
      {/* Background Carousel with low blur & bright visibility */}
      <div className="relative min-h-[500px] sm:min-h-[600px] lg:h-[680px] w-full overflow-hidden flex flex-col justify-center">
        {heroSlides.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-102 pointer-events-none'
            }`}
          >
            <img
              src={img}
              alt={`Abhinandan Guest House Gondia photo ${idx + 1}`}
              className="w-full h-full object-cover object-center brightness-95 contrast-105"
            />
          </div>
        ))}

        {/* Soft, minimal gradients: clear and bright photo visibility */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/35 to-transparent" />

        {/* Carousel Slide Indicators */}
        <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === i ? 'w-6 sm:w-8 bg-amber-400' : 'w-1.5 sm:w-2 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl space-y-3 sm:space-y-4"
          >
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-500/30 border border-amber-400/40 backdrop-blur-md text-amber-300 text-[10px] sm:text-xs font-semibold shadow-md"
            >
              <Sparkles size={12} className="text-amber-400" />
              <span>Gondia's Preferred Hotel & Guest House</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white drop-shadow-md"
            >
              Stay in Comfort, <br />
              <span className="text-amber-400 font-serif-luxury italic font-medium">
                Priced with Care.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-stone-200 text-xs sm:text-base leading-relaxed max-w-xl drop-shadow-sm"
            >
              Experience spotlessly clean rooms, restful sleep, and warm hospitality in prime Gondia.
              Deluxe AC Rooms at <strong className="text-white font-bold">₹1,800/night</strong> and Single Bed Stays at just <strong className="text-amber-400 font-bold">₹450/night</strong>.
            </motion.p>

            {/* Address Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-stone-300 pt-0.5"
            >
              <MapPin size={13} className="text-amber-400 shrink-0" />
              <span className="line-clamp-1">Goushala Ward, Near Gandhi Pratima, Behind Kushal Bhawan, Gondia</span>
            </motion.div>

            {/* Quick Action Buttons - Compact & Elegant Width */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openBooking({ roomId: 'deluxe-room' })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-amber-600/30 transition cursor-pointer active:scale-95"
              >
                <span>Book Deluxe (₹1,800)</span>
                <ArrowRight size={14} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openBooking({ roomId: 'single-bed' })}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-semibold text-xs sm:text-sm transition cursor-pointer active:scale-95"
              >
                <Bed size={14} className="text-amber-400" />
                <span>Single Bed (₹450)</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Interactive Quick-Booking Bar */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="relative -mt-12 sm:-mt-16 z-30 max-w-6xl mx-auto px-3 sm:px-6"
      >
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-stone-200/80 p-3.5 sm:p-6 text-stone-900">
          <form onSubmit={handleSearchSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4 items-center">
              {/* Field 1: Room Choice */}
              <div className="p-2.5 sm:p-3 bg-stone-50 rounded-xl sm:rounded-2xl border border-stone-200 hover:border-amber-400 transition">
                <label className="text-[10px] sm:text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                  <Bed size={12} className="text-amber-600" /> Room / Bed Type
                </label>
                <select
                  value={bookingDetails.roomId || 'deluxe-room'}
                  onChange={(e) =>
                    setBookingDetails((prev) => ({ ...prev, roomId: e.target.value }))
                  }
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-stone-800 outline-none cursor-pointer py-0.5"
                >
                  <option value="deluxe-room">Deluxe AC Room (₹1,800)</option>
                  <option value="single-bed">Single Bed Stay (₹450)</option>
                  <option value="executive-room">Executive AC Room (₹1,800)</option>
                </select>
              </div>

              {/* Field 2: Check-In */}
              <div className="p-2.5 sm:p-3 bg-stone-50 rounded-xl sm:rounded-2xl border border-stone-200 hover:border-amber-400 transition">
                <label className="text-[10px] sm:text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                  <CalendarDays size={12} className="text-amber-600" /> Check-In
                </label>
                <input
                  type="date"
                  value={bookingDetails.checkIn}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) =>
                    setBookingDetails((prev) => ({ ...prev, checkIn: e.target.value }))
                  }
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-stone-800 outline-none cursor-pointer py-0.5"
                />
              </div>

              {/* Field 3: Check-Out */}
              <div className="p-2.5 sm:p-3 bg-stone-50 rounded-xl sm:rounded-2xl border border-stone-200 hover:border-amber-400 transition">
                <label className="text-[10px] sm:text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                  <CalendarDays size={12} className="text-amber-600" /> Check-Out
                </label>
                <input
                  type="date"
                  value={bookingDetails.checkOut}
                  min={bookingDetails.checkIn}
                  onChange={(e) =>
                    setBookingDetails((prev) => ({ ...prev, checkOut: e.target.value }))
                  }
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-stone-800 outline-none cursor-pointer py-0.5"
                />
              </div>

              {/* Field 4: Guests */}
              <div className="p-2.5 sm:p-3 bg-stone-50 rounded-xl sm:rounded-2xl border border-stone-200 hover:border-amber-400 transition">
                <label className="text-[10px] sm:text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                  <Users size={12} className="text-amber-600" /> Guests
                </label>
                <select
                  value={bookingDetails.guests}
                  onChange={(e) =>
                    setBookingDetails((prev) => ({ ...prev, guests: Number(e.target.value) }))
                  }
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-stone-800 outline-none cursor-pointer py-0.5"
                >
                  <option value={1}>1 Solo Guest</option>
                  <option value={2}>2 Guests (1 Room)</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4+ Family / Group</option>
                </select>
              </div>

              {/* CTA Button */}
              <div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full h-full min-h-[48px] sm:min-h-[54px] rounded-xl sm:rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-amber-600/30 transition flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <ShieldCheck size={16} />
                  <span>Pay with Razorpay</span>
                </motion.button>
              </div>
            </div>
          </form>

          {/* Quick Perks Bar */}
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between text-[11px] sm:text-xs text-stone-500 gap-1.5">
            <span className="flex items-center gap-1">
              <ShieldCheck size={13} className="text-emerald-600 shrink-0" /> Demo Razorpay Instant Booking
            </span>
            <span className="hidden sm:inline">•</span>
            <span>24/7 Check-in</span>
            <span className="hidden sm:inline">•</span>
            <span>5 Mins to Gondia Junction</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;