export type Language = "en" | "ru"

export const translations = {
  en: {
    // Navigation
    nav: {
      work: "Work",
      photography: "Photography",
      design: "Design",
      about: "About",
      contact: "Contact",
      bookNow: "Book Now",
    },
    // Header
    header: {
      title: "Ilya Oblog",
      subtitle: "Photographer & Designer",
    },
    // Hero
    hero: {
      welcome: "Welcome to my portfolio",
      headline: "I capture moments and craft",
      headlineHighlight: "visual stories",
      headlineEnd: "that resonate",
      description: "As a photographer and graphic designer, I blend artistic vision with technical precision to create compelling imagery and design solutions for brands and individuals.",
      viewWork: "View Work",
      learnMore: "Learn More",
      scrollToWork: "Scroll to work",
    },
    // Featured Work
    featuredWork: {
      subtitle: "Selected Work",
      title: "Featured Projects",
      photography: "Photography",
      design: "Design",
    },
    // Photography Gallery
    photography: {
      subtitle: "Photography",
      title: "Captured Moments",
      description: "From intimate portraits to sweeping landscapes, each photograph tells a unique story of light, emotion, and the human experience.",
      categories: {
        all: "All",
        portrait: "Portrait",
        landscape: "Landscape",
        editorial: "Editorial",
        events: "Events",
      },
    },
    // Design Portfolio
    designPortfolio: {
      subtitle: "Graphic Design",
      title: "Selected Projects",
      description: "Strategic design solutions that elevate brands through thoughtful visual communication and meticulous attention to detail.",
      client: "Client",
      aboutProject: "About the Project",
      services: "Services",
    },
    // About
    about: {
      subtitle: "About Me",
      title: "Crafting Visual Stories",
      bio1: "I'm Ilya Oblog, a photographer and graphic designer based in New York City. With over a decade of experience, I've had the privilege of working with brands and individuals who value thoughtful, impactful visual communication.",
      bio2: "My approach combines technical precision with artistic intuition. Whether I'm behind the camera or at the design desk, I believe in creating work that not only looks beautiful but tells a compelling story and achieves meaningful results.",
      bio3: "When I'm not creating, you'll find me exploring new cities, visiting galleries, or mentoring emerging creatives through community workshops.",
      yearsExperience: "Years of Experience",
      stats: {
        photographyProjects: "Photography Projects",
        designProjects: "Design Projects",
        happyClients: "Happy Clients",
        awardsReceived: "Awards Received",
      },
      servicesTitle: "What I Offer",
      servicesSubtitle: "Services",
      services: {
        portraitPhotography: {
          title: "Portrait Photography",
          description: "Professional headshots, editorial portraits, and personal branding sessions.",
        },
        eventCoverage: {
          title: "Event Coverage",
          description: "Weddings, corporate events, and special occasions captured with care.",
        },
        brandIdentity: {
          title: "Brand Identity",
          description: "Logo design, visual systems, and comprehensive brand guidelines.",
        },
        webDesign: {
          title: "Web & Digital Design",
          description: "User-centered websites and digital experiences that convert.",
        },
        editorialDesign: {
          title: "Editorial Design",
          description: "Magazine layouts, book design, and publication art direction.",
        },
        packagingDesign: {
          title: "Packaging Design",
          description: "Product packaging that stands out on shelves and tells your story.",
        },
      },
    },
    // Testimonials
    testimonials: {
      subtitle: "Testimonials",
      title: "What Clients Say",
    },
    // Contact
    contact: {
      subtitle: "Contact",
      title: "Let's Create Together",
      description: "Ready to bring your vision to life? Whether you're looking for photography services, design work, or a creative consultation, I'd love to hear from you. Fill out the form or reach out directly.",
      email: "Email",
      phone: "Phone",
      studio: "Studio",
      address: "123 Creative Lane\nNew York, NY 10001",
      followAlong: "Follow along",
      generalInquiry: "General Inquiry",
      bookSession: "Book a Session",
      firstName: "First Name",
      lastName: "Last Name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      serviceInterested: "Service Interested In",
      selectService: "Select a service",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      sendMessage: "Send Message",
      sending: "Sending...",
      serviceType: "Service Type",
      preferredDate: "Preferred Date",
      pickDate: "Pick a date",
      preferredTime: "Preferred Time",
      selectTime: "Select time",
      projectDetails: "Project Details",
      projectDetailsPlaceholder: "Tell me about your project, goals, and any specific requirements...",
      requestBooking: "Request Booking",
      requesting: "Requesting...",
      confirmNote: "I'll confirm your appointment within 24 hours via email",
      thankYou: "Thank You!",
      thankYouMessage: "Your message has been received. I'll get back to you within 24-48 hours to discuss your project.",
      sendAnother: "Send Another Message",
      serviceTypes: {
        portrait: "Portrait Photography",
        event: "Event Photography",
        brandIdentity: "Brand Identity Design",
        webDesign: "Web & Digital Design",
        editorial: "Editorial Design",
        packaging: "Packaging Design",
        consultation: "Creative Consultation",
        other: "Other",
      },
    },
    // Footer
    footer: {
      description: "Photographer and graphic designer creating compelling visual stories for brands and individuals.",
      work: "Work",
      information: "Information",
      stayUpdated: "Stay Updated",
      subscribeText: "Subscribe for updates on new work and creative insights.",
      subscribe: "Subscribe",
      allRights: "All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
    },
    // Projects data
    projects: {
      timelineMagazine: {
        title: "Timeline Magazine",
        description: "Building a seamless path to better cellular health through thoughtful design and imagery.",
      },
      siestaCampers: {
        title: "Siesta Campers",
        description: "Elevating Portugal's premier van rental company through compelling brand photography.",
      },
      architectStudio: {
        title: "Architect Studio",
        description: "Distilling architectural impact to its spatial essence through minimalist design.",
      },
      portraitSeries: {
        title: "Portrait Series",
        description: "An intimate exploration of human emotion and connection through portraiture.",
      },
      urbanLandscapes: {
        title: "Urban Landscapes",
        description: "Capturing the rhythm and energy of city life through architectural photography.",
      },
      bloomCosmetics: {
        title: "Bloom Cosmetics",
        description: "Complete brand identity and packaging design for a luxury skincare line.",
      },
    },
    // Photo titles
    photos: {
      naturalLightPortrait: { title: "Natural Light Portrait", description: "Editorial portrait session in studio" },
      alpineDawn: { title: "Alpine Dawn", description: "Sunrise in the Swiss Alps" },
      vogueFeature: { title: "Vogue Feature", description: "Fashion editorial for Vogue Italia" },
      summerWedding: { title: "Summer Wedding", description: "Intimate garden wedding celebration" },
      executivePortrait: { title: "Executive Portrait", description: "Corporate headshot session" },
      foggyMorning: { title: "Foggy Morning", description: "Pacific Northwest forest at dawn" },
      studioSession: { title: "Studio Session", description: "High fashion editorial shoot" },
      techSummit: { title: "Tech Summit 2025", description: "Annual technology conference coverage" },
      beautyEditorial: { title: "Beauty Editorial", description: "Skincare campaign portrait" },
    },
    // Design projects
    designProjects: {
      bloomWellness: {
        title: "Bloom Wellness",
        category: "Brand Identity",
        description: "Complete brand identity for a modern wellness and spa brand, including logo design, color palette, typography system, and comprehensive brand guidelines.",
        client: "Bloom Wellness Co.",
      },
      artisanCoffee: {
        title: "Artisan Coffee",
        category: "Packaging Design",
        description: "Packaging design for a specialty coffee roaster, featuring minimalist aesthetics with tactile paper textures and sustainable materials.",
        client: "Artisan Roasters",
      },
      techForward: {
        title: "Tech Forward",
        category: "Web Design",
        description: "Website redesign for a technology startup, focusing on clean interfaces, intuitive navigation, and conversion optimization.",
        client: "TechForward Inc.",
      },
      urbanMagazine: {
        title: "Urban Magazine",
        category: "Editorial Design",
        description: "Art direction and layout design for a quarterly urban lifestyle magazine, featuring bold typography and dynamic photo treatments.",
        client: "Urban Living Media",
      },
      ecoApparel: {
        title: "Eco Apparel",
        category: "Brand Identity",
        description: "Sustainable fashion brand identity centered around environmental consciousness, featuring earth tones and organic design elements.",
        client: "Eco Threads",
      },
      festivalPosters: {
        title: "Festival Posters",
        category: "Print Design",
        description: "Series of promotional posters for an annual music and arts festival, blending illustration with photography.",
        client: "Horizon Festival",
      },
    },
    // Tags
    tags: {
      design: "Design",
      photography: "Photography",
      editorial: "Editorial",
      branding: "Branding",
      web: "Web",
      architecture: "Architecture",
      packaging: "Packaging",
      logoDesign: "Logo Design",
      guidelines: "Guidelines",
      print: "Print",
      sustainable: "Sustainable",
      uiux: "UI/UX",
      development: "Development",
      layout: "Layout",
      typography: "Typography",
      fashion: "Fashion",
      illustration: "Illustration",
      events: "Events",
    },
    // Testimonials data
    testimonialsData: [
      {
        quote: "Ilya captured our wedding day with such artistry and attention to detail. Every photo tells a story, and we couldn't be happier with the results.",
        author: "Anna & Dmitry",
        role: "Wedding Clients",
      },
      {
        quote: "Working with Ilya on our brand identity was transformative. He understood our vision immediately and delivered a design system that perfectly represents who we are.",
        author: "James Chen",
        role: "CEO, Bloom Wellness",
      },
      {
        quote: "Ilya's editorial work for our magazine has elevated our visual storytelling to a new level. His eye for composition and color is exceptional.",
        author: "Amanda Foster",
        role: "Editor-in-Chief, Urban Magazine",
      },
      {
        quote: "The headshots Ilya took for our executive team perfectly balance professionalism with approachability. Highly recommend his portrait work.",
        author: "David Park",
        role: "Director of HR, TechForward",
      },
    ],
  },
  ru: {
    // Navigation
    nav: {
      work: "Работы",
      photography: "Фотография",
      design: "Дизайн",
      about: "Обо мне",
      contact: "Контакты",
      bookNow: "Записаться",
    },
    // Header
    header: {
      title: "Илья Облог",
      subtitle: "Фотограф и Дизайнер",
    },
    // Hero
    hero: {
      welcome: "Добро пожаловать в мое портфолио",
      headline: "Я запечатлеваю моменты и создаю",
      headlineHighlight: "визуальные истории",
      headlineEnd: ", которые вдохновляют",
      description: "Как фотограф и графический дизайнер, я сочетаю художественное видение с технической точностью, создавая впечатляющие образы и дизайн-решения для брендов и частных клиентов.",
      viewWork: "Смотреть работы",
      learnMore: "Узнать больше",
      scrollToWork: "Перейти к работам",
    },
    // Featured Work
    featuredWork: {
      subtitle: "Избранные работы",
      title: "Лучшие проекты",
      photography: "Фотография",
      design: "Дизайн",
    },
    // Photography Gallery
    photography: {
      subtitle: "Фотография",
      title: "Запечатленные моменты",
      description: "От камерных портретов до захватывающих пейзажей — каждая фотография рассказывает уникальную историю о свете, эмоциях и человеческом опыте.",
      categories: {
        all: "Все",
        portrait: "Портрет",
        landscape: "Пейзаж",
        editorial: "Редакционная",
        events: "Мероприятия",
      },
    },
    // Design Portfolio
    designPortfolio: {
      subtitle: "Графический дизайн",
      title: "Избранные проекты",
      description: "Стратегические дизайн-решения, которые поднимают бренды на новый уровень через продуманную визуальную коммуникацию и внимание к деталям.",
      client: "Клиент",
      aboutProject: "О проекте",
      services: "Услуги",
    },
    // About
    about: {
      subtitle: "Обо мне",
      title: "Создаю визуальные истории",
      bio1: "Я Илья Облог, фотограф и графический дизайнер из Нью-Йорка. За более чем десять лет работы мне посчастливилось сотрудничать с брендами и людьми, которые ценят продуманную и эффективную визуальную коммуникацию.",
      bio2: "Мой подход сочетает техническую точность с художественной интуицией. Будь то работа за камерой или за дизайнерским столом, я верю в создание работ, которые не только красивы, но и рассказывают убедительную историю и достигают значимых результатов.",
      bio3: "Когда я не занят творчеством, вы найдёте меня исследующим новые города, посещающим галереи или проводящим мастер-классы для начинающих креативщиков.",
      yearsExperience: "Лет опыта",
      stats: {
        photographyProjects: "Фото-проектов",
        designProjects: "Дизайн-проектов",
        happyClients: "Довольных клиентов",
        awardsReceived: "Полученных наград",
      },
      servicesTitle: "Что я предлагаю",
      servicesSubtitle: "Услуги",
      services: {
        portraitPhotography: {
          title: "Портретная фотография",
          description: "Профессиональные портреты, редакционные съёмки и сессии для личного бренда.",
        },
        eventCoverage: {
          title: "Съёмка мероприятий",
          description: "Свадьбы, корпоративные события и особые случаи, запечатлённые с заботой.",
        },
        brandIdentity: {
          title: "Фирменный стиль",
          description: "Дизайн логотипа, визуальные системы и комплексные брендбуки.",
        },
        webDesign: {
          title: "Веб и цифровой дизайн",
          description: "Ориентированные на пользователя сайты и цифровые решения, которые конвертируют.",
        },
        editorialDesign: {
          title: "Редакционный дизайн",
          description: "Вёрстка журналов, книжный дизайн и арт-дирекшн публикаций.",
        },
        packagingDesign: {
          title: "Дизайн упаковки",
          description: "Упаковка продуктов, которая выделяется на полках и рассказывает вашу историю.",
        },
      },
    },
    // Testimonials
    testimonials: {
      subtitle: "Отзывы",
      title: "Что говорят клиенты",
    },
    // Contact
    contact: {
      subtitle: "Контакты",
      title: "Давайте творить вместе",
      description: "Готовы воплотить вашу идею в жизнь? Ищете ли вы услуги фотографа, дизайнерскую работу или творческую консультацию — я буду рад услышать вас. Заполните форму или свяжитесь напрямую.",
      email: "Email",
      phone: "Телефон",
      studio: "Студия",
      address: "Креативный переулок, 123\nНью-Йорк, NY 10001",
      followAlong: "Следите за мной",
      generalInquiry: "Общий запрос",
      bookSession: "Записаться на сессию",
      firstName: "Имя",
      lastName: "Фамилия",
      emailLabel: "Email",
      phoneLabel: "Телефон",
      serviceInterested: "Интересующая услуга",
      selectService: "Выберите услугу",
      message: "Сообщение",
      messagePlaceholder: "Расскажите о вашем проекте...",
      sendMessage: "Отправить сообщение",
      sending: "Отправка...",
      serviceType: "Тип услуги",
      preferredDate: "Предпочтительная дата",
      pickDate: "Выберите дату",
      preferredTime: "Предпочтительное время",
      selectTime: "Выберите время",
      projectDetails: "Детали проекта",
      projectDetailsPlaceholder: "Расскажите о вашем проекте, целях и особых требованиях...",
      requestBooking: "Запросить бронь",
      requesting: "Запрос...",
      confirmNote: "Я подтвержу вашу встречу в течение 24 часов по email",
      thankYou: "Спасибо!",
      thankYouMessage: "Ваше сообщение получено. Я свяжусь с вами в течение 24-48 часов для обсуждения вашего проекта.",
      sendAnother: "Отправить ещё сообщение",
      serviceTypes: {
        portrait: "Портретная фотография",
        event: "Съёмка мероприятий",
        brandIdentity: "Дизайн фирменного стиля",
        webDesign: "Веб и цифровой дизайн",
        editorial: "Редакционный дизайн",
        packaging: "Дизайн упаковки",
        consultation: "Творческая консультация",
        other: "Другое",
      },
    },
    // Footer
    footer: {
      description: "Фотограф и графический дизайнер, создающий впечатляющие визуальные истории для брендов и частных клиентов.",
      work: "Работы",
      information: "Информация",
      stayUpdated: "Будьте в курсе",
      subscribeText: "Подпишитесь на обновления о новых работах и творческих идеях.",
      subscribe: "Подписаться",
      allRights: "Все права защищены.",
      privacyPolicy: "Политика конфиденциальности",
      termsOfService: "Условия использования",
    },
    // Projects data
    projects: {
      timelineMagazine: {
        title: "Журнал Timeline",
        description: "Создание гармоничного пути к лучшему клеточному здоровью через продуманный дизайн и образы.",
      },
      siestaCampers: {
        title: "Siesta Campers",
        description: "Продвижение ведущей португальской компании по аренде фургонов через яркую брендовую фотографию.",
      },
      architectStudio: {
        title: "Architect Studio",
        description: "Передача архитектурного воздействия через минималистичный дизайн и пространственную эстетику.",
      },
      portraitSeries: {
        title: "Серия портретов",
        description: "Интимное исследование человеческих эмоций и связей через портретную фотографию.",
      },
      urbanLandscapes: {
        title: "Городские пейзажи",
        description: "Запечатление ритма и энергии городской жизни через архитектурную фотографию.",
      },
      bloomCosmetics: {
        title: "Bloom Cosmetics",
        description: "Полный фирменный стиль и дизайн упаковки для люксовой линии косметики.",
      },
    },
    // Photo titles
    photos: {
      naturalLightPortrait: { title: "Портрет в естественном свете", description: "Редакционная портретная съёмка в студии" },
      alpineDawn: { title: "Альпийский рассвет", description: "Восход солнца в Швейцарских Альпах" },
      vogueFeature: { title: "Vogue Feature", description: "Модная редакционная съёмка для Vogue Italia" },
      summerWedding: { title: "Летняя свадьба", description: "Камерное свадебное торжество в саду" },
      executivePortrait: { title: "Деловой портрет", description: "Корпоративная портретная съёмка" },
      foggyMorning: { title: "Туманное утро", description: "Лес Тихоокеанского Северо-Запада на рассвете" },
      studioSession: { title: "Студийная съёмка", description: "Высокая мода, редакционная съёмка" },
      techSummit: { title: "Tech Summit 2025", description: "Освещение ежегодной технологической конференции" },
      beautyEditorial: { title: "Beauty Editorial", description: "Портрет для рекламной кампании косметики" },
    },
    // Design projects
    designProjects: {
      bloomWellness: {
        title: "Bloom Wellness",
        category: "Фирменный стиль",
        description: "Полный фирменный стиль для современного велнес- и спа-бренда, включая дизайн логотипа, цветовую палитру, типографическую систему и комплексный брендбук.",
        client: "Bloom Wellness Co.",
      },
      artisanCoffee: {
        title: "Artisan Coffee",
        category: "Дизайн упаковки",
        description: "Дизайн упаковки для специализированной кофейной обжарочной, с минималистичной эстетикой, тактильными бумажными текстурами и экологичными материалами.",
        client: "Artisan Roasters",
      },
      techForward: {
        title: "Tech Forward",
        category: "Веб-дизайн",
        description: "Редизайн сайта для технологического стартапа с акцентом на чистые интерфейсы, интуитивную навигацию и оптимизацию конверсии.",
        client: "TechForward Inc.",
      },
      urbanMagazine: {
        title: "Urban Magazine",
        category: "Редакционный дизайн",
        description: "Арт-дирекшн и вёрстка ежеквартального журнала о городском образе жизни с яркой типографикой и динамичной обработкой фотографий.",
        client: "Urban Living Media",
      },
      ecoApparel: {
        title: "Eco Apparel",
        category: "Фирменный стиль",
        description: "Фирменный стиль устойчивого модного бренда, основанный на экологическом сознании, с землистыми тонами и органическими элементами дизайна.",
        client: "Eco Threads",
      },
      festivalPosters: {
        title: "Постеры фестиваля",
        category: "Печатный дизайн",
        description: "Серия рекламных постеров для ежегодного музыкально-художественного фестиваля, сочетающая иллюстрацию с фотографией.",
        client: "Horizon Festival",
      },
    },
    // Tags
    tags: {
      design: "Дизайн",
      photography: "Фотография",
      editorial: "Редакционный",
      branding: "Брендинг",
      web: "Веб",
      architecture: "Архитектура",
      packaging: "Упаковка",
      logoDesign: "Дизайн логотипа",
      guidelines: "Брендбук",
      print: "Печать",
      sustainable: "Экологичный",
      uiux: "UI/UX",
      development: "Разработка",
      layout: "Вёрстка",
      typography: "Типографика",
      fashion: "Мода",
      illustration: "Иллюстрация",
      events: "Мероприятия",
    },
    // Testimonials data
    testimonialsData: [
      {
        quote: "Илья запечатлел наш свадебный день с таким мастерством и вниманием к деталям. Каждая фотография рассказывает историю, и мы не могли бы быть счастливее с результатом.",
        author: "Анна и Дмитрий",
        role: "Свадебные клиенты",
      },
      {
        quote: "Работа с Ильёй над нашим фирменным стилем была преображающей. Он сразу понял наше видение и создал дизайн-систему, которая идеально представляет, кто мы есть.",
        author: "Джеймс Чен",
        role: "CEO, Bloom Wellness",
      },
      {
        quote: "Редакционная работа Ильи для нашего журнала подняла наше визуальное повествование на новый уровень. Его чувство композиции и цвета исключительно.",
        author: "Аманда Фостер",
        role: "Главный редактор, Urban Magazine",
      },
      {
        quote: "Портреты, которые Илья сделал для нашей руководящей команды, идеально сочетают профессионализм с доступностью. Очень рекомендую его портретную работу.",
        author: "Дэвид Парк",
        role: "Директор по персоналу, TechForward",
      },
    ],
  },
} as const

export type Translations = typeof translations.en
