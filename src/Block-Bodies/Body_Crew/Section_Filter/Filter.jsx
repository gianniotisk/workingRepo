import React from "react";
import PropTypes from "prop-types";

import styles from "./Filter.module.css";


export default function Section_Filter({ setFilterBy }) {
    function handleFilterChange(event) {
        setFilterBy(event.target.value);
    }

    return (
        <section>
            
            <select className={styles.filter} name="Filtering" onChange={handleFilterChange}>
                <option value="all">Show All</option>
                <option value="actor">Actors</option>
                <option value="director">Directors</option>
            </select>
        </section>
    );
}

Section_Filter.propTypes = {
    setFilterBy: PropTypes.func.isRequired,
};
