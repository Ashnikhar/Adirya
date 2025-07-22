"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const mediaLogos = [
  { name: "TechCrunch", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Forbes", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Reuters", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Bloomberg", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Wall Street Journal", logo: "/placeholder.svg?height=60&width=120" },
  { name: "CNN", logo: "/placeholder.svg?height=60&width=120" },
]

export default function MediaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Media <span className="text-teal-400">that covered</span>
          </h2>
          <h3 className="text-2xl text-gray-300">our stories of impact</h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {mediaLogos.map((media, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={media.logo || "/placeholder.svg"}
                alt={media.name}
                className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
