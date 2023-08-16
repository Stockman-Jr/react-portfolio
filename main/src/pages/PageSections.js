import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/PageSections.module.css";
import IntroSection from "./IntroSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import ContactMenu from "../components/ContactMenu";
import Section from "../components/Section";

function PageSections() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToSection(pageNumber);
  };

  const scrollToSection = (index) => {
    document
      .getElementById(`section-${index}`)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.Anchors}>
        {Array.from({ length: 3 }, (_, index) => (
          <span
            key={index}
            onClick={() => handlePageClick(index)}
            className={currentPage === index ? styles.Active : styles.Inactive}
          ></span>
        ))}
      </div>
      <div className={styles.Sections}>
        <Section id={0}>
          <IntroSection currentPage={currentPage} />
        </Section>

        <Section id={1}>
          <ProjectsSection currentPage={currentPage} />
        </Section>

        <Section id={2}>
          <AboutSection currentPage={currentPage} />
        </Section>
      </div>
    </>
  );
}

export default PageSections;
