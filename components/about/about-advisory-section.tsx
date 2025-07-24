"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Building2, Users, TrendingUp, Target, CheckCircle } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const workWithData = [
    {
      icon: Building2,
      title: "Corporates",
      description: "Organizations that expect clear ROI and measurable impact from wellness initiatives",
      step: "01",
      side: "left",
    },
    {
      icon: Users,
      title: "Health-Focused Organizations",
      description: "Companies working to build a culture of health and accountability",
      step: "02",
      side: "right",
    },
    {
      icon: TrendingUp,
      title: "Leadership Teams",
      description: "Teams that value transparency, data, and credible support for employee wellness",
      step: "03",
      side: "left",
    },
  ]

  const benefits = ["Reducing absenteeism", "Improving retention", "Helping employees show up as their best selves"]

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Who Do We Work With Section */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Who Do We{" "}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Work With?
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We partner with forward-thinking organizations that are committed to employee wellness and measurable
              health outcomes.
            </p>
          </motion.div>

{/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent mb-16"
          />

          {/* Process Steps */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-cyan-400 hidden lg:block"></div>

            <div className="space-y-16">
              {workWithData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  className={`flex items-center ${item.side === "right" ? "lg:flex-row-reverse" : ""} flex-col lg:flex-row gap-8`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${item.side === "right" ? "lg:text-right" : ""}`}>
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 group">
                      <div className={`flex items-center gap-4 mb-4 ${item.side === "right" ? "lg:justify-end" : ""}`}>
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <motion.div
                      className="absolute inset-0 w-16 h-16 border-2 border-teal-400/50 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
