"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const industryData = [
  {
    name: "Healthcare Innovation",
    image: "/placeholder.svg?height=300&width=300",
    description: "Leading the way in medical technology",
  },
  {
    name: "Digital Health",
    image: "/placeholder.svg?height=300&width=300",
    description: "Transforming patient care digitally",
  },
  {
    name: "Medical Research",
    image: "/placeholder.svg?height=300&width=300",
    description: "Advancing medical knowledge",
  },
  {
    name: "Patient Care",
    image: "/placeholder.svg?height=300&width=300",
    description: "Compassionate healthcare delivery",
  },
]

export default function IndustrySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industry{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">we serve</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industryData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-80 rounded-lg overflow-hidden mb-4 shadow-lg">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
