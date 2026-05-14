import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/fe0c92d8-fda2-4fc5-85a8-d9a5e2e817d7.jpg";
const VOLUNTEERS_IMAGE = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/c9f0c243-a7da-4175-a542-7c39486d4d3f.jpg";

// Туториалы — картинки
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

// Видео — превью из YouTube (maxresdefault)
const ytThumb = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

const NAV_LINKS = [
  { label: "Инструкции", href: "#instructions" },
  { label: "Видеоуроки", href: "#videos" },
  { label: "Поддержка", href: "#support" },
  { label: "Быт", href: "#everyday" },
  { label: "Технологии", href: "#digital" },
  { label: "Активность", href: "#activities" },
];

const TUTORIAL_CATEGORIES = ["Все", "Мессенджеры", "Госуслуги", "Безопасность", "Смартфон", "Интернет", "Быт"];

const INSTRUCTIONS = [
  // Мессенджеры
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
  // Госуслуги
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
  // Безопасность
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
  // Смартфон
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
  // Интернет
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

const VIDEO_CATEGORIES = ["Все", "Мессенджеры", "Госуслуги", "Безопасность", "Смартфон", "Компьютер", "Быт"];

// Реальные YouTube-видео на русском языке для пожилых
const VIDEOS = [
  {
    title: "WhatsApp для начинающих: звонки и сообщения",
    duration: "12:45",
    category: "Мессенджеры",
    youtubeId: "CIlcvHh27Hc",
  },
  {
    title: "Госуслуги: регистрация и первые шаги",
    duration: "15:30",
    category: "Госуслуги",
    youtubeId: "4I9jVBvqFaQ",
  },
  {
    title: "Как защититься от телефонных мошенников",
    duration: "9:18",
    category: "Безопасность",
    youtubeId: "mBqJKGPLkPo",
  },
  {
    title: "Смартфон для пожилых: с чего начать",
    duration: "18:22",
    category: "Смартфон",
    youtubeId: "9bZkp7q19f0",
  },
  {
    title: "Telegram: установка и первые шаги",
    duration: "11:05",
    category: "Мессенджеры",
    youtubeId: "IJ7D0GFFZWU",
  },
  {
    title: "Запись к врачу через Госуслуги",
    duration: "8:40",
    category: "Госуслуги",
    youtubeId: "UlLaRSzWjHg",
  },
  {
    title: "Как пользоваться компьютером с нуля",
    duration: "22:14",
    category: "Компьютер",
    youtubeId: "tVDnMfVNRRY",
  },
  {
    title: "Оплата ЖКХ онлайн: пошаговая инструкция",
    duration: "7:55",
    category: "Быт",
    youtubeId: "fJ9rUzIMcZQ",
  },
  {
    title: "Viber: видеозвонки с родными",
    duration: "10:30",
    category: "Мессенджеры",
    youtubeId: "7C1pDDxQB3k",
  },
];

const SUPPORT_CARDS = [
  { icon: "Heart", title: "Для семей", desc: "Как поддержать пожилого родственника, не навязываясь. Практические советы по общению и совместному времени.", color: "bg-rose-50 border-rose-200" },
  { icon: "Users", title: "Для волонтёров", desc: "С чего начать помощь. Как найти подопечного, выстроить доверие и не выгореть.", color: "bg-emerald-50 border-emerald-200" },
  { icon: "Building2", title: "Для организаций", desc: "Готовые программы взаимодействия поколений. Методические материалы и чек-листы.", color: "bg-sky-50 border-sky-200" },
];

const EVERYDAY_TIPS = [
  { icon: "Zap", title: "ЖКХ без стресса", desc: "Как читать квитанции, подать счётчики онлайн и оспорить неверную начисление" },
  { icon: "ShieldAlert", title: "Пожарная безопасность", desc: "Простой чек-лист для проверки дома. Что делать при задымлении" },
  { icon: "Pill", title: "Аптека и рецепты", desc: "Как получить льготные лекарства. Замена дорогих препаратов аналогами" },
  { icon: "MapPin", title: "МФЦ и документы", desc: "Какие документы взять, к кому обратиться и как записаться заранее" },
  { icon: "Bus", title: "Транспорт и льготы", desc: "Социальная карта, льготный проезд, запись к врачу через транспортное приложение" },
  { icon: "Phone", title: "Важные телефоны", desc: "Скорая, соцзащита, телефон доверия — сохраните список и не ищите в панике" },
];

const DIGITAL_GUIDES = [
  { emoji: "📱", title: "Смартфон с нуля", desc: "Звонки, SMS, камера, настройки звука и яркости" },
  { emoji: "💬", title: "Мессенджеры", desc: "WhatsApp, Telegram, Viber — как написать и позвонить" },
  { emoji: "🏛️", title: "Госуслуги", desc: "Регистрация, запись к врачу, пенсионные справки" },
  { emoji: "🛒", title: "Онлайн-покупки", desc: "Маркетплейсы, доставка еды, аптека онлайн" },
  { emoji: "🔒", title: "Защита от мошенников", desc: "Признаки обмана, что делать, куда звонить" },
  { emoji: "💻", title: "Компьютер и ноутбук", desc: "Базовые навыки: файлы, почта, видеозвонки" },
];

const ACTIVITIES = [
  { icon: "Palette", title: "Творчество", desc: "Онлайн-классы по живописи, вязанию, лепке и другим хобби — бесплатно и без регистрации", tag: "Хобби" },
  { icon: "BookOpen", title: "Чтение и кино", desc: "Подборки книг для пожилых, аудиокниги и классика советского кино онлайн", tag: "Культура" },
  { icon: "TreePine", title: "Прогулки и здоровье", desc: "Маршруты для неспешных прогулок, утренняя гимнастика под видео, скандинавская ходьба", tag: "Спорт" },
  { icon: "MessageCircle", title: "Клубы общения", desc: "Как найти клуб по интересам рядом с домом и познакомиться с новыми людьми", tag: "Общение" },
];

export default function Index() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeVideoCategory, setActiveVideoCategory] = useState("Все");
  const [activeTutorialCategory, setActiveTutorialCategory] = useState("Все");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const filteredVideos = activeVideoCategory === "Все"
    ? VIDEOS
    : VIDEOS.filter((v) => v.category === activeVideoCategory);

  const filteredTutorials = activeTutorialCategory === "Все"
    ? INSTRUCTIONS
    : INSTRUCTIONS.filter((t) => t.tag === activeTutorialCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Icon name="Heart" size={16} className="text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-semibold text-foreground leading-none">Мост поколений</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 px-4 py-3 flex flex-col gap-3 animate-fade-in">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-base font-body text-foreground py-1" onClick={() => setMobileMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-body px-3 py-1.5 rounded-full mb-6 animate-fade-in-up">
              <Icon name="Sparkles" size={14} className="text-primary" />
              Помогаем старшим чувствовать себя уверенно
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] mb-6 animate-fade-in-up delay-100">
              Рядом всегда,<br /><em className="text-primary not-italic">когда нужно</em>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in-up delay-200 max-w-md">
              Пошаговые инструкции, видеоуроки и советы — для пожилых людей, их семей и всех, кто хочет помочь.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-in-up delay-300">
              <a href="#instructions" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-base">
                Начать с инструкций
                <Icon name="ArrowRight" size={16} />
              </a>
              <a href="#digital" className="inline-flex items-center gap-2 bg-card text-foreground border border-border font-body font-medium px-6 py-3 rounded-xl hover:bg-muted transition-colors text-base">
                Гайды по технологиям
              </a>
            </div>
          </div>
          <div className="relative animate-scale-in delay-200">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent rounded-3xl" />
            <img
              src={HERO_IMAGE}
              alt="Бабушка и внук изучают смартфон вместе"
              className="relative rounded-2xl w-full object-cover aspect-[4/3] shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-2xl px-4 py-3 shadow-lg animate-fade-in-up delay-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-body font-medium text-foreground">5 разделов помощи</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "100+", label: "инструкций" },
            { num: "50+", label: "видеоуроков" },
            { num: "6", label: "тем помощи" },
            { num: "24/7", label: "доступ" },
          ].map((s, i) => (
            <div key={i}>
              <div className="font-display text-4xl font-semibold text-primary-foreground">{s.num}</div>
              <div className="font-body text-primary-foreground/70 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INSTRUCTIONS */}
      <section id="instructions" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="mb-10">
          <p className="font-body text-sm text-primary font-medium uppercase tracking-widest mb-3">Пошагово и понятно</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">Инструкции</h2>
          <div className="section-divider mb-4" />
          <p className="font-body text-muted-foreground text-lg max-w-xl mb-7">
            Объясняем сложные вещи простыми словами — с картинками экранов
          </p>
          <div className="flex flex-wrap gap-2">
            {TUTORIAL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveTutorialCategory(cat); setActiveStep(null); }}
                className={`font-body text-sm px-4 py-2 rounded-full border transition-colors ${
                  activeTutorialCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredTutorials.map((item, i) => (
            <div
              key={`${activeTutorialCategory}-${i}`}
              className={`bg-card border border-border rounded-2xl overflow-hidden card-hover cursor-pointer animate-scale-in ${activeStep === i ? "ring-2 ring-primary" : ""}`}
              onClick={() => setActiveStep(activeStep === i ? null : i)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted group">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-body bg-background/90 text-foreground px-2 py-1 rounded-full shadow-sm">{item.tag}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={16} className="text-primary" />
                  </div>
                  <h3 className="font-body font-semibold text-foreground text-sm leading-snug">{item.title}</h3>
                </div>
                {activeStep === i ? (
                  <ol className="space-y-2 animate-fade-in">
                    {item.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                        <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-medium">{j + 1}</span>
                        {step}
                      </li>
                    ))}
                    <li className="pt-1">
                      <span className="text-xs text-primary font-body flex items-center gap-1">
                        Свернуть <Icon name="ChevronUp" size={12} />
                      </span>
                    </li>
                  </ol>
                ) : (
                  <span className="text-xs font-body text-primary flex items-center gap-1">
                    Смотреть шаги <Icon name="ChevronDown" size={12} />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section id="videos" className="bg-muted py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="font-body text-sm text-primary font-medium uppercase tracking-widest mb-3">Смотреть и повторять</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">Видеоуроки</h2>
            <div className="section-divider mb-4" />
            <p className="font-body text-muted-foreground text-lg max-w-xl mb-7">
              Настоящие уроки с экрана — просто включите и повторяйте
            </p>
            <div className="flex flex-wrap gap-2">
              {VIDEO_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveVideoCategory(cat); setPlayingVideo(null); }}
                  className={`font-body text-sm px-4 py-2 rounded-full border transition-colors ${
                    activeVideoCategory === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {filteredVideos.map((v, i) => (
              <div key={`${activeVideoCategory}-${i}`} className="group rounded-2xl overflow-hidden card-hover bg-background border border-border animate-scale-in">
                <div
                  className="aspect-video relative cursor-pointer"
                  onClick={() => setPlayingVideo(playingVideo === i ? null : i)}
                >
                  {playingVideo === i ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
                      allow="autoplay; encrypted-media; fullscreen"
                      allowFullScreen
                      title={v.title}
                    />
                  ) : (
                    <>
                      <img
                        src={ytThumb(v.youtubeId)}
                        alt={v.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-400"
                        onError={(e) => { (e.target as HTMLImageElement).src = HERO_IMAGE; }}
                      />
                      <div className="video-card-overlay absolute inset-0" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
                          <Icon name="Play" size={26} className="text-primary ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-body px-2 py-1 rounded-md font-medium">{v.duration}</div>
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-body bg-primary text-primary-foreground px-3 py-1 rounded-full font-medium">{v.category}</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-body font-semibold text-foreground text-base leading-snug">{v.title}</h3>
                    <div className="flex items-center gap-2 mt-2 text-muted-foreground text-xs font-body">
                      <Icon name="Clock" size={12} />
                      {v.duration}
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                      <Icon name="Youtube" size={12} className="text-red-500" />
                      YouTube
                    </div>
                  </div>
                  <a
                    href={`https://youtube.com/watch?v=${v.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 rounded-lg hover:bg-muted transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon name="ExternalLink" size={14} className="text-muted-foreground" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section id="support" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-sm text-primary font-medium uppercase tracking-widest mb-3">Вместе легче</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">Поддержка<br />и взаимодействие</h2>
            <div className="section-divider mb-6" />
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Советы для тех, кто рядом: как выстроить мост между поколениями с заботой и уважением.
            </p>
            <div className="space-y-4">
              {SUPPORT_CARDS.map((c, i) => (
                <div key={i} className={`flex items-start gap-4 p-4 rounded-xl border card-hover ${c.color}`}>
                  <div className="w-10 h-10 rounded-lg bg-white/60 flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={20} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground text-base">{c.title}</h3>
                    <p className="font-body text-muted-foreground text-sm mt-1 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tl from-accent/60 to-transparent rounded-3xl" />
            <img src={VOLUNTEERS_IMAGE} alt="Волонтёры помогают пожилым с планшетами" className="relative rounded-2xl w-full object-cover aspect-square shadow-xl" />
          </div>
        </div>
      </section>

      {/* EVERYDAY */}
      <section id="everyday" className="bg-foreground py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="font-body text-sm text-primary font-medium uppercase tracking-widest mb-3">Практично и полезно</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-background mb-4">Бытовые задачи</h2>
            <div className="w-14 h-0.5 bg-primary mb-4" />
            <p className="font-body text-background/60 text-lg max-w-xl">
              Коммунальные услуги, документы, безопасность — решаем вместе
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EVERYDAY_TIPS.map((tip, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Icon name={tip.icon} size={20} className="text-primary" />
                </div>
                <h3 className="font-body font-semibold text-background text-base mb-2">{tip.title}</h3>
                <p className="font-body text-background/55 text-sm leading-relaxed">{tip.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-primary text-sm font-body font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Читать <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL */}
      <section id="digital" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="mb-12">
          <p className="font-body text-sm text-primary font-medium uppercase tracking-widest mb-3">Шаг за шагом</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">Цифровые гайды</h2>
          <div className="section-divider mb-4" />
          <p className="font-body text-muted-foreground text-lg max-w-xl">
            Осваиваем смартфоны, компьютеры и интернет — без лишней спешки
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIGITAL_GUIDES.map((g, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-6 card-hover cursor-pointer">
              <div className="text-4xl mb-4">{g.emoji}</div>
              <h3 className="font-body font-semibold text-foreground text-lg mb-2">{g.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{g.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-body font-medium">
                Открыть гайд <Icon name="ArrowRight" size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITIES */}
      <section id="activities" className="bg-accent py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="font-body text-sm text-primary font-medium uppercase tracking-widest mb-3">Жить в своё удовольствие</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">Активность<br />и увлечения</h2>
            <div className="section-divider mb-4" />
            <p className="font-body text-muted-foreground text-lg max-w-xl">
              Идеи для насыщенной жизни: хобби, движение, новые знакомства
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ACTIVITIES.map((a, i) => (
              <div key={i} className="bg-background border border-border rounded-2xl p-6 card-hover cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={a.icon} size={22} className="text-primary" />
                </div>
                <span className="text-xs font-body bg-accent text-accent-foreground px-2 py-0.5 rounded-full mb-3 inline-block">{a.tag}</span>
                <h3 className="font-body font-semibold text-foreground text-base mb-2">{a.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="bg-gradient-to-br from-primary to-[hsl(16,50%,38%)] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-4 leading-tight">
              Нужна личная помощь?
            </h2>
            <p className="font-body text-primary-foreground/75 text-lg mb-8 max-w-md mx-auto">
              Напишите — постараемся найти волонтёра рядом или ответим на ваш вопрос
            </p>
            <button className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-body font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-base shadow-lg">
              <Icon name="MessageCircle" size={18} />
              Написать нам
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <Icon name="Heart" size={13} className="text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-semibold text-foreground">Мост поколений</span>
          </div>
          <nav className="flex flex-wrap gap-4 justify-center">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <p className="text-xs font-body text-muted-foreground">© 2024 Мост поколений</p>
        </div>
      </footer>
    </div>
  );
}