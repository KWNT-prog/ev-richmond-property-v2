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
  },
  {
    id: '3',
    title: 'Rixos Tersane Istanbul',
    location: 'Istanbul',
    address: 'Beyoğlu, Golden Horn Waterfront, Istanbul',
    price: 695000,
    bedrooms: 4,
    bathrooms: 3,
    area: 443,
    type: 'Residence',
    image: 'rixos-tersane-exterior.png',
    gallery: ['rixos-tersane-exterior.png', 'rixos-tersane-interior.png', 'rixos-tersane-pool.png'],
    featured: true,
    yearBuilt: 2026,
    parking: 2,
    floors: 44,
    description: 'Rixos Tersane Istanbul Residences is the first residential project by the legendary Rixos brand, nestled within a restored 600-year-old Ottoman shipyard on the Golden Horn. This landmark mixed-use development spans 242,000 m² with 2 km of pristine waterfront, 4 luxury hotels, 270 shops, 2 marinas, and 2 cultural museums. Residents enjoy guaranteed 7% annual returns for 5 years, VIP Accor Ownership Benefits, and 24/7 hotel-branded services including concierge, housekeeping, and in-residence dining.',
    features: [
      'Guaranteed 7% annual return (5 years)',
      '24/7 Rixos concierge & housekeeping',
      'Rooftop & indoor swimming pools',
      'State-of-the-art fitness center & spa',
      '2 marinas (140 yacht capacity)',
      'Nickelodeon Play indoor theme park',
      'Accor VIP Ownership Benefits',
      'In-residence dining & catering',
      'Customizable luxury interiors',
      'Eligible for Turkish citizenship',
      'Title deed valid until 2067',
      'Quarterly USD rental returns'
    ],
    blocks: [
      {
        name: 'Residential Towers',
        floors: 44,
        units: 520,
        layouts: '1+1 to 5+1, Penthouses',
        status: 'Handover end of 2026',
        details: '4 blocks, 8 apartment types, 79–443 m², Golden Horn views'
      }
    ],
    nearby: [
      'Galataport & İstiklal Avenue (10 min)',
      'Blue Mosque & Grand Bazaar (20 min)',
      'Kalamış Marina (40 min)',
      'Istanbul Airport (45 min)',
      '2 km Golden Horn waterfront',
      '270 shops on-site',
      '4 luxury hotels on-site',
      '2 cultural museums on-site'
    ],
    amenities: [
      'Rooftop swimming pool',
      'Indoor swimming pool',
      'Beach & saltwater pool',
      'Fitness center',
      'Spa & wellness center',
      'Nickelodeon Play theme park',
      '2 marinas (140 yachts)',
      '270 retail shops',
      '2 cultural museums',
      'Rixos concierge 24/7',
      'In-residence dining',
      'Housekeeping services'
    ]
  },
  {
    id: '4',
    title: 'ETRO Residences Istanbul',
    location: 'Istanbul',
    address: 'Maslak, Büyükdere Caddesi, Sarıyer, Istanbul',
    price: 990000,
    bedrooms: 3,
    bathrooms: 2,
    area: 276,
    type: 'Residence',
    image: 'etro-residence-exterior.png',
    gallery: ['etro-residence-exterior.png', 'etro-residence-interior.png', 'etro-residence-pool.png'],
    featured: true,
    yearBuilt: 2026,
    parking: 2,
    floors: 50,
    description: 'ETRO Residences Istanbul marks the iconic Italian fashion house\'s first-ever venture into luxury real estate, developed in partnership with RAMS Global. This 50-story landmark tower in Maslak — Istanbul\'s premier business district — features 471 residences styled by ETRO Home Interiors, engineered by Thornton Tomasetti (New York), and designed by Dome + Partners. With a 49th-floor infinity pool offering 360° views of three Bosphorus bridges, a Michelin-starred restaurant, and world-class amenities, this is where Italian haute couture meets Istanbul\'s skyline.',
    features: [
      'ETRO Home Interiors on first 37 floors',
      '49th-floor infinity pool',
      'Michelin-starred rooftop restaurant',
      '360° views of 3 Bosphorus bridges',
      'Helipad',
      'Private cryotherapy rooms',
      'Luxury shopping centre',
      'Cinema room & art zones',
      'Co-working spaces',
      'Premium concierge services',
      'Eligible for Turkish citizenship',
      'ITU Metro pedestrian tunnel access'
    ],
    blocks: [
      {
        name: 'ETRO Tower',
        floors: 50,
        units: 471,
        layouts: '1+1, 2+1, 3+1',
        status: 'Delivery Q4 2026',
        details: 'Designed by Dome + Partners, engineered by Thornton Tomasetti'
      }
    ],
    nearby: [
      'Istanbul Airport (25 min)',
      'ITU Ayazağa Metro (pedestrian tunnel)',
      'Maslak business district (on-site)',
      'Büyükdere Caddesi (on-site)',
      'Levent & Nişantaşı (15 min)',
      'Bosphorus (20 min)',
      'Zorlu Center (20 min)',
      'İstinye Park (15 min)'
    ],
    amenities: [
      '49th-floor infinity pool',
      'Michelin-starred restaurant',
      'Helipad',
      'Luxury shopping centre',
      'Cinema room',
      'Cryotherapy rooms',
      'Fitness center & spa',
      'Turkish bath (hammam)',
      'Co-working spaces',
      'Culture & art zones',
      'Premium concierge 24/7',
      'Limousine service'
    ]
  },
  {
    id: '5',
    title: 'REV Blue Zone Yalıkavak',
    location: 'Bodrum',
    address: 'Yalıkavak, Bodrum, Muğla, Turkey',
    price: 2500000,
    bedrooms: 6,
    bathrooms: 4,
    area: 350,
    type: 'Villa',
    image: 'rev-bluezone-exterior.png',
    gallery: ['rev-bluezone-exterior.png', 'rev-bluezone-interior.png', 'rev-bluezone-pool.png'],
    featured: true,
    yearBuilt: 2026,
    parking: 2,
    floors: 3,
    description: 'REV Blue Zone Yalıkavak is Turkey\'s first Blue Zone-concept residential project, designed by world-renowned architecture firm SAOTA. Spanning 44,000 m² on the last residentially-zoned plot in Yalıkavak Center, this exclusive collection of villas integrates the Blue Zone longevity philosophy — inspired by the world\'s five regions where people live the longest, healthiest lives — with modern architecture, sustainable materials, and harmony with nature. Each villa offers private pools, sea-view terraces, smart home systems, and four-season livability.',
    features: [
      'SAOTA world-class architecture',
      'Turkey\'s first Blue Zone concept',
      'Private swimming pools',
      'Sea-view terraces',
      'Smart home systems',
      'Organic gardens',
      'Yoga & meditation areas',
      'Nature walking paths',
      'Near Yalıkavak Marina',
      'Four-season livability',
      'Energy-efficient materials',
      'Last plot in Yalıkavak Center'
    ],
    blocks: [
      {
        name: 'Villa Collection',
        floors: 3,
        units: 0,
        layouts: '4+1, 5+1, 6+1',
        status: 'Pre-Sale',
        details: '6 distinct villa types, SAOTA-designed, 44,000 m² land'
      }
    ],
    nearby: [
      'Yalıkavak Marina (5 min)',
      'Bodrum Town Center (20 min)',
      'Bodrum-Milas Airport (45 min)',
      'Gourmet restaurants (walking distance)',
      'Boutique shopping (walking distance)',
      'Golf clubs nearby',
      'Tennis clubs nearby',
      'Aegean Sea coastline (2 min)'
    ],
    amenities: [
      'Private infinity pools',
      'Landscaped gardens',
      'Yoga & meditation areas',
      'Nature walking paths',
      'Outdoor kitchen areas',
      'Organic gardens',
      'Community interaction spaces',
      'Smart home systems',
      'Energy-efficient construction',
      '24/7 security',
      'Near Yalıkavak Marina',
      'Sea-view terraces'
    ]
  },
  {
    id: '6',
    title: 'Senfoni Etiler',
    location: 'Istanbul',
    address: 'Akat, Etiler, Beşiktaş, Istanbul',
    price: 1000000,
    bedrooms: 7,
    bathrooms: 4,
    area: 606,
    type: 'Residence',
    image: 'senfoni-etiler-exterior.png',
    gallery: ['senfoni-etiler-exterior.png', 'senfoni-etiler-interior.png', 'senfoni-etiler-pool.png'],
    featured: true,
    yearBuilt: 2027,
    parking: 2,
    floors: 8,
    description: 'Senfoni Etiler offers a boutique, privileged life in the heart of Istanbul\'s most prestigious neighborhood. Built on 24,000 m² with the assurance of Emlak Konut and developed by Yiğit Group, Kubba Construction & DBH Group, this elegant low-rise complex features 8 residential blocks with 175 private apartments ranging from compact 1+1 layouts to expansive 7+1 duplexes. Every apartment includes its own terrace and balcony, private storage, underfloor heating, and superior sound insulation — combining boutique luxury with Etiler\'s unmatched urban prestige.',
    features: [
      'Emlak Konut guaranteed development',
      'Private terrace & balcony per unit',
      'Underfloor heating & central AC',
      'Superior sound insulation',
      '2 social facility buildings',
      'Indoor swimming pools',
      'Fitness center & sauna',
      'Pilates studio & café',
      'Private storage per apartment',
      '24/7 security & gated access',
      'Earthquake-resistant construction',
      '20% cash purchase discount'
    ],
    blocks: [
      {
        name: 'Block A',
        floors: 8,
        units: 78,
        layouts: '1+1, 2+1',
        status: 'Delivery July 2027',
        details: '60–110 m², ideal for young professionals and couples'
      },
      {
        name: 'Blocks B, C, D',
        floors: 8,
        units: 97,
        layouts: '3+1 to 7+1, Duplex',
        status: 'Delivery July 2027',
        details: 'Large balconies, terraces, floor gardens, premium family living'
      }
    ],
    nearby: [
      'Fatih Sultan Mehmet Bridge (2 min)',
      'Akmerkez Shopping Mall (6 min)',
      'Boğaziçi University (6 min)',
      'Bebek & Levent (8 min)',
      'Zorlu Center (8 min)',
      'İstinye Park (10 min)',
      'Metro station (10 min)',
      'Istanbul Airport (40 min)'
    ],
    amenities: [
      '2 social facility buildings',
      'Indoor swimming pools',
      'Fitness center',
      'Sauna & steam rooms',
      'Pilates studio',
      'On-site café',
      'Walking & activity areas',
      '10 commercial shops on-site',
      '24/7 security',
      'Private storage units',
      'Underfloor heating',
      'Central air conditioning'
    ]
  }
];

export const locations = ['Istanbul', 'Batumi', 'Bodrum'];
export const propertyTypes = ['Residence', 'Villa'];
