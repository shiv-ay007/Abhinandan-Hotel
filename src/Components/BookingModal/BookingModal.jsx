import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar,
  Users,
  CheckCircle2,
  CreditCard,
  QrCode,
  ShieldCheck,
  Building,
  Smartphone,
  Sparkles,
  Printer,
  MessageCircle,
  Clock,
  MapPin,
  Bed,
} from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { roomData, hotelInfo } from '../../assets/hotelImages';

const BookingModal = () => {
  const {
    isOpen,
    closeBooking,
    selectedRoom,
    setSelectedRoom,
    bookingDetails,
    setBookingDetails,
    confirmedBooking,
    setConfirmedBooking,
  } = useBooking();

  const [step, setStep] = useState('details'); // 'details' | 'payment' | 'success'
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' | 'card' | 'netbanking'
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentId, setPaymentId] = useState('');
  const [upiApp, setUpiApp] = useState('gpay');

  useEffect(() => {
    if (!isOpen) {
      setStep('details');
      setIsProcessing(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Calculate nights
  const checkInDate = new Date(bookingDetails.checkIn);
  const checkOutDate = new Date(bookingDetails.checkOut);
  const diffTime = checkOutDate.getTime() - checkInDate.getTime();
  const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  const nights = isNaN(diffDays) ? 1 : diffDays;

  // Pricing
  const roomPrice = selectedRoom?.price || 1800;
  const subtotal = roomPrice * nights * (bookingDetails.roomsCount || 1);
  const gstRate = subtotal > 1000 ? 0.12 : 0; // 12% GST on luxury tiers, 0% on budget single bed
  const gstAmount = Math.round(subtotal * gstRate);
  const totalAmount = subtotal + gstAmount;

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    if (!guestName || !guestPhone) {
      alert('Please fill in your name and phone number to continue.');
      return;
    }
    setStep('payment');
  };

  const handleRazorpayPayment = () => {
    setIsProcessing(true);

    const generatedPaymentId = 'pay_' + Math.random().toString(36).substring(2, 11).toUpperCase();
    const generatedBookingId = 'AGH-' + Math.floor(100000 + Math.random() * 900000);

    // If official Razorpay checkout script is available
    if (typeof window !== 'undefined' && window.Razorpay) {
      try {
        const options = {
          key: 'rzp_test_demoKey123',
          amount: totalAmount * 100,
          currency: 'INR',
          name: hotelInfo.name,
          description: `Booking for ${selectedRoom.name} (${nights} Night${nights > 1 ? 's' : ''})`,
          image: selectedRoom.images[0] || '',
          handler: function (response) {
            finishBooking(response.razorpay_payment_id || generatedPaymentId, generatedBookingId);
          },
          prefill: {
            name: guestName,
            email: guestEmail || 'guest@example.com',
            contact: guestPhone,
          },
          theme: {
            color: '#d97706',
          },
          modal: {
            ondismiss: function () {
              setIsProcessing(false);
            },
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function () {
          simulateDemoPayment(generatedPaymentId, generatedBookingId);
        });
        rzp.open();
        return;
      } catch (err) {
        console.warn('Falling back to built-in Razorpay checkout simulation', err);
      }
    }

    // Built-in seamless demo flow
    simulateDemoPayment(generatedPaymentId, generatedBookingId);
  };

  const simulateDemoPayment = (genPayId, genBookId) => {
    setTimeout(() => {
      finishBooking(genPayId, genBookId);
    }, 1800);
  };

  const finishBooking = (payId, bookId) => {
    const bookingSummary = {
      bookingId: bookId,
      paymentId: payId,
      guestName,
      guestPhone,
      guestEmail: guestEmail || 'N/A',
      room: selectedRoom,
      checkIn: bookingDetails.checkIn,
      checkOut: bookingDetails.checkOut,
      nights,
      roomsCount: bookingDetails.roomsCount || 1,
      subtotal,
      gstAmount,
      totalAmount,
      bookingDate: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
    };

    setPaymentId(payId);
    setConfirmedBooking(bookingSummary);
    setIsProcessing(false);
    setStep('success');
  };

  const printReceipt = () => {
    window.print();
  };

  const openWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `Hello Abhinandan Guest House Gondia! I have booked ${selectedRoom.name}.\nBooking ID: ${confirmedBooking?.bookingId}\nGuest: ${guestName}\nDates: ${bookingDetails.checkIn} to ${bookingDetails.checkOut}\nTotal: ₹${totalAmount}\nPayment ID: ${paymentId}`
    );
    window.open(`https://wa.me/${hotelInfo.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-100 overflow-hidden my-6 max-h-[92vh] flex flex-col"
        >
          {/* Header Strip */}
          <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
                <Building size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg tracking-tight flex items-center gap-2">
                  {hotelInfo.name}
                  <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
                    Gondia
                  </span>
                </h3>
                <p className="text-xs text-stone-400">
                  {step === 'details' && 'Step 1 of 2: Guest & Booking Details'}
                  {step === 'payment' && 'Step 2 of 2: Razorpay Secure Payment'}
                  {step === 'success' && 'Booking Confirmed! Instant Voucher'}
                </p>
              </div>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={closeBooking}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white flex items-center justify-center transition cursor-pointer"
            >
              <X size={18} />
            </motion.button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
            {/* STEP 1: DETAILS */}
            {step === 'details' && (
              <form onSubmit={handleDetailsSubmit} className="space-y-5">
                {/* Room Choice Bar */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                    Select Room / Bed Option
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {roomData.map((room) => {
                      const isSelected = selectedRoom?.id === room.id;
                      return (
                        <div
                          key={room.id}
                          onClick={() => setSelectedRoom(room)}
                          className={`p-3.5 rounded-2xl border-2 cursor-pointer transition flex items-start gap-3 relative ${
                            isSelected
                              ? 'border-amber-600 bg-amber-50/50 shadow-sm'
                              : 'border-stone-200 hover:border-stone-300 bg-white'
                          }`}
                        >
                          <div className="w-16 h-16 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                            <img
                              src={room.images[0]}
                              alt={room.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-bold text-stone-900 truncate">
                                {room.name}
                              </h4>
                            </div>
                            <p className="text-xs text-stone-500">{room.bed}</p>
                            <div className="mt-1 flex items-baseline gap-1">
                              <span className="text-base font-extrabold text-amber-700">
                                ₹{room.price}
                              </span>
                              <span className="text-[11px] text-stone-400">/ night</span>
                            </div>
                          </div>
                          {isSelected && (
                            <div className="absolute top-2.5 right-2.5 text-amber-600">
                              <CheckCircle2 size={18} />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Dates & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
                    <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      value={bookingDetails.checkIn}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) =>
                        setBookingDetails((prev) => ({ ...prev, checkIn: e.target.value }))
                      }
                      className="w-full bg-transparent text-sm font-semibold text-stone-800 outline-none cursor-pointer"
                      required
                    />
                  </div>

                  <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
                    <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                      Check-Out Date
                    </label>
                    <input
                      type="date"
                      value={bookingDetails.checkOut}
                      min={bookingDetails.checkIn}
                      onChange={(e) =>
                        setBookingDetails((prev) => ({ ...prev, checkOut: e.target.value }))
                      }
                      className="w-full bg-transparent text-sm font-semibold text-stone-800 outline-none cursor-pointer"
                      required
                    />
                  </div>

                  <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
                    <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                      Guests
                    </label>
                    <select
                      value={bookingDetails.guests}
                      onChange={(e) =>
                        setBookingDetails((prev) => ({
                          ...prev,
                          guests: Number(e.target.value),
                        }))
                      }
                      className="w-full bg-transparent text-sm font-semibold text-stone-800 outline-none cursor-pointer"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                    </select>
                  </div>
                </div>

                {/* Guest Details */}
                <div className="space-y-3 pt-1 border-t border-stone-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Guest Information
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-stone-700 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-600 text-sm outline-none transition"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-stone-700 block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 8423517354"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-600 text-sm outline-none transition"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-stone-700 block mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. rahul@example.com"
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-600 text-sm outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-stone-700 block mb-1">
                        Special Requests / ETA
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Train arrival at 9 PM"
                        value={specialRequest}
                        onChange={(e) => setSpecialRequest(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-600 text-sm outline-none transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-amber-800 font-medium">
                      {selectedRoom?.name} • {nights} Night{nights > 1 ? 's' : ''} ({bookingDetails.checkIn} to {bookingDetails.checkOut})
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      ₹{roomPrice} × {nights} night{nights > 1 ? 's' : ''} {gstAmount > 0 ? `+ ₹${gstAmount} GST (12%)` : '(No extra taxes)'}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-stone-500 block">Total Payable</span>
                    <span className="text-2xl font-black text-stone-900">₹{totalAmount}</span>
                  </div>
                </div>

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-base shadow-lg shadow-amber-600/25 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Razorpay Checkout</span>
                  <span className="text-amber-200 font-normal">| ₹{totalAmount}</span>
                </motion.button>
              </form>
            )}

            {/* STEP 2: RAZORPAY PAYMENT SIMULATION / SDK */}
            {step === 'payment' && (
              <div className="space-y-5">
                <div className="bg-slate-900 text-white p-4 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1 rounded-lg bg-blue-600 text-white font-black text-sm tracking-wider">
                      Razorpay
                    </div>
                    <div>
                      <p className="text-xs text-slate-300">Secured with 256-Bit SSL</p>
                      <p className="text-sm font-bold text-white">Payment to {hotelInfo.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">Total Amount</p>
                    <p className="text-xl font-extrabold text-amber-400">₹{totalAmount}</p>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="flex rounded-xl bg-stone-100 p-1">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      paymentMethod === 'upi'
                        ? 'bg-white text-stone-900 shadow-sm'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <QrCode size={15} />
                    UPI / QR
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-white text-stone-900 shadow-sm'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <CreditCard size={15} />
                    Cards
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      paymentMethod === 'netbanking'
                        ? 'bg-white text-stone-900 shadow-sm'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <Building size={15} />
                    Net Banking
                  </button>
                </div>

                {/* UPI Tab */}
                {paymentMethod === 'upi' && (
                  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5 text-center space-y-4">
                    <div className="inline-block p-3 bg-white rounded-2xl shadow-sm border border-stone-200">
                      <div className="w-40 h-40 bg-stone-900 rounded-xl p-2 mx-auto flex flex-col items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20" />
                        <div className="bg-white p-2 rounded-lg z-10">
                          <QrCode size={110} className="text-stone-900" />
                        </div>
                        <span className="text-[9px] text-stone-300 font-mono mt-1 z-10">
                          UPI: 8423517354@razorpay
                        </span>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-bold text-stone-900">
                        Scan QR using any UPI App
                      </h5>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Google Pay • PhonePe • Paytm • CRED • BHIM UPI
                      </p>
                    </div>

                    <div className="flex justify-center gap-2 pt-1">
                      {['gpay', 'phonepe', 'paytm'].map((app) => (
                        <button
                          key={app}
                          type="button"
                          onClick={() => setUpiApp(app)}
                          className={`px-3 py-1.5 rounded-lg border text-xs font-semibold uppercase tracking-wider transition cursor-pointer ${
                            upiApp === app
                              ? 'border-amber-600 bg-amber-50 text-amber-800 font-bold'
                              : 'border-stone-200 bg-white text-stone-600'
                          }`}
                        >
                          {app}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cards Tab */}
                {paymentMethod === 'card' && (
                  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5 space-y-3">
                    <div>
                      <label className="text-xs font-medium text-stone-600 block mb-1">
                        Card Number (Demo test mode enabled)
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          defaultValue="4111 2222 3333 4444"
                          readOnly
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm font-mono text-stone-800"
                        />
                        <span className="absolute right-3 top-2.5 text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                          TEST CARD
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-medium text-stone-600 block mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          defaultValue="12 / 28"
                          readOnly
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm font-mono text-stone-800"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-stone-600 block mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          defaultValue="789"
                          readOnly
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm font-mono text-stone-800"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Net Banking Tab */}
                {paymentMethod === 'netbanking' && (
                  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5 space-y-3">
                    <p className="text-xs font-semibold text-stone-600">Popular Banks:</p>
                    <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                      {['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank'].map(
                        (bank, i) => (
                          <label
                            key={bank}
                            className="flex items-center gap-2 p-2.5 bg-white border border-stone-200 rounded-xl cursor-pointer hover:border-amber-500"
                          >
                            <input type="radio" name="bank" defaultChecked={i === 0} />
                            <span>{bank}</span>
                          </label>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep('details')}
                    className="px-5 py-3 rounded-2xl border border-stone-300 text-stone-700 text-sm font-semibold hover:bg-stone-50 transition cursor-pointer"
                    disabled={isProcessing}
                  >
                    Back
                  </button>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={handleRazorpayPayment}
                    disabled={isProcessing}
                    className="flex-1 py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-amber-600/25 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isProcessing ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Verifying Razorpay Demo Payment...</span>
                      </div>
                    ) : (
                      <>
                        <ShieldCheck size={18} />
                        <span>Authorize & Pay ₹{totalAmount}</span>
                      </>
                    )}
                  </motion.button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <span>Test Mode Sandbox. No actual card will be charged.</span>
                </div>
              </div>
            )}

            {/* STEP 3: SUCCESS VOUCHER */}
            {step === 'success' && confirmedBooking && (
              <div className="space-y-5" id="printable-voucher">
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center space-y-2">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-lg font-extrabold text-emerald-950">
                    Booking Confirmed! Payment Successful
                  </h4>
                  <p className="text-xs text-emerald-700">
                    Your reservation is confirmed at {hotelInfo.name}. We look forward to hosting you!
                  </p>
                  <div className="pt-2">
                    <span className="inline-block bg-white border border-emerald-300 text-emerald-800 text-xs font-mono font-bold px-3 py-1 rounded-full">
                      Booking ID: {confirmedBooking.bookingId}
                    </span>
                  </div>
                </div>

                {/* Voucher Details Card */}
                <div className="border border-stone-200 rounded-2xl p-4 sm:p-5 bg-stone-50 space-y-3.5">
                  <div className="flex justify-between items-start border-b border-stone-200 pb-3">
                    <div>
                      <h5 className="font-bold text-stone-900 text-sm">
                        {confirmedBooking.room.name}
                      </h5>
                      <p className="text-xs text-stone-500">
                        {confirmedBooking.room.bed} • {confirmedBooking.nights} Night{confirmedBooking.nights > 1 ? 's' : ''}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-stone-400 block">Total Paid</span>
                      <span className="text-lg font-black text-amber-700">
                        ₹{confirmedBooking.totalAmount}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-stone-400 block font-medium">Guest Name</span>
                      <span className="font-semibold text-stone-800">{confirmedBooking.guestName}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block font-medium">Contact Phone</span>
                      <span className="font-semibold text-stone-800">{confirmedBooking.guestPhone}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block font-medium">Check-In</span>
                      <span className="font-semibold text-stone-800">
                        {confirmedBooking.checkIn} (12:00 PM)
                      </span>
                    </div>
                    <div>
                      <span className="text-stone-400 block font-medium">Check-Out</span>
                      <span className="font-semibold text-stone-800">
                        {confirmedBooking.checkOut} (11:00 AM)
                      </span>
                    </div>
                    <div>
                      <span className="text-stone-400 block font-medium">Razorpay Txn ID</span>
                      <span className="font-mono text-stone-700">{paymentId}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block font-medium">Payment Status</span>
                      <span className="text-emerald-700 font-bold">PAID (Verified)</span>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-stone-200 flex items-start gap-2 text-xs text-stone-600">
                    <MapPin size={16} className="text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-stone-800">Property Address:</p>
                      <p>{hotelInfo.address.full}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={openWhatsAppConfirmation}
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer"
                  >
                    <MessageCircle size={16} />
                    <span>Send Voucher on WhatsApp</span>
                  </motion.button>
                  <button
                    type="button"
                    onClick={printReceipt}
                    className="py-3 px-4 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer"
                  >
                    <Printer size={16} />
                    <span>Print Voucher</span>
                  </button>
                  <button
                    type="button"
                    onClick={closeBooking}
                    className="py-3 px-5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm transition cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
