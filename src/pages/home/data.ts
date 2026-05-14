export const HERO_IMAGE = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/fe0c92d8-fda2-4fc5-85a8-d9a5e2e817d7.jpg";
export const VOLUNTEERS_IMAGE = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/c9f0c243-a7da-4175-a542-7c39486d4d3f.jpg";

const IMG_WHATSAPP = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/af09c61d-a1cb-4eda-84a5-92a218883bb2.jpg";
const IMG_GOSUSLUGI = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/fa12f07a-c00d-4092-beb3-758ee42e9bb8.jpg";
const IMG_FRAUD = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/e6e3ad18-43cf-4c67-bdd4-9086cf2be1a6.jpg";
const IMG_WIFI = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/18faba7b-4e59-43ed-9746-2d8d972801a4.jpg";
const IMG_APPINSTALL = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/712e43e9-5411-4792-920d-fcfeaa81090b.jpg";
const IMG_TABLET = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/285c325b-47e3-435b-8f8b-8b71114bdd1c.jpg";
const IMG_BANK = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/1b4cd58a-aebc-45b0-85cf-20ea886a0056.jpg";
const IMG_TELEGRAM = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/e4f7ff21-e54a-4d40-94e1-e353b2a24cf8.jpg";
const IMG_EMAIL = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/b0d6b517-d88c-4158-8942-034e715c80e5.jpg";
const IMG_PHARMACY = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/b4ff839a-651b-46e9-9182-9af71df26c99.jpg";
const IMG_VIDEOCALL = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/a0382195-8719-4d72-846b-4b33c49ed68f.jpg";
const IMG_BILL = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/b31cad70-06bd-4824-bd51-5d05ee255ffa.jpg";

export const ytThumb = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

export const NAV_LINKS = [
  { label: "Инструкции", href: "#instructions" },
  { label: "Видеоуроки", href: "#videos" },
  { label: "Поддержка", href: "#support" },
  { label: "Быт", href: "#everyday" },
  { label: "Технологии", href: "#digital" },
  { label: "Активность", href: "#activities" },
];

export const TUTORIAL_CATEGORIES = ["Все", "Мессенджеры", "Госуслуги", "Безопасность", "Смартфон", "Интернет", "Быт"];

export const INSTRUCTIONS = [
  {
    icon: "Phone",
    title: "Позвонить через WhatsApp",
    steps: ["Откройте приложение WhatsApp", "Найдите нужный контакт", "Нажмите трубку — голосовой или видеозвонок"],
    tag: "Мессенджеры",
    image: IMG_WHATSAPP,
    imageAlt: "Экран WhatsApp с кнопкой звонка",
  },
  {
    icon: "MessageSquare",
    title: "Написать в Telegram",
    steps: ["Откройте Telegram", "Нажмите значок карандаша", "Найдите человека и напишите сообщение"],
    tag: "Мессенджеры",
    image: IMG_TELEGRAM,
    imageAlt: "Экран Telegram с чатом",
  },
  {
    icon: "Video",
    title: "Видеозвонок с семьёй",
    steps: ["Откройте WhatsApp или Telegram", "Нажмите на имя близкого", "Выберите значок видеокамеры"],
    tag: "Мессенджеры",
    image: IMG_VIDEOCALL,
    imageAlt: "Видеозвонок с семьёй на смартфоне",
  },
  {
    icon: "CreditCard",
    title: "Оплатить ЖКХ на Госуслугах",
    steps: ["Войдите в Госуслуги", "Раздел «Квартира, строительство и земля»", "Выберите услугу и оплатите"],
    tag: "Госуслуги",
    image: IMG_GOSUSLUGI,
    imageAlt: "Экран портала Госуслуги",
  },
  {
    icon: "FileText",
    title: "Записаться к врачу онлайн",
    steps: ["Зайдите на Госуслуги", "Найдите «Запись к врачу»", "Выберите поликлинику и время"],
    tag: "Госуслуги",
    image: IMG_TABLET,
    imageAlt: "Запись к врачу онлайн на планшете",
  },
  {
    icon: "Receipt",
    title: "Оплатить квитанцию",
    steps: ["Откройте приложение банка или Госуслуги", "Найдите «Оплата по QR»", "Наведите камеру на штрих-код"],
    tag: "Быт",
    image: IMG_BILL,
    imageAlt: "Квитанция с QR-кодом для оплаты",
  },
  {
    icon: "ShieldCheck",
    title: "Как не попасться мошенникам",
    steps: ["Никогда не называйте код из СМС", "Перезвоните в банк по номеру на карте", "Сообщите родственникам о подозрительном звонке"],
    tag: "Безопасность",
    image: IMG_FRAUD,
    imageAlt: "Предупреждение о мошенниках на смартфоне",
  },
  {
    icon: "Lock",
    title: "Придумать надёжный пароль",
    steps: ["Используйте не менее 8 символов", "Добавьте цифры и буквы", "Запишите пароль в блокнот"],
    tag: "Безопасность",
    image: IMG_EMAIL,
    imageAlt: "Безопасный вход в аккаунт",
  },
  {
    icon: "Wifi",
    title: "Подключить Wi-Fi",
    steps: ["Откройте Настройки", "Выберите «Wi-Fi»", "Найдите сеть и введите пароль"],
    tag: "Смартфон",
    image: IMG_WIFI,
    imageAlt: "Экран настроек Wi-Fi на телефоне",
  },
  {
    icon: "Download",
    title: "Установить приложение",
    steps: ["Откройте «Play Маркет» или «App Store»", "Введите название приложения", "Нажмите «Установить»"],
    tag: "Смартфон",
    image: IMG_APPINSTALL,
    imageAlt: "Установка приложения из Google Play",
  },
  {
    icon: "ShoppingCart",
    title: "Заказать лекарства онлайн",
    steps: ["Зайдите на сайт аптеки или в приложение", "Введите название препарата", "Выберите аптеку и оформите заказ"],
    tag: "Интернет",
    image: IMG_PHARMACY,
    imageAlt: "Онлайн-аптека на смартфоне",
  },
  {
    icon: "CreditCard",
    title: "Оплатить банковской картой",
    steps: ["Нажмите «Оплатить картой»", "Введите номер карты и срок действия", "Введите код из СМС"],
    tag: "Интернет",
    image: IMG_BANK,
    imageAlt: "Оплата банковской картой онлайн",
  },
];

export const VIDEO_CATEGORIES = ["Все", "Мессенджеры", "Госуслуги", "Безопасность", "Смартфон", "Компьютер", "Быт"];

export const VIDEOS = [
  { title: "WhatsApp для начинающих: звонки и сообщения", duration: "12:45", category: "Мессенджеры", youtubeId: "CIlcvHh27Hc" },
  { title: "Госуслуги: регистрация и первые шаги", duration: "15:30", category: "Госуслуги", youtubeId: "4I9jVBvqFaQ" },
  { title: "Как защититься от телефонных мошенников", duration: "9:18", category: "Безопасность", youtubeId: "mBqJKGPLkPo" },
  { title: "Смартфон для пожилых: с чего начать", duration: "18:22", category: "Смартфон", youtubeId: "9bZkp7q19f0" },
  { title: "Telegram: установка и первые шаги", duration: "11:05", category: "Мессенджеры", youtubeId: "IJ7D0GFFZWU" },
  { title: "Запись к врачу через Госуслуги", duration: "8:40", category: "Госуслуги", youtubeId: "UlLaRSzWjHg" },
  { title: "Как пользоваться компьютером с нуля", duration: "22:14", category: "Компьютер", youtubeId: "tVDnMfVNRRY" },
  { title: "Оплата ЖКХ онлайн: пошаговая инструкция", duration: "7:55", category: "Быт", youtubeId: "fJ9rUzIMcZQ" },
  { title: "Viber: видеозвонки с родными", duration: "10:30", category: "Мессенджеры", youtubeId: "7C1pDDxQB3k" },
];

export const SUPPORT_CARDS = [
  { icon: "Heart", title: "Для семей", desc: "Как поддержать пожилого родственника, не навязываясь. Практические советы по общению и совместному времени.", color: "bg-rose-50 border-rose-200" },
  { icon: "Users", title: "Для волонтёров", desc: "С чего начать помощь. Как найти подопечного, выстроить доверие и не выгореть.", color: "bg-emerald-50 border-emerald-200" },
  { icon: "Building2", title: "Для организаций", desc: "Готовые программы взаимодействия поколений. Методические материалы и чек-листы.", color: "bg-sky-50 border-sky-200" },
];

export const EVERYDAY_TIPS = [
  { icon: "Zap", title: "ЖКХ без стресса", desc: "Как читать квитанции, подать счётчики онлайн и оспорить неверную начисление" },
  { icon: "ShieldAlert", title: "Пожарная безопасность", desc: "Простой чек-лист для проверки дома. Что делать при задымлении" },
  { icon: "Pill", title: "Аптека и рецепты", desc: "Как получить льготные лекарства. Замена дорогих препаратов аналогами" },
  { icon: "MapPin", title: "МФЦ и документы", desc: "Какие документы взять, к кому обратиться и как записаться заранее" },
  { icon: "Bus", title: "Транспорт и льготы", desc: "Социальная карта, льготный проезд, запись к врачу через транспортное приложение" },
  { icon: "Phone", title: "Важные телефоны", desc: "Скорая, соцзащита, телефон доверия — сохраните список и не ищите в панике" },
];

export const DIGITAL_GUIDES = [
  { emoji: "📱", title: "Смартфон с нуля", desc: "Звонки, SMS, камера, настройки звука и яркости" },
  { emoji: "💬", title: "Мессенджеры", desc: "WhatsApp, Telegram, Viber — как написать и позвонить" },
  { emoji: "🏛️", title: "Госуслуги", desc: "Регистрация, запись к врачу, пенсионные справки" },
  { emoji: "🛒", title: "Онлайн-покупки", desc: "Маркетплейсы, доставка еды, аптека онлайн" },
  { emoji: "🔒", title: "Защита от мошенников", desc: "Признаки обмана, что делать, куда звонить" },
  { emoji: "💻", title: "Компьютер и ноутбук", desc: "Базовые навыки: файлы, почта, видеозвонки" },
];

export const ACTIVITIES = [
  { icon: "Palette", title: "Творчество", desc: "Онлайн-классы по живописи, вязанию, лепке и другим хобби — бесплатно и без регистрации", tag: "Хобби" },
  { icon: "BookOpen", title: "Чтение и кино", desc: "Подборки книг для пожилых, аудиокниги и классика советского кино онлайн", tag: "Культура" },
  { icon: "TreePine", title: "Прогулки и здоровье", desc: "Маршруты для неспешных прогулок, утренняя гимнастика под видео, скандинавская ходьба", tag: "Спорт" },
  { icon: "MessageCircle", title: "Клубы общения", desc: "Как найти клуб по интересам рядом с домом и познакомиться с новыми людьми", tag: "Общение" },
];
