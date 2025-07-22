"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Lisa Wang",
    role: "CTO",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "David Brown",
    role: "Head of Operations",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Maria Garcia",
    role: "VP of Marketing",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function TeamSection() {
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
            Meet the team <span className="text-teal-400">that manages</span>
          </h2>
          <h3 className="text-2xl text-gray-300">our business every</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-teal-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
