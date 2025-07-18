"use client"

import { Impact3D } from "@/components/3d/impact-3d"
import { motion } from "framer-motion"
import CountUp from "react-countup"

export function ImpactSection() {
  const stats = [
    { number: 50, suffix: "M+", label: "Patients Served" },
    { number: 99.9, suffix: "%", label: "Accuracy Rate" },
    { number: 24, suffix: "/7", label: "Monitoring" },
    { number: 150, suffix: "+", label: "Healthcare Partners" },
  ]

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#0a0a23] via-black to-[#0a0a23] overflow-hidden">
      <Impact3D />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Real-World Healthcare Impact
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">Shaping the future of digital healthcare globally</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg p-8 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-6xl font-bold text-teal-400 mb-3">
                <CountUp end={stat.number} duration={2} enableScrollSpy />{stat.suffix}
              </div>
              <div className="text-gray-300 text-lg font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
