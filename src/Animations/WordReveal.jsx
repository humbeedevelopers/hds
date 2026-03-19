"use client";
import React from "react";
import { motion } from "framer-motion";

const WordReveal = ({ children, delay = 0 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay },
    },
  };

  const childVariants = {
    hidden: { y: "115%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const processChildren = (children) => {
    return React.Children.map(children, (child) => {
      if (typeof child === "string") {
        return child.split(" ").map((word, i) => (
          <span 
            key={i} 
            className="inline-block overflow-hidden align-bottom"
          >
            <motion.span 
              variants={childVariants} 
              className="inline-block mr-[0.2em] whitespace-nowrap"
            >
              {word === "" ? "\u00A0" : word}
            </motion.span>
          </span>
        ));
      }
      
      if (React.isValidElement(child)) {
        if (child.type === "br") return child;

        if (child.type === "span") {
          return (
            <span className={child.props.className} style={{ display: "inline-block" }}>
              {processChildren(child.props.children)}
            </span>
          );
        }

        if (typeof child.type === "string" && /^h[1-6]$/i.test(child.type)) {
          return processChildren(child.props.children);
        }

        return processChildren(child.props.children);
      }

      return null;
    });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="inline"
    >
      {processChildren(children)}
    </motion.div>
  );
};

export default WordReveal;