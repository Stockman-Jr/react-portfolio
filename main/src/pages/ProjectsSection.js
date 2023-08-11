import React, { useState, useEffect } from "react";
import styles from "../styles/Sections.module.css";
import "../index.css";
import data from "../projects.json";
import { motion, useAnimation } from "framer-motion";
import {
  DiJavascript1,
  DiPython,
  DiHtml5,
  DiCss3,
  DiDjango,
  DiReact,
  DiDatabase,
} from "react-icons/di";

const ProjectList = ({ projects, onProjectClick }) => {
  return (
    <ul>
      {projects.map((project, index) => (
        <li key={index} onClick={() => onProjectClick(project)}>
          {project.name}
        </li>
      ))}
    </ul>
  );
};

const ProjectDetails = ({ project }) => {
  const languageIcon = {
    Python: DiPython,
    JavaScript: DiJavascript1,
    HTML: DiHtml5,
    CSS: DiCss3,
    React: DiReact,
    Django: DiDjango,
    Database: DiDatabase,
  };

  const renderLanguageIcons = (languages) => {
    if (languages.length === 1) {
      const Icon = languageIcon[languages[0]];
      if (Icon) {
        return <Icon />;
      }
    } else if (languages.length > 1) {
      return languages.map((language) => {
        const Icon = languageIcon[language];
        if (Icon) {
          return <Icon key={language} />;
        }
        return null;
      });
    }
    return null;
  };

  const projectVariant = {
    hidden: { opacity: 0, x: 500, scale: 0 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: 0.08,
      },
    },
  };

  return (
    <motion.div
      key={project ? project.name : ""}
      className={styles.Details}
      variants={projectVariant}
      initial={project ? "hidden" : ""}
      animate={project ? "visible" : ""}
    >
      <h4>{project.name}</h4>
      <div className={styles.ProjectIcons}>
        {renderLanguageIcons(project.languages)}
      </div>
      <hr />
      <p>{project.description}</p>

      <div className={styles.ProjectLinks}>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className={`${styles.BorderBottom} ${styles.BorderGradient} ${styles.BorderGreen}`}
        >
          View site
        </a>
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className={`${styles.BorderBottom} ${styles.BorderGradient} ${styles.BorderGreen}`}
        >
          Github
        </a>
      </div>
    </motion.div>
  );
};

function ProjectsSection(props) {
  const { duration, currentPage } = props;
  const projects = data.projects;
  const [selectedProject, setSelectedProject] = useState(data.projects[0]);

  useEffect(() => {
    setSelectedProject(data.projects[0]);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const moveRight = {
    animation: `moveRight ${duration}ms ease-out 0s`,
  };

  const moveOut = {
    animation: `moveOut ${duration}ms ease-out 0s`,
  };
  return (
    <section className={styles.Main}>
      <h1>Projects</h1>
      <div
        className={styles.MainContent}
        style={currentPage === 1 ? moveRight : moveOut}
      >
        <div className={styles.DetailsCol}>
          <ProjectDetails project={selectedProject} />
        </div>

        <div className={styles.ProjectList}>
          <ProjectList
            projects={projects}
            onProjectClick={handleProjectClick}
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
