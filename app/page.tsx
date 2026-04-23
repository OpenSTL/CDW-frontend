import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { VisionSection } from "@/components/vision-section"
import { FundamentalsSection } from "@/components/fundamentals-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <HeroSection />
        <VisionSection />
        <FundamentalsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
