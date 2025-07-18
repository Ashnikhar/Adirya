"use client";

import { motion } from "framer-motion";

export function PartnersSection() {
  const partners = ["PHILIPS", "GE", "ORACLE", "N42", "NVIDIA", "PH"];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-white mb-12">
          🚀 Our Global Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="text-gray-200 text-2xl md:text-3xl font-bold opacity-80 hover:opacity-100 px-10 py-6 rounded-2xl border border-gray-700 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-[0_15px_30px_rgba(0,255,255,0.3)] backdrop-blur-sm"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.08,
                rotate: 2,
                boxShadow: "0 20px 40px rgba(0, 255, 255, 0.5)",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: false, amount: 0.5 }} // triggers on every scroll in/out
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
