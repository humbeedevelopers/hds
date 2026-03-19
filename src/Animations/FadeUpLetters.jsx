"use client";
import { motion } from "framer-motion";
import React from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

const letter = {
  hidden: {
    y: "0.75em",
    opacity: 0,
  },
  show: {
    y: "0em",
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const FadeUpLetters = ({ children, className = "" }) => {
  const renderText = (text) =>
    text.split("").map((char, i) => (
      <motion.span
        key={i}
        variants={letter}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  const renderNode = (node, index) => {
    if (typeof node === "string") {
      return (
        <span key={index} className="inline-block">
          {renderText(node)}
        </span>
      );
    }

    if (node.type === "br") {
      return <br key={index} />;
    }

    return React.cloneElement(node, {
      key: index,
      children: React.Children.map(node.props.children, renderNode),
    });
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className={className}
    >
      {React.Children.map(children, renderNode)}
    </motion.div>
  );
};

export default FadeUpLetters;
