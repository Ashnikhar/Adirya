'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const Card = ({
  title,
  description,
  image,
  delay,
}: {
  title: string
  description: string
  image: string
  delay?: number
}) => {
  const cardRef = useRef(null)
  const inView = useInView(cardRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay }}
      className="relative group rounded-2xl overflow-hidden shadow-xl border border-teal-500/20 bg-white/5 backdrop-blur-md"
    >
      <div className="relative h-64 w-full">
        <Image src={image} alt={title} fill className="object-cover transition-transform group-hover:scale-105 duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

export default function MissionSection() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-[#0f0f0f] via-[#101820] to-[#0a0a0a] overflow-hidden text-white"
    >
      {/* Teal Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#00b3b3] rounded-full blur-[200px] opacity-20 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Built for impact. Driven by innovation. Committed to a healthier world.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card
            title="Our Mission"
            description="To empower healthcare systems worldwide by delivering secure, innovative, and scalable technologies that elevate human well-being and accessibility."
            image="/placeholder.svg?height=400&width=600"
            delay={0.1}
          />
          <Card
            title="Our Vision"
            description="To lead a global movement where healthcare meets innovation — creating a future where everyone receives smarter, faster, and more compassionate care."
            image="/placeholder.svg?height=400&width=600"
            delay={0.3}
          />
        </div>

        {/* Closing Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our commitment is bold — to bridge the gap between humans and healthcare through transformative tech and
            passionate people.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
