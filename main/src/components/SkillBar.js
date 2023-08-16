import React from "react";
import { motion } from "framer-motion";

const SkillBar = ({ progress, currentPage }) => {
  const gradients = [
    "linear-gradient(to right, #c391f9, #a2ffea)",
    "linear-gradient(to right, #ffa8a8, ##c6a2ff)",
    "linear-gradient(to right, #38ffe2, #ffa2f4)",
    "linear-gradient(to right, #e6ff4d, #47e77a)",
    "linear-gradient(to right, #b9ff4d, #6fdfff)",
    "linear-gradient(to right, #a8ffaa, #57e2ff)",
    "linear-gradient(to right, #cef797, #fe455f)",
    "linear-gradient(to right, #884dff, #92ffb3)",
  ];

  const containerStyles = {
    width: "100%",
    height: "12px",
    backgroundColor: "#ccc",
    borderRadius: "5px",
    marginBottom: "15px",
    overflow: "hidden",
  };

  const progressBarStyles = {
    height: "100%",
    backgroundImage: gradients[Math.floor(Math.random() * gradients.length)],
    width: `${progress}%`,
  };

  return (
    <div style={containerStyles}>
      <motion.div
        style={progressBarStyles}
        initial={{ width: 0 }}
        animate={currentPage === 2 ? { width: `${progress}%` } : ""}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default SkillBar;
