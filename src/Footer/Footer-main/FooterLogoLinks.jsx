import React from "react";
import { Link } from "react-router-dom";


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
                    <Link
                        to={{
                            pathname: "/Newsletter",
                        }}
                    >
                        Newsletter
                    </Link>
                        
                    </li>
                    <li className="line">|</li>
                    <li>
                    <Link
                        to={{
                            pathname: "/AboutUs",
                        }}
                    >
                        About Us
                    </Link>
                    </li>
                    <li className="line">|</li>
                    <li>
                    <Link
                        to={{
                            pathname: "/ContactUs",
                        }}
                    >
                        Contact Us
                    </Link>
                    </li>
                </ul>
            </div>
            {/*-------------------------------------------------------*/}

        </div>
    );
}