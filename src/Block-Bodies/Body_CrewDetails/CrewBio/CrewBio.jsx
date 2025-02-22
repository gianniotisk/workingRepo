import React from "react";
import PropTypes from "prop-types";

import styles from "./CrewBio.module.css";


export default function CrewBio({ bio }) {
  return (
    <article className={styles.bio}>
      <h2>Personal Information</h2>
      <p>{bio}</p>
    </article>
  );
}

CrewBio.propTypes = {
  bio: PropTypes.string.isRequired,
};
