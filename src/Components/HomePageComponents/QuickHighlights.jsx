import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Users, ShieldCheck, MapPin } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

const QuickHighlights = () => {
  const { openBooking } = useBooking();

  const highlights = [
    {
      title: 'Deluxe AC Rooms',
      price: '₹1,800',
      period: 'per night',
      desc: 'Double bed AC room with attached modern washroom, LED TV, and daily housekeeping.',
      badge: 'Best For Couples & Family',
      action: () => openBooking({ roomId: 'deluxe-room' }),
      btnText: 'Book Room',
      icon: Bed,
    },
    {
      title: 'Single Bed Stay',
      price: '₹450',
      period: 'per night',
      desc: 'Spotless clean single bed stay with clean linen, high-speed Wi-Fi & safe storage.',
      badge: 'Best Budget For Solo Travelers',
      action: () => openBooking({ roomId: 'single-bed' }),
      btnText: 'Book Single Bed',
      icon: Users,
    },
    {
      title: 'Prime Gondia Location',
      price: '1 Min',
      period: 'walk to Gandhi Pratima',
      desc: 'Located at Goushala Ward, Behind Kushal Bhawan. Just 5 minutes from Gondia Railway Station.',
      badge: 'Central Gondia Hub',
      action: null,
      btnText: null,
      icon: MapPin,
    },
    {
      title: 'Razorpay Instant Booking',
      price: '100%',
      period: 'instant confirmation',
      desc: 'Seamless demo Razorpay checkout with UPI QR, cards, and automatic booking voucher.',
      badge: 'Secure & Verified',
      action: () => openBooking(),
      btnText: 'Reserve Now',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-12 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100/70 px-3 py-1 rounded-full">
            Why Stay at Abhinandan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2">
            Affordable Luxury, Unmatched Convenience
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            Choose between private air-conditioned rooms or affordable single bed stays in Gondia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-100 text-stone-600">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900">{item.title}</h3>

                  <div className="mt-2 mb-3 flex items-baseline gap-1">
                    <span className="text-2xl font-black text-amber-700">{item.price}</span>
                    <span className="text-xs text-stone-500 font-medium">{item.period}</span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                </div>

                {item.action && (
                  <div className="pt-5 mt-4 border-t border-stone-100">
                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      onClick={item.action}
                      className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-amber-600 text-white font-bold text-xs transition cursor-pointer"
                    >
                      {item.btnText}
                    </motion.button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickHighlights;
