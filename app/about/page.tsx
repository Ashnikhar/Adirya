import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHeroSection } from "@/components/about/about-hero-section"
import { AboutStorySection } from "@/components/about/about-story-section"
import { AboutIndustrySection } from "@/components/about/about-industry-section"
import { AboutProgressSection } from "@/components/about/about-progress-section"
import { AboutMissionSection } from "@/components/about/about-mission-section"
import { AboutImpactSection } from "@/components/about/about-impact-section"
import { AboutTeamSection } from "@/components/about/about-team-section"
import { AboutResponsibilitySection } from "@/components/about/about-responsibility-section"
import { AboutLeadershipSection } from "@/components/about/about-leadership-section"
import { AboutAdvisorySection } from "@/components/about/about-advisory-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <AboutHeroSection />
      <AboutStorySection />
      <AboutIndustrySection />
      <AboutProgressSection />
      <AboutMissionSection />
      <AboutImpactSection />
      <AboutTeamSection />
      <AboutResponsibilitySection />
      <AboutLeadershipSection />
      <AboutAdvisorySection />
      <Footer />
    </div>
  )
}
