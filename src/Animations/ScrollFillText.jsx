"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFillText = ({ text = "", pin = false, start, end }) => {
  if (!text) return null;

  const containerRef = useRef(null);
  const lettersRef = useRef([]);

  lettersRef.current = [];

  useEffect(() => {
    const letters = lettersRef.current;

    const ctx = gsap.context(() => {
      gsap.to(letters, {
        color: "var(--color-highlight)",
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: pin ? "top top" : `${start || 'top 85%'}`,
          end: pin ? "+=100%" : `${end || 'top 25%'}`,
          scrub: 1,
          pin,
          invalidateOnRefresh: true, 
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [text, pin]);

  return (
    <section
      ref={containerRef}
      className={`${
        pin ? "min-h-screen px-4" : "min-h-[20vh] md:min-h-[30vh] px-2 py-8 md:px-12"
      } flex items-center justify-center overflow-hidden`}
    >
      <p className="
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
        font-montserrat font-semibold
        leading-snug md:leading-tight 
        flex flex-wrap justify-center text-center "
      >
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="whitespace-nowrap mr-[0.3em]">
            {word.split("").map((char, charIndex) => (
              <span
                key={`${wordIndex}-${charIndex}`}
                ref={(el) => el && lettersRef.current.push(el)}
                className="text-bg-soft transition-colors duration-300"
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </p>
    </section>
  );
};

export default ScrollFillText;