export interface ProductItem {
  id: string;
  name: string;
  category: 'Bridal Lehengas' | 'Heirloom Sarees' | 'Designer Suits' | 'Festive Pret';
  price: number;
  originalPrice?: number;
  image: string;
  fabric: string;
  craft: string;
  description: string;
  occasion: string;
  colors: string[];
  inStock: boolean;
  isBestseller?: boolean;
  leadTime: string;
}

export interface BespokeConfig {
  silhouette: string;
  fabric: string;
  embroidery: string;
  neckline: string;
  sleeve: string;
  colorName: string;
  colorHex: string;
  additionalNotes: string;
  clientName: string;
  clientPhone: string;
}

export interface Testimonial {
  id: string;
  name: string;
  locality: string;
  outfit: string;
  year: string;
  review: string;
  rating: number;
}
