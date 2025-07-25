"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const features = [
  "End-to-end workplace wellness programs",
  "AI-powered tools for real-time insights",
  "Custom plans for physical, mental & lifestyle health",
  "Pan-India service network & wellness coaches",
  "Decades of experience in preventive health",
]

export function BusinessSection() {
  return (
    <section className="bg-white text-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
        >
          What You Can Expect from <span className="text-primary">Adirya</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-14"
        >
          Empowering organizations and communities with intelligent, scalable wellness solutions — wherever you are in India.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-green-100 p-2 text-green-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-medium text-gray-800">
                  {feature}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
