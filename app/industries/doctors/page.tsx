import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DoctorsHeroSection } from "@/components/industries/doctors/doctors-hero-section"
import { DoctorsPracticeSection } from "@/components/industries/doctors/doctors-practice-section"
import { DoctorsAppointmentSection } from "@/components/industries/doctors/doctors-appointment-section"
import { DoctorsEarningsSection } from "@/components/industries/doctors/doctors-earnings-section"
import { DoctorsPatientSection } from "@/components/industries/doctors/doctors-patient-section"
import { CTASection } from "@/components/sections/cta-section"

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <DoctorsHeroSection />
      <DoctorsPracticeSection />
      <DoctorsAppointmentSection />
      <DoctorsEarningsSection />
      <DoctorsPatientSection />
      <CTASection />
      <Footer />
    </div>
  )
}
