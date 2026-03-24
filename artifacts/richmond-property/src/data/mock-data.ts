export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  image: string;
  featured?: boolean;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Bosphorus View Mansion',
    location: 'Istanbul',
    price: 8500000,
    bedrooms: 6,
    bathrooms: 5,
    area: 950,
    type: 'Villa',
    image: 'istanbul-city.png',
    featured: true,
  },
  {
    id: '2',
    title: 'Azure Infinity Penthouse',
    location: 'Antalya',
    price: 3200000,
    bedrooms: 4,
    bathrooms: 4,
    area: 420,
    type: 'Penthouse',
    image: 'penthouse-view.png',
    featured: true,
  },
  {
    id: '3',
    title: 'Yalıkavak Modern Estate',
    location: 'Bodrum',
    price: 5400000,
    bedrooms: 5,
    bathrooms: 6,
    area: 680,
    type: 'Villa',
    image: 'modern-villa.png',
    featured: true,
  },
  {
    id: '4',
    title: 'Nişantaşı Luxury Residence',
    location: 'Istanbul',
    price: 1850000,
    bedrooms: 3,
    bathrooms: 3,
    area: 240,
    type: 'Apartment',
    image: 'luxury-apartment.png',
  },
  {
    id: '5',
    title: 'Göktürk Forest Villa',
    location: 'Göktürk',
    price: 4100000,
    bedrooms: 5,
    bathrooms: 4,
    area: 550,
    type: 'Villa',
    image: 'hero-bg.png',
  },
  {
    id: '6',
    title: 'Marina View Residence',
    location: 'Bodrum',
    price: 2100000,
    bedrooms: 3,
    bathrooms: 2,
    area: 190,
    type: 'Residence',
    image: 'penthouse-view.png',
  }
];

export const locations = ['Istanbul', 'Antalya', 'Bodrum', 'Göktürk', 'Alanya'];
export const propertyTypes = ['Villa', 'Apartment', 'Penthouse', 'Residence'];
