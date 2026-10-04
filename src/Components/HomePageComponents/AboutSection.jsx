import React from 'react';
import { Check, MapPin, Award, HeartHandshake, Phone, ArrowRight } from 'lucide-react';
import { hotelImages, hotelInfo } from '../../assets/hotelImages';
import { useBooking } from '../../context/BookingContext';

const AboutSection = () => {
  const { openBooking } = useBooking();

  return (
    <section id="about" className="py-16 sm:py-24 bg-stone-50 border-t border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image Mosaic with real hotel photos */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg border border-stone-200">
                  <img
                    src={hotelImages[0]}
                    alt="Abhinandan Guest House Gondia Room"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="h-44 sm:h-52 rounded-3xl overflow-hidden shadow-lg border border-stone-200">
                  <img
                    src={hotelImages[2]}
                    alt="Clean Single Bed Accommodation"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="h-44 sm:h-52 rounded-3xl overflow-hidden shadow-lg border border-stone-200">
                  <img
                    src={hotelImages[1]}
                    alt="Neat and Tidy Room Interior"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg border border-stone-200">
                  <img
                    src={hotelImages[3]}
                    alt="Comfortable bedding at Abhinandan Guest House"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-900/90 backdrop-blur-md text-white p-5 rounded-3xl shadow-2xl border border-white/20 text-center">
              <Award className="mx-auto text-amber-400 mb-1" size={26} />
              <p className="text-xl font-black">Central Gondia</p>
              <p className="text-[11px] text-amber-400 font-medium">Near Gandhi Pratima</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
                About Abhinandan Guest House
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-tight">
                Authentic Hospitality in the <br />
                <span className="text-amber-600 font-serif-luxury italic font-medium">
                  Heart of Gondia, Maharashtra
                </span>
              </h2>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Situated in Goushala Ward, just steps away from the iconic <strong>Gandhi Pratima</strong> and directly behind <strong>Kushal Bhawan</strong>, Abhinandan Guest House is Gondia’s preferred destination for clean, secure, and genuinely budget-friendly lodging.
            </p>

            <p className="text-stone-600 text-sm leading-relaxed">
              We cater equally to solo travelers, transit railway passengers seeking an affordable bed at <strong>₹450/night</strong>, and families or professionals looking for full-service Deluxe AC comfort at <strong>₹1,800/night</strong>. Our staff is dedicated to ensuring you sleep peacefully, wake up refreshed, and feel right at home.
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 pt-2">
              {[
                'Prime location: Goushala Ward, near Gandhi Pratima, behind Kushal Bhawan',
                'Only 5 minutes drive from Gondia Junction (G) Railway Station',
                'Transparent pricing with zero hidden charges (Single Bed ₹450 | Deluxe Room ₹1800)',
                'Demo Razorpay checkout & 24/7 on-arrival check-in convenience',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Call / Book CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking()}
                className="px-6 py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-lg shadow-amber-600/25 transition flex items-center gap-2 cursor-pointer"
              >
                <span>Reserve Room Online</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={`tel:${hotelInfo.contact.phone}`}
                className="px-5 py-3.5 rounded-2xl border border-stone-300 hover:bg-stone-100 text-stone-800 font-bold text-sm transition flex items-center gap-2"
              >
                <Phone size={16} className="text-amber-600" />
                <span>Call {hotelInfo.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
