import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru' | 'tr';

interface Translations {
  [key: string]: {
    en: string;
    ru: string;
    tr: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', ru: 'Главная', tr: 'Ana Sayfa' },
  'nav.properties': { en: 'Properties', ru: 'Объекты', tr: 'Projeler' },
  'nav.about': { en: 'About Us', ru: 'О Нас', tr: 'Hakkımızda' },
  'nav.contact': { en: 'Contact', ru: 'Контакты', tr: 'İletişim' },
  
  // Home Hero
  'home.hero.title': { 
    en: 'Luxury Real Estate in Turkey', 
    ru: 'Элитная недвижимость в Турции', 
    tr: "Türkiye'de Lüks Gayrimenkul" 
  },
  'home.hero.subtitle': {
    en: 'Discover exclusive properties, unparalleled lifestyle, and premium investment opportunities curated for the global elite.',
    ru: 'Откройте для себя эксклюзивные объекты, непревзойденный стиль жизни и премиальные инвестиционные возможности, созданные для мировой элиты.',
    tr: 'Küresel seçkinler için derlenmiş özel mülkleri, benzersiz yaşam tarzını ve premium yatırım fırsatlarını keşfedin.'
  },
  'home.hero.cta.view': { en: 'View Properties', ru: 'Смотреть Объекты', tr: 'Projeleri İncele' },
  'home.hero.cta.contact': { en: 'Contact Us', ru: 'Связаться с нами', tr: 'Bize Ulaşın' },

  // Stats
  'stats.properties': { en: 'Properties', ru: 'Объектов', tr: 'Gayrimenkul' },
  'stats.years': { en: 'Years Experience', ru: 'Лет Опыта', tr: 'Yıllık Deneyim' },
  'stats.clients': { en: 'Happy Clients', ru: 'Счастливых Клиентов', tr: 'Mutlu Müşteri' },
  'stats.cities': { en: 'Cities', ru: 'Городов', tr: 'Şehir' },

  // Sections
  'section.featured.title': { en: 'Featured Properties', ru: 'Рекомендуемые Объекты', tr: 'Öne Çıkan Projeler' },
  'section.featured.subtitle': { en: 'A curated selection of our most prestigious listings.', ru: 'Тщательно отобранные самые престижные объекты.', tr: 'En prestijli portföyümüzden özenle seçilmiş mülkler.' },
  
  'section.why.title': { en: 'Why Choose Richmond', ru: 'Почему Выбирают Richmond', tr: 'Neden Richmond?' },
  'why.1.title': { en: 'Citizenship Programs', ru: 'Программы Гражданства', tr: 'Vatandaşlık Programları' },
  'why.1.desc': { en: 'Expert guidance through Turkish Citizenship by Investment programs.', ru: 'Экспертное сопровождение программ получения гражданства Турции за инвестиции.', tr: 'Yatırım yoluyla Türk Vatandaşlığı programlarında uzman rehberliği.' },
  'why.2.title': { en: 'Premium Investments', ru: 'Премиальные Инвестиции', tr: 'Premium Yatırımlar' },
  'why.2.desc': { en: 'Access to off-market luxury properties and high-yield opportunities.', ru: 'Доступ к закрытым объектам элитной недвижимости и высокодоходным возможностям.', tr: 'Piyasa dışı lüks mülklere ve yüksek getirili fırsatlara erişim.' },
  'why.3.title': { en: 'Bespoke Service', ru: 'Персональный Сервис', tr: 'Kişiye Özel Hizmet' },
  'why.3.desc': { en: 'Concierge-level support from property selection to final acquisition.', ru: 'Поддержка уровня консьерж-сервиса от выбора объекта до финального приобретения.', tr: 'Mülk seçiminden son satın almaya kadar konsiyerj düzeyinde destek.' },

  // Properties Page
  'properties.title': { en: 'Our Portfolio', ru: 'Наше Портфолио', tr: 'Portföyümüz' },
  'properties.filter.all': { en: 'All Locations', ru: 'Все Локации', tr: 'Tüm Konumlar' },
  'properties.filter.type': { en: 'All Types', ru: 'Все Типы', tr: 'Tüm Tipler' },
  
  // Property Card
  'property.beds': { en: 'Beds', ru: 'Спальни', tr: 'Yatak Odası' },
  'property.baths': { en: 'Baths', ru: 'Ванные', tr: 'Banyo' },
  'property.sqm': { en: 'sqm', ru: 'кв.м', tr: 'm²' },

  // Reviews
  'section.reviews.title': { en: 'What Our Clients Say', ru: 'Отзывы Наших Клиентов', tr: 'Müşterilerimiz Ne Diyor' },
  'section.reviews.subtitle': { en: 'Trusted by clients from around the world for premium real estate services in Turkey.', ru: 'Нам доверяют клиенты со всего мира в сфере премиальной недвижимости в Турции.', tr: "Türkiye'de premium gayrimenkul hizmetlerinde dünya genelinden müşteriler tarafından güveniliyor." },
  
  'review.1.location': { en: 'Moscow, Russia', ru: 'Москва, Россия', tr: 'Moskova, Rusya' },
  'review.1.text': { en: 'EV Richmond made our dream of owning a Bosphorus villa a reality. Their team handled everything from property selection to citizenship paperwork. Truly exceptional service.', ru: 'EV Richmond воплотили нашу мечту о вилле на Босфоре в реальность. Их команда занималась всем — от выбора объекта до оформления гражданства. Поистине исключительный сервис.', tr: 'EV Richmond, Boğaz\'da villa sahibi olma hayalimizi gerçeğe dönüştürdü. Ekipleri mülk seçiminden vatandaşlık evraklarına kadar her şeyi halletti. Gerçekten olağanüstü hizmet.' },
  
  'review.2.location': { en: 'Istanbul, Turkey', ru: 'Стамбул, Турция', tr: 'İstanbul, Türkiye' },
  'review.2.text': { en: 'Professional, knowledgeable, and always available. They found us the perfect penthouse in Antalya within our budget. The after-sale support has been outstanding.', ru: 'Профессиональные, компетентные и всегда на связи. Они нашли нам идеальный пентхаус в Анталии в рамках нашего бюджета. Послепродажная поддержка была великолепной.', tr: 'Profesyonel, bilgili ve her zaman ulaşılabilir. Bütçemize uygun mükemmel bir Antalya penthouse\'u buldular. Satış sonrası destek olağanüstüydü.' },
  
  'review.3.location': { en: 'Saint Petersburg, Russia', ru: 'Санкт-Петербург, Россия', tr: 'Saint Petersburg, Rusya' },
  'review.3.text': { en: 'As a first-time international buyer, I was nervous about the process. The Richmond team guided me through every step in Russian, making the entire experience seamless and stress-free.', ru: 'Как покупатель недвижимости за рубежом в первый раз, я нервничала. Команда Richmond провела меня через каждый этап на русском языке, сделав весь процесс простым и безстрессовым.', tr: 'İlk kez uluslararası mülk alan biri olarak süreç konusunda endişeliydim. Richmond ekibi her adımda bana rehberlik etti ve tüm deneyimi sorunsuz hale getirdi.' },
  
  'review.4.location': { en: 'Ankara, Turkey', ru: 'Анкара, Турция', tr: 'Ankara, Türkiye' },
  'review.4.text': { en: 'We invested in two properties through EV Richmond and the returns have exceeded our expectations. Their market knowledge and investment advice is second to none.', ru: 'Мы инвестировали в два объекта через EV Richmond, и доходность превзошла наши ожидания. Их знание рынка и инвестиционные консультации не имеют себе равных.', tr: 'EV Richmond aracılığıyla iki mülke yatırım yaptık ve getiriler beklentilerimizi aştı. Piyasa bilgileri ve yatırım tavsiyeleri eşsiz.' },
  
  'review.5.location': { en: 'Moscow, Russia', ru: 'Москва, Россия', tr: 'Moskova, Rusya' },
  'review.5.text': { en: 'The attention to detail and personalized approach sets Richmond apart. They understood exactly what we were looking for and delivered beyond our expectations.', ru: 'Внимание к деталям и персональный подход выделяют Richmond. Они точно поняли, что мы ищем, и превзошли наши ожидания.', tr: 'Detaylara gösterilen özen ve kişiselleştirilmiş yaklaşım Richmond\'ı farklı kılıyor. Tam olarak ne aradığımızı anladılar ve beklentilerimizi aştılar.' },
  
  'review.6.location': { en: 'Dubai, UAE', ru: 'Дубай, ОАЭ', tr: 'Dubai, BAE' },
  'review.6.text': { en: 'Investing in Turkish real estate from Dubai was made effortless by the EV Richmond team. Their multilingual support and deep market expertise made all the difference.', ru: 'Инвестирование в турецкую недвижимость из Дубая стало лёгким благодаря команде EV Richmond. Их многоязычная поддержка и глубокая экспертиза рынка сыграли решающую роль.', tr: "Dubai'den Türk gayrimenkulüne yatırım yapmak EV Richmond ekibi sayesinde zahmetsiz oldu. Çok dilli destekleri ve derin piyasa uzmanlıkları büyük fark yarattı." },

  // Property Detail
  'detail.backToPortfolio': { en: 'Back to Portfolio', ru: 'Назад к Портфолио', tr: 'Portföye Dön' },
  'detail.description': { en: 'Description', ru: 'Описание', tr: 'Açıklama' },
  'detail.features': { en: 'Property Features', ru: 'Характеристики', tr: 'Mülk Özellikleri' },
  'detail.yearBuilt': { en: 'Year', ru: 'Год', tr: 'Yıl' },
  'detail.parking': { en: 'Parking', ru: 'Парковка', tr: 'Otopark' },
  'detail.floors': { en: 'Floors', ru: 'Этажи', tr: 'Kat' },
  'detail.interested': { en: 'Interested in this property?', ru: 'Интересует этот объект?', tr: 'Bu mülkle ilgileniyor musunuz?' },
  'detail.interestedDesc': { en: 'Fill out the form and our team will contact you within 24 hours.', ru: 'Заполните форму, и наша команда свяжется с вами в течение 24 часов.', tr: 'Formu doldurun, ekibimiz 24 saat içinde sizinle iletişime geçsin.' },
  'detail.sendInquiry': { en: 'Send Inquiry', ru: 'Отправить Запрос', tr: 'Talep Gönder' },
  'detail.contactDirect': { en: 'Or contact us directly', ru: 'Или свяжитесь напрямую', tr: 'Veya doğrudan iletişime geçin' },
  'detail.similar': { en: 'Similar Properties', ru: 'Похожие Объекты', tr: 'Benzer Mülkler' },
  'detail.notFound': { en: 'Property Not Found', ru: 'Объект не найден', tr: 'Mülk Bulunamadı' },
  'detail.notFoundDesc': { en: 'The property you are looking for does not exist or has been removed.', ru: 'Объект, который вы ищете, не существует или был удалён.', tr: 'Aradığınız mülk mevcut değil veya kaldırılmış.' },
  'properties.filter.price': { en: 'All Prices', ru: 'Все Цены', tr: 'Tüm Fiyatlar' },
  'properties.filter.price.under2': { en: 'Under $2M', ru: 'До $2М', tr: '$2M Altı' },
  'properties.filter.price.2to5': { en: '$2M - $5M', ru: '$2М - $5М', tr: '$2M - $5M' },
  'properties.filter.price.over5': { en: 'Over $5M', ru: 'Свыше $5М', tr: '$5M Üzeri' },
  'properties.results': { en: 'properties found', ru: 'объектов найдено', tr: 'mülk bulundu' },

  // Contact
  'contact.title': { en: 'Get in Touch', ru: 'Свяжитесь с Нами', tr: 'İletişime Geçin' },
  'contact.form.name': { en: 'Full Name', ru: 'Полное Имя', tr: 'Ad Soyad' },
  'contact.form.email': { en: 'Email Address', ru: 'Email', tr: 'E-posta' },
  'contact.form.phone': { en: 'Phone Number', ru: 'Номер Телефона', tr: 'Telefon' },
  'contact.form.message': { en: 'Message', ru: 'Сообщение', tr: 'Mesajınız' },
  'contact.form.submit': { en: 'Send Inquiry', ru: 'Отправить Запрос', tr: 'Gönder' },
  
  // Footer
  'footer.desc': { en: 'Your trusted partner in luxury real estate and investment in Turkey.', ru: 'Ваш надежный партнер в элитной недвижимости и инвестициях в Турции.', tr: "Türkiye'de lüks gayrimenkul ve yatırımda güvenilir ortağınız." },
  'footer.rights': { en: 'All rights reserved.', ru: 'Все права защищены.', tr: 'Tüm hakları saklıdır.' }
};

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: string) => {
    if (translations[key]) {
      return translations[key][lang];
    }
    console.warn(`Translation key not found: ${key}`);
    return key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
