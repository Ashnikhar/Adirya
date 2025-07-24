'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function AboutUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="max-w-full mx-auto flex flex-col md:flex-row items-center py-28 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden text-white"
      style={{ minHeight: '600px' }}
    >
      {/* Left Image */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl flex-shrink-0">
        <Image
          src="pic-1.jpg" // Replace with your image path
          alt="Adirya Holistic Health"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mt-10 md:mt-0 md:w-1/2 md:pl-16 max-w-xl"
      >
        {/* Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-teal-400 uppercase tracking-widest font-semibold mb-3"
        >
          About Us
        </motion.h3>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-8 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"
        >
          Since 2014, Pioneering Healthier, More Engaged Workplaces
        </motion.h2>

        {/* Body Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          Our team unites experts in medicine, psychology, HR, and technology to design preventive healthcare programs and technology that are practical, relevant, and not just another checklist item. Over the last decade, we’ve supported more than <span className="text-cyan-400 font-semibold">150,000 employees</span> across diverse industries in India — helping make health and well-being an everyday part of work culture.
        </motion.p>
      </motion.div>
    </section>
  )
}
