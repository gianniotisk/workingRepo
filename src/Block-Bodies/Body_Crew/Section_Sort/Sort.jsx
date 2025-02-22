import React from "react";
import PropTypes from "prop-types";

import styles from "./Sort.module.css";


export default function Section_Sort({ setSortBy }) {
    function handleSortChange(event) {
        setSortBy(event.target.value);
    }

    return (
        <section>
            
            <select className={styles.sortBy} name="Sorting" onChange={handleSortChange}>
                <option disabled selected>Sort</option>
                <option value="alphabetically">Alphabetically</option>
                <option value="reverse-alphabetically">Reverse Alphabetically</option>
            </select>
        </section>
    );
}

Section_Sort.propTypes = {
    setSortBy: PropTypes.func.isRequired,
};
