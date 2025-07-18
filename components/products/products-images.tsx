"use client";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Stream the Acme event",
    desc: "What to watch",
    img: "/image.jpg",
    btn: "Watch Now",
    color: "primary",
  },
  {
    title: "Contribute to the planet",
    desc: "Plant a tree",
    img: "/image.jpg",
    btn: "Contribute",
    color: "primary",
  },
  {
    title: "Creates beauty like a beast",
    desc: "Supercharged",
    img: "/image.jpg",
    btn: "Learn More",
    color: "primary",
  },
  {
    title: "Acme Camera",
    desc: "Available soon. Get notified.",
    img: "/image.jpg",
    btn: "Notify Me",
    color: "secondary",
  },
  {
    title: "Your checklist for better sleep",
    desc: "Your day your way",
    img: "/image.jpg",
    btn: "Get App",
    color: "primary",
  },
  {
    title: "Breathing App",
    desc: "Get a good night's sleep.",
    img: "/image.jpg",
    btn: "Try Now",
    color: "primary",
  },
];

export default function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 max-w-6xl mx-auto">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.15 }}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center hover:ring-2 hover:ring-[#008080] transition-all duration-300"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-64 object-cover"
            style={{ objectPosition: "center" }}
          />
          <div className="p-6 w-full flex-1 flex flex-col justify-between">
            <h4 className="text-white font-extrabold text-xl mb-2 leading-tight">{card.title}</h4>
            <p className="text-base text-gray-400 mb-6">{card.desc}</p>
            <Button className="w-full" color={card.color as "primary" | "secondary" | "default" | "success" | "warning" | "danger"} radius="full" size="md">{card.btn}</Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
