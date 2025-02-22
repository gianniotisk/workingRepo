import React from "react";
import PropTypes from "prop-types";

import styles from "./Pagination.module.css";


export default function Section_Pagination({ totalPages, currentPage, goToPage }) {
    return (
        <aside className={styles.pagination}>
            {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                    <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={page === currentPage ? styles.active : ""}
                    >
                        {page}
                    </button>
                );
            })}
        </aside>
    );
}

Section_Pagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    goToPage: PropTypes.func.isRequired,
};
