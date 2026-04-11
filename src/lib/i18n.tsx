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
  'contact.form.interest.purchase': { en: 'Property Purchase', ru: 'Покупка Недвижимости', tr: 'Mülk Satın Alma' },
  'contact.form.interest.citizenship': { en: 'Citizenship by Investment', ru: 'Гражданство за Инвестиции', tr: 'Yatırımla Vatandaşlık' },
  'contact.form.interest.investment': { en: 'Real Estate Investment', ru: 'Инвестиции в Недвижимость', tr: 'Gayrimenkul Yatırımı' },
  'contact.form.interest.rental': { en: 'Luxury Rental', ru: 'Аренда Элитной Недвижимости', tr: 'Lüks Kiralama' },
  'contact.form.interest.management': { en: 'Property Management', ru: 'Управление Недвижимостью', tr: 'Mülk Yönetimi' },
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

  // Additional Services Badge
  'section.additionalBadge': { en: 'Additional notary and lawyer services of our company', ru: 'Дополнительные услуги нотариуса и юриста нашей компании', tr: 'Şirketimizin ek noter ve avukat hizmetleri' },

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
