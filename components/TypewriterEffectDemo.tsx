"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Ready ",
    },
    {
      text: "to Transform",
    },
    {
      text: "Your ",
    },
    {
      text: "Workplace",
    },
    {
      text: "Well-being?",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  bg-gradient-to-b from-white to-blue-50 dark:from-black dark:to-blue-900 text-center px-4">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        Let’s Build a Healthier Way Forward
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Book a Demo
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Contact Us
        </button>
      </div>
    </div>
  );
}
