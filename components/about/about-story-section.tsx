'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 0.95])

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden text-white"
    >
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Textual Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              About Us
            </h2>

            <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
              <p>
                Since <span className="text-white font-semibold">2014</span>, Adirya Holistic Health has been quietly transforming how organizations think about health at work. We believe well-being should be more than a corporate checkbox — it should feel real, relevant, and woven into the daily rhythm of business.
              </p>

              <p>
                Our interdisciplinary team — drawn from <span className="text-white font-semibold">medicine</span>, <span className="text-white font-semibold">psychology</span>, <span className="text-white font-semibold">HR</span>, and <span className="text-white font-semibold">technology</span> — works together to design preventive health programs that are both evidence-based and deeply human.
              </p>

              <p>
                Over the past decade, we’ve partnered with organizations of every size — from global enterprises to grassroots initiatives — and supported over <span className="text-cyan-400 font-bold">1,50,000 employees</span> across India.
              </p>

              <p>
                Our mission remains consistent: to help workplaces not just function, but flourish, by making well-being a cultural norm.
              </p>
            </div>
          </motion.div>

          {/* Image with Scroll Scale Animation */}
          <motion.div
            style={{ scale }}
            className="relative h-[420px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="./public/pic-1.jpg" // Replace with your actual image
              alt="Adirya Holistic Health Impact"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
