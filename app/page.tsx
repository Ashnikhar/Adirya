import { Header } from "@/components/header"
import HeroSection from "@/components/sections/hero-section"

import { IndustrySection } from "@/components/sections/industry-section"
import { BusinessSection } from "@/components/sections/business-section"
import { MediaSection } from "@/components/sections/media-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/footer"
import DarkVeil from '@/components/darkviel';
import { HeroScrollDemo } from "@/components/heroscrolldemo"
import { BentoGridSecondDemo } from "@/components/BentoGridSecondDemo"
import { SmoothCursor } from "@/components/smooth-cursor"
import { HomeAbout } from "@/components/home-about"
import IndiaPresence from "@/components/IndiaPresence"
import { TypewriterEffectDemo } from "@/components/TypewriterEffectDemo"

import WellnessHighlights  from "@/components/WellnessHighlights"


// import { Globe } from "@/components/globe"
import { MarqueeDemo } from "@/components/magicui/marqueedemo"
export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <HomeAbout />
     



      <MarqueeDemo />

      <HeroScrollDemo />


      <BentoGridSecondDemo />





      {/* <Globe/> */}

     
    
      {/* <ProductsSection /> */}
      {/* <ImpactSection /> */}
      {/* <WellnessHighlights /> */}
      <IndustrySection />
      {/* <BusinessSection /> */}
      <MediaSection />
      <TestimonialsSection />
      <IndiaPresence />
      <TypewriterEffectDemo />
    
      {/* <CTASection /> */}
      <Footer />
      {/* <SmoothCursor/> */}
    </div>
  )
}
