"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Globe, Award, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "1M+",
    label: "Patients Served",
    description: "Improving lives worldwide",
  },
  {
    icon: Globe,
    number: "50+",
    label: "Countries",
    description: "Global healthcare reach",
  },
  {
    icon: Award,
    number: "100+",
    label: "Awards Won",
    description: "Industry recognition",
  },
  {
    icon: TrendingUp,
    number: "99%",
    label: "Success Rate",
    description: "Proven effectiveness",
  },
]

export default function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-black relative overflow-hidden"
    >
      {/* Background world map effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-center bg-no-repeat bg-contain" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Making <span className="text-teal-400">an Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our global reach and innovative solutions are transforming healthcare and improving lives across the world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-teal-600/20 rounded-full flex items-center justify-center group-hover:bg-teal-600/30 transition-colors duration-300">
                  <stat.icon className="w-10 h-10 text-teal-400" />
                </div>
                <motion.div
                  className="absolute inset-0 w-20 h-20 mx-auto border-2 border-teal-400/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </div>
              <motion.h3
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {stat.number}
              </motion.h3>
              <h4 className="text-xl font-semibold text-teal-400 mb-2">{stat.label}</h4>
              <p className="text-gray-300">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
