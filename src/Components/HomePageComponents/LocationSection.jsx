import React from 'react';
import {
  MapPin,
  Navigation,
  Train,
  Bus,
  Clock,
  Phone,
  MessageCircle,
  ExternalLink,
  Building,
} from 'lucide-react';
import { hotelInfo } from '../../assets/hotelImages';

const LocationSection = () => {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Abhinandan Guest House Goushala Ward Near Gandhi Pratima Behind Kushal Bhawan Gondia Maharashtra 441601'
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 border border-amber-200/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Prime Central Location
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            How to Reach <br />
            <span className="text-amber-600 font-serif-luxury italic font-medium">
              Abhinandan Guest House
            </span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            Conveniently situated right in Gondia city with effortless connectivity to the railway station, markets, and municipal centers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address & Connectivity Card */}
          <div className="lg:col-span-5 bg-stone-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold">
                <Building size={14} /> Official Address
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{hotelInfo.name}</h3>
                <p className="text-stone-300 text-sm leading-relaxed font-medium">
                  {hotelInfo.address.full}
                </p>
              </div>

              {/* Transit Distances */}
              <div className="space-y-3 pt-3 border-t border-stone-800 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-stone-300">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <strong className="text-white block">Gandhi Pratima:</strong>
                    <span>100m away (1 minute easy walk)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-stone-300">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Building size={16} />
                  </div>
                  <div>
                    <strong className="text-white block">Kushal Bhawan:</strong>
                    <span>Directly behind the premises</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-stone-300">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Train size={16} />
                  </div>
                  <div>
                    <strong className="text-white block">Gondia Railway Junction (G):</strong>
                    <span>1.2 km (5 minutes by auto-rickshaw or e-rickshaw)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-stone-300">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Bus size={16} />
                  </div>
                  <div>
                    <strong className="text-white block">Gondia Central Bus Station:</strong>
                    <span>1.8 km (7 minutes)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Auto Tip Box */}
            <div className="mt-8 pt-6 border-t border-stone-800">
              <div className="bg-stone-800/80 rounded-2xl p-4 text-xs text-stone-300 space-y-1">
                <p className="font-bold text-amber-400">💡 Auto-Rickshaw Tip:</p>
                <p>
                  "Station se nikal kar auto wale ko bolen: <em>Gandhi Pratima ke paas, Goushala ward, Kushal Bhawan ke piche jana hai.</em>" (Auto fare usually ₹30-50).
                </p>
              </div>

              <div className="mt-4 flex gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition"
                >
                  <Navigation size={15} />
                  <span>Get Google Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map & Direct Inquiries */}
          <div className="lg:col-span-7 bg-stone-50 rounded-3xl border border-stone-200 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Map & Visual Directions</h3>
                  <p className="text-xs text-stone-500">
                    Gondia - 441601, Maharashtra, India
                  </p>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* Map Embed Container */}
              <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-stone-300 relative shadow-inner bg-stone-200">
                <iframe
                  title="Abhinandan Guest House Gondia Location"
                  src="https://maps.google.com/maps?q=Gondia%20Railway%20Station%20Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              {/* Quick Contacts Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${hotelInfo.contact.phone}`}
                  className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 transition flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">
                      Direct Phone
                    </span>
                    <span className="text-sm font-bold text-stone-900">
                      {hotelInfo.contact.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${hotelInfo.contact.whatsapp}?text=Hello%20Abhinandan%20Guest%20House,%20I%20need%20assistance%20with%20directions.`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 transition flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">
                      WhatsApp Help
                    </span>
                    <span className="text-sm font-bold text-stone-900">
                      Instant Directions
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
