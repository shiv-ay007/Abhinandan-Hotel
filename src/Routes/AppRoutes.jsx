import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import RoomsPage from '../Pages/RoomsPage';
import GalleryPage from '../Pages/GalleryPage';
import AboutPage from '../Pages/AboutPage';
import ContactPage from '../Pages/ContactPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<RoomsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
