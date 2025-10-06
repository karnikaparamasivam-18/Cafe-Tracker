export interface Cafe {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  rating: number;
  photos: string[];
  hours?: string;
  category: string;
  distance?: number;
  description?: string;
  isOpen?: boolean;
}

export interface UserCafeNote {
  cafeId: string;
  rating: number;
  notes: string;
  visitDate: string;
  photos: string[];
  isFavorite: boolean;
}
