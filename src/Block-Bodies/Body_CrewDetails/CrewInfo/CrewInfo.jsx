import React from "react";
import PropTypes from "prop-types";

import styles from "./CrewInfo.module.css";


export default function CrewInfo({ name, role, imageUrl }) {
  return (
    <section className={styles.crewDetails}>
      <img src={imageUrl} alt={`${name} photo`} className={styles.crewPoster} />
      <section className={styles.crewInfo}>
        <header className={styles.titleSection}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.role}>Role: {role}</p>
        </header>
      </section>
      <hr />
    </section>

  );
}

CrewInfo.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
