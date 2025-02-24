import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./CrewDisplay.module.css";

export default function Section_CrewDisplay({ displayedCrew }) {
    const crewPerPage = 10; 
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(displayedCrew.length / crewPerPage);

    const startIndex = (currentPage - 1) * crewPerPage;
    const endIndex = startIndex + crewPerPage;
    const crewToShow = displayedCrew.slice(startIndex, endIndex);

    return (
        <div className={styles.container}>
            <section className={styles.crewDisplay}>
                {crewToShow.map((member, index) => (
                    <span className={styles.crewItem} key={index}>
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

            {/*----------------------------- Pagination -----------------------------*/}
            {totalPages > 1 && (
                <aside className={styles.pagination}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={page === currentPage ? styles.active : ""}
                        >
                            {page}
                        </button>
                    ))}
                </aside>
            )}
        </div>
    );
}

Section_CrewDisplay.propTypes = {
    displayedCrew: PropTypes.array.isRequired,
};
