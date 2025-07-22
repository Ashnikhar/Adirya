"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Leading our medical innovation initiatives",
  },
  {
    name: "Michael Chen",
    role: "Head of Technology",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Driving our technological advancement",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Research Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Spearheading breakthrough research",
  },
]

export default function ResponsibleSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            more about CarePlix's <span className="text-teal-400">responsible</span>
          </h2>
          <h3 className="text-2xl text-gray-300">approach to healthcare</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative h-80 w-80 mx-auto mb-6 rounded-lg overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-teal-400 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-300">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
