"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import SlideButton from "./Utils/SlideButton";
import WordReveal from "@/Animations/WordReveal";
import ParagraphTextReveal from "@/Animations/ParagraphTextReveal";

const AccordionItem = ({ i, pillar, scrollIndex }) => {
  const collapsedHeight = 40;
  const expandedHeight = 570;

  const height = useTransform(
    scrollIndex,
    [i - 1, i, i + 1],
    [collapsedHeight, expandedHeight, collapsedHeight]
  );

  const contentOpacity = useTransform(
    scrollIndex,
    [i - 0.5, i, i + 0.5],
    [0, 1, 0]
  );

  const paddingY = useTransform(
    scrollIndex,
    [i - 1, i, i + 1],
    [8, 32, 8]
  );

  const paddingYSmooth = useSpring(paddingY, {
    stiffness: 120,
    damping: 20,
  });

  return (
    <motion.div
      style={{ height }}
      className={`${pillar.color} w-full rounded-xl md:rounded-lg overflow-hidden flex flex-col`}
    >
      <motion.h3
        style={{
          paddingTop: paddingYSmooth,
          paddingBottom: paddingYSmooth,
        }}
        className="px-12 text-md sm:text-lg md:text-xl font-montserrat text-black/90"
      >
        {pillar.id}. {pillar.title}
      </motion.h3>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="px-8 mt-auto lg:px-12 pb-8 md:pb-10 flex flex-col h-fit"
      >
        <p className="text-black/75 font-open-sans text-sm sm:text-md md:text-lg leading-relaxed mb-6 md:mb-8">
          {pillar.content}
        </p>

        <div className="w-fit">
          <SlideButton bgColor={pillar.color} />
        </div>
      </motion.div>
    </motion.div>
  );
};


const Works = () => {
  const containerRef = useRef(null);
  const [activeId, setActiveId] = useState(1);

  const pillars = [
    {
      id: 1,
      title: "Website & Web Apps",
      color: "bg-[#FFD978]",
      image: "./mat.png",
      content:
        "Join our curated collection of digital masterpieces where each project showcases our expertise in designing visually stunning, strategically driven experiences proven to achieve results.",
    },
    {
      id: 2,
      title: "UI/UX & Design Systems",
      color: "bg-[#B0FF87]",
      image: "./mat.png",
      content:
        "We create intuitive interfaces and scalable design systems that ensure consistency and delight users across every touchpoint of your digital product.",
    },
    {
      id: 3,
      title: "Branding & Social Media",
      color: "bg-[#93D1FF]",
      image: "./mat.png",
      content:
        "Our branding experts craft unique identities that resonate with your audience and stand out in a crowded social landscape.",
    },
    {
      id: 4,
      title: "Apps & SaaS Development",
      color: "bg-[#FFF773]",
      image: "./mat.png",
      content:
        "From concept to deployment, we build robust SaaS platforms and mobile applications tailored to your specific business needs and goals.",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, pillars.length - 1]
  );

  useMotionValueEvent(scrollIndex, "change", (latest) => {
    const nearestIndex = Math.round(latest);
    const safeIndex = Math.max(
      0,
      Math.min(nearestIndex, pillars.length - 1)
    );

    if (pillars[safeIndex].id !== activeId) {
      setActiveId(pillars[safeIndex].id);
    }
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] pt-12 md:pt-20"
    >
      <div className="sticky top-0 h-auto md:h-screen flex items-center px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 w-full items-center h-full">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-8 md:gap-16 lg:gap-24">
            <div className="flex flex-col gap-4 md:gap-5">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-instrument tracking-snug">
                <WordReveal>Core Offerings</WordReveal>
              </h2>

              <ParagraphTextReveal>
                <p className="w-full md:w-5/6 font-open-sans text-base sm:text-lg md:text-xl leading-relaxed">
                  Join our curated collection of digital masterpieces where each project showcases our expertise in designing visually stunning, strategically driven experiences proven to achieve results.
                </p>
              </ParagraphTextReveal>
            </div>

            {/* IMAGE SWAP */}
            <div className="relative hidden lg:block lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px]">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.92, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={pillars.find((p) => p.id === activeId)?.image}
                  alt="Pillar visual"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </div>

          {/* RIGHT ACCORDION */}
          <div className="flex flex-col justify-center w-full">
            {pillars.map((pillar, i) => (
              <AccordionItem
                key={pillar.id}
                i={i}
                pillar={pillar}
                scrollIndex={scrollIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;