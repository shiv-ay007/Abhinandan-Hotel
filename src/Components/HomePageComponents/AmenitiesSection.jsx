import React from 'react';
import {
  Wifi,
  Wind,
  Droplets,
  Sparkles,
  Clock,
  ShieldCheck,
  Tv,
  Coffee,
  Car,
  MapPin,
  Lock,
  Zap,
} from 'lucide-react';

const AmenitiesSection = () => {
  const amenities = [
    {
      icon: Wind,
      title: 'Powerful Air Conditioning',
      desc: 'High-performance split AC units in all deluxe rooms to keep you cool and relaxed.',
    },
    {
      icon: Droplets,
      title: '24/7 Hot & Cold Water',
      desc: 'Instant geysers and constant running water in clean attached bathrooms.',
    },
    {
      icon: Wifi,
      title: 'High-Speed Free Wi-Fi',
      desc: 'Fast internet across all floors for business travelers, streaming, and remote work.',
    },
    {
      icon: Sparkles,
      title: 'Spotless Hygiene & Fresh Linens',
      desc: 'Daily housekeeping with sanitized bedsheets, clean pillow covers, and fresh towels.',
    },
    {
      icon: Clock,
      title: '24-Hour Front Desk',
      desc: 'Late-night train arrival? Our reception desk is open 24/7 to welcome you anytime.',
    },
    {
      icon: ShieldCheck,
      title: 'Safe & CCTV Monitored',
      desc: '24x7 security monitoring and luggage lockers for peace of mind, especially for solo guests.',
    },
    {
      icon: Zap,
      title: 'Continuous Power Backup',
      desc: 'Reliable inverter power backup ensuring uninterrupted lighting, fans, and charging.',
    },
    {
      icon: MapPin,
      title: 'Center of Gondia Town',
      desc: 'Just behind Kushal Bhawan and steps from Gandhi Pratima. 5 mins to Railway Station.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 border border-amber-200/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Hotel Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Thoughtful Amenities For a <br />
            <span className="text-amber-600 font-serif-luxury italic font-medium">
              Seamless & Restful Stay
            </span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            Everything you need for a restful stay in Gondia without paying overpriced luxury hotel bills.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-stone-50/70 border border-stone-200/80 hover:border-amber-300 hover:bg-amber-50/30 transition duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 text-amber-600 flex items-center justify-center mb-4 shadow-xs group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-1">{item.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
