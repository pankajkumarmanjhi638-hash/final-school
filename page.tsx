import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { DashboardsSection } from "@/components/dashboards-section"
import { BenefitsSection } from "@/components/benefits-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DashboardsSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  )
}
