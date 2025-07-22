"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const advisors = [
  {
    name: "Dr. Robert Johnson",
    specialty: "Cardiology",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Dr. Jennifer Lee",
    specialty: "Neurology",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Dr. Michael Davis",
    specialty: "Oncology",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Dr. Sarah Wilson",
    specialty: "Pediatrics",
    image: "/placeholder.svg?height=150&width=150",
  },
]

export default function AdvisorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Clinical <span className="text-teal-400">Advisory Board</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-teal-400/30">
                <Image
                  src={advisor.image || "/placeholder.svg"}
                  alt={advisor.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{advisor.name}</h3>
              <p className="text-teal-400 text-sm">{advisor.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
