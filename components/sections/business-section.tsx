"use client"

import { Business3D } from "@/components/3d/business-3d"
import { motion } from "framer-motion"

export function BusinessSection() {
  const businessSolutions = [
    "AI-Powered Analytics",
    "Predictive Maintenance",
    "Automation Solutions",
    "Real-time Monitoring",
  ]

  return (
    <section className="relative py-28 bg-[#f9f9f9] overflow-hidden text-gray-900">
      <Business3D />

      <div className="relative z-10 mx-auto px-8 md:px-20 max-w-screen-2xl">
        {/* Heading */}
        <motion.div
          className="text-center mb-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-serif font-semibold mb-6 leading-tight">
            Empowering Modern Businesses
          </h2>
          <p className="text-lg text-gray-600">
            Practical, scalable, and beautifully simple AI solutions tailored to your workflow.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {businessSolutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 bg-white border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-center"
            >
              <div className="w-full h-32 bg-[#e2e8f0] rounded-xl mb-6" />
              <h3 className="text-2xl font-semibold mb-3">{solution}</h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Elegant and effective solutions designed for your business transformation.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
