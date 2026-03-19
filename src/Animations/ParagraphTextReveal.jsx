"use client"
import React from "react";
import { motion } from "framer-motion";

const ParagraphTextReveal = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y: 30, 
        filter: "blur(8px)" 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        filter: "blur(0px)" 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom Cubic Bezier for a premium feel
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParagraphTextReveal;