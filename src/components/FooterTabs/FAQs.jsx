"use client";

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    id: 1,
    question: "How much time will it take to build my website?",
    answer: "Answer to this question depends on the type of website needed to fulfill the goal and purpose. Unlike others, our approach is more strategic and creative. It includes several rounds of meetings and brainstorming with business. You can expect the first creative draft within 15 days after the confirmation."
  },
  { id: 2, question: "How much time will it take to build my website?", answer: "This is a shorter answer example." },
  { id: 3, question: "How much time will it take to build my website?", answer: "This is a medium length answer to demonstrate how the container height responds to different content lengths while maintaining a smooth feel." },
  { id: 4, question: "How much time will it take to build my website?", answer: "Another short one." },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.4 } }
  };

  return (
    <div className="w-full px-4 mt-10 font-sans">
      <motion.ul 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full flex flex-col gap-3 min-h-[450px]"
      >
        {faqData.map((item, index) => {
          const isActive = activeIndex === index;
          
          return (
            <motion.li 
              key={item.id}
              variants={itemVariants}
              layout 
              className={`w-full rounded-lg border border-transparent cursor-pointer overflow-hidden transition-colors duration-300
                ${isActive ? 'bg-[#A2E485]/40 border-[#d1fae5]' : 'bg-[#FACABF]/40'}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-start py-5 px-6">
                <div className="flex gap-4">
                  <motion.span 
                    key={isActive ? 'A' : 'Q'}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-medium min-w-[20px] text-gray-700 mt-1"
                  >
                    {isActive ? 'A :' : 'Q :'}
                  </motion.span>

                  <div className="flex flex-col">
                    <p className="text-gray-800 text-lg font-medium">{item.question}</p>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 text-gray-600 leading-relaxed max-w-3xl">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="text-gray-800 ml-4 shrink-0 mt-1">
                  <motion.div
                    key={isActive ? 'off' : 'on'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isActive ? <EyeOff size={24} className="opacity-70" /> : <Eye size={24} />}
                  </motion.div>
                </div>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default FAQs;