import React from "react";

import "./copyright.css"

export default function Copyright() {
    return (
        <div className="footer-copyright">
            <p>Copyright © {new Date().getFullYear()} KSD Inc.</p>
        </div>
    );
}
