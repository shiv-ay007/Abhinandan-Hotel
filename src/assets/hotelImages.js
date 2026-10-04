// Auto-import all hotel pictures using Vite's glob import
const hotelPicModules = import.meta.glob('./Hotels pic/*.jpeg', {
  eager: true,
  import: 'default',
});

// Convert to an array of image URLs
export const hotelImages = Object.values(hotelPicModules);

// Categorized images for hero, rooms, gallery
export const heroImages = hotelImages.slice(0, 4);

export const roomData = [
  {
    id: 'deluxe-room',
    name: 'Deluxe AC Room',
    tagline: 'Spacious & Comfortable Private Stay',
    price: 1800,
    priceLabel: 'per night',
    badge: 'Popular Choice',
    capacity: '2-3 Guests',
    bed: '1 King / Queen Bed',
    view: 'City / Courtyard View',
    images: hotelImages.slice(0, 5),
    description:
      'Elegantly furnished air-conditioned room featuring comfortable bedding, clean attached washroom with 24/7 hot water, high-speed Wi-Fi, LED television, and round-the-clock room service.',
    amenities: [
      'Air Conditioning',
      'Attached Clean Washroom',
      '24/7 Hot & Cold Water',
      'High-Speed Wi-Fi',
      'LED TV',
      'Daily Housekeeping',
      'Clean Linens & Towels',
      'Room Service',
    ],
  },
  {
    id: 'single-bed',
    name: 'Single Bed Stay',
    tagline: 'Budget-Friendly Clean Bed for Travelers',
    price: 450,
    priceLabel: 'per night',
    badge: 'Best Budget Value',
    capacity: '1 Guest',
    bed: '1 Single Bed',
    view: 'Courtyard View',
    images: hotelImages.slice(4, 9).length > 0 ? hotelImages.slice(4, 9) : hotelImages.slice(0, 3),
    description:
      'Ideal for solo travelers, transit passengers, and backpackers looking for an affordable, spotlessly clean, and secure night stay in central Gondia near Gandhi Pratima.',
    amenities: [
      'Comfortable Single Bed',
      'Clean Bed Sheets & Pillow',
      'High-Speed Free Wi-Fi',
      'Hygienic Shared/Clean Washroom',
      'Secure Luggage Storage',
      '24/7 Reception Desk',
      'Mineral Drinking Water',
      'Charging Point at Bedside',
    ],
  },
  {
    id: 'executive-room',
    name: 'Executive AC Room',
    tagline: 'Premium Comfort for Business & Family',
    price: 1800,
    priceLabel: 'per night',
    badge: 'Family & Corporate',
    capacity: '3-4 Guests',
    bed: 'Queen Bed + Extra Bed Available',
    view: 'Gondia Central View',
    images: hotelImages.slice(8, 14).length > 0 ? hotelImages.slice(8, 14) : hotelImages.slice(1, 4),
    description:
      'Spacious room tailored for families and business travelers visiting Gondia. Features seating area, powerful cooling AC, attached bath, and quick access to local transport and markets.',
    amenities: [
      'Split Air Conditioner',
      'Attached Bathroom',
      'Hot Shower 24 Hours',
      'Fast Wi-Fi & Work Desk',
      'Flat Screen TV',
      'Wardrobe & Luggage Table',
      'Complimentary Toiletries',
      'Free Parking',
    ],
  },
];

export const hotelInfo = {
  name: 'Abhinandan Guest House',
  legalName: 'Abhinandan Guest House Gondia',
  tagline: 'Comfortable & Affordable Stays in Central Gondia',
  address: {
    line1: 'Goushala Ward, Near Gandhi Pratima',
    line2: 'Behind Kushal Bhawan',
    city: 'Gondia',
    pincode: '441601',
    state: 'Maharashtra',
    country: 'India',
    full: 'Goushala ward, near Gandhi Pratima, behind Kushal Bhawan, Gondia, 441601, MH, IN',
  },
  contact: {
    phone: '+91 84235 17354',
    phoneSecondary: '+91 84235 17354',
    whatsapp: '918423517354',
    email: 'contact@abhinandangondia.com',
  },
  timings: {
    checkIn: '12:00 PM',
    checkOut: '11:00 AM',
    frontDesk: '24/7 Always Open',
  },
  nearby: [
    { name: 'Gandhi Pratima', distance: '100 meters (1 min walk)' },
    { name: 'Kushal Bhawan', distance: 'Just behind the premises' },
    { name: 'Gondia Railway Station (G)', distance: '1.2 km (5 mins)' },
    { name: 'Main Cloth Market & Bazaar', distance: '500 meters' },
    { name: 'Gondia Bus Stand', distance: '1.8 km (7 mins)' },
  ],
};
