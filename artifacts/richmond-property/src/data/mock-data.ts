export type LocalizedText = { en: string; ru: string; tr: string };

export interface Property {
  id: string;
  title: string;
  location: string;
  address: LocalizedText;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  image: string;
  gallery: string[];
  featured?: boolean;
  description: LocalizedText;
  features: LocalizedText[];
  yearBuilt: number;
  parking: number;
  floors: number;
  blocks?: {
    name: LocalizedText;
    floors: number;
    units: number;
    layouts: string;
    status: LocalizedText;
    details: LocalizedText;
  }[];
  nearby?: LocalizedText[];
  amenities?: LocalizedText[];
}

const L = (en: string, ru: string, tr: string): LocalizedText => ({ en, ru, tr });

export const properties: Property[] = [
  {
    id: '1',
    title: 'Rotana Bomonti',
    location: 'Istanbul',
    address: L('Bomonti, Şişli, Istanbul', 'Бомонти, Шишли, Стамбул', 'Bomonti, Şişli, İstanbul'),
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
    description: L(
      'A premium address in the heart of Istanbul. Bomonti is a center of attraction where history, business, lifestyle, and investment appeal converge. Just 10 minutes from Taksim, Nişantaşı and Beşiktaş, 3 minutes from the Bosphorus — you are at the epicenter of the metropolis while remaining in a private and prestigious space. Premium architecture, panoramic Bosphorus views, and the highest quality standards make this one of the strongest investment offerings in central Istanbul.',
      'Престижный адрес в самом сердце Стамбула. Бомонти — центр притяжения, где сходятся история, бизнес, стиль жизни и инвестиционная привлекательность. Всего 10 минут от Таксима, Нишанташи и Бешикташа, 3 минуты от Босфора — вы в эпицентре мегаполиса, оставаясь в приватном и престижном пространстве. Премиальная архитектура, панорамные виды на Босфор и высочайшие стандарты качества делают этот проект одним из сильнейших инвестиционных предложений в центре Стамбула.',
      'İstanbul\'un kalbinde prestijli bir adres. Bomonti, tarih, iş, yaşam tarzı ve yatırım cazibesinin bir araya geldiği bir çekim merkezidir. Taksim, Nişantaşı ve Beşiktaş\'a sadece 10 dakika, Boğaz\'a 3 dakika mesafede — özel ve prestijli bir alanda kalırken metropolün merkezindesiniz. Premium mimari, panoramik Boğaz manzarası ve en yüksek kalite standartları, bu projeyi İstanbul merkezindeki en güçlü yatırım tekliflerinden biri yapıyor.'
    ),
    features: [
      L('Smart home system', 'Система «умный дом»', 'Akıllı ev sistemi'),
      L('24/7 concierge service', 'Консьерж-сервис 24/7', '7/24 konsiyerj hizmeti'),
      L('Swimming pool', 'Бассейн', 'Yüzme havuzu'),
      L('Fitness center', 'Фитнес-центр', 'Fitness merkezi'),
      L('Sauna', 'Сауна', 'Sauna'),
      L('Children\'s playground', 'Детская площадка', 'Çocuk oyun alanı'),
      L('Panoramic Bosphorus views', 'Панорамные виды на Босфор', 'Panoramik Boğaz manzarası'),
      L('Eligible for Turkish citizenship', 'Подходит для получения гражданства Турции', 'Türk vatandaşlığına uygun'),
      L('Ready title deed (Tapu)', 'Готовый ТАПУ (право собственности)', 'Hazır tapu'),
      L('Premium central location', 'Премиальное центральное расположение', 'Premium merkezi konum')
    ],
    blocks: [
      {
        name: L('A-Block (New Stage)', 'Блок А (Новый Этап)', 'A-Blok (Yeni Aşama)'),
        floors: 30,
        units: 400,
        layouts: '1+1, 2+1',
        status: L('Delivered 2026', 'Сдача 2026', 'Teslim 2026'),
        details: L('Storage included, parking available, eligible for citizenship', 'Кладовая включена, парковка доступна, подходит для гражданства', 'Depo dahil, otopark mevcut, vatandaşlığa uygun')
      },
      {
        name: L('B-Block', 'Блок Б', 'B-Blok'),
        floors: 44,
        units: 565,
        layouts: '1+1, 2+1, 3+1, 4+1',
        status: L('Delivered (4 years ago)', 'Сдан (4 года назад)', 'Teslim Edildi (4 yıl önce)'),
        details: L('Panoramic views: Bosphorus, city & forest', 'Панорамные виды: Босфор, город и лес', 'Panoramik manzara: Boğaz, şehir ve orman')
      },
      {
        name: L('Arjaan Hotel', 'Отель Arjaan', 'Arjaan Otel'),
        floors: 7,
        units: 87,
        layouts: 'Hotel rooms',
        status: L('Operational since Jan 2023', 'Работает с января 2023', 'Ocak 2023\'ten beri faaliyette'),
        details: L('5-star hotel concept', 'Концепция 5-звёздочного отеля', '5 yıldızlı otel konsepti')
      }
    ],
    nearby: [
      L('Istanbul Business Center', 'Бизнес-центр Стамбула', 'İstanbul İş Merkezi'),
      L('22 min to New Airport', '22 мин до Нового Аэропорта', 'Yeni Havalimanı\'na 22 dk'),
      L('7 min to Bosphorus', '7 мин до Босфора', 'Boğaz\'a 7 dk'),
      L('8 min walk to Nişantaşı', '8 мин пешком до Нишанташи', 'Nişantaşı\'na 8 dk yürüyüş'),
      L('10 min to Taksim', '10 мин до Таксима', 'Taksim\'e 10 dk'),
      L('3 min to 6 leading hospitals', '3 мин до 6 ведущих больниц', '6 önde gelen hastaneye 3 dk'),
      L('5 min to top universities', '5 мин до ведущих университетов', 'Önde gelen üniversitelere 5 dk'),
      L('Cevahir, City\'s Nişantaşı, Zorlu Center, Galataport, Kanyon', 'Cevahir, City\'s Nişantaşı, Zorlu Center, Galataport, Kanyon', 'Cevahir, City\'s Nişantaşı, Zorlu Center, Galataport, Kanyon')
    ],
    amenities: [
      L('Smart home system', 'Система «умный дом»', 'Akıllı ev sistemi'),
      L('24/7 service', 'Обслуживание 24/7', '7/24 hizmet'),
      L('Swimming pool', 'Бассейн', 'Yüzme havuzu'),
      L('Fitness center', 'Фитнес-центр', 'Fitness merkezi'),
      L('Sauna', 'Сауна', 'Sauna'),
      L('Children\'s playground', 'Детская площадка', 'Çocuk oyun alanı'),
      L('Bomonti–Kağıthane tunnel access', 'Доступ к тоннелю Бомонти–Кагытхане', 'Bomonti–Kağıthane tünel erişimi'),
      L('Bomonti–Beşiktaş tunnel access', 'Доступ к тоннелю Бомонти–Бешикташ', 'Bomonti–Beşiktaş tünel erişimi'),
      L('Osmanbey Metro (9 min walk)', 'Метро Османбей (9 мин пешком)', 'Osmanbey Metro (9 dk yürüyüş)'),
      L('E5 Highway access', 'Доступ к автомагистрали E5', 'E5 Otoyol erişimi')
    ]
  },
  {
    id: '2',
    title: 'Tonino Lamborghini Tower',
    location: 'Batumi',
    address: L('Batumi Island, Tamari District, Batumi, Georgia', 'Остров Батуми, район Тамари, Батуми, Грузия', 'Batum Adası, Tamari Bölgesi, Batum, Gürcistan'),
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
    description: L(
      'The Tonino Lamborghini Tower Batumi is set to become the symbol of Batumi Island — the first artificial island in the Black Sea. Rising 66 floors, this architectural manifesto of Italian style marks the world-renowned Lamborghini brand\'s exclusive entry into the Caucasus. Developed by FK Development with over 22 years of experience, the tower offers studios, apartments, and penthouses featuring authentic Tonino Lamborghini furniture made in Italy, smart home technologies, and panoramic views of the sea, city, and mountains. Located just 30 meters from the Black Sea, it is an exceptional investment and lifestyle destination.',
      'Tonino Lamborghini Tower Batumi станет символом острова Батуми — первого искусственного острова в Чёрном море. Возвышаясь на 66 этажей, этот архитектурный манифест итальянского стиля знаменует эксклюзивный выход всемирно известного бренда Lamborghini на рынок Кавказа. Построенная компанией FK Development с более чем 22-летним опытом, башня предлагает студии, апартаменты и пентхаусы с аутентичной мебелью Tonino Lamborghini, произведённой в Италии, технологиями «умный дом» и панорамными видами на море, город и горы. Расположенная всего в 30 метрах от Чёрного моря, она является исключительным инвестиционным и жизненным направлением.',
      'Tonino Lamborghini Tower Batum, Karadeniz\'deki ilk yapay ada olan Batum Adası\'nın sembolü olmaya hazırlanıyor. 66 kat yüksekliğiyle bu İtalyan tarzının mimari manifestosu, dünyaca ünlü Lamborghini markasının Kafkasya\'ya özel girişini işaret ediyor. 22 yılı aşkın deneyime sahip FK Development tarafından geliştirilen kule; İtalya\'da üretilen otantik Tonino Lamborghini mobilyaları, akıllı ev teknolojileri ve deniz, şehir ve dağ panoramik manzaralarıyla stüdyolar, daireler ve çatı katları sunuyor. Karadeniz\'e sadece 30 metre mesafede olup olağanüstü bir yatırım ve yaşam destinasyonudur.'
    ),
    features: [
      L('Authentic Tonino Lamborghini furniture', 'Аутентичная мебель Tonino Lamborghini', 'Otantik Tonino Lamborghini mobilyaları'),
      L('Smart home system', 'Система «умный дом»', 'Akıllı ev sistemi'),
      L('3 outdoor + 1 indoor infinity pools', '3 открытых + 1 крытый бассейн-инфинити', '3 açık + 1 kapalı sonsuzluk havuzu'),
      L('15,000 m² premium shopping mall', 'Премиальный ТЦ 15 000 м²', '15.000 m² premium alışveriş merkezi'),
      L('Yacht club & panoramic terrace', 'Яхт-клуб и панорамная терраса', 'Yat kulübü ve panoramik teras'),
      L('Spa, sauna & fitness center', 'Спа, сауна и фитнес-центр', 'Spa, sauna ve fitness merkezi'),
      L('International casino', 'Международное казино', 'Uluslararası kumarhane'),
      L('Rooftop restaurant & bar', 'Ресторан и бар на крыше', 'Çatı restoranı ve barı'),
      L('Helicopter landing pad', 'Вертолётная площадка', 'Helikopter pisti'),
      L('24/7 concierge services', 'Консьерж-сервис 24/7', '7/24 konsiyerj hizmetleri'),
      L('Private beach access', 'Доступ к частному пляжу', 'Özel plaj erişimi'),
      L('Hotel-format apartments available', 'Апартаменты в гостиничном формате', 'Otel formatlı daireler mevcut')
    ],
    blocks: [
      {
        name: L('Residential Tower', 'Жилая Башня', 'Konut Kulesi'),
        floors: 66,
        units: 0,
        layouts: 'Studios, 1+1, 3+1, Penthouses',
        status: L('Completion Q4 2030', 'Сдача 4 кв. 2030', 'Teslim 2030 4. Çeyrek'),
        details: L('Georgia\'s tallest building, Italian-designed interiors', 'Самое высокое здание Грузии, интерьеры итальянского дизайна', 'Gürcistan\'ın en yüksek binası, İtalyan tasarım iç mekanlar')
      },
      {
        name: L('Hotel Component', 'Гостиничная Составляющая', 'Otel Bileşeni'),
        floors: 66,
        units: 0,
        layouts: 'Hotel-format apartments',
        status: L('Completion Q4 2030', 'Сдача 4 кв. 2030', 'Teslim 2030 4. Çeyrek'),
        details: L('Managed by international hotel operator', 'Управление международным гостиничным оператором', 'Uluslararası otel operatörü tarafından yönetilmektedir')
      }
    ],
    nearby: [
      L('Batumi Boulevard (5 min)', 'Батумский Бульвар (5 мин)', 'Batum Bulvarı (5 dk)'),
      L('30 meters to Black Sea', '30 метров до Чёрного моря', 'Karadeniz\'e 30 metre'),
      L('Batumi International Airport (15 min)', 'Международный аэропорт Батуми (15 мин)', 'Batum Uluslararası Havalimanı (15 dk)'),
      L('Batumi Old Town (10 min)', 'Старый город Батуми (10 мин)', 'Batum Eski Şehir (10 dk)'),
      L('Ali & Nino Statue (7 min)', 'Статуя Али и Нино (7 мин)', 'Ali & Nino Heykeli (7 dk)'),
      L('Batumi Botanical Garden (20 min)', 'Батумский Ботанический сад (20 мин)', 'Batum Botanik Bahçesi (20 dk)'),
      L('Piazza Square (10 min)', 'Площадь Пьяцца (10 мин)', 'Piazza Meydanı (10 dk)'),
      L('Europe Square (8 min)', 'Площадь Европы (8 мин)', 'Avrupa Meydanı (8 dk)')
    ],
    amenities: [
      L('3 outdoor infinity pools', '3 открытых бассейна-инфинити', '3 açık sonsuzluk havuzu'),
      L('1 indoor infinity pool', '1 крытый бассейн-инфинити', '1 kapalı sonsuzluk havuzu'),
      L('15,000 m² shopping mall', 'ТЦ 15 000 м²', '15.000 m² alışveriş merkezi'),
      L('Yacht club', 'Яхт-клуб', 'Yat kulübü'),
      L('Panoramic terrace', 'Панорамная терраса', 'Panoramik teras'),
      L('Spa & wellness center', 'Спа и велнес-центр', 'Spa ve sağlık merkezi'),
      L('Sauna & Turkish hammam', 'Сауна и турецкий хаммам', 'Sauna ve Türk hamamı'),
      L('Fitness center', 'Фитнес-центр', 'Fitness merkezi'),
      L('International casino', 'Международное казино', 'Uluslararası kumarhane'),
      L('Rooftop restaurant & bar', 'Ресторан и бар на крыше', 'Çatı restoranı ve barı'),
      L('Helicopter landing pad', 'Вертолётная площадка', 'Helikopter pisti'),
      L('24/7 concierge', 'Консьерж-сервис 24/7', '7/24 konsiyerj'),
      L('Underground & overground parking', 'Подземная и наземная парковка', 'Yeraltı ve yerüstü otopark'),
      L('Private beach (30m)', 'Частный пляж (30 м)', 'Özel plaj (30 m)')
    ]
  },
  {
    id: '3',
    title: 'Rixos Tersane Istanbul',
    location: 'Istanbul',
    address: L('Beyoğlu, Golden Horn Waterfront, Istanbul', 'Бейоглу, набережная Золотого Рога, Стамбул', 'Beyoğlu, Haliç Kıyısı, İstanbul'),
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
    description: L(
      'Rixos Tersane Istanbul Residences is the first residential project by the legendary Rixos brand, nestled within a restored 600-year-old Ottoman shipyard on the Golden Horn. This landmark mixed-use development spans 242,000 m² with 2 km of pristine waterfront, 4 luxury hotels, 270 shops, 2 marinas, and 2 cultural museums. Residents enjoy guaranteed 7% annual returns for 5 years, VIP Accor Ownership Benefits, and 24/7 hotel-branded services including concierge, housekeeping, and in-residence dining.',
      'Rixos Tersane Istanbul Residences — первый жилой проект легендарного бренда Rixos, расположенный в восстановленной 600-летней османской верфи на берегу Золотого Рога. Этот знаковый комплекс смешанного использования занимает 242 000 м² с 2 км набережной, 4 роскошными отелями, 270 магазинами, 2 марининами и 2 культурными музеями. Жильцы получают гарантированный доход 7% годовых в течение 5 лет, VIP-привилегии программы Accor Ownership Benefits и гостиничный сервис 24/7, включая консьержа, уборку и ресторанное обслуживание в резиденции.',
      'Rixos Tersane İstanbul Residences, efsanevi Rixos markasının ilk konut projesidir ve Haliç kıyısında restore edilmiş 600 yıllık bir Osmanlı tersanesinde yer almaktadır. Bu önemli karma kullanımlı geliştirme 242.000 m²\'lik alanda 2 km sahil şeridi, 4 lüks otel, 270 mağaza, 2 marina ve 2 kültür müzesine sahiptir. Sakinler 5 yıl boyunca garantili %7 yıllık getiri, VIP Accor Sahiplik Avantajları ve konsiyerj, temizlik ve konut içi yemek hizmeti dahil 7/24 otel markalı hizmetlerden yararlanır.'
    ),
    features: [
      L('Guaranteed 7% annual return (5 years)', 'Гарантированный доход 7% годовых (5 лет)', 'Garantili %7 yıllık getiri (5 yıl)'),
      L('24/7 Rixos concierge & housekeeping', 'Консьерж и уборка Rixos 24/7', '7/24 Rixos konsiyerj ve temizlik'),
      L('Rooftop & indoor swimming pools', 'Бассейны на крыше и закрытые', 'Çatı ve kapalı yüzme havuzları'),
      L('State-of-the-art fitness center & spa', 'Современный фитнес-центр и спа', 'Son teknoloji fitness merkezi ve spa'),
      L('2 marinas (140 yacht capacity)', '2 марины (вместимость 140 яхт)', '2 marina (140 yat kapasitesi)'),
      L('Nickelodeon Play indoor theme park', 'Крытый тематический парк Nickelodeon Play', 'Nickelodeon Play kapalı tema parkı'),
      L('Accor VIP Ownership Benefits', 'VIP-привилегии программы Accor', 'Accor VIP Sahiplik Avantajları'),
      L('In-residence dining & catering', 'Ресторанное обслуживание в резиденции', 'Konut içi yemek ve ikram hizmeti'),
      L('Customizable luxury interiors', 'Индивидуальные роскошные интерьеры', 'Özelleştirilebilir lüks iç mekanlar'),
      L('Eligible for Turkish citizenship', 'Подходит для получения гражданства Турции', 'Türk vatandaşlığına uygun'),
      L('Title deed valid until 2067', 'ТАПУ действителен до 2067 года', '2067\'ye kadar geçerli tapu'),
      L('Quarterly USD rental returns', 'Ежеквартальный доход в долларах', 'Üç aylık USD kira getirisi')
    ],
    blocks: [
      {
        name: L('Residential Towers', 'Жилые Башни', 'Konut Kuleleri'),
        floors: 44,
        units: 520,
        layouts: '1+1 to 5+1, Penthouses',
        status: L('Handover end of 2026', 'Сдача конец 2026', 'Teslim 2026 sonu'),
        details: L('4 blocks, 8 apartment types, 79–443 m², Golden Horn views', '4 блока, 8 типов квартир, 79–443 м², виды на Золотой Рог', '4 blok, 8 daire tipi, 79–443 m², Haliç manzarası')
      }
    ],
    nearby: [
      L('Galataport & İstiklal Avenue (10 min)', 'Галатапорт и улица Истикляль (10 мин)', 'Galataport ve İstiklal Caddesi (10 dk)'),
      L('Blue Mosque & Grand Bazaar (20 min)', 'Голубая Мечеть и Гранд-Базар (20 мин)', 'Sultanahmet Camii ve Kapalıçarşı (20 dk)'),
      L('Kalamış Marina (40 min)', 'Марина Каламыш (40 мин)', 'Kalamış Marina (40 dk)'),
      L('Istanbul Airport (45 min)', 'Аэропорт Стамбула (45 мин)', 'İstanbul Havalimanı (45 dk)'),
      L('2 km Golden Horn waterfront', '2 км набережной Золотого Рога', '2 km Haliç sahil şeridi'),
      L('270 shops on-site', '270 магазинов на территории', 'Yerleşkede 270 mağaza'),
      L('4 luxury hotels on-site', '4 роскошных отеля на территории', 'Yerleşkede 4 lüks otel'),
      L('2 cultural museums on-site', '2 культурных музея на территории', 'Yerleşkede 2 kültür müzesi')
    ],
    amenities: [
      L('Rooftop swimming pool', 'Бассейн на крыше', 'Çatı yüzme havuzu'),
      L('Indoor swimming pool', 'Крытый бассейн', 'Kapalı yüzme havuzu'),
      L('Beach & saltwater pool', 'Пляж и бассейн с морской водой', 'Plaj ve tuzlu su havuzu'),
      L('Fitness center', 'Фитнес-центр', 'Fitness merkezi'),
      L('Spa & wellness center', 'Спа и велнес-центр', 'Spa ve sağlık merkezi'),
      L('Nickelodeon Play theme park', 'Тематический парк Nickelodeon Play', 'Nickelodeon Play tema parkı'),
      L('2 marinas (140 yachts)', '2 марины (140 яхт)', '2 marina (140 yat)'),
      L('270 retail shops', '270 магазинов', '270 perakende mağaza'),
      L('2 cultural museums', '2 культурных музея', '2 kültür müzesi'),
      L('Rixos concierge 24/7', 'Консьерж-сервис Rixos 24/7', 'Rixos konsiyerj 7/24'),
      L('In-residence dining', 'Ресторанное обслуживание в резиденции', 'Konut içi yemek hizmeti'),
      L('Housekeeping services', 'Услуги уборки', 'Temizlik hizmetleri')
    ]
  },
  {
    id: '4',
    title: 'ETRO Residences Istanbul',
    location: 'Istanbul',
    address: L('Maslak, Büyükdere Caddesi, Sarıyer, Istanbul', 'Маслак, Бюйюкдере Джаддеси, Сарыер, Стамбул', 'Maslak, Büyükdere Caddesi, Sarıyer, İstanbul'),
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
    description: L(
      'ETRO Residences Istanbul marks the iconic Italian fashion house\'s first-ever venture into luxury real estate, developed in partnership with RAMS Global. This 50-story landmark tower in Maslak — Istanbul\'s premier business district — features 471 residences styled by ETRO Home Interiors, engineered by Thornton Tomasetti (New York), and designed by Dome + Partners. With a 49th-floor infinity pool offering 360° views of three Bosphorus bridges, a Michelin-starred restaurant, and world-class amenities, this is where Italian haute couture meets Istanbul\'s skyline.',
      'ETRO Residences Istanbul знаменует первый выход легендарного итальянского модного дома на рынок элитной недвижимости в партнёрстве с RAMS Global. Эта 50-этажная башня-ориентир в Маслаке — ведущем деловом районе Стамбула — включает 471 резиденцию, оформленную ETRO Home Interiors, спроектированную Thornton Tomasetti (Нью-Йорк) и разработанную Dome + Partners. С бассейном-инфинити на 49-м этаже с 360° видом на три моста через Босфор, рестораном со звездой Мишлен и удобствами мирового класса — здесь итальянская высокая мода встречается с горизонтом Стамбула.',
      'ETRO Residences İstanbul, ikonik İtalyan moda evinin RAMS Global ile ortaklaşa geliştirdiği lüks gayrimenkul alanındaki ilk girişimidir. Maslak\'ta — İstanbul\'un önde gelen iş merkezinde — yer alan bu 50 katlı simge kule, ETRO Home Interiors tarafından tasarlanmış 471 konut, Thornton Tomasetti (New York) mühendisliği ve Dome + Partners mimari tasarımı ile öne çıkar. Üç Boğaz köprüsüne 360° manzara sunan 49. kattaki sonsuzluk havuzu, Michelin yıldızlı restoran ve dünya standartlarındaki olanaklarla İtalyan haute couture İstanbul silüetiyle buluşuyor.'
    ),
    features: [
      L('ETRO Home Interiors on first 37 floors', 'Интерьеры ETRO Home на первых 37 этажах', 'İlk 37 katta ETRO Home iç mekanları'),
      L('49th-floor infinity pool', 'Бассейн-инфинити на 49-м этаже', '49. katta sonsuzluk havuzu'),
      L('Michelin-starred rooftop restaurant', 'Ресторан со звездой Мишлен на крыше', 'Michelin yıldızlı çatı restoranı'),
      L('360° views of 3 Bosphorus bridges', '360° вид на 3 моста через Босфор', '3 Boğaz köprüsüne 360° manzara'),
      L('Helipad', 'Вертолётная площадка', 'Helikopter pisti'),
      L('Private cryotherapy rooms', 'Приватные криотерапевтические комнаты', 'Özel kriyoterapi odaları'),
      L('Luxury shopping centre', 'Люксовый торговый центр', 'Lüks alışveriş merkezi'),
      L('Cinema room & art zones', 'Кинозал и зоны искусства', 'Sinema salonu ve sanat alanları'),
      L('Co-working spaces', 'Коворкинг-пространства', 'Ortak çalışma alanları'),
      L('Premium concierge services', 'Премиальный консьерж-сервис', 'Premium konsiyerj hizmetleri'),
      L('Eligible for Turkish citizenship', 'Подходит для получения гражданства Турции', 'Türk vatandaşlığına uygun'),
      L('ITU Metro pedestrian tunnel access', 'Пешеходный тоннель к метро ITU', 'İTÜ Metro yaya tüneli erişimi')
    ],
    blocks: [
      {
        name: L('ETRO Tower', 'Башня ETRO', 'ETRO Kulesi'),
        floors: 50,
        units: 471,
        layouts: '1+1, 2+1, 3+1',
        status: L('Delivery Q4 2026', 'Сдача 4 кв. 2026', 'Teslim 2026 4. Çeyrek'),
        details: L('Designed by Dome + Partners, engineered by Thornton Tomasetti', 'Дизайн Dome + Partners, инжиниринг Thornton Tomasetti', 'Dome + Partners tasarımı, Thornton Tomasetti mühendisliği')
      }
    ],
    nearby: [
      L('Istanbul Airport (25 min)', 'Аэропорт Стамбула (25 мин)', 'İstanbul Havalimanı (25 dk)'),
      L('ITU Ayazağa Metro (pedestrian tunnel)', 'Метро ITU Аязага (пешеходный тоннель)', 'İTÜ Ayazağa Metro (yaya tüneli)'),
      L('Maslak business district (on-site)', 'Деловой район Маслак (на территории)', 'Maslak iş merkezi (yerleşkede)'),
      L('Büyükdere Caddesi (on-site)', 'Бюйюкдере Джаддеси (на территории)', 'Büyükdere Caddesi (yerleşkede)'),
      L('Levent & Nişantaşı (15 min)', 'Левент и Нишанташи (15 мин)', 'Levent ve Nişantaşı (15 dk)'),
      L('Bosphorus (20 min)', 'Босфор (20 мин)', 'Boğaz (20 dk)'),
      L('Zorlu Center (20 min)', 'Zorlu Center (20 мин)', 'Zorlu Center (20 dk)'),
      L('İstinye Park (15 min)', 'İstinye Park (15 мин)', 'İstinye Park (15 dk)')
    ],
    amenities: [
      L('49th-floor infinity pool', 'Бассейн-инфинити на 49-м этаже', '49. katta sonsuzluk havuzu'),
      L('Michelin-starred restaurant', 'Ресторан со звездой Мишлен', 'Michelin yıldızlı restoran'),
      L('Helipad', 'Вертолётная площадка', 'Helikopter pisti'),
      L('Luxury shopping centre', 'Люксовый торговый центр', 'Lüks alışveriş merkezi'),
      L('Cinema room', 'Кинозал', 'Sinema salonu'),
      L('Cryotherapy rooms', 'Криотерапевтические комнаты', 'Kriyoterapi odaları'),
      L('Fitness center & spa', 'Фитнес-центр и спа', 'Fitness merkezi ve spa'),
      L('Turkish bath (hammam)', 'Турецкая баня (хаммам)', 'Türk hamamı'),
      L('Co-working spaces', 'Коворкинг-пространства', 'Ortak çalışma alanları'),
      L('Culture & art zones', 'Культурные и арт-зоны', 'Kültür ve sanat alanları'),
      L('Premium concierge 24/7', 'Премиальный консьерж 24/7', 'Premium konsiyerj 7/24'),
      L('Limousine service', 'Услуга лимузина', 'Limuzin hizmeti')
    ]
  },
  {
    id: '5',
    title: 'REV Blue Zone Yalıkavak',
    location: 'Bodrum',
    address: L('Yalıkavak, Bodrum, Muğla, Turkey', 'Яликавак, Бодрум, Мугла, Турция', 'Yalıkavak, Bodrum, Muğla, Türkiye'),
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
    description: L(
      'REV Blue Zone Yalıkavak is Turkey\'s first Blue Zone-concept residential project, designed by world-renowned architecture firm SAOTA. Spanning 44,000 m² on the last residentially-zoned plot in Yalıkavak Center, this exclusive collection of villas integrates the Blue Zone longevity philosophy — inspired by the world\'s five regions where people live the longest, healthiest lives — with modern architecture, sustainable materials, and harmony with nature. Each villa offers private pools, sea-view terraces, smart home systems, and four-season livability.',
      'REV Blue Zone Yalıkavak — первый в Турции жилой проект с концепцией «Голубой зоны», спроектированный всемирно известным архитектурным бюро SAOTA. Расположенный на 44 000 м² на последнем жилом участке в центре Яликавак, этот эксклюзивный комплекс вилл объединяет философию долголетия «Голубых зон» — вдохновлённую пятью регионами мира, где люди живут дольше и здоровее всего — с современной архитектурой, экологичными материалами и гармонией с природой. Каждая вилла оснащена частным бассейном, террасами с видом на море, системой «умный дом» и рассчитана на проживание круглый год.',
      'REV Blue Zone Yalıkavak, dünyaca ünlü mimarlık firması SAOTA tarafından tasarlanan Türkiye\'nin ilk Blue Zone konseptli konut projesidir. Yalıkavak Merkez\'deki son konut imarlı arazide 44.000 m² üzerine kurulu bu özel villa koleksiyonu; insanların en uzun, en sağlıklı yaşadığı dünyanın beş bölgesinden ilham alan Blue Zone uzun ömür felsefesini modern mimari, sürdürülebilir malzemeler ve doğayla uyumla birleştiriyor. Her villa özel havuz, deniz manzaralı teras, akıllı ev sistemleri ve dört mevsim yaşanabilirlik sunuyor.'
    ),
    features: [
      L('SAOTA world-class architecture', 'Архитектура мирового класса от SAOTA', 'SAOTA dünya standartlarında mimari'),
      L('Turkey\'s first Blue Zone concept', 'Первая концепция «Голубой зоны» в Турции', 'Türkiye\'nin ilk Blue Zone konsepti'),
      L('Private swimming pools', 'Частные бассейны', 'Özel yüzme havuzları'),
      L('Sea-view terraces', 'Террасы с видом на море', 'Deniz manzaralı teraslar'),
      L('Smart home systems', 'Системы «умный дом»', 'Akıllı ev sistemleri'),
      L('Organic gardens', 'Органические сады', 'Organik bahçeler'),
      L('Yoga & meditation areas', 'Зоны йоги и медитации', 'Yoga ve meditasyon alanları'),
      L('Nature walking paths', 'Природные пешеходные дорожки', 'Doğa yürüyüş yolları'),
      L('Near Yalıkavak Marina', 'Рядом с мариной Яликавак', 'Yalıkavak Marina yakınında'),
      L('Four-season livability', 'Круглогодичное проживание', 'Dört mevsim yaşanabilirlik'),
      L('Energy-efficient materials', 'Энергоэффективные материалы', 'Enerji verimli malzemeler'),
      L('Last plot in Yalıkavak Center', 'Последний участок в центре Яликавак', 'Yalıkavak Merkez\'deki son arazi')
    ],
    blocks: [
      {
        name: L('Villa Collection', 'Коллекция Вилл', 'Villa Koleksiyonu'),
        floors: 3,
        units: 0,
        layouts: '4+1, 5+1, 6+1',
        status: L('Pre-Sale', 'Предпродажа', 'Ön Satış'),
        details: L('6 distinct villa types, SAOTA-designed, 44,000 m² land', '6 уникальных типов вилл, дизайн SAOTA, участок 44 000 м²', '6 farklı villa tipi, SAOTA tasarımı, 44.000 m² arazi')
      }
    ],
    nearby: [
      L('Yalıkavak Marina (5 min)', 'Марина Яликавак (5 мин)', 'Yalıkavak Marina (5 dk)'),
      L('Bodrum Town Center (20 min)', 'Центр города Бодрум (20 мин)', 'Bodrum Şehir Merkezi (20 dk)'),
      L('Bodrum-Milas Airport (45 min)', 'Аэропорт Бодрум-Милас (45 мин)', 'Bodrum-Milas Havalimanı (45 dk)'),
      L('Gourmet restaurants (walking distance)', 'Гурмэ-рестораны (пешая доступность)', 'Gurme restoranlar (yürüme mesafesi)'),
      L('Boutique shopping (walking distance)', 'Бутик-шопинг (пешая доступность)', 'Butik alışveriş (yürüme mesafesi)'),
      L('Golf clubs nearby', 'Гольф-клубы поблизости', 'Yakındaki golf kulüpleri'),
      L('Tennis clubs nearby', 'Теннисные клубы поблизости', 'Yakındaki tenis kulüpleri'),
      L('Aegean Sea coastline (2 min)', 'Побережье Эгейского моря (2 мин)', 'Ege Denizi kıyısı (2 dk)')
    ],
    amenities: [
      L('Private infinity pools', 'Частные бассейны-инфинити', 'Özel sonsuzluk havuzları'),
      L('Landscaped gardens', 'Ландшафтные сады', 'Peyzaj bahçeleri'),
      L('Yoga & meditation areas', 'Зоны йоги и медитации', 'Yoga ve meditasyon alanları'),
      L('Nature walking paths', 'Природные пешеходные дорожки', 'Doğa yürüyüş yolları'),
      L('Outdoor kitchen areas', 'Летние кухни', 'Açık hava mutfak alanları'),
      L('Organic gardens', 'Органические сады', 'Organik bahçeler'),
      L('Community interaction spaces', 'Зоны общественного взаимодействия', 'Topluluk etkileşim alanları'),
      L('Smart home systems', 'Системы «умный дом»', 'Akıllı ev sistemleri'),
      L('Energy-efficient construction', 'Энергоэффективное строительство', 'Enerji verimli yapı'),
      L('24/7 security', 'Охрана 24/7', '7/24 güvenlik'),
      L('Near Yalıkavak Marina', 'Рядом с мариной Яликавак', 'Yalıkavak Marina yakınında'),
      L('Sea-view terraces', 'Террасы с видом на море', 'Deniz manzaralı teraslar')
    ]
  },
  {
    id: '6',
    title: 'Senfoni Etiler',
    location: 'Istanbul',
    address: L('Akat, Etiler, Beşiktaş, Istanbul', 'Акат, Этилер, Бешикташ, Стамбул', 'Akat, Etiler, Beşiktaş, İstanbul'),
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
    description: L(
      'Senfoni Etiler offers a boutique, privileged life in the heart of Istanbul\'s most prestigious neighborhood. Built on 24,000 m² with the assurance of Emlak Konut and developed by Yiğit Group, Kubba Construction & DBH Group, this elegant low-rise complex features 8 residential blocks with 175 private apartments ranging from compact 1+1 layouts to expansive 7+1 duplexes. Every apartment includes its own terrace and balcony, private storage, underfloor heating, and superior sound insulation — combining boutique luxury with Etiler\'s unmatched urban prestige.',
      'Senfoni Etiler предлагает бутиковую, привилегированную жизнь в самом сердце самого престижного района Стамбула. Построенный на 24 000 м² при поддержке Emlak Konut и реализованный Yiğit Group, Kubba Construction и DBH Group, этот элегантный малоэтажный комплекс включает 8 жилых блоков с 175 приватными квартирами — от компактных 1+1 до просторных дуплексов 7+1. Каждая квартира оснащена собственной террасой и балконом, личной кладовой, тёплым полом и превосходной звукоизоляцией — сочетание бутиковой роскоши и непревзойдённого городского престижа Этилера.',
      'Senfoni Etiler, İstanbul\'un en prestijli semtinin kalbinde butik ve ayrıcalıklı bir yaşam sunuyor. 24.000 m² üzerine Emlak Konut güvencesiyle inşa edilen ve Yiğit Group, Kubba Construction ve DBH Group tarafından geliştirilen bu zarif alçak katlı kompleks; kompakt 1+1 planlardan geniş 7+1 dublekslere kadar uzanan 175 özel daireye sahip 8 konut bloğundan oluşuyor. Her daire kendi terası ve balkonu, özel depo, yerden ısıtma ve üstün ses yalıtımı ile donatılmış olup butik lüksü Etiler\'in eşsiz kentsel prestiji ile birleştiriyor.'
    ),
    features: [
      L('Emlak Konut guaranteed development', 'Проект при поддержке Emlak Konut', 'Emlak Konut güvencesiyle geliştirme'),
      L('Private terrace & balcony per unit', 'Собственная терраса и балкон в каждой квартире', 'Her daireye özel teras ve balkon'),
      L('Underfloor heating & central AC', 'Тёплый пол и центральное кондиционирование', 'Yerden ısıtma ve merkezi klima'),
      L('Superior sound insulation', 'Превосходная звукоизоляция', 'Üstün ses yalıtımı'),
      L('2 social facility buildings', '2 здания социальных объектов', '2 sosyal tesis binası'),
      L('Indoor swimming pools', 'Крытые бассейны', 'Kapalı yüzme havuzları'),
      L('Fitness center & sauna', 'Фитнес-центр и сауна', 'Fitness merkezi ve sauna'),
      L('Pilates studio & café', 'Студия пилатес и кафе', 'Pilates stüdyosu ve kafe'),
      L('Private storage per apartment', 'Личная кладовая для каждой квартиры', 'Her daireye özel depo'),
      L('24/7 security & gated access', 'Охрана 24/7 и закрытая территория', '7/24 güvenlik ve kontrollü giriş'),
      L('Earthquake-resistant construction', 'Сейсмоустойчивое строительство', 'Depreme dayanıklı yapı'),
      L('20% cash purchase discount', 'Скидка 20% при покупке за наличные', 'Peşin alımda %20 indirim')
    ],
    blocks: [
      {
        name: L('Block A', 'Блок А', 'A Blok'),
        floors: 8,
        units: 78,
        layouts: '1+1, 2+1',
        status: L('Delivery July 2027', 'Сдача июль 2027', 'Teslim Temmuz 2027'),
        details: L('60–110 m², ideal for young professionals and couples', '60–110 м², идеально для молодых профессионалов и пар', '60–110 m², genç profesyoneller ve çiftler için ideal')
      },
      {
        name: L('Blocks B, C, D', 'Блоки Б, В, Г', 'B, C, D Blokları'),
        floors: 8,
        units: 97,
        layouts: '3+1 to 7+1, Duplex',
        status: L('Delivery July 2027', 'Сдача июль 2027', 'Teslim Temmuz 2027'),
        details: L('Large balconies, terraces, floor gardens, premium family living', 'Большие балконы, террасы, зимние сады, премиальное семейное жильё', 'Geniş balkonlar, teraslar, kat bahçeleri, premium aile yaşamı')
      }
    ],
    nearby: [
      L('Fatih Sultan Mehmet Bridge (2 min)', 'Мост Фатих Султан Мехмет (2 мин)', 'Fatih Sultan Mehmet Köprüsü (2 dk)'),
      L('Akmerkez Shopping Mall (6 min)', 'ТЦ Акмеркез (6 мин)', 'Akmerkez AVM (6 dk)'),
      L('Boğaziçi University (6 min)', 'Босфорский университет (6 мин)', 'Boğaziçi Üniversitesi (6 dk)'),
      L('Bebek & Levent (8 min)', 'Бебек и Левент (8 мин)', 'Bebek ve Levent (8 dk)'),
      L('Zorlu Center (8 min)', 'Zorlu Center (8 мин)', 'Zorlu Center (8 dk)'),
      L('İstinye Park (10 min)', 'İstinye Park (10 мин)', 'İstinye Park (10 dk)'),
      L('Metro station (10 min)', 'Станция метро (10 мин)', 'Metro istasyonu (10 dk)'),
      L('Istanbul Airport (40 min)', 'Аэропорт Стамбула (40 мин)', 'İstanbul Havalimanı (40 dk)')
    ],
    amenities: [
      L('2 social facility buildings', '2 здания социальных объектов', '2 sosyal tesis binası'),
      L('Indoor swimming pools', 'Крытые бассейны', 'Kapalı yüzme havuzları'),
      L('Fitness center', 'Фитнес-центр', 'Fitness merkezi'),
      L('Sauna & steam rooms', 'Сауна и паровые комнаты', 'Sauna ve buhar odaları'),
      L('Pilates studio', 'Студия пилатес', 'Pilates stüdyosu'),
      L('On-site café', 'Кафе на территории', 'Yerleşkede kafe'),
      L('Walking & activity areas', 'Зоны прогулок и активного отдыха', 'Yürüyüş ve aktivite alanları'),
      L('10 commercial shops on-site', '10 коммерческих магазинов на территории', 'Yerleşkede 10 ticari mağaza'),
      L('24/7 security', 'Охрана 24/7', '7/24 güvenlik'),
      L('Private storage units', 'Личные кладовые', 'Özel depo üniteleri'),
      L('Underfloor heating', 'Тёплый пол', 'Yerden ısıtma'),
      L('Central air conditioning', 'Центральное кондиционирование', 'Merkezi klima')
    ]
  }
];

export const locations = ['Istanbul', 'Batumi', 'Bodrum'];
export const propertyTypes = ['Residence', 'Villa'];
