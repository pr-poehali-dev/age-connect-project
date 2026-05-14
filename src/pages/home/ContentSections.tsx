import Icon from "@/components/ui/icon";
import {
  INSTRUCTIONS,
  TUTORIAL_CATEGORIES,
  VIDEOS,
  VIDEO_CATEGORIES,
  HERO_IMAGE,
  ytThumb,
} from "./data";

interface ContentSectionsProps {
  activeStep: number | null;
  setActiveStep: (i: number | null) => void;
  activeTutorialCategory: string;
  setActiveTutorialCategory: (cat: string) => void;
  activeVideoCategory: string;
  setActiveVideoCategory: (cat: string) => void;
  playingVideo: number | null;
  setPlayingVideo: (i: number | null) => void;
}

export default function ContentSections({
  activeStep,
  setActiveStep,
  activeTutorialCategory,
  setActiveTutorialCategory,
  activeVideoCategory,
  setActiveVideoCategory,
  playingVideo,
  setPlayingVideo,
}: ContentSectionsProps) {
  const filteredTutorials = activeTutorialCategory === "Все"
    ? INSTRUCTIONS
    : INSTRUCTIONS.filter((t) => t.tag === activeTutorialCategory);

  const filteredVideos = activeVideoCategory === "Все"
    ? VIDEOS
    : VIDEOS.filter((v) => v.category === activeVideoCategory);

  return (
    <>
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
    </>
  );
}
