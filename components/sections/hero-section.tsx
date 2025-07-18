import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Hero3DBackground } from "@/components/3d/hero-3d-background"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Hero3DBackground />

      <div className="relative z-10 container mx-auto px-4 py-24">
        {/* Main Heading and CTA */}
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-[#008080] to-[#00AAAA] bg-clip-text text-transparent">
                AI-Powered
              </span>{" "}
              Digital Health Transformation
            </h1>
            <p className="max-w-[600px] text-lg md:text-xl text-gray-300">
              Combining cutting-edge AI and innovative technology with trusted human medical expertise—
              delivering seamless, personalized healthcare designed for everyone.
            </p>
            <Button className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#008080] to-[#00AAAA] px-8 text-base font-medium text-white shadow-lg transition-all hover:scale-105">
              Request A Demo
            </Button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Facial Scan", image: "/face.webp?height=400&width=300" },
            { title: "Voice Assistant", image: "/voice.webp?height=400&width=300" },
            { title: "Remote Monitoring", image: "/remote.webp?height=400&width=300" },
            { title: "Wearable Tech", image: "/wear.webp?height=400&width=300" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] group"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
