import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Bed,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { roomData } from '../../assets/hotelImages';
import { useBooking } from '../../context/BookingContext';

const RoomsSection = () => {
  const { openBooking } = useBooking();
  const [activeImageIndexes, setActiveImageIndexes] = useState({
    'deluxe-room': 0,
    'single-bed': 0,
    'executive-room': 0,
  });

  const nextRoomImage = (roomId, max) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [roomId]: (prev[roomId] + 1) % max,
    }));
  };

  const prevRoomImage = (roomId, max) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [roomId]: prev[roomId] === 0 ? max - 1 : prev[roomId] - 1,
    }));
  };

  return (
    <section id="rooms" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 border border-amber-200/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Rooms & Accommodations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight">
              Comfortable Stays For <br />
              <span className="text-amber-600 font-serif-luxury italic font-medium">
                Every Budget & Traveler
              </span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
              Whether you are visiting Gondia for business, transit, or a family function, our rooms are designed to provide clean, quiet, and deeply restful stays.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openBooking({ roomId: 'deluxe-room' })}
              className="px-5 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-amber-600/20 transition flex items-center gap-2 cursor-pointer"
            >
              <Sparkles size={16} />
              <span>Instant Room Booking</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {roomData.map((room, idx) => {
            const currentImgIndex = activeImageIndexes[room.id] || 0;
            const currentImg = room.images[currentImgIndex] || room.images[0];

            return (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group bg-stone-50/50 rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-2xl hover:border-amber-300 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Carousel Container */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-200">
                    <img
                      src={currentImg}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-amber-500 text-stone-950 shadow-md">
                        {room.badge}
                      </span>
                    </div>

                    {/* Price Tag in Image */}
                    <div className="absolute bottom-4 left-4 z-10 text-white">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-amber-400">
                          ₹{room.price}
                        </span>
                        <span className="text-xs font-medium text-stone-200">
                          / night
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-300 font-medium">{room.bed}</p>
                    </div>

                    {/* Image navigation controls if multiple images */}
                    {room.images.length > 1 && (
                      <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition px-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevRoomImage(room.id, room.images.length);
                          }}
                          className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition"
                          aria-label="Previous photo"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextRoomImage(room.id, room.images.length);
                          }}
                          className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition"
                          aria-label="Next photo"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    )}

                    {/* Photo Dots */}
                    <div className="absolute bottom-4 right-4 z-10 flex gap-1">
                      {room.images.slice(0, 5).map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all ${
                            currentImgIndex === i ? 'w-4 bg-amber-400' : 'w-1.5 bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Room Details Body */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Users size={14} className="text-amber-600" />
                        {room.capacity}
                      </span>
                      <span>{room.view}</span>
                    </div>

                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-700 transition">
                      {room.name}
                    </h3>

                    <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Key Amenities Chips */}
                    <div className="mt-5 pt-4 border-t border-stone-200">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2.5">
                        Room Features
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs text-stone-700">
                        {room.amenities.slice(0, 6).map((item, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer / Action */}
                <div className="p-6 pt-0">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => openBooking({ roomId: room.id })}
                    className="w-full py-3.5 rounded-2xl bg-stone-900 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Book Now • ₹{room.price}</span>
                    <ArrowRight size={15} />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
