import { Cafe } from "@/types/cafe";

export const mockCafes: Cafe[] = [
  {
    id: "1",
    name: "Brew & Bloom",
    address: "123 Coffee Lane, Downtown",
    lat: 40.7489,
    lng: -73.9680,
    rating: 4.8,
    photos: ["https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800"],
    hours: "7AM - 8PM",
    category: "Coffee Shop",
    distance: 0.3,
    description: "Cozy neighborhood cafe with amazing latte art and fresh pastries.",
    isOpen: true
  },
  {
    id: "2",
    name: "The Daily Grind",
    address: "456 Main Street",
    lat: 40.7580,
    lng: -73.9855,
    rating: 4.5,
    photos: ["https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800"],
    hours: "6AM - 9PM",
    category: "Coffee Shop",
    distance: 0.8,
    description: "Modern workspace-friendly cafe with excellent espresso.",
    isOpen: true
  },
  {
    id: "3",
    name: "Sweet Sips Dessert Cafe",
    address: "789 Sugar Avenue",
    lat: 40.7614,
    lng: -73.9776,
    rating: 4.7,
    photos: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"],
    hours: "10AM - 11PM",
    category: "Dessert Café",
    distance: 1.2,
    description: "Indulgent desserts and specialty coffee in a chic setting.",
    isOpen: true
  },
  {
    id: "4",
    name: "Morning Glory Coffee",
    address: "321 Sunrise Blvd",
    lat: 40.7529,
    lng: -73.9772,
    rating: 4.6,
    photos: ["https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800"],
    hours: "6AM - 3PM",
    category: "Coffee Shop",
    distance: 0.5,
    description: "Early bird special! Best breakfast sandwiches and cold brew.",
    isOpen: true
  },
  {
    id: "5",
    name: "Zenith Tea & Coffee",
    address: "654 Peaceful Way",
    lat: 40.7456,
    lng: -73.9889,
    rating: 4.9,
    photos: ["https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800"],
    hours: "8AM - 7PM",
    category: "Coffee Shop",
    distance: 1.5,
    description: "Tranquil atmosphere with extensive tea menu and artisan coffee.",
    isOpen: false
  },
  {
    id: "6",
    name: "Urban Bean",
    address: "987 City Plaza",
    lat: 40.7512,
    lng: -73.9725,
    rating: 4.4,
    photos: ["https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800"],
    hours: "7AM - 10PM",
    category: "Coffee Shop",
    distance: 0.6,
    description: "Hip urban cafe with local roasts and live music on weekends.",
    isOpen: true
  }
];
