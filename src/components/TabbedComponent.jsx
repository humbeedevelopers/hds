"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealCards from "@/Animations/RevealCards";

const TabbedComponent = ({ tabsData = [] }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(0);

  useEffect(() => {
    setExpandedIndex(0);
  }, [activeTabIndex]);

  //IMPORTANT: check data
  if (!tabsData.length) {
    console.log("No tabs data received", tabsData);
    return null;
  }

  const activeTab = tabsData[activeTabIndex];

  return (
    <div className="w-full py-6 md:py-12 font-montserrat">
      
      {/* Tabs */}
      <div className="flex md:gap-8 gap-4 mb-8">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className="relative text-2xl md:text-4xl font-instrument pb-4 outline-none cursor-pointer"
          >
            <span
              className={`transition-colors duration-300 ${
                activeTabIndex === index
                  ? "text-text-main"
                  : "text-card-bg hover:text-text-main"
              }`}
            >
              {tab?.tab_title}
            </span>
          </button>
        ))}
      </div>

      {/* Cards */}
      <RevealCards
        key={activeTabIndex}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start min-h-[450px]"
      >
        {(activeTab?.tab_items || []).map((item, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={`${activeTabIndex}-${index}`}
              layout
              onClick={() => setExpandedIndex(index)}
              animate={{ height: isExpanded ? 400 : 150 }}
              transition={{
                layout: { duration: 0.4, ease: "easeInOut" },
                height: { duration: 0.4 },
              }}
              className={`${
                isExpanded ? "bg-bg-soft" : "bg-inactive-bg"
              } rounded-xl p-8 cursor-pointer overflow-hidden flex flex-col justify-between`}
            >
              <motion.div layout="position">
                <span className="text-text-muted text-xs uppercase tracking-widest block mb-4">
                  {item?.duration || "Service"}
                </span>

                <h3 className="text-2xl font-semibold text-text-muted">
                  {item?.title}
                </h3>
              </motion.div>

              <AnimatePresence mode="wait">
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-auto"
                  >
                    <p className="text-primary text-md">
                      {item?.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </RevealCards>
    </div>
  );
};

export default TabbedComponent;