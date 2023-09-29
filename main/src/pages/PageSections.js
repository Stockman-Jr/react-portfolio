import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/PageSections.module.css";
import IntroSection from "./IntroSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import Section from "../components/Section";
import { useScrollY } from "../hooks/ScrollHook";
import Fireflies from "../components/Fireflies";

function PageSections() {
  const [currentPage, setCurrentPage] = useState(0);
  const [scroll, setScroll] = useState(0);

  const ref = useRef(null);
  const scrollY = useScrollY();

  const handlePageClick = (pageNumber) => {
    scrollToSection(pageNumber);
    console.log("Page in view:", pageNumber);
  };

  const scrollToSection = (currentPage) => {
    document
      .getElementById(`section-${currentPage}`)
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleWheel = (e) => {
    const scrollDistance = scrollY(e, ref, currentPage, setCurrentPage, scroll);
    setScroll(scrollDistance);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (let index = 0; index < 3; index++) {
        const section = document.getElementById(`section-${index}`);
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 60 &&
          scrollPosition < sectionTop + sectionHeight - 100
        ) {
          setCurrentPage(index);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <div className={styles.Sections}>
        <Fireflies count={15} />
        <Section id={0}>
          <IntroSection currentPage={currentPage} />
        </Section>
        {/*<hr className={styles.Divider} />*/}
        <Section id={1}>
          <ProjectsSection currentPage={currentPage} />
        </Section>
        <hr className={styles.Divider} />
        <Section id={2}>
          <AboutSection currentPage={currentPage} />
        </Section>
      </div>
    </>
  );
}

export default PageSections;
