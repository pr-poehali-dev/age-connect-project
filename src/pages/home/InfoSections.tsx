import Icon from "@/components/ui/icon";
import {
  SUPPORT_CARDS,
  EVERYDAY_TIPS,
  DIGITAL_GUIDES,
  ACTIVITIES,
  NAV_LINKS,
  VOLUNTEERS_IMAGE,
} from "./data";

export default function InfoSections() {
  return (
    <>
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
    </>
  );
}
