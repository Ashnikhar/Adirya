import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InsuranceHeroSection } from "@/components/industries/insurance/insurance-hero-section"
import { InsuranceDataSection } from "@/components/industries/insurance/insurance-data-section"
import { InsuranceServicesSection } from "@/components/industries/insurance/insurance-services-section"
import { InsuranceWellnessSection } from "@/components/industries/insurance/insurance-wellness-section"
import { InsuranceCarePlixSection } from "@/components/industries/insurance/insurance-careplix-section"
import { CTASection } from "@/components/sections/cta-section"

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <InsuranceHeroSection />
      <InsuranceDataSection />
      <InsuranceServicesSection />
      <InsuranceWellnessSection />
      <InsuranceCarePlixSection />
      <CTASection />
      <Footer />
    </div>
  )
}
