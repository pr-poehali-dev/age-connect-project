import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/fe0c92d8-fda2-4fc5-85a8-d9a5e2e817d7.jpg";
const VOLUNTEERS_IMAGE = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/c9f0c243-a7da-4175-a542-7c39486d4d3f.jpg";
const VIDEO_CALL_IMAGE = "https://cdn.poehali.dev/projects/864308a6-177f-45f8-aa6e-475f8ee5a336/files/b69aeb7f-8def-467a-aedc-fa055985268f.jpg";

const NAV_LINKS = [
  { label: "Инструкции", href: "#instructions" },
  { label: "Поддержка", href: "#support" },
  { label: "Быт", href: "#everyday" },
  { label: "Технологии", href: "#digital" },
  { label: "Активность", href: "#activities" },
];

const INSTRUCTIONS = [
  { icon: "Smartphone", title: "Как позвонить через WhatsApp", steps: ["Откройте приложение", "Нажмите на имя человека", "Нажмите зелёную трубку"], tag: "Мессенджеры" },
  { icon: "CreditCard", title: "Оплата через Госуслуги", steps: ["Войдите в личный кабинет", "Выберите раздел «Платежи»", "Введите номер квитанции"], tag: "Госуслуги" },
  { icon: "ShieldCheck", title: "Как не попасться мошенникам", steps: ["Никогда не называйте код из СМС", "Перезвоните в банк сами", "Сообщите родственникам"], tag: "Безопасность" },
  { icon: "Wifi", title: "Подключение к Wi-Fi", steps: ["Откройте Настройки", "Выберите «Wi-Fi»", "Найдите сеть и введите пароль"], tag: "Устройства" },
];

const VIDEOS = [
  { title: "Как настроить видеозвонок", duration: "4:32", category: "Мессенджеры", thumb: VIDEO_CALL_IMAGE },
  { title: "Личный кабинет на Госуслугах", duration: "7:15", category: "Госуслуги", thumb: VOLUNTEERS_IMAGE },
  { title: "Безопасность в интернете", duration: "5:50", category: "Безопасность", thumb: HERO_IMAGE },
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
        <div className="mb-12">
          <p className="font-body text-sm text-primary font-medium uppercase tracking-widest mb-3">Пошагово и понятно</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">Инструкции</h2>
          <div className="section-divider mb-4" />
          <p className="font-body text-muted-foreground text-lg max-w-xl">
            Объясняем сложные вещи простыми словами — без технического жаргона
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INSTRUCTIONS.map((item, i) => (
            <div
              key={i}
              className={`bg-card border border-border rounded-2xl p-6 card-hover cursor-pointer ${activeStep === i ? "ring-2 ring-primary" : ""}`}
              onClick={() => setActiveStep(activeStep === i ? null : i)}
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                <Icon name={item.icon} size={22} className="text-primary" />
              </div>
              <span className="inline-block text-xs font-body bg-muted text-muted-foreground px-2 py-0.5 rounded-full mb-3">{item.tag}</span>
              <h3 className="font-body font-semibold text-foreground text-base mb-3 leading-snug">{item.title}</h3>
              {activeStep === i ? (
                <ol className="space-y-2 animate-fade-in">
                  {item.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                      <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{j + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-xs font-body text-muted-foreground flex items-center gap-1">
                  Нажмите, чтобы открыть
                  <Icon name="ChevronDown" size={12} />
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-muted py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="font-body text-sm text-primary font-medium uppercase tracking-widest mb-3">Смотреть и повторять</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">Видеоинструкции</h2>
            <div className="section-divider mb-4" />
            <p className="font-body text-muted-foreground text-lg max-w-xl">
              Подробный разбор с экрана — видите каждое нажатие
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {VIDEOS.map((v, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover">
                <div className="aspect-video relative">
                  <img src={v.thumb} alt={v.title} className="w-full h-full object-cover" />
                  <div className="video-card-overlay absolute inset-0" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon name="Play" size={22} className="text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-body px-2 py-0.5 rounded">{v.duration}</div>
                </div>
                <div className="bg-card p-4 border border-border border-t-0 rounded-b-2xl">
                  <span className="text-xs text-primary font-body font-medium">{v.category}</span>
                  <h3 className="font-body font-semibold text-foreground text-base mt-1 leading-snug">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 border border-border text-foreground font-body font-medium px-6 py-3 rounded-xl hover:bg-card transition-colors">
              Все видеоуроки
              <Icon name="ArrowRight" size={16} />
            </button>
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