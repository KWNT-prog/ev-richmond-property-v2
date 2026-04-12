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
    image: 'rotana-tower-night.png',
    gallery: ['rotana-tower-night.png', 'rotana-interior.png', 'rotana-pool-area.png', 'rotana-garden.png', 'rotana-istanbul-view.png', 'rotana-amenities.png', 'rotana-layout.jpg', 'rotana-blocka.jpg', 'rotana-blockb.jpg'],
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
  },
  {
    id: '2',
    title: 'Tonino Lamborghini Tower',
    location: 'Batumi',
    address: 'Batumi Island, Tamari District, Batumi, Georgia',
    price: 150000,
    bedrooms: 3,
    bathrooms: 2,
    area: 42,
    type: 'Residence',
    image: 'lamborghini-tower-batumi.png',
    gallery: ['lamborghini-tower-batumi.png', 'lamborghini-interior.png', 'lamborghini-pool.png', 'lamborghini-spa.png', 'lamborghini-batumi-aerial.png', 'lamborghini-yacht-club.png'],
    featured: true,
    yearBuilt: 2030,
    parking: 2,
    floors: 66,
    description: 'The Tonino Lamborghini Tower Batumi is set to become the symbol of Batumi Island — the first artificial island in the Black Sea. Rising 66 floors, this architectural manifesto of Italian style marks the world-renowned Lamborghini brand\'s exclusive entry into the Caucasus. Developed by FK Development with over 22 years of experience, the tower offers studios, apartments, and penthouses featuring authentic Tonino Lamborghini furniture made in Italy, smart home technologies, and panoramic views of the sea, city, and mountains. Located just 30 meters from the Black Sea, it is an exceptional investment and lifestyle destination.',
    features: [
      'Authentic Tonino Lamborghini furniture',
      'Smart home system',
      '3 outdoor + 1 indoor infinity pools',
      '15,000 m² premium shopping mall',
      'Yacht club & panoramic terrace',
      'Spa, sauna & fitness center',
      'International casino',
      'Rooftop restaurant & bar',
      'Helicopter landing pad',
      '24/7 concierge services',
      'Private beach access',
      'Hotel-format apartments available'
    ],
    blocks: [
      {
        name: 'Residential Tower',
        floors: 66,
        units: 0,
        layouts: 'Studios, 1+1, 3+1, Penthouses',
        status: 'Completion Q4 2030',
        details: 'Georgia\'s tallest building, Italian-designed interiors'
      },
      {
        name: 'Hotel Component',
        floors: 66,
        units: 0,
        layouts: 'Hotel-format apartments',
        status: 'Completion Q4 2030',
        details: 'Managed by international hotel operator'
      }
    ],
    nearby: [
      'Batumi Boulevard (5 min)',
      '30 meters to Black Sea',
      'Batumi International Airport (15 min)',
      'Batumi Old Town (10 min)',
      'Ali & Nino Statue (7 min)',
      'Batumi Botanical Garden (20 min)',
      'Piazza Square (10 min)',
      'Europe Square (8 min)'
    ],
    amenities: [
      '3 outdoor infinity pools',
      '1 indoor infinity pool',
      '15,000 m² shopping mall',
      'Yacht club',
      'Panoramic terrace',
      'Spa & wellness center',
      'Sauna & Turkish hammam',
      'Fitness center',
      'International casino',
      'Rooftop restaurant & bar',
      'Helicopter landing pad',
      '24/7 concierge',
      'Underground & overground parking',
      'Private beach (30m)'
    ]
  }
];

export const locations = ['Istanbul', 'Batumi'];
export const propertyTypes = ['Residence'];
