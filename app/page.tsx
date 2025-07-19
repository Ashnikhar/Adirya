import { Header } from "@/components/header"
import HeroSection from "@/components/sections/hero-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { HealthcareAccessSection } from "@/components/sections/healthcare-access-section"
import { EarlyDetectionSection } from "@/components/sections/early-detection-section"
import { VirtualDemandSection } from "@/components/sections/virtual-demand-section"
import { ProductsSection } from "@/components/sections/products-section"
import { ImpactSection } from "@/components/sections/impact-section"
import { IndustrySection } from "@/components/sections/industry-section"
import { BusinessSection } from "@/components/sections/business-section"
import { MediaSection } from "@/components/sections/media-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/footer"
import DarkVeil from '@/components/darkviel';
import { HeroScrollDemo } from "@/components/heroscrolldemo"





// import { Globe } from "@/components/globe"
import { MarqueeDemo } from "@/components/magicui/marqueedemo"
export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />


      <CTASection />
      <MarqueeDemo />
      <HeroScrollDemo />




      {/* <Globe/> */}

      {/* <PartnersSection /> */}
      <HealthcareAccessSection />
      <EarlyDetectionSection />
      <VirtualDemandSection />
      <ProductsSection />
      <ImpactSection />
      <IndustrySection />
      <BusinessSection />
      <MediaSection />
      <TestimonialsSection />
      <Footer />
      {/* <SmoothCursor/> */}
    </div>
  )
}
