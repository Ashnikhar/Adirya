"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Products3D } from "@/components/3d/products-3d"
import { motion } from "framer-motion"

export function ProductsSection() {
  const products = [
    {
      title: "CarePlix Vitals",
      description: "Advanced vital signs monitoring with AI-powered analysis",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "CarePlix Care",
      description: "Comprehensive care management platform for healthcare providers",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "CarePlix AI",
      description: "Intelligent diagnostic assistance powered by machine learning",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <Products3D />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
            Adirya Health Products
            </span>
          </h2>
          <p className="text-xl text-gray-400">Explore Our Platform Solutions</p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="rounded-3xl p-6 bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{product.title}</h3>
              <p className="text-gray-300 mb-6">{product.description}</p>
              <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:scale-105 transition-transform text-white font-semibold text-lg">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
