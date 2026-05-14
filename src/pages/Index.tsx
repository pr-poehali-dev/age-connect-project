import { useState } from "react";
import HeroSection from "./home/HeroSection";
import ContentSections from "./home/ContentSections";
import InfoSections from "./home/InfoSections";

export default function Index() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeVideoCategory, setActiveVideoCategory] = useState("Все");
  const [activeTutorialCategory, setActiveTutorialCategory] = useState("Все");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <ContentSections
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        activeTutorialCategory={activeTutorialCategory}
        setActiveTutorialCategory={setActiveTutorialCategory}
        activeVideoCategory={activeVideoCategory}
        setActiveVideoCategory={setActiveVideoCategory}
        playingVideo={playingVideo}
        setPlayingVideo={setPlayingVideo}
      />
      <InfoSections />
    </div>
  );
}
