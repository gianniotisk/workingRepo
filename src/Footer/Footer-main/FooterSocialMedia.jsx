import React from "react";

import "./FooterSocialMedia.css"

import SM1 from "../../assets/Footer/sm-1.png";
import SM2 from "../../assets/Footer/sm-2.png";
import SM3 from "../../assets/Footer/sm-3.png";
import SM4 from "../../assets/Footer/sm-4.png";
import SM5 from "../../assets/Footer/sm-5.png";

export default function FooterSocialMedia() {
    return (
        <div className="footer-topright">

            {/*-------------------------- Title: Follow Us ----------*/}
            <h3 className="footer-followus">Follow Us</h3>

            {/*-------------------------- Social Media Links --------*/}
            <div className="footer-socialmedia">
                <ul>
                    <li>
                        <a href="#">
                            <img src={SM1} alt="YouTube" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={SM2} alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={SM3} alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={SM4} alt="X" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={SM5} alt="TikTok" />
                        </a>
                    </li>
                </ul>
            </div>
            {/*-------------------------------------------------------*/}

        </div>
    );
}