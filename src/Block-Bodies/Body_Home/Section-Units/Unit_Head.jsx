import React from "react";
import styles from "./Unit_Head.module.css"

import Marker1 from "../../../assets/General/Mark-rect.png"
import Marker2 from "../../../assets/General/Mark-arr.png"

export default function Header_component ({ title, moreLink}){
    return (

        <div className={styles.frame}>
            {/*---------------------------- Section Title ------*/}
            <div className={styles.title}>
                <img 
                    src={Marker1} 
                    alt="Marker" 
                    className={styles.icon}
                />
                <h2>{title}</h2>
            </div>
            {/*---------------------------- Section More -------*/}
            <div className={styles.more}>
                <a href={moreLink} className={styles.link}>
                    MORE
                </a>
                <img 
                    src={Marker2} 
                    alt="Pointer" 
                    className={styles.icon}
                />
            </div>
            {/*-------------------------------------------------*/}
        </div>

    );
};