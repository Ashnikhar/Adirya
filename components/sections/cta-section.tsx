"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { InteractiveHoverButton } from "@/components/hover"
import { TypingAnimation } from "../magicui/typing-animation"
import { Globe } from "../globe"  

export function CTASection() {
  return (
    <section className="py-40 bg-white text-gray-900 h-full" >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl h-full" >
        <div className="grid md:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-serif font-semibold leading-tight">
              AI-Powered Digital
              <br /> <TypingAnimation> Health Transformation</TypingAnimation>
            </h2>
            <p className="text-gray-600 text-lg max-w-lg">
           Combining cutting-edge AI and innovative technology with trusted human medical expertise—delivering seamless, personalized  healthcare designed for everyone.
            </p>
            {/* <Button className="px-7 py-4 rounded-full bg-black text-white text-lg font-medium hover:bg-gray-900 transition"> */}
            <InteractiveHoverButton>Request A Demo</InteractiveHoverButton>
            {/* </Button> */}
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
