"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { InteractiveHoverButton } from "@/components/hover"


export function HomeAbout() {
    return (
        <section className="py-20 sm:py-24 md:py-40 bg-white text-gray-900 h-full">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-6 sm:space-y-8 px-2 sm:px-0"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight text-center md:text-left">
                            About Adirya
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg max-w-xl mx-auto md:mx-0 text-center md:text-left">
                            Founded in 2014, Adirya has transformed the well-being of over 150,000 employees
                            across India. Our team combines medical experts, psychologists, safety specialists, and
                            wellness coaches to deliver programs that truly make a difference. From pioneering BMI
                            Challenges to designing phygital wellness solutions, we’re here to help your workforce
                            stay healthy, engaged, and inspired.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <InteractiveHoverButton>Book A Demo</InteractiveHoverButton>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="flex justify-center md:justify-end"
                    >
                        <Image
                            src="/image.jpg?height=480&width=600"
                            alt="Minimal Healthcare UI"
                            width={600}
                            height={480}
                            className="rounded-3xl shadow-xl object-cover w-full max-w-sm sm:max-w-md md:max-w-full"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
