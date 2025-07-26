"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const solutions = [
  {
    title: "Employee Wellness Programs",
    description: "Well-being and performance don’t have to be at odds. Our programs support both.",
    details: [
      "❖ Health Risk Assessments (onsite & digital)",
      "❖ Onsite medical centre setup and support",
      "❖ Preventive screenings for lifestyle diseases",
      "❖ Wellness activities: yoga, Zumba, live diet demos",
      "❖ Maternity and parenting sessions",
      "❖ Tailored support for shift workers",
    ],
    image: "face.jpg",
  },
  {
    title: "Emotional & Mental Health",
    description: "Helping teams build emotionally resilient workplaces—without stigma or overcomplication.",
    details: [
      "❖ Stress management workshops that actually help",
      "❖ Counselling support (in-person and telephonic)",
      "❖ Grief support, crisis response, suicide risk assessments",
      "❖ Sleep health programs",
      "❖ Sensitization sessions for managers and HR",
    ],
    image: "wear.webp",
  },
  {
    title: "Nutrition & Lifestyle Wellness",
    description: "Helping people make practical, healthier choices that stick.",
    details: [
      "❖ Practical and personalized diet counseling",
      "❖ Healthy eating programs and sensory audits",
      "❖ Smoking cessation support",
      "❖ Coaching, challenges, and behavioral nudges",
    ],
    image: "voice.webp",
  },
  {
    title: "AI-Powered Health – Adiryacare.ai",
    description: "Instant real-time vitals using facial scanning—no wires, no wait.",
    details: [
      "❖ Tracks 16 vitals: HR, BP trends, oxygen, stress index & more",
      "❖ Personal health dashboard for each employee",
      "❖ Trend tracking & early nudges",
      "❖ Mobile or kiosk support",
      "❖ Syncs with smart scales",
      "→ [Try the App] (Wellness support tool, not diagnostic)",
    ],
    image: "face.jpg",
  },
  {
    title: "Safety & Industrial Health",
    description: "Build safer environments—not just checkboxes, but actual protection.",
    details: [
      "❖ Safety programs for high-risk industries",
      "❖ Ergonomic and confined space assessments",
      "❖ Emergency response event support",
      "❖ Tailored road safety campaigns",
    ],
    image: "wear.webp",
  },
  {
    title: "Community & Public Health Initiatives",
    description: "Making preventive care accessible to all—especially underserved communities.",
    details: [
      "❖ School health programs",
      "❖ Community health camps",
      "❖ Mass vaccination drives",
      "❖ Public awareness initiatives",
      "❖ Emergency hotline services",
    ],
    image: "voice.webp",
  },
];

export default function SolutionsGrid() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-4"
        >
          Our Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Wellness that works—built with care, backed by science, and designed for real people.
          <br />
          At Adirya, we don’t believe in one-size-fits-all wellness. We work with organizations to
          create programs that actually fit their people—meeting them where they are, supporting them
          in ways that feel real, and delivering outcomes that matter.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => {
            const row = Math.floor(idx / 3);
            const fromLeft = row % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelected(selected === idx ? null : idx)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {item.description}
                  </p>
                  {selected === idx && (
                    <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-4 space-y-1 mt-2">
                      {item.details.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Let’s Build a Healthier Way Forward
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-xl mx-auto">
            If you’re trying to create a workplace where health isn’t just a policy, but a culture,
            then let’s talk. We’re here to help you design it, grow it, and sustain it.
            All customizable. All you.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:contact@adirya.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Book a Consultation
            </a>
            <a
              href="mailto:info@adirya.com"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
            >
              Email Us
            </a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
