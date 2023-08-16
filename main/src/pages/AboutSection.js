import React from "react";
import styles from "../styles/Sections.module.css";
import SvgBorders from "../components/SvgBorders";

function AboutSection(props) {
  const { currentPage } = props;
  return (
    <section className={styles.Main}>
      <div className={styles.InnerContainer}>
        <h1>AboutSection</h1>
      </div>
    </section>
  );
}

export default AboutSection;
