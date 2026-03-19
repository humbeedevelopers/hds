"use client";
import React from "react";
import { motion } from "framer-motion";

const ServicesLinks = () => {
  const services = [
    "Web Design & Development",
    "Mobile App Design & Development",
    "UI/UX",
    "Branding",
    "3D Design & Modeling",
    "Social Media Management",
    "Motion Design & Animation",
    "Startup Branding",
    "MVP Development",
    "SaaS Design & Development",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="w-full mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="mx-auto border-t border-black/30">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="border-b border-black/30 flex items-center justify-center h-[60px] text-center text-lg md:text-2xl text-montserrat font-light cursor-pointer group transition-all duration-300 ease-in-out hover:bg-primary hover:text-bg-light">
            <span className="group-hover:scale-105 transition-transform duration-300">
              {service}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesLinks;