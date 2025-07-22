"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import HeroSection from "@/components/about/hero-section"
import AboutSection from "@/components/about/about-section"
import IndustrySection from "@/components/about/industry-section"
import TechnologySection from "@/components/about/technology-section"
import MissionSection from "@/components/about/mission-section"
import ImpactSection from "@/components/about/impact-section"
import OfficeSection from "@/components/about/office-section"
import ResponsibleSection from "@/components/about/responsible-section"
import CTASection from "@/components/about/cta-section"
import TeamSection from "@/components/about/team-section"
import AdvisorySection from "@/components/about/advisory-section"
import MediaSection from "@/components/about/media-section"
import {Footer} from "@/components/footer"
import LoadingSpinner from "@/components/about/loading-spinner"
import { Header } from "@/components/header"

// Dynamically import the 3D background to avoid SSR issues
const Background3D = dynamic(() => import("@/components/about/background-3d"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />

      {/* Fullscreen background */}
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<LoadingSpinner />}>
          <Background3D />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection
          title="Welcome to Adirya"
          subtitle="Innovating Healthcare with AI and Blockchain"
          ctaText="Learn More"
          onCtaClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}/>

        <AboutSection />
        <MissionSection />
        {/* <IndustrySection /> */}
        <TechnologySection />
        
        <ImpactSection />
        {/* <OfficeSection /> */}
        {/* <ResponsibleSection /> */}
        <CTASection />
        {/* <TeamSection /> */}
        <AdvisorySection />
        {/* <MediaSection /> */}
        <Footer />
      </div>
    </main>
  )
}
