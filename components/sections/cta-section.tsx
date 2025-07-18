"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-28 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-serif font-semibold leading-tight">
              Simple care. <br /> Designed beautifully.
            </h2>
            <p className="text-gray-600 text-lg max-w-lg">
              A refined approach to healthcare tools — effortless, intuitive, and built to enhance your workflow.
            </p>
            <Button className="px-7 py-4 rounded-full bg-black text-white text-lg font-medium hover:bg-gray-900 transition">
              Start your free trial
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <Image
              src="/image.jpg?height=480&width=600"
              alt="Minimal Healthcare UI"
              width={600}
              height={480}
              className="rounded-3xl shadow-xl object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
