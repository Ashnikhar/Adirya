"use client"

import Image from "next/image"
import { HealthcareAccess3D } from "@/components/3d/healthcare-access-3d"
import { motion } from "framer-motion"

export function HealthcareAccessSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <HealthcareAccess3D />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <motion.div
            className="space-y-7"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Access to Best Healthcare
              </span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are transforming healthcare by combining cutting-edge AI technology with trusted human medical
              expertise. Our platform delivers seamless, personalized healthcare solutions designed for everyone,
              making quality healthcare more accessible than ever before.
            </p>
            <p className="text-md text-gray-400 leading-relaxed">
              Through innovative digital health solutions, we're bridging the gap between patients and healthcare
              providers, ensuring better outcomes and improved quality of life.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Healthcare professionals"
              width={600}
              height={500}
              className="rounded-3xl object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
