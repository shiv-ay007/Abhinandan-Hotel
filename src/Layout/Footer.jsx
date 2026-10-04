import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  CreditCard,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { hotelInfo, roomData } from '../assets/hotelImages';
import { useBooking } from '../context/BookingContext';

const Footer = () => {
  const { openBooking } = useBooking();

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      {/* Upper Booking Call-to-Action Strip */}
      <div className="border-b border-stone-800/80 bg-gradient-to-r from-stone-900 via-stone-900 to-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles size={13} /> Instant Online Reservation
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Plan Your Stay in Gondia Today
              </h3>
              <p className="text-sm text-stone-400 mt-1 max-w-xl">
                Stay at Gondia's most convenient guest house. Single beds at ₹450 & Deluxe AC rooms at ₹1800 with demo Razorpay instant payment.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${hotelInfo.contact.phone}`}
                className="px-5 py-3 rounded-xl border border-stone-700 hover:border-stone-500 text-white font-semibold text-sm transition flex items-center gap-2"
              >
                <Phone size={16} />
                <span>Call Reception</span>
              </a>
              <button
                onClick={() => openBooking()}
                className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-lg shadow-amber-600/20 transition flex items-center gap-2 cursor-pointer"
              >
                <span>Book with Razorpay</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info & Address */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                A
              </div>
              <div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  Abhinandan <span className="text-amber-500">Guest House</span>
                </h4>
                <p className="text-[11px] text-stone-400 uppercase tracking-widest">
                  Gondia • Maharashtra
                </p>
              </div>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed max-w-md">
              A peaceful, clean, and welcoming haven right in the heart of Gondia. Offering comfortable single beds for budget travelers and spacious air-conditioned rooms for families and corporate visitors.
            </p>

            {/* Official Address */}
            <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Hotel Address:</strong>
                  <span>{hotelInfo.address.full}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-1 border-t border-stone-800/60">
                <Clock size={15} className="text-amber-500 shrink-0" />
                <span>Check-In: 12:00 PM • Check-Out: 11:00 AM • Front Desk 24/7</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-stone-200">
              Explore
            </h5>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link to="/" className="hover:text-amber-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-amber-400 transition">
                  Rooms & Pricing
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-400 transition">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition">
                  About Guest House
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition">
                  Directions & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Rooms & Pricing */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-stone-200">
              Tariff & Stays
            </h5>
            <ul className="space-y-2.5 text-sm">
              {roomData.map((room) => (
                <li key={room.id} className="text-stone-400">
                  <button
                    onClick={() => openBooking({ roomId: room.id })}
                    className="text-left hover:text-amber-400 transition group flex flex-col"
                  >
                    <span className="text-white font-medium group-hover:text-amber-400">
                      {room.name}
                    </span>
                    <span className="text-xs text-amber-500 font-bold">
                      ₹{room.price} {room.priceLabel}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-stone-200">
              Direct Assistance
            </h5>
            <div className="space-y-2 text-xs text-stone-400">
              <a
                href={`tel:${hotelInfo.contact.phone}`}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 hover:border-amber-500/50 transition"
              >
                <Phone size={15} className="text-amber-500 shrink-0" />
                <span>{hotelInfo.contact.phone}</span>
              </a>

              <a
                href={`https://wa.me/${hotelInfo.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-950/40 border border-emerald-900/50 text-emerald-300 hover:bg-emerald-950/70 transition"
              >
                <MessageCircle size={15} className="text-emerald-400 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="pt-2 flex items-center gap-2 text-[11px] text-stone-500">
                <CreditCard size={14} className="text-amber-500" />
                <span>Razorpay Demo Online & Cash at Desk Accepted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-900 bg-stone-950 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} {hotelInfo.name}, Gondia. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Goushala Ward • Gondia 441601</span>
            <span>•</span>
            <span>Razorpay Payment Enabled</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
