import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedTextCharacter = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const [ref, inView] = useInView({ threshold: 0.5 }); // Use the useInView hook

  const getFontSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1100) {
      return "3rem";
    } else if (screenWidth >= 900) {
      return "2.1rem";
    } else if (screenWidth >= 768) {
      return "1.7rem";
    } else if (screenWidth >= 320) {
      return "1rem";
    } else {
      return "2rem";
    }
  };


  return (
    <motion.div
      ref={ref}
      style={{
        overflow: "hidden",
        display: "flex",
        fontSize: getFontSize(),
        fontWeight: "700",
        color: "#fff",
        lineHeight:"1.3",
      }}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Animate based on inView
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
