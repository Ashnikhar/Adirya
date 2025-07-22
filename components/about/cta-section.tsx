"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-600/10 to-cyan-600/10" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform <br />
            <span className="text-teal-400">Your Healthcare?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare providers who trust CarePlix to deliver innovative solutions that improve
            patient outcomes.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" /> Schedule a Call
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
