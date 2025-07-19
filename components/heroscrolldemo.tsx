"use client";
import React from "react";
import { ContainerScroll } from "@/components/container-scroll";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white mt-0 pt-6">
              Unleash the power of <br />
              <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none text-blue-500">
                Adirya Health
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto mt-4">
              Combining cutting-edge AI and innovative technology with trusted
              human medical expertise—delivering seamless, personalized healthcare designed for everyone.
            </p>
          </>
        }
      >
        <img
          src={`/face.webp`}
          alt="hero"
          height={500}
          width={900}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export default HeroScrollDemo;
