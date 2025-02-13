import React from "react";

import "./FooterPolicies.css"

export default function FooterLinks() {
    return (
        <section className="footer-bottom">
            <ul>
                <li>
                    <a href="#">Website Policy</a>
                </li>
                <li className="dot">•</li>
                <li>
                    <a href="#">Terms & Services</a>
                </li>
                <li className="dot">•</li>
                <li>
                    <a href="#">Privacy</a>
                </li>
            </ul>
        </section>
    );
}
