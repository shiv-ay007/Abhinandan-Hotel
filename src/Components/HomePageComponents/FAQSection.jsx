import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What are the check-in and check-out timings?',
      a: 'Standard check-in is from 12:00 PM and check-out is at 11:00 AM. If you have an early morning or late night train at Gondia Junction, early check-in or late check-out is accommodated subject to availability upon contacting our 24/7 reception desk.',
    },
    {
      q: 'How does the ₹450 Single Bed Stay work?',
      a: 'The ₹450/night single bed is designed specifically for solo travelers, backpackers, exam attendees, and transit passengers. It includes a comfortable single bed with freshly laundered sheets, pillow, high-speed Wi-Fi, clean shared/attached bathroom facilities, and secure luggage storage.',
    },
    {
      q: 'What is included in the ₹1,800 Deluxe AC Room?',
      a: 'The ₹1,800/night Deluxe Room is a fully private, spacious air-conditioned room with a King/Queen bed, attached bathroom with 24/7 running hot water geyser, LED television, free Wi-Fi, daily housekeeping, and room service.',
    },
    {
      q: 'How does the Razorpay Demo payment checkout work?',
      a: 'Our website features an integrated Razorpay payment gateway simulation. You can enter your booking dates and guest details, test the checkout using UPI QR (PhonePe/Google Pay/Paytm) or Test Card, and receive an instant digital booking confirmation voucher and WhatsApp receipt.',
    },
    {
      q: 'How far is the guest house from Gondia Railway Station?',
      a: 'We are situated in Goushala Ward, just 1.2 kilometers (around 5 minutes by auto-rickshaw or e-rickshaw) from Gondia Junction Railway Station, right near Gandhi Pratima and behind Kushal Bhawan.',
    },
    {
      q: 'What identification documents are needed at check-in?',
      a: 'Every adult guest must present a valid Government-issued photo ID (Aadhaar Card, Voter ID, Driving License, or Passport). PAN cards are not accepted as valid address proof per local municipal hotel regulations.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 border border-amber-200/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Everything you need to know about booking, rooms, and staying at Abhinandan Guest House Gondia.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-stone-200 rounded-2xl overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left bg-stone-50/60 hover:bg-stone-50 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-stone-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-600 text-white border-amber-600' : 'text-stone-500'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>
                {isOpen && (
                  <div className="p-5 pt-3 bg-white text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
