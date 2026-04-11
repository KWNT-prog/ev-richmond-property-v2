export interface Property {
  id: string;
  title: string;
  location: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  image: string;
  gallery: string[];
  featured?: boolean;
  description: string;
  features: string[];
  yearBuilt: number;
  parking: number;
  floors: number;
  blocks?: {
    name: string;
    floors: number;
    units: number;
    layouts: string;
    status: string;
    details: string;
  }[];
  nearby?: string[];
  amenities?: string[];
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Rotana Bomonti',
    location: 'Istanbul',
    address: 'Bomonti, Şişli, Istanbul',
    price: 400000,
    bedrooms: 4,
    bathrooms: 3,
    area: 950,
    type: 'Residence',
    image: 'rotana-hero.jpg',
    gallery: ['rotana-hero.jpg', 'rotana-blocka.jpg', 'rotana-blockb.jpg', 'rotana-pool.jpg', 'rotana-courtyard.jpg', 'rotana-layout.jpg'],
    featured: true,
    yearBuilt: 2025,
    parking: 2,
    floors: 44,
    description: 'A premium address in the heart of Istanbul. Bomonti is a center of attraction where history, business, lifestyle, and investment appeal converge. Just 10 minutes from Taksim, Nişantaşı and Beşiktaş, 3 minutes from the Bosphorus — you are at the epicenter of the metropolis while remaining in a private and prestigious space. Premium architecture, panoramic Bosphorus views, and the highest quality standards make this one of the strongest investment offerings in central Istanbul.',
    features: [
      'Smart home system',
      '24/7 concierge service',
      'Swimming pool',
      'Fitness center',
      'Sauna',
      'Children\'s playground',
      'Panoramic Bosphorus views',
      'Eligible for Turkish citizenship',
      'Ready title deed (Tapu)',
      'Premium central location'
    ],
    blocks: [
      {
        name: 'A-Block (New Stage)',
        floors: 30,
        units: 400,
        layouts: '1+1, 2+1',
        status: 'Delivered 2026',
        details: 'Storage included, parking available, eligible for citizenship'
      },
      {
        name: 'B-Block',
        floors: 44,
        units: 565,
        layouts: '1+1, 2+1, 3+1, 4+1',
        status: 'Delivered (4 years ago)',
        details: 'Panoramic views: Bosphorus, city & forest'
      },
      {
        name: 'Arjaan Hotel',
        floors: 7,
        units: 87,
        layouts: 'Hotel rooms',
        status: 'Operational since Jan 2023',
        details: '5-star hotel concept'
      }
    ],
    nearby: [
      'Istanbul Business Center',
      '22 min to New Airport',
      '7 min to Bosphorus',
      '8 min walk to Nişantaşı',
      '10 min to Taksim',
      '3 min to 6 leading hospitals',
      '5 min to top universities',
      'Cevahir, City\'s Nişantaşı, Zorlu Center, Galataport, Kanyon'
    ],
    amenities: [
      'Smart home system',
      '24/7 service',
      'Swimming pool',
      'Fitness center',
      'Sauna',
      'Children\'s playground',
      'Bomonti–Kağıthane tunnel access',
      'Bomonti–Beşiktaş tunnel access',
      'Osmanbey Metro (9 min walk)',
      'E5 Highway access'
    ]
  }
];

export const locations = ['Istanbul'];
export const propertyTypes = ['Residence'];
