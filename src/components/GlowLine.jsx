import React from "react";
import { motion } from "framer-motion";
const GlowLine = ({ width }) => {
  return (
    <motion.div
      initial={{
        width: 0,
      }}
      whileInView={{
        width: "100%",
      }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className={`w-full h-[3px] glow-linear relative self-center`}
    ></motion.div>
  );
};

export default GlowLine;
