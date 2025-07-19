import { Header } from "@/components/layout/header"
import { JapaneseTextSidebar } from "@/components/layout/japanese-text-sidebar"
import { AudioPlayer } from "@/components/layout/audio-player"
import { HeroSection } from "@/components/sections/hero-section"
import { WelcomeSection } from "@/components/sections/welcome-section"
import { LovedByMillionsSection } from "@/components/sections/loved-by-millions"
import { MythicalMemeSection } from "@/components/sections/mythical-meme"
import { TanukinomicsSection } from "@/components/sections/tanukinomics"
import { HowToBuySection } from "@/components/sections/how-to-buy"
import { WallpapersSection } from "@/components/sections/wallpapers-section"
import { DisclaimerCommunity } from "@/components/sections/disclaimer-community"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-blue-950 text-white overflow-hidden">
      <Header />
      <JapaneseTextSidebar />
      <main className="relative z-10">
        <HeroSection />
        <WelcomeSection />
        <LovedByMillionsSection />
        <MythicalMemeSection />
        <TanukinomicsSection />
        <HowToBuySection />
        <WallpapersSection />
        <DisclaimerCommunity />
      </main>
      <Footer />
      <AudioPlayer />
    </div>
  )
}
