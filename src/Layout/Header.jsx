import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Calendar,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { hotelInfo } from '../assets/hotelImages';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBooking } = useBooking();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Pricing', path: '/rooms' },
    { name: 'Photo Gallery', path: '/gallery' },
    { name: 'About Hotel', path: '/about' },
    { name: 'Location & Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Notification Announcement Bar - Fully Mobile Responsive */}
      <div className="bg-stone-900 text-stone-300 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 truncate">
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-400 text-[9px] sm:text-[10px] uppercase font-bold px-1.5 sm:px-2 py-0.5 rounded-full border border-amber-500/30 shrink-0">
              <Sparkles size={10} /> Gondia
            </span>
            <span className="truncate text-stone-300 text-[10px] sm:text-xs">
              Single Bed <strong className="text-amber-400">₹450</strong> • Deluxe AC <strong className="text-amber-400">₹1,800/night</strong>
            </span>
          </div>
          <div className="flex items-center gap-3 text-stone-400 text-[11px] shrink-0">
            <span className="hidden md:flex items-center gap-1">
              <MapPin size={12} className="text-amber-400" />
              Gandhi Pratima, Gondia
            </span>
            <a
              href={`tel:${hotelInfo.contact.phone}`}
              className="flex items-center gap-1 text-amber-400 font-semibold hover:text-amber-300 transition"
            >
              <Phone size={11} className="shrink-0" />
              <span className="hidden xs:inline">{hotelInfo.contact.phone}</span>
              <span className="xs:hidden">Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="h-16 sm:h-20 flex items-center justify-between">
            {/* Brand Logo with Crown & Crest Badge */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-600 via-amber-700 to-stone-900 flex items-center justify-center text-white font-serif-luxury font-black text-xl sm:text-2xl shadow-md shadow-amber-600/20 group-hover:scale-105 transition border border-amber-400/30">
                A
              </div>
              <div className="leading-tight">
                <h1 className="text-sm sm:text-xl font-bold tracking-tight text-stone-900 group-hover:text-amber-700 transition">
                  Abhinandan <span className="font-light text-amber-600">Guest House</span>
                </h1>
                <p className="text-[8px] sm:text-[10px] tracking-widest text-stone-500 uppercase font-semibold">
                  Hotel & Stays • Gondia
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-semibold transition py-1 border-b-2 ${
                      isActive
                        ? 'text-amber-700 border-amber-600 font-bold'
                        : 'text-stone-600 border-transparent hover:text-stone-900 hover:border-stone-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Actions on Mobile and Desktop */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Primary Book Now CTA */}
              <button
                onClick={() => openBooking()}
                className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-amber-600/20 hover:shadow-lg transition flex items-center gap-1.5 sm:gap-2 cursor-pointer active:scale-95"
              >
                <Calendar size={14} className="shrink-0" />
                <span>Book Now</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-stone-100 transition active:scale-95 cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-3 shadow-2xl animate-fadeIn">
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                    location.pathname === link.path
                      ? 'bg-amber-50 text-amber-700 font-bold'
                      : 'text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-3 border-t border-stone-100 space-y-2">
              <div className="flex items-center gap-2 text-xs text-stone-500 py-1">
                <MapPin size={13} className="text-amber-600 shrink-0" />
                <span className="truncate">Goushala Ward, Near Gandhi Pratima, Gondia</span>
              </div>
              <a
                href={`tel:${hotelInfo.contact.phone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-800 hover:bg-stone-50 active:scale-98"
              >
                <Phone size={13} className="text-amber-600" /> Call: {hotelInfo.contact.phone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBooking();
                }}
                className="w-full py-2.5 rounded-xl bg-amber-600 text-white font-bold text-xs shadow-md active:scale-98"
              >
                Book Room / Single Bed (Demo Razorpay)
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;