import React from "react";
import "./Unit_Head.css";

import Marker1 from "../../../assets/General/Mark-rect.png"
import Marker2 from "../../../assets/General/Mark-arr.png"

export default function Header_component ({ title, moreLink}){
    return (

        <div className="section-header">
            {/*---------------------------- Section Title ------*/}
            <div className="section-title">
                <img 
                    src={Marker1} 
                    alt="Marker" 
                    className="marker-icon" 
                />
                <h2>{title}</h2>
            </div>
            {/*---------------------------- Section More -------*/}
            <div className="section-more">
                <a href={moreLink} className="more-link">
                    MORE
                </a>
                <img 
                    src={Marker2} 
                    alt="Pointer" 
                    className="marker-icon" 
                />
            </div>
            {/*-------------------------------------------------*/}
        </div>

    );
};