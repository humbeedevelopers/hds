import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealCards from '@/Animations/RevealCards';

const ContentData = {
  Capabilities: [
    { title: "Capability 1", duration: "2-8 weeks", description: "We're not just numbers—we're a supportive team and passionate people who love web, apps, social media, animations and thrive in making the experience more fun & meaningful"},
    { title: "Capability 2", duration: "2-8 weeks", description: "This is the expanded view for Capability 2. Now you can read the full details of our secondary services."},
    { title: "Capability 3", duration: "2-8 weeks", description: "Detailed insights into our third capability, showcasing our versatility and technical depth."},
  ],
  Process: [
    { title: "Discovery", duration: "1 week", description: "Deep dive into your brand and goals to align on the vision."},
    { title: "Design", duration: "3 weeks", description: "Crafting the visual identity and high-fidelity prototypes."},
  ],
  Industries: [
    { title: "Fintech", duration: "", description: "Modern solutions for digital banking and secure payments."},
    { title: "Healthcare", duration: "", description: "Patient-first platforms and HIPAA-compliant systems."},
  ],
};

const TabbedComponent = () => {
  const [activeTab, setActiveTab] = useState('Capabilities');
  const [expandedIndex, setExpandedIndex] = useState(0);
  const tabs = Object.keys(ContentData);

  useEffect(() => {
    setExpandedIndex(0);
  }, [activeTab]);

  return (
    <div className="w-full w-full py-6 md:py-12 font-montserrat">
      {/* Navigation Tabs */}
      <div className="flex md:gap-8 gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative text-2xl md:text-4xl font-instrument pb-4 outline-none"
          >
            <span className={`transition-colors duration-300 ${
              activeTab === tab ? 'text-text-main' : 'text-card-bg hover:text-text-main cursor-pointer'
            }`}>
              {tab}
            </span>
          </button>
        ))}
      </div>

      <RevealCards
        key={activeTab} 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start font-montserrat min-h-[450px]"
      >
        {ContentData[activeTab].map((item, index) => {
          const isExpanded = expandedIndex === index;
          
          return (
            <motion.div
              key={`${activeTab}-${index}`}
              layout
              onClick={() => setExpandedIndex(index)}
              animate={{ 
                height: isExpanded ? 400 : 150 
              }}
              transition={{ 
                layout: { duration: 0.4, ease: "easeInOut" },
                height: { duration: 0.4 }
              }}
              className={`${expandedIndex === index ? "bg-bg-soft" : "bg-inactive-bg"} rounded-xl p-8 cursor-pointer overflow-hidden flex flex-col justify-between transition-colors`}
            >
              <motion.div layout="position">
                <span className="text-text-muted text-xs uppercase tracking-widest block mb-4">
                  {item.duration || "Service"}
                </span>
                <h3 className="text-2xl font-semibold text-text-muted">
                  {item.title}
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
                      {item.description}
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