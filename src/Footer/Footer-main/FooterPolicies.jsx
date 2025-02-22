import React from "react";
import { Link } from "react-router-dom";


import "./FooterPolicies.css"

export default function FooterLinks() {
    return (
        <section className="footer-bottom">
            <ul>
                <li>
                    <Link
                        to={{
                            pathname: "/WebsitePolicy",
                        }}
                    >
                        Website Policy
                    </Link>
                </li>
                <li className="dot">•</li>
                <li>
                    <Link
                        to={{
                            pathname: "/TermsAndServices",
                        }}
                    >
                        Terms And Services
                    </Link>
                </li>
                <li className="dot">•</li>
                <li>
                <Link
                    to={{
                        pathname: "/Privacy",
                    }}
                >
                    Privacy
                </Link>
                </li>
            </ul>
        </section>
    );
}
