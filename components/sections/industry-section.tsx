"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function IndustrySection() {
  const industries = [
    { title: "Hospitals", image: "/placeholder.svg?height=300&width=400" },
    { title: "Clinics", image: "/placeholder.svg?height=300&width=400" },
    { title: "Home Care", image: "/placeholder.svg?height=300&width=400" },
    { title: "Research", image: "/placeholder.svg?height=300&width=400" },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-black mb-4">
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-4">Empowering healthcare across diverse sectors</p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="rounded-3xl bg-white/70 backdrop-blur-md p-6 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto group">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  width={400}
                  height={300}
                  className="w-48 h-48 object-cover rounded-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{industry.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
