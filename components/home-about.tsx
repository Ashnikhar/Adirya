"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { InteractiveHoverButton } from "@/components/hover"
import { TypingAnimation } from "@/components/magicui/typing-animation"


export function HomeAbout() {
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
                            About  Adirya
                            {/* <br /> <TypingAnimation> Health Transformation</TypingAnimation> */}
                        </h2>
                        <p className="text-gray-600 text-lg max-w-lg">
                            Founded in 2014, Adirya has transformed the well-being of over 150,000 employees
                            across India. Our team combines medical experts, psychologists, safety specialists, and
                            wellness coaches to deliver programs that truly make a difference. From pioneering BMI
                            Challenges to designing phygital wellness solutions, we’re here to help your workforce
                            stay healthy, engaged, and inspired.
                        </p>
                        {/* <Button className="px-7 py-4 rounded-full bg-black text-white text-lg font-medium hover:bg-gray-900 transition"> */}
                        <InteractiveHoverButton>Book A Demo</InteractiveHoverButton>
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
