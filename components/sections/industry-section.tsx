"use client"

import { motion } from "framer-motion"

export function IndustrySection() {
  return (
    <section className="bg-black text-white pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-8"
        >
          What We <span className="text-blue-500">Offer</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          From <span className="text-white font-medium">preventive screenings</span> and{" "}
          <span className="text-white font-medium">emotional well-being</span><br />
          to <span className="text-white font-medium">AI-driven risk assessments</span>,<br />
          <span className="text-blue-500 font-semibold">Adirya</span> delivers a complete suite of wellness solutions <br className="hidden md:block" />
          tailored for <span className="text-white font-medium">companies</span> and{" "}
          <span className="text-white font-medium">communities</span>.
        </motion.p>
      </div>
    </section>
  )
}
