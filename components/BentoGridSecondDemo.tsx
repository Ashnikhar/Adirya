import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function BentoGridSecondDemo() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
        Our Healthcare Advantages
      </h2>
      <BentoGrid className="md:auto-rows-[22rem] gap-6">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            header={
              <BackgroundCard
                image={item.image}
                title={item.title}
                description={item.description}
              />
            }
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const BackgroundCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => (
  <div className="relative w-full h-full rounded-xl overflow-hidden group">
    {/* Background */}
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-500 group-hover:blur-sm"
      style={{ backgroundImage: `url(${image})` }}
    ></div>

    {/* Title & Description */}
    <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center text-white transition-all duration-500">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[200px] group-hover:mt-4 text-white text-lg transition-all duration-500 ease-in-out overflow-hidden px-4">
        {description}
      </p>
    </div>

    {/* Optional Overlay */}
    <div className="absolute inset-0 bg-white/10"></div>
  </div>
);

const items = [
  {
    title: "Access to Best Healthcare",
    description:
      "We are transforming healthcare by combining cutting-edge AI technology with trusted human medical expertise. Our platform delivers seamless, personalized healthcare solutions designed for everyone, making quality healthcare more accessible than ever before..",
    image: "face.webp",
    className: "md:col-span-2",
  },
  {
    title: "Early Detection & Monitoring",
    description:
      "Our advanced AI algorithms enable early detection of health conditions through continuous monitoring and analysis. By identifying potential health issues before they become serious, we help prevent complications and improve patient outcomes.",
    image: "wear.webp",
    className: "md:col-span-1",
  },
  {
    title: "Virtual Demand for Scalable AI",
    description:
      "The growing demand for virtual healthcare solutions has accelerated the need for scalable AI-powered platforms. Our technology meets this demand by providing robust, scalable solutions that can adapt to various healthcare environments and requirements.",
    image: "image.jpg",
    className: "md:col-span-1",
  },
  {
    title: "AI-Driven Care Personalization",
    description:
      "Tailored healthcare experiences using AI to improve engagement and outcomes.rom telemedicine to remote patient monitoring, our AI solutions are designed to scale with your healthcare organization's needs while maintaining the highest standards of care.",
    image: "voice.webp",
    className: "md:col-span-2",
  },
];
