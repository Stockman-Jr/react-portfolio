import React from "react";
import styles from "../styles/Sections.module.css";
import SvgBorders from "../components/SvgBorders";

function AboutSection(props) {
  const { currentPage } = props;
  return (
    <section className={styles.Main}>
      <SvgBorders />
      <h1>AboutSection</h1>
    </section>
  );
}

export default AboutSection;
