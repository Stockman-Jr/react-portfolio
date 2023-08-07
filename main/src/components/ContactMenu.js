import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styles from "../styles/ContactMenu.module.css";

const ContactMenu = () => {
  return (
    <div className={styles.Social}>
      {" "}
      <a href="https://github.com/Stockman-Jr" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/mimmistockman/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a className={styles.CVLink} href="#">
        <span>CV / Resume</span>
      </a>
    </div>
  );
};

export default ContactMenu;
