import { useState, useEffect, useRef } from "react";

import "../Header/Header.css";
import Util_Bar from "./util-bar/util-bar";
import Nav_Bar from "./nav-bar/nav-bar";
import Menu from "./menu/menu";

export default function Header() {

    const [menuStatus, setMenuStatus] = useState(false);
    function toggleMenu() {
        setMenuStatus(!menuStatus);
    };

    /*________________________________________________________________________________*/
    return (
        <header>

            {/* ------------------- Utility Bar ---------------------- */}
            <Util_Bar/>

            {/* ------------------- Navigation Bar ------------------- */}
            <Nav_Bar toggleMenu={toggleMenu} />

            {/* ------------------- Full-Page Dropdown Menu ------------------- */}
            <Menu menuStatus={menuStatus}  toggleMenu={toggleMenu} />

        </header>
    );
    /*________________________________________________________________________________*/
}