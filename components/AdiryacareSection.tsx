"use client";

import { Iphone15Pro } from "@/components/magicui/Iphone15Pro";
import { FaHeartbeat, FaStethoscope } from "react-icons/fa";

export default function AdiryacareSection() {
  return (
    <section className="relative z-10 w-full overflow-hidden bg-[#f9fafb] dark:bg-[#0b0b0b] px-6 py-24 lg:px-32">
      {/* Blurred Background Glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full z-0" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-20">
        {/* Content Section */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
            ❖ AI Interventions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Adiryacare.ai
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
            Scan your face and unlock <strong>real-time insights</strong> into{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">16 vital health markers</span> — from heart rate to oxygen levels — using nothing but your phone.
          </p>

          {/* Feature Cards */}
          <div className="space-y-5">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-xl border border-gray-200 dark:border-white/10">
              <FaStethoscope className="text-2xl text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Lifestyle Disease Profiling
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Detect early risk factors and support healthier habits with AI-powered predictions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-xl border border-gray-200 dark:border-white/10">
              <FaHeartbeat className="text-2xl text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Health Risk Profiling
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Personalized mental and physical health insights designed for proactive care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* iPhone Display */}
        <div className="flex-1 flex justify-center">
          <div className="h-[600px] w-[250px] drop-shadow-2xl">
            <Iphone15Pro
              width={undefined}
              height={undefined}
              src="face.webp" // Replace with real media
              className="h-full w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
