import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/PageSections.module.css";
import IntroSection from "./IntroSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import ContactMenu from "../components/ContactMenu";

function PageSections() {
  const [currentPage, setCurrentPage] = useState(0);
  const [scroll, setScroll] = useState(0);

  const style = {
    transform: `translateY(-${scroll}vh)`,
    transition: `1000ms ease-out`,
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    const scrollDistance = pageNumber * 100;
    setScroll(scrollDistance);
  };

  return (
    <>
      <div className={styles.Anchors}>
        <span
          onClick={() => handlePageClick(0)}
          className={currentPage === 0 ? styles.Active : styles.Inactive}
        ></span>
        <span
          onClick={() => handlePageClick(1)}
          className={currentPage === 1 ? styles.Active : styles.Inactive}
        ></span>
        <span
          onClick={() => handlePageClick(2)}
          className={currentPage === 2 ? styles.Active : styles.Inactive}
        ></span>
      </div>
      <div className={styles.Sections} style={style}>
        <ContactMenu />
        <IntroSection currentPage={currentPage} />
        <ProjectsSection currentPage={currentPage} />
        <AboutSection currentPage={currentPage} />
      </div>
    </>
  );
}

export default PageSections;
