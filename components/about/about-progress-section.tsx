"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutProgressSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (

    <section
      ref={ref}
      className="mx-auto max-w-full py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden"
    >

      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      {/* <div className="container mx-auto px-4 relative z-10"> */}
      <div className="mx-auto max-w-[1250px] px-4 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">
          <span className="block"></span>
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Why Are We Here ?
          </span>
        </h1>

            <p className="text-gray-300 text-[15px] leading-relaxed mb-8">
              Our mission is straightforward, to help companies create environments where people can take charge of their health and feel personally supported.
              Health and wellness today needs more than traditional interventions. It also requires real-time insights, behavioural science, and technology that make data and solutions accessible. We include and use AI tools and simple tracking systems with evidence-based programs so you can see meaningful outcomes over time, at any point in time.

            </p>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="pic-1.jpg"
                alt="Advanced medical technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-teal-500/30 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500/30 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
