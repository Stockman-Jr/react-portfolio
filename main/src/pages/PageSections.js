import React from "react";
import styles from "../styles/PageSections.module.css";
import IntroSection from "./IntroSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import ContactMenu from "../components/ContactMenu";

function PageSections() {
  return (
    <>
      <div className={styles.Sections}>
        <ContactMenu />
        <IntroSection />
        <ProjectsSection />
        <AboutSection />
      </div>
    </>
  );
}

export default PageSections;
