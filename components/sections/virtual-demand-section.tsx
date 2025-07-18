"use client"

import Image from "next/image"
import { VirtualDemand3D } from "@/components/3d/virtual-demand-3d"
import { motion } from "framer-motion"

export function VirtualDemandSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <VirtualDemand3D />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <motion.div
            className="space-y-7"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                Virtual Demand for Scalable AI Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              The growing demand for virtual healthcare solutions has accelerated the need for scalable AI-powered
              platforms. Our technology meets this demand by providing robust, scalable solutions that can adapt to
              various healthcare environments and requirements.
            </p>
            <p className="text-md text-gray-400 leading-relaxed">
              From telemedicine to remote patient monitoring, our AI solutions are designed to scale with your
              healthcare organization's needs while maintaining the highest standards of care.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Virtual healthcare technology"
              width={600}
              height={500}
              className="rounded-3xl object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
