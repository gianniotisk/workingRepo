import React from "react";
import PropTypes from "prop-types";
import styles from "./Section_typeB.module.css";

import Unit_Head from "../Section-Units/Unit_Head.jsx";
import Unit_HullB from "../Section-Units/Unit_HullB.jsx";

export default function Section_typeB({ title, moreLink, postsData, sectionId }) {
    return (
        <section id={sectionId} className={styles.sectionB}>

            <div className={styles.container}>
                {/*------------------------------ Section Head -----------*/}
                <Unit_Head title={title} moreLink={moreLink} />
                {/*------------------------------ Section Content --------*/}
                <Unit_HullB postsData={postsData} />
            </div>

        </section>
    );
}
