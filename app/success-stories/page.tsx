import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SuccessHeroSection } from "@/components/success/success-hero-section"
import { SuccessCaseStudySection } from "@/components/success/success-case-study-section"
import { SuccessInsuranceSection } from "@/components/success/success-insurance-section"
import { SuccessFinanceSection } from "@/components/success/success-finance-section"
import { SuccessTestimonialsSection } from "@/components/success/success-testimonials-section"
import { SuccessCTASection } from "@/components/success/success-cta-section"
import SolutionsSection from "@/components/SolutionsSection";
import { TypewriterEffectDemo } from "@/components/TypewriterEffectDemo";

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
       <Header />
      <div className="pt-24"> {/* Add this wrapper with padding top */}
        {/* <SuccessHeroSection /> */}
        {/* <SuccessCaseStudySection /> */}
        {/* <SuccessInsuranceSection /> */}
        {/* <SuccessFinanceSection /> */}
        {/* <SuccessTestimonialsSection /> */}
        <SolutionsSection />
        {/* <SuccessCTASection /> */}
        <TypewriterEffectDemo />
      </div>
      <Footer />
    </div>
  )
}
