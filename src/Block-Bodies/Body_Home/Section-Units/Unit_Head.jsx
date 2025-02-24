import React from "react";
import { Link } from "react-router-dom";
import styles from "./Unit_Head.module.css";

import Marker1 from "../../../assets/General/Mark-rect.png";
import Marker2 from "../../../assets/General/Mark-arr.png";

export default function Header_component({ title }) {
    const linkDestination = title === "Most Popular Movies" ? "/movies" : "/Forum";

    return (
        <div className={styles.frame}>
            <div className={styles.title}>
                <img src={Marker1} alt="Marker" className={styles.icon} />
                <h2>{title}</h2>
            </div>

            <div className={styles.more}>
                <Link to={linkDestination} className={styles.link}>
                    MORE
                </Link>
                <img src={Marker2} alt="Pointer" className={styles.icon} />
            </div>
        </div>
    );
}
