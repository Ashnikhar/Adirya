'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const AnimatedImage = ({
  src,
  alt,
  className = '',
}: {
  src: string
  alt: string
  className?: string
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-xl shadow-lg shadow-[#008080]/20 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
      />
    </motion.div>
  )
}

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden"
    >
      {/* Decorative teal blur glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#008080] rounded-full blur-[160px] opacity-30 pointer-events-none" />

      {/* Subtle dot grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#008080] to-cyan-400 bg-clip-text text-transparent mb-6">
              About Us
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              We are a cutting-edge healthcare technology company committed to reshaping patient care with innovation at
              the core. Our vision is to connect traditional healthcare with future-forward digital solutions.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              With a proven track record over a decade, we empower clinics and hospitals to serve better through smart,
              scalable, and user-centric technologies. Accessibility, efficiency, and empathy guide our work.
            </p>
          </motion.div>

          {/* Animated Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <AnimatedImage
                src="/placeholder.svg?height=200&width=300"
                alt="Medical team"
                className="h-48"
              />
              <AnimatedImage
                src="/placeholder.svg?height=150&width=300"
                alt="Lab equipment"
                className="h-32"
              />
            </div>
            <div className="space-y-4 mt-8">
              <AnimatedImage
                src="/placeholder.svg?height=150&width=300"
                alt="Doctor consulting"
                className="h-32"
              />
              <AnimatedImage
                src="/placeholder.svg?height=200&width=300"
                alt="Tech in healthcare"
                className="h-48"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
