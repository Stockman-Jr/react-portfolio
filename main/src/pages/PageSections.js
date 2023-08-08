import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/PageSections.module.css";
import IntroSection from "./IntroSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import ContactMenu from "../components/ContactMenu";

function PageSections() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <>
      <div className={styles.Sections}>
        <ContactMenu />
        <IntroSection currentPage={currentPage} />
        <ProjectsSection />
        <AboutSection />
      </div>
    </>
  );
}

export default PageSections;
