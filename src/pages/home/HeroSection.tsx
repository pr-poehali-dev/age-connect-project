import Icon from "@/components/ui/icon";
import { NAV_LINKS, HERO_IMAGE } from "./data";

interface HeroSectionProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function HeroSection({ mobileMenuOpen, setMobileMenuOpen }: HeroSectionProps) {
  return (
    <>
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
    </>
  );
}
