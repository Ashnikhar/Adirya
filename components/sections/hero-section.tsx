"use client";
import DarkVeil from '@/components/darkviel';

import Image from "next/image";

export default function HeroSection() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <DarkVeil />

      <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-20">
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="text-white text-center lg:text-left space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              AI-Powered Digital <br /> Health Transformation
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Combining cutting-edge AI and innovative technology with trusted
              human medical expertise—delivering seamless, personalized
              healthcare designed for everyone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-xl">
                Request A Demo
              </button>
              <button className="bg-white/10 hover:bg-white/20 transition text-white font-semibold px-6 py-3 rounded-xl backdrop-blur-md">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="face.webp" // Replace with your image path
              alt="AI Health"
              width={500}
              height={500}
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
