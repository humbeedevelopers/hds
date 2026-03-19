"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useState, useRef } from "react";

const Loader = ({
  size = 200,
  duration = 5,
  onComplete,
}) => {
  const center = size / 2;
  const radius = center - 4;

  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);

  const startTimeRef = useRef(null);
  const completedRef = useRef(false);

  useAnimationFrame((time) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = time;
    }

    const elapsed = time - startTimeRef.current;
    const currentProgress = Math.min(
      (elapsed / (duration * 1000)) * 100,
      100
    );

    setProgress(currentProgress);

    if (currentProgress === 100 && !completedRef.current) {
      completedRef.current = true;
      setExit(true); 
    }
  });

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.8 }
    },
    exit: { 
      y: -120, 
      scale: 0.9,
      opacity: 0,
      filter: "blur(10px)",
      transition: { 
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1] 
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center gap-8 bg-bg-light"
      variants={containerVariants}
      initial="initial"
      animate={exit ? "exit" : "animate"}
      onAnimationComplete={() => {
        if (exit) onComplete?.();
      }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {/* Background Circle */}
        <div
          className="absolute rounded-full"
          style={{ width: size - 8, height: size - 8 }}
        />

        <svg
          width={size}
          height={size}
          className="rotate-90" 
        >
          <defs>
            <linearGradient id="clockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="50%" stopColor="var(--color-secondary)" />
              <stop offset="100%" stopColor="var(--color-bg-light)" />
            </linearGradient>

            <mask id="revealMask">
              <motion.circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke="white"
                strokeWidth={radius * 2}
                strokeDasharray={2 * Math.PI * radius}
                initial={{ strokeDashoffset: 2 * Math.PI * radius }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration, ease: "linear" }}
              />
            </mask>
          </defs>

          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="url(#clockGradient)"
            mask="url(#revealMask)"
          />
        </svg>
      </div>

      <motion.div 
        className="text-center"
        animate={exit ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-4xl font-instrument tabular-nums tracking-tight">
          {Math.round(progress)}%
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default Loader;