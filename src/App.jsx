import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import AppRoutes from './Routes/AppRoutes';
import BookingModal from './Components/BookingModal/BookingModal';
import { BookingProvider } from './context/BookingContext';

import FloatingActions from './Components/Common/FloatingActions';

// Scroll to top helper on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BookingProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen text-stone-900 bg-stone-50 font-sans antialiased">
          <Header />
          <div className="flex-1">
            <AppRoutes />
          </div>
          <Footer />
          {/* Universal Razorpay Booking Modal */}
          <BookingModal />
          {/* Floating WhatsApp, Call, and Scroll to Top buttons */}
          <FloatingActions />
        </div>
      </Router>
    </BookingProvider>
  );
};

export default App;