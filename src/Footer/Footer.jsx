import React from "react";
import "./Footer.css";

import FooterLogoLinks from "./Footer-main/FooterLogoLinks";
import FooterSocialMedia from "./Footer-main/FooterSocialMedia";
import FooterPolicies from "./Footer-main/FooterPolicies";
import Copyright from "./Footer-Copyright/copyright";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-main">
                {/*----------------------------- Top Section ------*/}
                <section className="footer-top">
                    <FooterLogoLinks />
                    <FooterSocialMedia />
                </section>
                {/*----------------------------- Bottom Section ---*/}
                <FooterPolicies />
            </div>

            <Copyright />

        </footer>
    );
}
