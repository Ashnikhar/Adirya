"use client"

import Image from "next/image"
import { EarlyDetection3D } from "@/components/3d/early-detection-3d"
import { motion } from "framer-motion"

export function EarlyDetectionSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">
      <EarlyDetection3D />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Medical monitoring device"
              width={600}
              height={500}
              className="rounded-3xl object-cover shadow-2xl"
            />
          </motion.div>

          <motion.div
            className="space-y-7 order-1 md:order-2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Early Detection & Monitoring
              </span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our advanced AI algorithms enable early detection of health conditions through continuous monitoring and
              analysis. By identifying potential health issues before they become serious, we help prevent complications
              and improve patient outcomes.
            </p>
            <p className="text-md text-gray-400 leading-relaxed">
              Real-time health monitoring combined with predictive analytics provides healthcare professionals with the
              insights they need to make informed decisions quickly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
