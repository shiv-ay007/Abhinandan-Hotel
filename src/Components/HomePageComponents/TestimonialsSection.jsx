import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const TestimonialsSection = () => {
  const reviews = [
    {
      name: 'Santosh Agrawal',
      city: 'Raipur, CG',
      stayType: 'Deluxe AC Room (₹1,800)',
      rating: 5,
      date: 'Visited last week',
      text: 'Stayed with my family for 2 nights for a wedding near Kushal Bhawan. The location was right behind the venue! Room was very clean, AC was powerful, and geyser had hot water 24 hours. Great experience in Gondia.',
    },
    {
      name: 'Vivek Meshram',
      city: 'Nagpur, MH',
      stayType: 'Single Bed Stay (₹450)',
      rating: 5,
      date: 'Transit Stay',
      text: 'Had an overnight transit connection at Gondia Junction. Getting a clean, secure bed at just ₹450 with clean bedsheets and charging point right by the bed was a blessing! Highly recommend to all solo travelers.',
    },
    {
      name: 'Priya Kulkarni',
      city: 'Pune, MH',
      stayType: 'Deluxe Room (₹1,800)',
      rating: 5,
      date: 'Business Visit',
      text: 'Booked online via demo Razorpay and checked in at 11 PM without any hassle. The staff is polite, respectful, and the room was peaceful for a good night sleep. Gandhi Pratima is just around the corner.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Guest Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Trusted by Travelers & Families Visiting Gondia
          </h2>
          <div className="flex items-center justify-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-amber-500 fill-amber-500" />
            ))}
            <span className="text-xs font-bold text-stone-700 ml-2">4.8 / 5.0 Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                    {r.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-6">
                  "{r.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">{r.name}</h4>
                  <p className="text-[11px] text-stone-500">{r.city}</p>
                </div>
                <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
                  {r.stayType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
