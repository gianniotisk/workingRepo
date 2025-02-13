import React from "react";

import "./FooterLogoLinks.css"
import ICON from "../../assets/Footer/Logo-icon.png";
import NAME from "../../assets/Footer/Logo-name.png";

export default function FooterLogoLinks() {
    return (
        <div className="footer-topleft">

            {/*-------------------------- Logo: Icon & Name ----------*/}
            <div className="footer-logo">
                <img className="logo-icon" src={ICON} alt="Finch Logo" />
                <img className="logo-name" src={NAME} alt="Finch Logo" />            </div>

            {/*--------------------------- About Links ---------------*/}
            <div className="footer-about">
                <ul>
                    <li>
                        <a href="#">Our Community</a>
                    </li>
                    <li className="line">|</li>
                    <li>
                        <a href="#">Join Our Team</a>
                    </li>
                    <li className="line">|</li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li className="line">|</li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            {/*-------------------------------------------------------*/}

        </div>
    );
}