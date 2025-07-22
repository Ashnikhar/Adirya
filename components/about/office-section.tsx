"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const offices = [
  {
    city: "New York",
    country: "USA",
    image: "/placeholder.svg?height=300&width=400",
    description: "Our headquarters",
  },
  {
    city: "London",
    country: "UK",
    image: "/placeholder.svg?height=300&width=400",
    description: "European operations",
  },
  {
    city: "Singapore",
    country: "Asia",
    image: "/placeholder.svg?height=300&width=400",
    description: "Asian headquarters",
  },
  {
    city: "Sydney",
    country: "Australia",
    image: "/placeholder.svg?height=300&width=400",
    description: "Pacific operations",
  },
]

export default function OfficeSection() {
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
            Our Global <span className="text-teal-400">Offices</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With offices around the world, we're always close to our clients and partners
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-lg overflow-hidden mb-4 shadow-lg">
                <Image
                  src={office.image || "/placeholder.svg"}
                  alt={`${office.city} office`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{office.city}</h3>
                  <p className="text-sm opacity-90">{office.country}</p>
                </div>
              </div>
              <p className="text-gray-300 text-center">{office.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
