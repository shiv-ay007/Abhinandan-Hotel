import React, { createContext, useContext, useState } from 'react';
import { roomData } from '../assets/hotelImages';

const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(roomData[0]);
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: new Date().toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    guests: 2,
    roomsCount: 1,
  });
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const openBooking = (options = {}) => {
    if (options.roomId) {
      const found = roomData.find((r) => r.id === options.roomId);
      if (found) setSelectedRoom(found);
    }
    if (options.room) {
      setSelectedRoom(options.room);
    }
    if (options.checkIn || options.checkOut || options.guests) {
      setBookingDetails((prev) => ({
        ...prev,
        ...(options.checkIn && { checkIn: options.checkIn }),
        ...(options.checkOut && { checkOut: options.checkOut }),
        ...(options.guests && { guests: options.guests }),
      }));
    }
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        selectedRoom,
        setSelectedRoom,
        bookingDetails,
        setBookingDetails,
        openBooking,
        closeBooking,
        confirmedBooking,
        setConfirmedBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
