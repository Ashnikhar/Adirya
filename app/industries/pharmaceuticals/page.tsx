import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PharmaceuticalsHeroSection } from "@/components/industries/pharmaceuticals/pharmaceuticals-hero-section"
import { PharmaceuticalsValueSection } from "@/components/industries/pharmaceuticals/pharmaceuticals-value-section"
import { PharmaceuticalsServicesSection } from "@/components/industries/pharmaceuticals/pharmaceuticals-services-section"
import { PharmaceuticalsImageSection } from "@/components/industries/pharmaceuticals/pharmaceuticals-image-section"
import { CTASection } from "@/components/sections/cta-section"

export default function PharmaceuticalsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <PharmaceuticalsHeroSection />
      <PharmaceuticalsValueSection />
      <PharmaceuticalsServicesSection />
      <PharmaceuticalsImageSection />
      <CTASection />
      <Footer />
    </div>
  )
}
