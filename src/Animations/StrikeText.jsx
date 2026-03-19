import { motion } from "framer-motion";

const StrikeText = ({
  children,
  className = "",
  duration = 0.8,
  delay = 0,
  once = true,
  as = "span"
}) => {
  const MotionTag = motion[as] || motion.span;

  return (
    <MotionTag
      className={`strike relative inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {children}

      <motion.span
        className="strike-line"
        variants={{
          hidden: { scaleX: 0 },
          visible: {
            scaleX: 1,
            transition: { duration, delay, ease: "easeOut" }
          }
        }}
      />
    </MotionTag>
  );
};

export default StrikeText;
