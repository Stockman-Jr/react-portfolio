import React from "react";
import styles from "../styles/Sections.module.css";
import { motion, useAnimation } from "framer-motion";
import "../index.css";
function IntroSection(props) {
  const { currentPage } = props;
  const firstLine = "< Hi, I'm Mimmi />";

  const word = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.9,
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <section className={styles.Main}>
      <div className={styles.Content}>
        <motion.div
          className={styles.Portrait}
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.ImgBox}></div>
        </motion.div>
        <div className={styles.IntroText}>
          <motion.h3
            className={styles.Welcome}
            variants={word}
            initial={currentPage === 0 ? "hidden" : ""}
            animate={currentPage === 0 ? "visible" : ""}
          >
            {firstLine.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.h3>

          <hr />

          <div className={styles.AboutText}>
            <span>
              I'm a freshly baked junior software developer with an education in
              full-stack development. I love combining my passion for art &
              design with my technical skills in order to create visually
              impactful designs with focus on user experience.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
