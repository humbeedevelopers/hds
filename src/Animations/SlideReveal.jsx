
"use client"
import { motion } from "framer-motion";

const SlideReveal = ({ children }) => {
  return (
    <motion.div
  initial={{ clipPath: "inset(0% 100% 0% 0%)" }} 
  whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
  transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.1 }}
  viewport={{ once: true }}
>
  {children}
</motion.div>
  );
};

export default SlideReveal;