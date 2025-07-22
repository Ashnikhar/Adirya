import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function BentoGridSecondDemo() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-white">
        Explore Our Offerings
      </h2>
      <BentoGrid className="md:auto-rows-[22rem] gap-4 md:gap-6">
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
  <div className="relative w-full h-56 sm:h-64 md:h-full rounded-xl overflow-hidden group">
    {/* Background */}
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-500 group-hover:blur-sm"
      style={{ backgroundImage: `url(${image})` }}
    ></div>

    {/* Text */}
    <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center text-white transition-all duration-500 px-2 md:px-4">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{title}</h3>
      <p className="opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[200px] mt-0 group-hover:mt-4 text-xs sm:text-sm md:text-lg transition-all duration-500 ease-in-out overflow-hidden">
        {description}
      </p>
    </div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-white/10"></div>
  </div>
);

const items = [
  {
    title: "Corporate Wellness Programs",
    description:
      "Adriya promotes healthier living through health risk assessments, fun fitness challenges with BMI tracking, personalized lifestyle improvement plans, and regular disease screenings for early detection",
    image: "face.webp",
    className: "md:col-span-2",
  },
  {
    title: "Workplace Mental Health",
    description:
      "Our mental health programs include stress management workshops, emotional wellness counseling, HR sensitization sessions, and 24/7 confidential telephonic support accessible to all",
    image: "wear.webp",
    className: "md:col-span-1",
  },
  {
    title: "Nutrition & Sleep",
    description:
      "Adriya encourages better daily habits with expert diet counseling, live healthy cooking demos, practical sleep management tools, and helpful resources for those with irregular routines.",
    image: "image.jpg",
    className: "md:col-span-1",
  },
  {
    title: "Specialized Programs",
    description:
      "Adriya offers wellness programs for everyone, including pregnancy and parenting workshops, smoking cessation and road safety campaigns, along with guidance on sleep and maternity care for a healthier lifestyle.",
    image: "voice.webp",
    className: "md:col-span-2",
  },
];
