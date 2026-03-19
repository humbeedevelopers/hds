"use client";
import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

const CountUp = ({ value, duration = 1.5 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const numericValue = parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          animate(0, numericValue, {
            duration,
            ease: "easeOut",
            onUpdate: (latest) => {
              el.textContent = `${Math.floor(latest)}${suffix}`;
            },
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>0</span>;
};

export default CountUp;
