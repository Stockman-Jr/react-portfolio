import React from "react";
import styles from "../styles/Sections.module.css";

function AboutSection(props) {
  const { currentPage } = props;
  return (
    <section className={styles.Main}>
      <h1>AboutSection</h1>
    </section>
  );
}

export default AboutSection;
