import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHeroSection } from "@/components/contact/contact-hero-section"
import { ContactInfoSection } from "@/components/contact/contact-info-section"
import { ContactFormSection } from "@/components/contact/contact-form-section"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <Footer />
    </div>
  )
}
