import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/Fireflies.module.css";

const Firefly = () => {
  const getRandomPosition = () => {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    };
  };

  const getRandomDuration = () => {
    return Math.random() * 10 + 10;
  };

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const fireflyControls = useAnimation();

  const moveFirefly = () => {
    fireflyControls.start({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,

      rotate: [0, 360],
      scale: [0.25, Math.random() * 0.75 + 0.25],
      opacity: [0, 1],
      transition: {
        duration: getRandomDuration(),
        type: "tween",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: Math.random() * 5,
      },
    });
  };

  React.useEffect(() => {
    moveFirefly();
    console.log(window.innerWidth);
  }, []);

  return (
    <motion.div
      className={styles.Firefly}
      initial={getRandomPosition()}
      animate={fireflyControls}
    />
  );
};

const Fireflies = ({ count }) => {
  const fireflies = Array.from({ length: count }, (_, index) => (
    <Firefly key={index} />
  ));

  return <div className={styles.Fireflies}>{fireflies}</div>;
};

export default Fireflies;
