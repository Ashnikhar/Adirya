import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmployersHeroSection } from "@/components/industries/employers/employers-hero-section"
import { EmployersAttentionSection } from "@/components/industries/employers/employers-attention-section"
import { EmployersBenefitsSection } from "@/components/industries/employers/employers-benefits-section"
import { EmployersCultureSection } from "@/components/industries/employers/employers-culture-section"
import { EmployersMetricsSection } from "@/components/industries/employers/employers-metrics-section"
import { CTASection } from "@/components/sections/cta-section"

export default function EmployersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <EmployersHeroSection />
      <EmployersAttentionSection />
      <EmployersBenefitsSection />
      <EmployersCultureSection />
      <EmployersMetricsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
