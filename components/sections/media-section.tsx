"use client"

import { motion } from "framer-motion"

export function MediaSection() {
  const mediaLogos = ["TechCrunch", "Forbes", "Reuters", "Bloomberg", "CNN", "BBC"]

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0f0f20] to-[#09090f] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Media Spotlight
            </span>
          </h2>
          <p className="text-lg text-gray-400">Trusted by leading global media</p>
        </motion.div>

        {/* Media Logos */}
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
          {mediaLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg text-center shadow-md border border-white/10 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="font-bold text-xl text-gray-200">{logo}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
