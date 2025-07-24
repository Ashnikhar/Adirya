"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Linkedin, Twitter } from "lucide-react"

export function AboutLeadershipSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const leaders = [
    {
      name: "Dr. James Wilson",
      role: "Chief Strategy Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former healthcare executive with 20+ years of experience in digital health transformation.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Dr. Lisa Park",
      role: "VP of Research",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Leading AI researcher specializing in medical applications and clinical validation.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Mark Thompson",
      role: "VP of Engineering",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Technology leader with expertise in scalable healthcare platforms and AI infrastructure.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Dr. Anna Martinez",
      role: "Chief Compliance Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Healthcare compliance expert ensuring regulatory adherence and patient safety standards.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Dr. Michael Chen",
      role: "Chief Medical Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Board-certified physician with expertise in telemedicine and digital health solutions.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Sarah Johnson",
      role: "VP of Operations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Operations expert focused on scaling healthcare technology solutions globally.",
      linkedin: "#",
      twitter: "#",
    },
  ]

  const itemsPerSlide = 3
  const totalSlides = Math.ceil(leaders.length / itemsPerSlide)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide
    return leaders.slice(startIndex, startIndex + itemsPerSlide)
  }

  return (
    <section ref={ref} className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-[15px] text-gray-300 max-w-4xl mx-auto leading-relaxed">
            What connects all of us is a shared commitment to making healthcare approachable, effective and relevant throughout time. We combine clinical knowledge with practical and technological experience to design programs that work in the real world.
            Our strength is bringing together science, empathy, and technology to make healthcare feel connected and personalised.

          </p>
        </motion.div>
        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent mb-16"
        />

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-[#008080]">Meet Our </span> Meet Our
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mt-4"></div>
        </motion.div> */}

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-teal-600/20 hover:bg-teal-600/40 border border-teal-500/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-teal-400 group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-teal-600/20 hover:bg-teal-600/40 border border-teal-500/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-teal-400 group-hover:text-white transition-colors" />
          </button>

          {/* Carousel Content */}
          <div className="mx-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid gap-8 md:grid-cols-3"
              >
                {getCurrentSlideItems().map((leader, index) => (
                  <motion.div
                    key={`${currentSlide}-${index}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="relative mb-6">
                      {/* Profile Image */}
                      <div className="relative w-40 h-40 mx-auto">
                        <Image
                          src={leader.image || "/placeholder.svg"}
                          alt={leader.name}
                          width={300}
                          height={300}
                          className="rounded-full object-cover w-full h-full border-4 border-teal-500/20 group-hover:border-teal-500/60 transition-all duration-300"
                        />

                        {/* Animated Ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-teal-400/30"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />

                        {/* Social Links Overlay */}
                        <div className="absolute inset-0 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                          <a
                            href={leader.linkedin}
                            className="w-8 h-8 bg-teal-500 hover:bg-teal-600 rounded-full flex items-center justify-center transition-colors"
                          >
                            <Linkedin className="w-4 h-4 text-white" />
                          </a>
                          <a
                            href={leader.twitter}
                            className="w-8 h-8 bg-teal-500 hover:bg-teal-600 rounded-full flex items-center justify-center transition-colors"
                          >
                            <Twitter className="w-4 h-4 text-white" />
                          </a>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors">
                        {leader.name}
                      </h3>
                      <p className="text-[#008080] mb-3 font-semibold">{leader.role}</p>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{leader.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-12 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-teal-500 w-8" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
            >
              {/* {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"} */}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        {/* <div className="mt-8 max-w-md mx-auto">
          <div className="w-full bg-gray-800 rounded-full h-1">
            <motion.div
              className="bg-gradient-to-r from-teal-400 to-cyan-400 h-1 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Slide {currentSlide + 1}</span>
            <span>of {totalSlides}</span>
          </div>
        </div> */}
      </div>
    </section>
  )
}
