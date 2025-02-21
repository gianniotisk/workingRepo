import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./CrewDisplay.module.css";

export default function Section_CrewDisplay({ displayedCrew }) {
    return (
        <section className={styles.crewDisplay}>
            {displayedCrew.map((member) => (
                <span className={styles.crewItem} key={member.name}>
                    <Link to={`/crewDetails/${member.name}`}>
                        {member.imageUrl && <img src={member.imageUrl} alt={member.name} />}
                        <p className={styles.crewSpecs}>
                            <strong>{member.name}</strong><br />
                            <em>Role:</em> {member.role}
                        </p>
                    </Link>
                </span>
            ))}
        </section>
    );
}

Section_CrewDisplay.propTypes = {
    displayedCrew: PropTypes.array.isRequired,
};
