"use client";
import React from "react";
import { ContainerScroll } from "@/components/container-scroll";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mt-0 pt-6 text-center px-4">
              Why Organizations Choose Us <br />
              <span className="text-3xl sm:text-5xl md:text-[5rem] font-bold mt-1 leading-none text-blue-500 block">
                Adirya Health
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-md sm:max-w-xl mx-auto mt-4 text-center px-4">
              We’re pioneers in employee engagement, blending clinical expertise with innovative
              tools like <span className="text-blue-500">adiryacare.ai</span>, our AI-powered face scan app that
              instantly measures 16 vital health parameters.
              <br />
              <span className="text-blue-500 font-semibold">Review – Revive – Engage – Motivate</span><br /> Our approach drives measurable outcomes that matter.
            </p>
          </>
        }
      >
        <img
          src={`/face.webp`}
          alt="hero"
          height={500}
          width={900}
          className="mx-auto rounded-2xl object-cover h-64 sm:h-96 md:h-full object-center mt-4"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export default HeroScrollDemo;
