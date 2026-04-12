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
  'section.featured.title': { en: 'Featured Projects', ru: 'Рекомендуемые Проекты', tr: 'Öne Çıkan Projeler' },
  'section.featured.subtitle': { en: 'A curated selection of our most prestigious development projects.', ru: 'Тщательно отобранные самые престижные девелоперские проекты.', tr: 'En prestijli geliştirme projelerimizden özenle seçilmiş seçki.' },
  'price.from': { en: 'from', ru: 'от', tr: 'başlayan' },
  
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
  'detail.blocks': { en: 'Project Blocks', ru: 'Блоки Проекта', tr: 'Proje Blokları' },
  'detail.units': { en: 'Units', ru: 'Квартир', tr: 'Daire' },
  'detail.layouts': { en: 'Layouts', ru: 'Планировки', tr: 'Planlar' },
  'detail.status': { en: 'Status', ru: 'Статус', tr: 'Durum' },
  'detail.nearby': { en: 'Location & Proximity', ru: 'Локация и Близость', tr: 'Konum ve Yakınlık' },
  'detail.similar': { en: 'Similar Projects', ru: 'Похожие Проекты', tr: 'Benzer Projeler' },
  'detail.notFound': { en: 'Property Not Found', ru: 'Объект не найден', tr: 'Mülk Bulunamadı' },
  'detail.notFoundDesc': { en: 'The property you are looking for does not exist or has been removed.', ru: 'Объект, который вы ищете, не существует или был удалён.', tr: 'Aradığınız mülk mevcut değil veya kaldırılmış.' },
  'properties.filter.price': { en: 'All Prices', ru: 'Все Цены', tr: 'Tüm Fiyatlar' },
  'properties.filter.price.under2': { en: 'Under $2M', ru: 'До $2М', tr: '$2M Altı' },
  'properties.filter.price.2to5': { en: '$2M - $5M', ru: '$2М - $5М', tr: '$2M - $5M' },
  'properties.filter.price.over5': { en: 'Over $5M', ru: 'Свыше $5М', tr: '$5M Üzeri' },
  'properties.results': { en: 'properties found', ru: 'объектов найдено', tr: 'mülk bulundu' },

  // Contact
  'contact.title': { en: 'Get in Touch', ru: 'Свяжитесь с Нами', tr: 'İletişime Geçin' },
  'contact.subtitle': { en: 'We are at your disposal to assist with property acquisition, investment opportunities, and citizenship programs in Turkey.', ru: 'Мы готовы помочь с приобретением недвижимости, инвестиционными возможностями и программами гражданства в Турции.', tr: "Türkiye'de mülk edinimi, yatırım fırsatları ve vatandaşlık programları konusunda yardımcı olmaktan mutluluk duyarız." },
  'contact.office.title': { en: 'Istanbul Headquarters', ru: 'Главный Офис в Стамбуле', tr: 'İstanbul Merkez Ofis' },
  'contact.office.address': { en: 'Address', ru: 'Адрес', tr: 'Adres' },
  'contact.office.phone': { en: 'Phone', ru: 'Телефон', tr: 'Telefon' },
  'contact.office.email': { en: 'Email', ru: 'Email', tr: 'E-posta' },
  'contact.office.hours': { en: 'Office Hours', ru: 'Часы Работы', tr: 'Çalışma Saatleri' },
  'contact.services.title': { en: 'Our Services', ru: 'Наши Услуги', tr: 'Hizmetlerimiz' },
  'contact.services.1': { en: 'Luxury Property Sales & Acquisition', ru: 'Продажа и приобретение элитной недвижимости', tr: 'Lüks Mülk Satış ve Edinimi' },
  'contact.services.2': { en: 'Turkish Citizenship & Residency Programs', ru: 'Программы гражданства и ВНЖ Турции', tr: 'Türk Vatandaşlığı ve Oturma İzni Programları' },
  'contact.services.3': { en: 'Real Estate Investment Advisory', ru: 'Консультации по инвестициям в недвижимость', tr: 'Gayrimenkul Yatırım Danışmanlığı' },
  'contact.form.heading': { en: 'Schedule a Consultation', ru: 'Запланировать Консультацию', tr: 'Danışmanlık Randevusu' },
  'contact.form.subheading': { en: 'Tell us about your real estate goals and we will connect you with the right specialist.', ru: 'Расскажите нам о ваших целях в сфере недвижимости, и мы свяжем вас с нужным специалистом.', tr: 'Gayrimenkul hedeflerinizi bize anlatın, sizi doğru uzmanla buluşturalım.' },
  'contact.form.name': { en: 'Full Name', ru: 'Полное Имя', tr: 'Ad Soyad' },
  'contact.form.email': { en: 'Email Address', ru: 'Email', tr: 'E-posta' },
  'contact.form.phone': { en: 'Phone Number', ru: 'Номер Телефона', tr: 'Telefon' },
  'contact.form.language': { en: 'Preferred Language', ru: 'Предпочитаемый Язык', tr: 'Tercih Edilen Dil' },
  'contact.form.interestSection': { en: 'Your Interest', ru: 'Ваш Интерес', tr: 'İlgi Alanınız' },
  'contact.form.interest': { en: 'I am interested in...', ru: 'Меня интересует...', tr: 'İlgilendiğim konu...' },
  'contact.form.interest.placeholder': { en: 'Select your interest', ru: 'Выберите интерес', tr: 'İlgi alanınızı seçin' },
  'contact.form.interest.purchase': { en: 'Property Purchase', ru: 'Покупка недвижимости', tr: 'Mülk Satın Alma' },
  'contact.form.interest.citizenship': { en: 'Citizenship by Investment', ru: 'Гражданство за инвестиции', tr: 'Yatırımla Vatandaşlık' },
  'contact.form.interest.investment': { en: 'Real Estate Investment', ru: 'Инвестиции в недвижимость', tr: 'Gayrimenkul Yatırımı' },
  'contact.form.interest.rental': { en: 'Luxury Rental', ru: 'Аренда элитной недвижимости', tr: 'Lüks Kiralama' },
  'contact.form.interest.management': { en: 'Property Management', ru: 'Управление недвижимостью', tr: 'Mülk Yönetimi' },
  'contact.form.interest.residencePermit': { en: 'Residence Permit Processing', ru: 'Оформление вида на жительство', tr: 'Oturma İzni İşlemleri' },
  'contact.form.interest.studentVisa': { en: 'Student Visa Assistance', ru: 'Сопровождение студенческих виз', tr: 'Öğrenci Vizesi Desteği' },
  'contact.form.interest.titleTransfer': { en: 'Property Title Transfer', ru: 'Переоформление прав собственности', tr: 'Tapu Devri' },
  'contact.form.interest.giftTransaction': { en: 'Gift Transaction Legal Support', ru: 'Юридическое сопровождение сделок дарения', tr: 'Bağış İşlemleri Hukuki Desteği' },
  'contact.form.interest.notarizedTranslation': { en: 'Notarized Translations', ru: 'Нотариальные переводы', tr: 'Noter Onaylı Çeviriler' },
  'contact.form.interest.notary': { en: 'Notary Services', ru: 'Нотариальные услуги', tr: 'Noter Hizmetleri' },
  'contact.form.interest.legal': { en: 'Legal Consultation & Lawyer Services', ru: 'Юридические консультации и услуги адвоката', tr: 'Hukuki Danışmanlık ve Avukatlık Hizmetleri' },
  'contact.form.propertyType': { en: 'Property Type', ru: 'Тип Недвижимости', tr: 'Mülk Tipi' },
  'contact.form.propertyType.any': { en: 'Any Type', ru: 'Любой Тип', tr: 'Herhangi Bir Tip' },
  'contact.form.propertyType.villa': { en: 'Villa', ru: 'Вилла', tr: 'Villa' },
  'contact.form.propertyType.penthouse': { en: 'Penthouse', ru: 'Пентхаус', tr: 'Penthouse' },
  'contact.form.propertyType.apartment': { en: 'Apartment / Residence', ru: 'Квартира / Резиденция', tr: 'Daire / Rezidans' },
  'contact.form.propertyType.residence': { en: 'Luxury Residence', ru: 'Элитная Резиденция', tr: 'Lüks Rezidans' },
  'contact.form.propertyType.commercial': { en: 'Commercial Property', ru: 'Коммерческая Недвижимость', tr: 'Ticari Gayrimenkul' },
  'contact.form.propertyType.land': { en: 'Land / Plot', ru: 'Земельный Участок', tr: 'Arsa' },
  'contact.form.location': { en: 'Preferred Location', ru: 'Предпочитаемая Локация', tr: 'Tercih Edilen Konum' },
  'contact.form.location.any': { en: 'Any Location', ru: 'Любая Локация', tr: 'Herhangi Bir Konum' },
  'contact.form.location.other': { en: 'Other', ru: 'Другое', tr: 'Diğer' },
  'contact.form.citizenshipProgram': { en: 'Citizenship Program', ru: 'Программа Гражданства', tr: 'Vatandaşlık Programı' },
  'contact.form.citizenshipProgram.placeholder': { en: 'Select a program', ru: 'Выберите программу', tr: 'Program seçin' },
  'contact.form.citizenshipProgram.turkey400': { en: 'Turkish Citizenship — $400,000 Property Investment', ru: 'Гражданство Турции — Инвестиция в недвижимость $400 000', tr: 'Türk Vatandaşlığı — 400.000$ Mülk Yatırımı' },
  'contact.form.citizenshipProgram.turkeyInvestment': { en: 'Turkish Citizenship — $500,000 Capital Investment', ru: 'Гражданство Турции — Капитальная инвестиция $500 000', tr: 'Türk Vatandaşlığı — 500.000$ Sermaye Yatırımı' },
  'contact.form.citizenshipProgram.residency': { en: 'Turkish Residency Permit', ru: 'Вид на жительство в Турции', tr: 'Türkiye Oturma İzni' },
  'contact.form.citizenshipProgram.consultation': { en: 'General Citizenship Consultation', ru: 'Общая консультация по гражданству', tr: 'Genel Vatandaşlık Danışmanlığı' },
  'contact.form.budget': { en: 'Budget Range', ru: 'Бюджет', tr: 'Bütçe Aralığı' },
  'contact.form.budget.placeholder': { en: 'Select your budget', ru: 'Выберите бюджет', tr: 'Bütçenizi seçin' },
  'contact.form.budget.under500': { en: 'Under $500,000', ru: 'До $500 000', tr: '$500.000 Altı' },
  'contact.form.budget.500to1m': { en: '$500,000 — $1,000,000', ru: '$500 000 — $1 000 000', tr: '$500.000 — $1.000.000' },
  'contact.form.budget.1to3m': { en: '$1,000,000 — $3,000,000', ru: '$1 000 000 — $3 000 000', tr: '$1.000.000 — $3.000.000' },
  'contact.form.budget.3to5m': { en: '$3,000,000 — $5,000,000', ru: '$3 000 000 — $5 000 000', tr: '$3.000.000 — $5.000.000' },
  'contact.form.budget.5to10m': { en: '$5,000,000 — $10,000,000', ru: '$5 000 000 — $10 000 000', tr: '$5.000.000 — $10.000.000' },
  'contact.form.budget.over10m': { en: 'Over $10,000,000', ru: 'Свыше $10 000 000', tr: '$10.000.000 Üzeri' },
  'contact.form.message': { en: 'Additional Details', ru: 'Дополнительные Детали', tr: 'Ek Detaylar' },
  'contact.form.message.placeholder': { en: 'Tell us more about your requirements, timeline, or any specific questions...', ru: 'Расскажите подробнее о ваших требованиях, сроках или конкретных вопросах...', tr: 'Gereksinimleriniz, zaman çizelgeniz veya özel sorularınız hakkında daha fazla bilgi verin...' },
  'contact.form.submit': { en: 'Schedule Consultation', ru: 'Запланировать Консультацию', tr: 'Danışmanlık Planla' },
  'contact.form.sending': { en: 'Sending...', ru: 'Отправка...', tr: 'Gönderiliyor...' },
  'contact.toast.title': { en: 'Inquiry Sent Successfully', ru: 'Запрос Успешно Отправлен', tr: 'Başvuru Başarıyla Gönderildi' },
  'contact.toast.desc': { en: 'One of our luxury property consultants will contact you within 24 hours.', ru: 'Один из наших консультантов по элитной недвижимости свяжется с вами в течение 24 часов.', tr: 'Lüks mülk danışmanlarımızdan biri 24 saat içinde sizinle iletişime geçecektir.' },
  
  // Team
  'section.team.title': { en: 'Our Team', ru: 'Наша Команда', tr: 'Ekibimiz' },
  'team.1.name': { en: 'Sales Manager', ru: 'Менеджер отдела продаж', tr: 'Satış Müdürü' },
  'team.2.name': { en: 'Portfolio Manager', ru: 'Портфолио менеджер', tr: 'Portföy Yöneticisi' },
  'team.3.name': { en: 'Founder & CEO', ru: 'Основательница компании / CEO', tr: 'Kurucu & CEO' },
  'team.4.name': { en: 'Sworn Translator / Lawyer', ru: 'Присяжная переводчица / Юрист', tr: 'Yeminli Tercüman / Avukat' },

  // About Company
  'section.about.title': { en: 'About the Company', ru: 'О Компании', tr: 'Şirket Hakkında' },
  'section.about.quote': {
    en: 'We build trust through premium real estate and personalized service.',
    ru: 'Мы строим доверие через премиальную недвижимость и персональный сервис.',
    tr: 'Premium gayrimenkul ve kişiselleştirilmiş hizmet ile güven inşa ediyoruz.'
  },
  'section.about.text1': {
    en: 'The company was founded in 2022. Director Melena Vidina holds a finance degree and an MBI business school diploma. She has Turkish citizenship and has been living in Istanbul for over 15 years.',
    ru: 'Компания основана в 2022 году. Руководитель Melena Vidina имеет финансовое образование и диплом бизнес-школы MBI. Имеет турецкое гражданство и более 15 лет живёт в Стамбуле.',
    tr: 'Şirket 2022 yılında kurulmuştur. Yönetici Melena Vidina finans eğitimine ve MBI işletme okulu diplomasına sahiptir. Türk vatandaşlığına sahip olup 15 yılı aşkın süredir İstanbul\'da yaşamaktadır.'
  },
  'section.about.text2': {
    en: 'We work with leading development projects in Istanbul, Dubai and London, offering clients carefully selected properties with high investment potential.',
    ru: 'Мы работаем с ведущими девелоперскими проектами Стамбула, Дубая и Лондона, предлагая клиентам тщательно отобранные объекты с высоким инвестиционным потенциалом.',
    tr: 'İstanbul, Dubai ve Londra\'daki önde gelen geliştirme projeleriyle çalışıyor, müşterilerimize yüksek yatırım potansiyeline sahip özenle seçilmiş mülkler sunuyoruz.'
  },
  'section.about.text3': {
    en: 'We also offer comprehensive client support, including legal assistance for residence permits and citizenship, help with insurance, children\'s education, and assistance with notarial procedures.',
    ru: 'Мы также предлагаем комплексное сопровождение клиентов, включая юридическую поддержку при оформлении ВНЖ и гражданства, помощь в вопросах страхования, образования для детей, а также содействие в нотариальных процедурах.',
    tr: 'Ayrıca oturma izni ve vatandaşlık için hukuki destek, sigorta, çocukların eğitimi ve noter işlemleri konusunda yardım dahil kapsamlı müşteri desteği sunuyoruz.'
  },

  // Services
  'section.services.title': { en: 'Our Services', ru: 'Спектр Услуг', tr: 'Hizmetlerimiz' },
  'services.1': { en: 'Personalized selection of premium investment projects', ru: 'Персональный подбор инвестиционных проектов премиум-класса', tr: 'Premium yatırım projelerinin kişiselleştirilmiş seçimi' },
  'services.2': { en: 'Citizenship property from $400,000 with processing for the whole family', ru: 'Недвижимость под гражданство от $400 000 с оформлением для всей семьи', tr: 'Tüm aile için işlem yapılarak 400.000$\'dan başlayan vatandaşlık mülkü' },
  'services.3': { en: 'Comprehensive residence permit processing', ru: 'Комплексное оформление ВНЖ', tr: 'Kapsamlı oturma izni işlemleri' },
  'services.4': { en: 'Student visa assistance', ru: 'Сопровождение студенческих виз', tr: 'Öğrenci vizesi desteği' },
  'services.5': { en: 'Legal support for gift transactions', ru: 'Юридическое сопровождение сделок дарения', tr: 'Bağış işlemleri için hukuki destek' },
  'services.6': { en: 'Turnkey property title transfer', ru: 'Переоформление прав собственности «под ключ»', tr: 'Anahtar teslimi tapu devri' },
  'services.7': { en: 'Notarized translations with guaranteed accuracy and confidentiality', ru: 'Нотариальные переводы с гарантией точности и конфиденциальности', tr: 'Doğruluk ve gizlilik garantili noter onaylı çeviriler' },
  'services.8': { en: 'Professional notary services', ru: 'Профессиональные нотариальные услуги', tr: 'Profesyonel noter hizmetleri' },
  'services.9': { en: 'Legal consultation and lawyer services', ru: 'Юридические консультации и услуги адвоката', tr: 'Hukuki danışmanlık ve avukatlık hizmetleri' },

  // Property Management
  'section.propMgmt.title': { en: 'Property Management', ru: 'Управление Недвижимостью', tr: 'Mülk Yönetimi' },
  'propMgmt.1': { en: 'Title deed registration', ru: 'Оформление прав собственности', tr: 'Tapu tescili' },
  'propMgmt.2': { en: 'Property tax payment', ru: 'Оплата налога на недвижимость', tr: 'Emlak vergisi ödemesi' },
  'propMgmt.3': { en: 'Document updates after citizenship', ru: 'Обновление документов после получения гражданства', tr: 'Vatandaşlık sonrası belge güncelleme' },
  'propMgmt.4': { en: 'Removal of "not for sale" restriction', ru: 'Снятие ограничения «не для продажи»', tr: '"Satılık değil" kısıtlamasının kaldırılması' },
  'propMgmt.5': { en: 'Property rental management', ru: 'Сдача недвижимости в аренду', tr: 'Mülk kiralama yönetimi' },
  'propMgmt.6': { en: 'Utility connection and disconnection', ru: 'Подключение и отключение коммунальных услуг', tr: 'Hizmet bağlantısı ve kesintisi' },
  'propMgmt.tagline': { en: 'Trust us with the care of your property', ru: 'Доверьте нам заботу о вашей недвижимости', tr: 'Mülkünüzün bakımını bize emanet edin' },
  'propMgmt.footer': { en: 'Professional service \u2022 Individual approach', ru: 'Профессиональный сервис \u2022 Индивидуальный подход', tr: 'Profesyonel hizmet \u2022 Bireysel yaklaşım' },


  // About Page
  'about.hero.title': { en: 'About', ru: 'О', tr: 'Hakkında' },
  'about.hero.titleAccent': { en: 'Our Company', ru: 'Компании', tr: 'Şirketimiz' },
  'about.hero.subtitle': {
    en: 'EV Richmond Property Group — your trusted partner in premium real estate and investment consulting in Turkey, Dubai and London.',
    ru: 'EV Richmond Property Group — ваш надежный партнер в сфере премиальной недвижимости и инвестиционного консалтинга в Турции, Дубае и Лондоне.',
    tr: 'EV Richmond Property Group — Türkiye, Dubai ve Londra\'da premium gayrimenkul ve yatırım danışmanlığında güvenilir ortağınız.'
  },
  'about.story.title': { en: 'Our Story', ru: 'Наша История', tr: 'Hikayemiz' },
  'about.values.1': { en: 'Finance education & MBI business school diploma', ru: 'Финансовое образование и диплом бизнес-школы MBI', tr: 'Finans eğitimi ve MBI işletme okulu diploması' },
  'about.values.2': { en: 'Turkish citizenship, 15+ years in Istanbul', ru: 'Турецкое гражданство, более 15 лет в Стамбуле', tr: 'Türk vatandaşlığı, İstanbul\'da 15+ yıl' },
  'about.values.3': { en: 'Projects in Istanbul, Dubai & London', ru: 'Проекты в Стамбуле, Дубае и Лондоне', tr: 'İstanbul, Dubai ve Londra\'da projeler' },
  'about.values.4': { en: 'Full legal, insurance & education support', ru: 'Полная юридическая, страховая и образовательная поддержка', tr: 'Tam hukuki, sigorta ve eğitim desteği' },

  'type.Residence': { en: 'Residence', ru: 'Резиденция', tr: 'Rezidans' },
  'type.Villa': { en: 'Villa', ru: 'Вилла', tr: 'Villa' },

  // Footer
  'footer.desc': { en: 'Your trusted partner in luxury real estate and investment in Turkey.', ru: 'Ваш надежный партнер в элитной недвижимости и инвестициях в Турции.', tr: "Türkiye'de lüks gayrimenkul ve yatırımda güvenilir ortağınız." },
  'footer.quickLinks': { en: 'Quick Links', ru: 'Быстрые ссылки', tr: 'Hızlı Bağlantılar' },
  'footer.locations': { en: 'Locations', ru: 'Локации', tr: 'Lokasyonlar' },
  'footer.contactInfo': { en: 'Contact Info', ru: 'Контактная информация', tr: 'İletişim Bilgileri' },
  'footer.address': { en: 'Zorlu Center, Istanbul\nTurkey', ru: 'Зорлу Центр, Стамбул\nТурция', tr: 'Zorlu Center, İstanbul\nTürkiye' },
  'footer.privacy': { en: 'Privacy Policy', ru: 'Политика конфиденциальности', tr: 'Gizlilik Politikası' },
  'footer.terms': { en: 'Terms of Service', ru: 'Условия использования', tr: 'Hizmet Şartları' },
  'footer.rights': { en: 'All rights reserved.', ru: 'Все права защищены.', tr: 'Tüm hakları saklıdır.' },

  // Privacy Policy page
  'privacy.title': { en: 'Privacy Policy', ru: 'Политика конфиденциальности', tr: 'Gizlilik Politikası' },
  'privacy.intro': {
    en: 'EV Richmond Property Group ("we", "us", "our") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and real estate services.',
    ru: 'EV Richmond Property Group («мы», «нас», «наш») обязуется защищать ваши персональные данные. Настоящая Политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу информацию при использовании нашего сайта и услуг в сфере недвижимости.',
    tr: 'EV Richmond Property Group ("biz", "bize", "bizim") kişisel verilerinizi korumayı taahhüt eder. Bu Gizlilik Politikası, web sitemizi ve gayrimenkul hizmetlerimizi kullandığınızda bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.'
  },
  'privacy.section1.title': { en: 'Information We Collect', ru: 'Информация, которую мы собираем', tr: 'Topladığımız Bilgiler' },
  'privacy.section1.body': {
    en: 'We collect personal information you provide directly, including your name, email address, phone number, and property preferences when you submit inquiry forms. We also collect technical data such as IP address, browser type, and browsing patterns through cookies and analytics tools.',
    ru: 'Мы собираем личную информацию, которую вы предоставляете напрямую, включая ваше имя, адрес электронной почты, номер телефона и предпочтения по недвижимости при отправке форм запроса. Мы также собираем технические данные, такие как IP-адрес, тип браузера и шаблоны просмотра с помощью файлов cookie и аналитических инструментов.',
    tr: 'Sorgulama formlarını gönderdiğinizde adınız, e-posta adresiniz, telefon numaranız ve gayrimenkul tercihleriniz dahil olmak üzere doğrudan sağladığınız kişisel bilgileri toplarız. Ayrıca çerezler ve analiz araçları aracılığıyla IP adresi, tarayıcı türü ve gezinme kalıpları gibi teknik verileri de toplarız.'
  },
  'privacy.section2.title': { en: 'How We Use Your Information', ru: 'Как мы используем вашу информацию', tr: 'Bilgilerinizi Nasıl Kullanırız' },
  'privacy.section2.body': {
    en: 'We use your information to respond to property inquiries, provide personalized real estate recommendations, process transactions, send relevant property updates (with your consent), and improve our website and services. We do not sell your personal data to third parties.',
    ru: 'Мы используем вашу информацию для ответа на запросы о недвижимости, предоставления персонализированных рекомендаций, обработки транзакций, отправки актуальных обновлений (с вашего согласия) и улучшения нашего сайта и услуг. Мы не продаём ваши персональные данные третьим лицам.',
    tr: 'Bilgilerinizi gayrimenkul sorularına yanıt vermek, kişiselleştirilmiş öneriler sunmak, işlemleri gerçekleştirmek, ilgili güncellemeler göndermek (onayınızla) ve web sitemizi ve hizmetlerimizi iyileştirmek için kullanırız. Kişisel verilerinizi üçüncü taraflara satmıyoruz.'
  },
  'privacy.section3.title': { en: 'Data Protection & Security', ru: 'Защита и безопасность данных', tr: 'Veri Koruma ve Güvenlik' },
  'privacy.section3.body': {
    en: 'We implement industry-standard security measures to protect your personal data, including SSL encryption, secure servers, and restricted access protocols. Your data is stored in compliance with applicable Turkish and international data protection regulations, including KVKK (Turkish Personal Data Protection Law).',
    ru: 'Мы применяем стандартные отраслевые меры безопасности для защиты ваших персональных данных, включая SSL-шифрование, защищённые серверы и протоколы ограниченного доступа. Ваши данные хранятся в соответствии с применимыми турецкими и международными нормами защиты данных, включая KVKK (Закон Турции о защите персональных данных).',
    tr: 'SSL şifreleme, güvenli sunucular ve kısıtlı erişim protokolleri dahil olmak üzere kişisel verilerinizi korumak için endüstri standardı güvenlik önlemleri uyguluyoruz. Verileriniz, KVKK (Kişisel Verilerin Korunması Kanunu) dahil olmak üzere geçerli Türk ve uluslararası veri koruma düzenlemelerine uygun olarak saklanır.'
  },
  'privacy.section4.title': { en: 'Your Rights', ru: 'Ваши права', tr: 'Haklarınız' },
  'privacy.section4.body': {
    en: 'You have the right to access, correct, or delete your personal data at any time. You may also withdraw consent for marketing communications. To exercise these rights, contact us at info@evrichmond.com.',
    ru: 'Вы имеете право на доступ, исправление или удаление ваших персональных данных в любое время. Вы также можете отозвать согласие на маркетинговые рассылки. Для реализации этих прав свяжитесь с нами по адресу info@evrichmond.com.',
    tr: 'Kişisel verilerinize istediğiniz zaman erişme, düzeltme veya silme hakkına sahipsiniz. Ayrıca pazarlama iletişimleri için onayınızı geri çekebilirsiniz. Bu hakları kullanmak için info@evrichmond.com adresinden bizimle iletişime geçin.'
  },
  'privacy.section5.title': { en: 'Contact', ru: 'Контакты', tr: 'İletişim' },
  'privacy.section5.body': {
    en: 'For questions about this Privacy Policy, please contact EV Richmond Property Group at info@evrichmond.com or +90 555 000 0000.',
    ru: 'По вопросам, связанным с настоящей Политикой конфиденциальности, обращайтесь в EV Richmond Property Group по адресу info@evrichmond.com или +90 555 000 0000.',
    tr: 'Bu Gizlilik Politikası hakkındaki sorularınız için lütfen EV Richmond Property Group ile info@evrichmond.com veya +90 555 000 0000 üzerinden iletişime geçin.'
  },

  // Terms of Service page
  'terms.title': { en: 'Terms of Service', ru: 'Условия использования', tr: 'Hizmet Şartları' },
  'terms.intro': {
    en: 'Welcome to EV Richmond Property Group. By accessing and using our website and services, you agree to comply with these Terms of Service. Please read them carefully before using our platform.',
    ru: 'Добро пожаловать в EV Richmond Property Group. Используя наш сайт и услуги, вы соглашаетесь соблюдать настоящие Условия использования. Пожалуйста, внимательно прочитайте их перед использованием нашей платформы.',
    tr: 'EV Richmond Property Group\'a hoş geldiniz. Web sitemize ve hizmetlerimize erişerek ve bunları kullanarak bu Hizmet Şartlarına uymayı kabul edersiniz. Platformumuzu kullanmadan önce lütfen bunları dikkatlice okuyun.'
  },
  'terms.section1.title': { en: 'Services', ru: 'Услуги', tr: 'Hizmetler' },
  'terms.section1.body': {
    en: 'EV Richmond Property Group provides real estate brokerage and advisory services for luxury residential properties in Turkey and Georgia. Property listings, prices, and availability displayed on our website are for informational purposes and may change without notice. All prices are approximate and subject to current exchange rates.',
    ru: 'EV Richmond Property Group предоставляет брокерские и консультационные услуги в сфере элитной жилой недвижимости в Турции и Грузии. Объявления о недвижимости, цены и доступность, отображаемые на нашем сайте, носят информационный характер и могут быть изменены без предварительного уведомления. Все цены являются приблизительными и зависят от текущих обменных курсов.',
    tr: 'EV Richmond Property Group, Türkiye ve Gürcistan\'da lüks konut gayrimenkulleri için emlak aracılık ve danışmanlık hizmetleri sunar. Web sitemizde görüntülenen mülk listelemeleri, fiyatlar ve müsaitlik bilgilendirme amaçlıdır ve önceden haber verilmeksizin değişebilir. Tüm fiyatlar yaklaşık olup güncel döviz kurlarına tabidir.'
  },
  'terms.section2.title': { en: 'User Responsibilities', ru: 'Обязанности пользователя', tr: 'Kullanıcı Sorumlulukları' },
  'terms.section2.body': {
    en: 'You agree to provide accurate information when submitting inquiries or contact forms. You may not use our website for any unlawful purpose or in a way that could damage, disable, or impair our services. Any information obtained from our site shall not be used for competing commercial purposes without our written consent.',
    ru: 'Вы обязуетесь предоставлять точную информацию при отправке запросов или контактных форм. Вы не имеете права использовать наш сайт в незаконных целях или способом, который может повредить, отключить или нарушить работу наших услуг. Любая информация, полученная с нашего сайта, не может быть использована в конкурирующих коммерческих целях без нашего письменного согласия.',
    tr: 'Sorgulama veya iletişim formları gönderirken doğru bilgi vermeyi kabul edersiniz. Web sitemizi herhangi bir yasadışı amaçla veya hizmetlerimize zarar verebilecek, devre dışı bırakabilecek şekilde kullanamazsınız. Sitemizden elde edilen bilgiler, yazılı onayımız olmadan rakip ticari amaçlarla kullanılamaz.'
  },
  'terms.section3.title': { en: 'Property Transactions', ru: 'Сделки с недвижимостью', tr: 'Gayrimenkul İşlemleri' },
  'terms.section3.body': {
    en: 'All property transactions are subject to separate purchase agreements governed by Turkish or Georgian law, as applicable. EV Richmond Property Group acts as an intermediary and does not guarantee the accuracy of third-party developer information. Buyers are advised to conduct independent due diligence before making purchase decisions.',
    ru: 'Все сделки с недвижимостью регулируются отдельными договорами купли-продажи в соответствии с турецким или грузинским законодательством. EV Richmond Property Group выступает в качестве посредника и не гарантирует точность информации сторонних застройщиков. Покупателям рекомендуется проводить независимую проверку перед принятием решений о покупке.',
    tr: 'Tüm gayrimenkul işlemleri, uygulanabilir olduğu şekilde Türk veya Gürcü hukukuna tabi ayrı satın alma sözleşmelerine tabidir. EV Richmond Property Group aracı olarak hareket eder ve üçüncü taraf geliştirici bilgilerinin doğruluğunu garanti etmez. Alıcıların satın alma kararları vermeden önce bağımsız durum tespiti yapmaları tavsiye edilir.'
  },
  'terms.section4.title': { en: 'Intellectual Property', ru: 'Интеллектуальная собственность', tr: 'Fikri Mülkiyet' },
  'terms.section4.body': {
    en: 'All content on this website, including text, images, logos, and design, is the property of EV Richmond Property Group and is protected by copyright and intellectual property laws. Unauthorized reproduction or distribution of any content is prohibited.',
    ru: 'Всё содержимое данного сайта, включая тексты, изображения, логотипы и дизайн, является собственностью EV Richmond Property Group и защищено законами об авторском праве и интеллектуальной собственности. Несанкционированное воспроизведение или распространение любого контента запрещено.',
    tr: 'Bu web sitesindeki metin, görseller, logolar ve tasarım dahil tüm içerik EV Richmond Property Group\'un mülkiyetindedir ve telif hakkı ve fikri mülkiyet yasalarıyla korunmaktadır. İçeriğin izinsiz çoğaltılması veya dağıtılması yasaktır.'
  },
  'terms.section5.title': { en: 'Limitation of Liability', ru: 'Ограничение ответственности', tr: 'Sorumluluk Sınırlaması' },
  'terms.section5.body': {
    en: 'EV Richmond Property Group shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services. We make no warranties regarding the completeness or accuracy of information on our site. Investment decisions should be made with professional financial and legal advice.',
    ru: 'EV Richmond Property Group не несёт ответственности за любые косвенные, случайные или последующие убытки, возникающие в результате использования нашего сайта или услуг. Мы не даём гарантий относительно полноты или точности информации на нашем сайте. Инвестиционные решения следует принимать с профессиональной финансовой и юридической консультацией.',
    tr: 'EV Richmond Property Group, web sitemizin veya hizmetlerimizin kullanımından kaynaklanan dolaylı, arızi veya sonuç olarak ortaya çıkan zararlardan sorumlu tutulamaz. Sitemizdeki bilgilerin eksiksizliği veya doğruluğu konusunda garanti vermiyoruz. Yatırım kararları profesyonel mali ve hukuki danışmanlık ile alınmalıdır.'
  },
  'terms.section6.title': { en: 'Contact', ru: 'Контакты', tr: 'İletişim' },
  'terms.section6.body': {
    en: 'For questions regarding these Terms of Service, contact us at info@evrichmond.com or +90 555 000 0000.',
    ru: 'По вопросам, связанным с настоящими Условиями использования, свяжитесь с нами по адресу info@evrichmond.com или +90 555 000 0000.',
    tr: 'Bu Hizmet Şartları ile ilgili sorularınız için info@evrichmond.com veya +90 555 000 0000 üzerinden bizimle iletişime geçin.'
  },
  'legal.lastUpdated': { en: 'Last updated', ru: 'Последнее обновление', tr: 'Son güncelleme' }
};

interface LocalizedText { en: string; ru: string; tr: string }

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  lt: (obj: LocalizedText | string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
  lt: (obj: LocalizedText | string) => typeof obj === 'string' ? obj : obj.en,
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

  const lt = (obj: LocalizedText | string): string => {
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj.en;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t, lt }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
