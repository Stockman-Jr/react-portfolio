import React from "react";
import styles from "../styles/Sections.module.css";
import SvgBorders from "../components/SvgBorders";
import SkillBar from "../components/SkillBar";

function AboutSection(props) {
  const { currentPage } = props;
  return (
    <section className={styles.Main}>
      <h1>About</h1>
      <div className={styles.InnerContainer}>
        <div className={styles.Skills}>
          <div className={styles.Bars}>
            <span>HTML</span>
            <SkillBar progress={95} currentPage={currentPage} />
            <span>CSS</span>
            <SkillBar progress={90} currentPage={currentPage} />
            <span>Bootstrap</span>
            <SkillBar progress={90} currentPage={currentPage} />
            <span>Python</span>
            <SkillBar progress={80} currentPage={currentPage} />
            <span>Django</span>
            <SkillBar progress={80} currentPage={currentPage} />
            <span>JavaScript</span>
            <SkillBar progress={80} currentPage={currentPage} />
            <span>JQuery</span>
            <SkillBar progress={80} currentPage={currentPage} />
            <span>React</span>
            <SkillBar progress={70} currentPage={currentPage} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
