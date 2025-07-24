// Using React + TailwindCSS (shadcn/ui compatible)
"use client";
import { CheckCircle } from "lucide-react";

const features = [
  "End-to-end workplace wellness programs",
  "AI-powered tools for real-time insights",
  "Custom plans covering physical, mental & lifestyle health",
  "Pan-India service network & dedicated wellness coaches",
  "Decades of experience in preventive health",
];

export default function WellnessHighlights() {
  return (
    <section className="bg-white dark:bg-black py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-10 animate-fade-in-up">
          What You Can Expect
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 shadow hover:shadow-xl transition-all duration-300 flex items-start gap-4 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: "both" }}
            >
              <CheckCircle className="text-blue-500 mt-1" />
              <p className="text-lg font-medium text-gray-800 dark:text-white">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
