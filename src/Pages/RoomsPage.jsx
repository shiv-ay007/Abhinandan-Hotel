import React from 'react';
import RoomsSection from '../Components/HomePageComponents/RoomsSection';
import AmenitiesSection from '../Components/HomePageComponents/AmenitiesSection';
import FAQSection from '../Components/HomePageComponents/FAQSection';
import { Sparkles, Bed, ShieldCheck, MapPin } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const RoomsPage = () => {
  const { openBooking } = useBooking();

  return (
    <div className="pt-6 bg-stone-50">
      {/* Banner */}
      <div className="bg-stone-900 text-white py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/20 border border-amber-500/30 px-3.5 py-1.5 rounded-full inline-block">
            Transparent Pricing • Zero Hidden Charges
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Rooms & Tariffs in Gondia
          </h1>
          <p className="text-sm sm:text-base text-stone-300">
            Choose from our Deluxe AC Rooms at ₹1,800/night or our budget Single Bed stays at ₹450/night.
          </p>
        </div>
      </div>

      <RoomsSection />
      <AmenitiesSection />
      <FAQSection />
    </div>
  );
};

export default RoomsPage;
