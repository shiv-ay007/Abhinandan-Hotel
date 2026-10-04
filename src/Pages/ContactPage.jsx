import React, { useState } from 'react';
import LocationSection from '../Components/HomePageComponents/LocationSection';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { hotelInfo } from '../assets/hotelImages';

const ContactPage = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="pt-6 bg-stone-50">
      <div className="bg-stone-900 text-white py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/20 border border-amber-500/30 px-3.5 py-1.5 rounded-full inline-block">
            24/7 Reception & Help Desk
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Contact & Directions
          </h1>
          <p className="text-sm sm:text-base text-stone-300">
            Reach out directly for booking inquiries, train pickup advice, or directions in Gondia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Direct Phone */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-stone-900 text-base mb-1">Phone Reception</h3>
            <p className="text-xs text-stone-500 mb-4">24 Hours Front Desk</p>
            <a
              href={`tel:${hotelInfo.contact.phone}`}
              className="inline-block py-2 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs"
            >
              {hotelInfo.contact.phone}
            </a>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-bold text-stone-900 text-base mb-1">WhatsApp Chat</h3>
            <p className="text-xs text-stone-500 mb-4">Fastest response for queries</p>
            <a
              href={`https://wa.me/${hotelInfo.contact.whatsapp}?text=Hello%20Abhinandan%20Guest%20House,%20I%20have%20an%20inquiry.`}
              target="_blank"
              rel="noreferrer"
              className="inline-block py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Card 3: Address */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-stone-900 text-base mb-1">Gondia Location</h3>
            <p className="text-xs text-stone-500 mb-2">Gandhi Pratima, Behind Kushal Bhawan</p>
            <p className="text-xs text-stone-700 font-semibold">Gondia, 441601, Maharashtra</p>
          </div>
        </div>

        {/* Quick Inquiry Form */}
        <div className="mt-12 bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-sm max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-stone-900 mb-2">Send an Inquiry / Message</h3>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            Have a special requirement or group booking? Fill in your details below and our desk will get back to you immediately.
          </p>

          {formSent ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
              <CheckCircle size={32} className="text-emerald-600 mx-auto" />
              <h4 className="font-bold text-emerald-900 text-base">Inquiry Received!</h4>
              <p className="text-xs text-emerald-700">
                Thank you, {formData.name}. Our manager will call you at {formData.phone} shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm outline-none focus:border-amber-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm outline-none focus:border-amber-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Message / Booking Query *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us what you need (e.g. 2 single beds for 3 nights, late check-in)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm outline-none focus:border-amber-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={16} />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>

      <LocationSection />
    </div>
  );
};

export default ContactPage;
