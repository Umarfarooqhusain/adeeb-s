import React from "react";
import { motion } from "framer-motion";

const MotionWrapper = ({ children }) => {
  const pageTransition = {
    duration: 0.5,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
