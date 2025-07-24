"use client";
import React from "react";
import { motion } from "framer-motion";

export default function IndiaPresence() {
  return (
    <section className="py-24 bg-black text-white">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-20"
        style={{ color: "rgb(59 130 246)" }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Pan-India Presence
      </motion.h2>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto px-6 gap-10 items-center">
        {/* Left Side */}
        <div className="space-y-10 hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold" style={{ color: "rgb(59 130 246)" }}>
              Metro Cities
            </h3>
            <p className="text-gray-400">
              Bangalore, Mumbai, and Delhi NCR — where innovation meets impact.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold" style={{ color: "rgb(59 130 246)" }}>
              Tier 2 Expansion
            </h3>
            <p className="text-gray-400">
              Aurangabad & Kolkata operations driving inclusive growth.
            </p>
          </motion.div>
        </div>

        {/* India Map (Bigger) */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <img
            src="India-Map-PNG-Background.png"
            alt="India Map"
            className="w-full max-w-[650px] h-auto" // increased from 500px to 650px
          />
        </motion.div>

        {/* Right Side */}
        <div className="space-y-10 hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold" style={{ color: "rgb(59 130 246)" }}>
              Tech-Driven Support
            </h3>
            <p className="text-gray-400">
              24x7 operational capability across time zones, backed by AI.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold" style={{ color: "rgb(59 130 246)" }}>
              Next-Gen Network
            </h3>
            <p className="text-gray-400">
              Hyderabad and beyond — expanding with agility and intelligence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden mt-12 px-6 text-center text-sm text-gray-300">
        <p>
          We proudly serve across{" "}
          <span style={{ color: "rgb(59 130 246)" }}>Bangalore</span>,{" "}
          <span style={{ color: "rgb(59 130 246)" }}>Mumbai</span>,{" "}
          <span style={{ color: "rgb(59 130 246)" }}>Delhi NCR</span>,{" "}
          <span style={{ color: "rgb(59 130 246)" }}>Hyderabad</span>,{" "}
          <span style={{ color: "rgb(59 130 246)" }}>Aurangabad</span>, and{" "}
          <span style={{ color: "rgb(59 130 246)" }}>Kolkata</span>.
        </p>
      </div>
    </section>
  );
}
