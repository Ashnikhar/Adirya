"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react"
import BackgroundGlobe from "@/components/BackgroundGlobe"

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactOptions = [
    {
      icon: Mail,
      label: "Contact Us",
      description: "Send us a message",
      action: "mailto:info@careplix.com",
    },
    {
      icon: MapPin,
      label: "Office Locations",
      description: "Visit our offices",
      action: "#offices",
    },
    {
      icon: Globe,
      label: "Website Link",
      description: "Explore our platform",
      action: "https://careplix.com",
    },
  ]

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background effects */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-600/10 to-cyan-600/10" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
      </div> */}
      <BackgroundGlobe />

      {/* Main Content */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA Content */}
        {/* Let's Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            If you'd like to discuss how we can support health and well-being in your organization, we'd be glad to
            start a conversation. Feel free to reach out to us through any of the options given below.
            <span className="text-teal-400 font-semibold"> Let's make a difference, shall we?</span>
          </p>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent mb-16"
          />


          {/* Contact Options Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactOptions.map((option, index) => (
              <motion.a
                key={index}
                href={option.action}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="group block"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    {option.label}
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{option.description}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-br from-teal-600/10 to-cyan-600/10 p-8 rounded-2xl border border-teal-500/20"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h4 className="text-2xl font-bold text-white mb-2">Ready to get started?</h4>
                <p className="text-gray-300">
                  Let's discuss your organization's wellness goals and create a customized solution.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full whitespace-nowrap"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Conversation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 px-6 py-3 rounded-full whitespace-nowrap bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book Demo
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Message */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-8"
          >
            <p className="text-gray-400 text-sm">
              Available Monday - Friday, 9 AM - 6 PM EST | Response within 24 hours
            </p>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}
