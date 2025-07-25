"use client";

import { motion } from "framer-motion";
import { FaHeartbeat, FaBrain, FaMobileAlt } from "react-icons/fa";

export function WellnessHighlights() {
  return (
    <section className="bg-white text-black py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Text Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            <span className="text-blue-600">AI-Powered</span> Health Interventions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-700 mb-8"
          >
            Use our advanced face scan to instantly track 16+ health metrics—like <strong>heart rate</strong>, <strong>blood pressure</strong>, and <strong>oxygen levels</strong>—right from your phone or kiosk.
          </motion.p>

          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <FaHeartbeat className="text-blue-500 mt-1" size={24} />
              <div>
                <h4 className="text-lg font-semibold">Lifestyle Disease Profiling</h4>
                <p className="text-gray-600 text-sm">
                  Catch early risk factors and build healthier habits with actionable insights.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start gap-4"
            >
              <FaBrain className="text-blue-500 mt-1" size={24} />
              <div>
                <h4 className="text-lg font-semibold">Health Risk Assessment</h4>
                <p className="text-gray-600 text-sm">
                  Personalized analysis of your physical and mental health for timely care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Section - Imagery or Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-96 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-xl"
        >
          <FaMobileAlt size={80} className="text-blue-600" />
        </motion.div>
      </div>
    </section>
  );
}
